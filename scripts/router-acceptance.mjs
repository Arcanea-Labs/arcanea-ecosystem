#!/usr/bin/env node
/**
 * Validate the router edge-worker acceptance ledger (issue #6).
 *
 * The ledger is the machine-checkable source of truth for the acceptance
 * matrix. This validator fails closed:
 *
 * - a criterion may only be VERIFIED when it carries evidence pinned to the
 *   ledger's 40-character revision;
 * - the money-path criteria may only be VERIFIED when the commercial
 *   determination is recorded;
 * - every criterion from the issue must be present, so a row cannot be
 *   removed to make the gate look green.
 *
 * A structurally valid ledger is not a pass. Passing is reported separately
 * and is only required with --require-pass.
 *
 * Usage:
 *   node scripts/router-acceptance.mjs <ledger.json> [--json] [--require-pass]
 *
 * Exit codes:
 *   0  ledger is valid (and, with --require-pass, passing)
 *   1  ledger is invalid, unreadable, or --require-pass was requested while blocked
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const SCHEMA_VERSION = 1;

/** Criteria that must exist, in the order used by the acceptance record. */
export const REQUIRED_CRITERIA = [
  "model-catalog",
  "anthropic-adapter",
  "vertex-oauth",
  "deepseek-adapter",
  "groq-adapter",
  "streaming",
  "semantic-classifier-eval",
  "canon-version-cache",
  "paid-entitlements",
  "unknown-usage-reconciliation",
  "receipt-retention",
  "polar-sandbox-e2e",
  "routing-overhead",
  "ttft",
  "accepted-artifact-cost",
  "independent-review",
];

/** Criteria that cannot pass on technical evidence alone. */
export const MONEY_CRITERIA = ["paid-entitlements", "polar-sandbox-e2e"];

const VALID_STATUSES = new Set(["VERIFIED", "UNVERIFIED"]);
const COMMIT_SHA = /^[0-9a-f]{40}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function emptySummary() {
  return { total: 0, verified: 0, unverified: 0, moneyGateOpen: false, pass: false };
}

/**
 * Validate a parsed ledger.
 *
 * @param {unknown} ledger
 * @returns {{errors: string[], summary: {total: number, verified: number,
 *   unverified: number, moneyGateOpen: boolean, pass: boolean}}}
 */
export function validateLedger(ledger) {
  const errors = [];

  if (!isObject(ledger)) {
    return { errors: ["ledger must be a JSON object"], summary: emptySummary() };
  }

  if (ledger.schemaVersion !== SCHEMA_VERSION) {
    errors.push(`schemaVersion must be ${SCHEMA_VERSION}`);
  }
  if (!isNonEmptyString(ledger.issue)) {
    errors.push("issue must be a non-empty string");
  }
  if (!ISO_DATE.test(ledger.recordedAt ?? "")) {
    errors.push("recordedAt must be a YYYY-MM-DD date");
  }
  if (ledger.pinnedRevision !== null && !COMMIT_SHA.test(ledger.pinnedRevision ?? "")) {
    errors.push("pinnedRevision must be null or a 40-character lowercase commit SHA");
  }

  const commercial = ledger.commercialDetermination;
  if (!isObject(commercial)) {
    errors.push("commercialDetermination must be an object");
  } else {
    if (typeof commercial.recorded !== "boolean") {
      errors.push("commercialDetermination.recorded must be a boolean");
    }
    if (commercial.recorded === true && !isNonEmptyString(commercial.note)) {
      errors.push("commercialDetermination.note must record the determination when recorded is true");
    }
  }
  const commercialRecorded = isObject(commercial) && commercial.recorded === true;

  const criteria = ledger.criteria;
  if (!Array.isArray(criteria) || criteria.length === 0) {
    errors.push("criteria must be a non-empty array");
    return { errors, summary: emptySummary() };
  }

  const seen = new Set();
  for (const [index, criterion] of criteria.entries()) {
    const position = `criteria[${index}]`;
    if (!isObject(criterion)) {
      errors.push(`${position} must be an object`);
      continue;
    }

    const id = criterion.id;
    if (!isNonEmptyString(id)) {
      errors.push(`${position}.id must be a non-empty string`);
      continue;
    }
    const label = `criteria[${id}]`;
    if (seen.has(id)) {
      errors.push(`${label} is duplicated`);
    }
    seen.add(id);

    if (!VALID_STATUSES.has(criterion.status)) {
      errors.push(`${label}.status must be VERIFIED or UNVERIFIED`);
      continue;
    }

    if (criterion.status === "UNVERIFIED") {
      if (!isNonEmptyString(criterion.blocker)) {
        errors.push(`${label} is UNVERIFIED without a blocker reason`);
      }
      continue;
    }

    // VERIFIED: evidence is mandatory and must be pinned to the ledger revision.
    if (!COMMIT_SHA.test(ledger.pinnedRevision ?? "")) {
      errors.push(`${label} is VERIFIED but pinnedRevision is not a 40-character commit SHA`);
    }
    const evidence = criterion.evidence;
    if (!Array.isArray(evidence) || evidence.length === 0) {
      errors.push(`${label} is VERIFIED without evidence`);
    } else {
      for (const [evidenceIndex, item] of evidence.entries()) {
        const at = `${label}.evidence[${evidenceIndex}]`;
        if (!isObject(item)) {
          errors.push(`${at} must be an object`);
          continue;
        }
        if (!isNonEmptyString(item.command)) {
          errors.push(`${at}.command must be a non-empty string`);
        }
        if (!isNonEmptyString(item.output)) {
          errors.push(`${at}.output must be a non-empty string`);
        }
        if (!ISO_DATE.test(item.recordedAt ?? "")) {
          errors.push(`${at}.recordedAt must be a YYYY-MM-DD date`);
        }
        if (!COMMIT_SHA.test(item.revision ?? "")) {
          errors.push(`${at}.revision must be a 40-character lowercase commit SHA`);
        } else if (item.revision !== ledger.pinnedRevision) {
          errors.push(`${at}.revision does not match pinnedRevision`);
        }
      }
    }

    if (MONEY_CRITERIA.includes(id) && !commercialRecorded) {
      errors.push(
        `${label} is a money-path criterion and cannot be VERIFIED until commercialDetermination.recorded is true`,
      );
    }
  }

  for (const id of REQUIRED_CRITERIA) {
    if (!seen.has(id)) {
      errors.push(`missing required criterion: ${id}`);
    }
  }

  const verified = criteria.filter((criterion) => isObject(criterion) && criterion.status === "VERIFIED").length;
  const unverified = criteria.length - verified;
  const moneyGateOpen = MONEY_CRITERIA.every((id) => {
    const criterion = criteria.find((item) => isObject(item) && item.id === id);
    return criterion?.status === "VERIFIED" && commercialRecorded;
  });

  return {
    errors,
    summary: {
      total: criteria.length,
      verified,
      unverified,
      moneyGateOpen,
      pass: errors.length === 0 && unverified === 0 && moneyGateOpen,
    },
  };
}

