# Router Edge Worker — Acceptance Verification Record

> **Status: UNVERIFIED — blocked on unpublished source.**
> No acceptance criterion in issue #6 is marked passing by this record. Nothing
> here is evidence of correctness, performance, or commercial readiness.

| Field | Value |
| --- | --- |
| Issue | `frankxai/arcanea-ecosystem#6` — epic/router-edge-worker |
| Subject of verification | `arcanea-orchestrator` → `packages/router` (Hono/Cloudflare edge router, Durable Object quotas/receipts, Polar sandbox event outbox) |
| Claimed source revision | branch `agent/codex/sovereign-router-20261010`, router commit `1851d7f` |
| Governance source | `arcanea-ecosystem` `c6dfc24` (present in this repo's history) |
| Ecosystem revision inspected | `75a31a6` (2026-09-03) |
| Orchestrator revision inspected | `3208215` on `main`, plus all 226 remote branch tips |
| Recorded | 2026-10-20 |
| Recorded by | Kuro (autonomous solver), branch `fix-bounty-6` |

---

## 1. Why this record exists

Issue #6 tracks acceptance for work that lives in a different repository. The
implementation is described as "implemented locally … not deployed", with the
source branch never published. Acceptance therefore cannot be advanced by
reading this repository, and cannot be advanced by writing code here either:
there is no defect in `arcanea-ecosystem` to fix, and no local copy of the
router to correct.

What can be advanced is the *verification procedure* — the set of commands and
artifacts that would turn each remaining bullet into a pass or a fail. This
record pins that procedure to an exact revision and states, per criterion, what
is still missing. It exists so the next reviewer does not have to reconstruct
the reasoning, and so status cannot drift into prose that sounds like a pass.

## 2. What was checked, and what was found

All commands were run against public remotes on 2026-10-20. Outputs are
abbreviated to the decisive lines.

```bash
git ls-remote --heads https://github.com/frankxai/arcanea-orchestrator.git \
  'refs/heads/*sovereign*' 'refs/heads/*router*' 'refs/heads/*20261010*'
# (no output) — the claimed branch does not exist on the remote
```

```bash
git clone --filter=blob:none --no-checkout https://github.com/frankxai/arcanea-orchestrator.git
git -C arcanea-orchestrator fetch origin '+refs/heads/*:refs/remotes/origin/*'
git -C arcanea-orchestrator branch -r | wc -l          # 226
git -C arcanea-orchestrator log --all --oneline -- packages/router
# (no output) — no commit reachable from any branch contains this path
```

```bash
git -C arcanea-orchestrator cat-file -t 1851d7f
# absent — not a valid object name in any fetched branch history
```

| Check | Result |
| --- | --- |
| Claimed branch `agent/codex/sovereign-router-20261010` on remote | **absent** |
| `packages/router` path in any of 226 branch tips | **absent** |
| Claimed router commit `1851d7f` reachable from any branch | **absent** |
| `packages/` contents on `main` | `ao`, `cli`, `core`, `integration-tests`, `mobile`, `plugins`, `web` |
| Hono / Durable Object / Polar references in the orchestrator tree | **none** |

Published artifacts were checked as a fallback, in case the router shipped to a
registry instead of the branch:

| Artifact | Finding |
| --- | --- |
| `@arcanea/orchestrator@1.2.1` (npm) | CLI dispatcher; no Hono, no Durable Objects, no Polar code |
| `@arcanea/router-spec@1.0.2` (npm) | CLI-surface model routing catalog (`models.yaml`); provider labels `anthropic`, `google`, `openai`, `opencode-zen`; **no** Vertex, DeepSeek or Groq entries |

`@arcanea/router-spec` is a *task-to-model catalog for CLI harnesses*. It is not
the edge router described in the issue and must not be cited as its model
catalog. The only overlap with the named adapters is the Anthropic label.

**Conclusion:** at the recorded revision, the artifact under acceptance does not
exist anywhere reachable. Every remaining criterion is unverifiable for the same
single reason.

## 3. Acceptance matrix

Status vocabulary is deliberately narrow: `UNVERIFIED` (blocked, no evidence
obtained) or `VERIFIED` (evidence attached at a pinned revision). No other
value is used, because "probably fine" is how acceptance records become
fiction.

The authoritative machine-readable form of this matrix is
[`router-edge-worker-acceptance.json`](./router-edge-worker-acceptance.json).
`scripts/router-acceptance.mjs` validates it, and CI runs that validator plus
its tests. The validator rejects a `VERIFIED` row unless it carries evidence
pinned to a 40-character commit SHA, rejects a ledger that drops a required
criterion, and keeps rows 9 and 12 blocked until the commercial determination
in §4.3 is recorded. The table below is a human rendering of the ledger; when
the two disagree, the ledger is authoritative.

| # | Criterion (from issue #6) | Evidence that would satisfy it | Status | Blocker |
| --- | --- | --- | --- | --- |
| 1 | Account model catalog | Published catalog file + a test asserting each entry resolves to a live adapter | UNVERIFIED | Source unpublished |
| 2 | Live Anthropic adapter | Recorded request/response against the real endpoint, with model id and date | UNVERIFIED | Source unpublished; no funded inference |
| 3 | Native Vertex OAuth | Token acquisition path exercised (service account or workload identity), not a Gemini API key | UNVERIFIED | Source unpublished; no Vertex credentials exercised |
| 4 | DeepSeek adapter | Live call + error-path call (rate limit, 5xx) | UNVERIFIED | Source unpublished |
| 5 | Groq adapter | Live call + error-path call | UNVERIFIED | Source unpublished |
| 6 | Streaming | Test proving incremental delivery and that a mid-stream failure is not billed as success | UNVERIFIED | Source unpublished |
| 7 | Labelled semantic-classifier evaluation | Labelled set, per-class precision/recall, confusion matrix, dataset revision | UNVERIFIED | Source unpublished; no labelled set exists in this repo |
| 8 | Consented canon / version-isolated caching | Cache key includes canon version + consent scope; test proving cross-version and cross-tenant misses | UNVERIFIED | Source unpublished |
| 9 | Paid entitlements | Server-side entitlement derivation from billing state, with a test that a client cannot self-assert tier | UNVERIFIED | Source unpublished; see §4.3 |
| 10 | Unknown-usage reconciliation | Test: provider reports no usage → reservation released or reconciled, never silently zero-cost | UNVERIFIED | Source unpublished |
| 11 | Receipt retention | Durable Object receipt survives eviction/restart; retention window asserted | UNVERIFIED | Source unpublished |
| 12 | Polar sandbox end to end | Sandbox event outbox replay produces exactly-once ledger effect | UNVERIFIED | Source unpublished; see §4.3 |
| 13 | Routing overhead | Local benchmark of router-added latency, p50/p95, with harness and machine recorded | UNVERIFIED | Source unpublished; no benchmark artifact |
| 14 | TTFT | Time-to-first-token measured end to end, separated from provider time | UNVERIFIED | Source unpublished |
| 15 | Accepted-artifact cost | Cost per accepted artifact, including rejected attempts and retries | UNVERIFIED | Source unpublished |
| 16 | Exact-revision independent review | Review by an author other than the implementer, pinned to a SHA | UNVERIFIED | No SHA to review |

The "nine focused tests pass" claim is likewise not reproducible: there is no
revision at which to run them.

## 4. Findings that hold regardless of the missing branch

These are worth settling before the branch lands, because each one can turn a
green test run into a false acceptance.

### 4.1 Syntax gates are not type checking

The implementation notes describe "syntax build/typecheck gates". A parse-level
gate (`node --check`, bundler success) passes on code that is semantically
wrong. Acceptance for a router that meters money should require
`tsc --noEmit` under the package's real `tsconfig`, with `strict` on, and the
result recorded. This is the cheapest place to catch a mis-shaped usage record
before it becomes a billing bug.

### 4.2 Routing overhead, TTFT and inference latency are three different numbers

The issue lists "sub-100ms inference" alongside a routing-overhead budget. A
router cannot establish provider inference latency; it can only bound the
latency *it adds*. For a Cloudflare edge router those additions are concrete and
measurable:

- classifier or heuristic routing decision
- Durable Object round trip for quota reservation
- Polar outbox write
- any retry or failover hop

Report them separately — `router_overhead_ms`, `ttft_ms`, `provider_ms` — or the
target cannot be attributed to a component and the 35–50% margin figure stays
unfalsifiable. A single end-to-end number will absorb provider variance and hide
regressions in the parts this repository actually controls.

### 4.3 The Polar question is commercial before it is technical

The maintainer's correction on this issue stands: the current Polar acceptable
use policy restricts marketplaces that sell others' goods or services for a
revenue share, and subjects AI generation tooling to closer review. That means:

- Polar is a candidate for **Arcanea-owned SaaS metering**, not evidence of
  marketplace royalty settlement.
- "Polar sandbox end to end" can verify the *mechanics* (outbox replay,
  exactly-once ledger effect). It cannot verify that the rail is contractually
  available for the intended commercial shape.
- Enabling money therefore has a gate that no test in `packages/router` can
  close: a separate marketplace-capable rail plus explicit seller, rights and
  refund responsibilities.

Criteria 9 and 12 above should stay `UNVERIFIED` even after the sandbox tests
pass, until that commercial determination is recorded.

### 4.4 C2PA and provider branding are not compliance

Restating the issue's own caveat so it is not lost in a later summary: a
provenance signature and a provider logo do not establish legal, licensing or
performance compliance. No acceptance record should imply otherwise.

## 5. Unblock procedure

Ordered, and reproducible. Substitute the real package name for
`./packages/router` once the branch exists.

```bash
# 1. Publish the source. Either push the branch, or attach a patch to issue #6.
git clone https://github.com/frankxai/arcanea-orchestrator.git
cd arcanea-orchestrator
git fetch origin agent/codex/sovereign-router-20261010
git switch agent/codex/sovereign-router-20261010
git rev-parse HEAD            # record this SHA in the matrix above

# 2. Reproduce the test claim at that exact revision.
pnpm install --frozen-lockfile
pnpm --filter ./packages/router test

# 3. Semantic gate, not just a parse gate (see §4.1).
pnpm --filter ./packages/router exec tsc --noEmit
pnpm --filter ./packages/router exec eslint .

# 4. Confirm the money path is inert by default before any live key exists.
grep -rn "POLAR_" packages/router/src | grep -v test
grep -rn "sandbox" packages/router/src | head
```

Then record the evidence at that SHA in `docs/router-edge-worker-acceptance.json`
and run the gate:

```bash
# 5. Validate the record, then require a pass before any release or money step.
node scripts/router-acceptance.mjs docs/router-edge-worker-acceptance.json
node scripts/router-acceptance.mjs docs/router-edge-worker-acceptance.json --require-pass
```

Fill the matrix in §3 with, per row, the command run, its output, and the
SHA. Rows 9 and 12 stay open until §4.3 is settled commercially.

Two things this procedure deliberately does not do: deploy, and enable billing.

## 6. What this record does not assert

- It does not assert the router works, or that it does not.
- It does not assert the nine tests pass; they were never executed.
- It does not assert any latency, margin or cost figure.
- It does not assert commercial availability of any payment rail.
- It does not close issue #6. It documents why #6 cannot close yet.

**Next action, single step:** publish `agent/codex/sovereign-router-20261010`
(or attach the patch), then re-run §5 and fill §3 at that SHA.
