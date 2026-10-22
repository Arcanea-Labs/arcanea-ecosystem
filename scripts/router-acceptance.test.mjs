import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  MONEY_CRITERIA,
  REQUIRED_CRITERIA,
  validateLedger,
} from "./router-acceptance.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoDir = path.resolve(scriptDir, "..");
const scriptPath = path.join(scriptDir, "router-acceptance.mjs");
const ledgerPath = path.join(repoDir, "docs", "router-edge-worker-acceptance.json");
const SHA = "a".repeat(40);

function recordedLedger() {
  return JSON.parse(fs.readFileSync(ledgerPath, "utf8"));
}

function evidence(revision = SHA) {
  return {
    command: "pnpm --filter ./packages/router test",
    output: "9 passed",
    recordedAt: "2026-10-20",
    revision,
  };
}

function verifyAll(ledger) {
  ledger.pinnedRevision = SHA;
  ledger.commercialDetermination.recorded = true;
  for (const criterion of ledger.criteria) {
    criterion.status = "VERIFIED";
    criterion.evidence = [evidence()];
  }
  return ledger;
}

function runCli(...args) {
  return spawnSync(process.execPath, [scriptPath, ...args], { encoding: "utf8" });
}

test("recorded ledger is structurally valid and reports blocked", () => {
  const { errors, summary } = validateLedger(recordedLedger());

  assert.deepEqual(errors, []);
  assert.equal(summary.total, REQUIRED_CRITERIA.length);
  assert.equal(summary.verified, 0);
  assert.equal(summary.unverified, REQUIRED_CRITERIA.length);
  assert.equal(summary.moneyGateOpen, false);
  assert.equal(summary.pass, false);
});

test("CLI accepts the recorded ledger without claiming a pass", () => {
  const result = runCli(ledgerPath);

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /gate: BLOCKED/);
});

test("CLI --require-pass fails while the ledger is blocked", () => {
  const result = runCli(ledgerPath, "--require-pass");

  assert.equal(result.status, 1);
  assert.match(result.stderr, /--require-pass set but the ledger is not passing/);
});

test("VERIFIED without evidence is rejected", () => {
  const ledger = recordedLedger();
  ledger.pinnedRevision = SHA;
  ledger.criteria[0].status = "VERIFIED";
  ledger.criteria[0].evidence = [];

  const { errors } = validateLedger(ledger);

  assert.ok(errors.some((error) => /is VERIFIED without evidence/.test(error)), errors.join("\n"));
});

test("evidence must be pinned to the ledger revision", () => {
  const ledger = recordedLedger();
  ledger.pinnedRevision = SHA;
  ledger.criteria[0].status = "VERIFIED";
  ledger.criteria[0].evidence = [evidence("b".repeat(40))];

  const { errors } = validateLedger(ledger);

  assert.ok(
    errors.some((error) => /revision does not match pinnedRevision/.test(error)),
    errors.join("\n"),
  );
});

test("money-path criteria stay blocked without a commercial determination", () => {
  const ledger = recordedLedger();
  ledger.pinnedRevision = SHA;
  const money = ledger.criteria.find((criterion) => criterion.id === MONEY_CRITERIA[0]);
  money.status = "VERIFIED";
  money.evidence = [evidence()];

  const { errors, summary } = validateLedger(ledger);

  assert.ok(
    errors.some((error) => /money-path criterion/.test(error)),
    errors.join("\n"),
  );
  assert.equal(summary.moneyGateOpen, false);
});

test("a fully evidenced ledger with a commercial determination passes", () => {
  const { errors, summary } = validateLedger(verifyAll(recordedLedger()));

  assert.deepEqual(errors, []);
  assert.equal(summary.verified, REQUIRED_CRITERIA.length);
  assert.equal(summary.moneyGateOpen, true);
  assert.equal(summary.pass, true);
});

test("a recorded commercial determination needs a note", () => {
  const ledger = verifyAll(recordedLedger());
  ledger.commercialDetermination.note = "";

  const { errors, summary } = validateLedger(ledger);

  assert.ok(
    errors.some((error) => /commercialDetermination\.note/.test(error)),
    errors.join("\n"),
  );
  assert.equal(summary.pass, false);
});

test("a verified technical criterion does not require the money gate", () => {
  const ledger = recordedLedger();
  ledger.pinnedRevision = SHA;
  ledger.criteria[0].status = "VERIFIED";
  ledger.criteria[0].evidence = [evidence()];

  const { errors, summary } = validateLedger(ledger);

  assert.deepEqual(errors, []);
  assert.equal(summary.pass, false);
});

test("duplicate, missing, and unknown criteria are rejected", () => {
  const ledger = recordedLedger();
  ledger.criteria[1].id = ledger.criteria[0].id;
  ledger.criteria[2].status = "PROBABLY_FINE";
  ledger.criteria.pop();

  const { errors } = validateLedger(ledger);

  assert.ok(errors.some((error) => /is duplicated/.test(error)), errors.join("\n"));
  assert.ok(errors.some((error) => /status must be VERIFIED or UNVERIFIED/.test(error)), errors.join("\n"));
  assert.ok(errors.some((error) => /missing required criterion/.test(error)), errors.join("\n"));
});

test("unreadable ledger exits non-zero with a message", () => {
  const result = runCli(path.join(os.tmpdir(), "does-not-exist-acceptance.json"));

  assert.equal(result.status, 1);
  assert.match(result.stderr, /router-acceptance:/);
});
