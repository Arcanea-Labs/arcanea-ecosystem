# Bounty Objective: epic/router-edge-worker: verify Hono routing and Polar token metering
Target: frankxai/arcanea-ecosystem Issue #6
URL: https://github.com/frankxai/arcanea-ecosystem/issues/6

## Issue Description
The next engineering slice is the internal Hono/Cloudflare edge router in arcanea-orchestrator/packages/router. That repository has Issues disabled, so this ecosystem issue tracks its acceptance.

Implemented locally: task/capability routing, provider-permission filtering, explicit transient failover, cloud-consent boundary, tenant Durable Object quotas/receipts and a replayable Polar sandbox event outbox. Nine focused tests pass. Branch: agent/codex/sovereign-router-20261010. Not deployed.

Remaining acceptance:
- Verify account model catalog and live Anthropic, native Vertex OAuth, DeepSeek and Groq adapters.
- Add streaming, labelled semantic-classifier evaluation and consented canon/version-isolated caching.
- Verify paid entitlements, unknown-usage reconciliation, receipt retention and Polar sandbox end to end before enabling money.
- Measure local routing overhead, TTFT and accepted-artifact cost. The 35–50% margin and sub-100ms inference remain targets.
- Pass exact-revision independent review and release checks.

Governance source: arcanea-ecosystem c6dfc24. This issue remains open; C2PA and model-provider branding do not establish legal or performance compliance.


## Instructions for Kuro (Autonomous Solver):
1. Use skills: `systematic-debugging` and `code-review-and-quality`.
2. Inspect the repository structure, locate relevant files, and understand the bug/feature.
3. Apply the minimal, robust fix or implementation.
4. Run any existing test suites or linters in the workspace.
5. Ensure the fix adheres to the project's existing code style.
6. When done, output a summary of files modified and verification results.