function renderReport(file, ledger, errors, summary) {
  const revision = ledger?.pinnedRevision ?? "(unpinned)";
  console.log(`Router acceptance ledger — ${file}`);
  console.log(`Revision: ${revision}`);
  console.log("");

  for (const criterion of Array.isArray(ledger?.criteria) ? ledger.criteria : []) {
    if (!isObject(criterion)) continue;
    const detail =
      criterion.status === "VERIFIED"
        ? `${criterion.evidence?.length ?? 0} evidence item(s)`
        : criterion.blocker ?? "no blocker recorded";
    console.log(`  ${String(criterion.id).padEnd(32)} ${String(criterion.status).padEnd(10)} ${detail}`);
  }

  console.log("");
  console.log(`${summary.total} criteria: ${summary.verified} verified, ${summary.unverified} unverified`);
  console.log(`money gate: ${summary.moneyGateOpen ? "OPEN" : "BLOCKED"}`);

  if (errors.length > 0) {
    console.error("");
    for (const error of errors) console.error(`error: ${error}`);
    console.error(`gate: INVALID (${errors.length} error(s))`);
    return;
  }

  console.log(`gate: ${summary.pass ? "PASS" : "BLOCKED"}`);
}

function usage() {
  console.error("usage: node scripts/router-acceptance.mjs <ledger.json> [--json] [--require-pass]");
}

export function main(argv) {
  const args = argv.slice(2);
  const flags = new Set(args.filter((arg) => arg.startsWith("--")));
  const files = args.filter((arg) => !arg.startsWith("--"));
  const unknownFlags = [...flags].filter((flag) => flag !== "--json" && flag !== "--require-pass");

  if (unknownFlags.length > 0) {
    console.error(`unknown flag: ${unknownFlags.join(", ")}`);
    usage();
    return 1;
  }
  if (files.length !== 1) {
    usage();
    return 1;
  }

  let ledger;
  try {
    ledger = JSON.parse(fs.readFileSync(files[0], "utf8"));
  } catch (error) {
    console.error(`router-acceptance: ${error.message}`);
    return 1;
  }

  const { errors, summary } = validateLedger(ledger);

  if (flags.has("--json")) {
    console.log(JSON.stringify({ ledger: files[0], errors, summary }, null, 2));
  } else {
    renderReport(files[0], ledger, errors, summary);
  }

  if (errors.length > 0) {
    return 1;
  }
  if (flags.has("--require-pass") && !summary.pass) {
    if (!flags.has("--json")) {
      console.error("router-acceptance: --require-pass set but the ledger is not passing");
    }
    return 1;
  }
  return 0;
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (invokedPath && import.meta.url === invokedPath) {
  process.exit(main(process.argv));
}
