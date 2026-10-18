# Arcanea Ecosystem — Master Agent Instructions & Engineering Governance

> *"Through the Gates we rise. With the Guardians we create."*  
> **Status:** CANONICAL · **Estate SSOT:** `C:/Users/frank/starlight/repos` · **Standard:** 10 October 2026

This is the supreme operational governance and strategy repository for the Arcanea Omniverse, cinematic content, world standards, and agent swarms.

---

## 1. The Prime Mandate: High Institutional Expectations

Every agent operating within the Arcanea estate—whether running under **Claude Code, Grok Build, Gemini/Antigravity, Codex, Hermes, Cursor, or OpenCode**—must adhere to the highest standard of engineering, craftsmanship, and aesthetic restraint:

1. **Zero-Slop & Monolithic Elegance**:
   - Banish all cartoon tropes, fantasy clutter, and pseudoscientific buzzwords.
   - Ground the Ten Gates strictly in our **Cognitive & Architectural Taxonomy** (Foundation = Substrate, Fire = Velocity, Voice = Rhetoric, Crown = Executive Rigor).
   - Enforce Swiss typographic hierarchy, dark obsidian surfaces, and 1px hairline micro-borders.
2. **The Sovereign Gateway Law**:
   - Typing `arcanea` launches the **Sovereign Creative Operating System & TUI Gateway** ([`arcanea-gateway.ps1`](file:///C:/Users/frank/Starlight-Intelligence-System/scripts/arcanea-gateway.ps1)).
   - NEVER alias or hijack the brand command `arcanea` to a single AI coding harness. Coding sessions must be explicitly scoped (`arcanea agent hermes`, `agy-arc`, `claude-arcanea`).
3. **The 8 October 2026 Quality Bar**:
   - Never rush substantive work by skipping research, craft, refinement, or verification.
   - Consequential changes require exact-revision independent review and a clear list of remaining gaps.

---

## 2. Multi-Harness Coordination & Git Discipline

Multiple AI harnesses operate concurrently across `starlight/repos`. Git is the sole coordination substrate:
* **One Agent = One Branch**: Every harness must work on an isolated branch: `agent/<harness>/<scope>` (e.g., `agent/claude/router-edge-worker` or `agent/gemini/liquid-glass-zoom`).
* **Pre-Flight Check**: Always run `git branch --show-current` before making changes. Never touch files that another active agent is actively rewriting.
* **Worktree Isolation**: If a repository's primary checkout is locked on another harness's active branch (e.g., `agentic-ops-hub` on `agent/hermes/*`), use a dedicated worktree or staging document. Never dirty a sibling harness's branch.
* **Commit Atomicity**: All commits must be granular, accompanied by high-signal commit messages following Conventional Commits (`feat(router): ...`, `fix(schema): ...`).

---

## 3. The Adversarial "Santa Method" Convergence Gate

Complex architectural, design, or algorithmic changes must pass the two-agent **Santa Method** before shipping:
1. **Fire Gate (Generation)**: An authoring agent (e.g., `arcanea-coder` or `arcanea-story`) drafts the implementation.
2. **Crown Gate (Review)**: A second, independent reviewer agent (e.g., `arcanea-reviewer` or `Aiyami Executive Critic`) ruthlessly audits the implementation against `TASTE.md`, `CANON_LOCKED.md`, performance budgets, and security bounds.
3. **Synthesis & Convergence**: Code is not marked done until both agents reach consensus with zero unaddressed critical gaps.

---

## 4. Red Team & Blue Team Fundamentals

Security, canon integrity, and regulatory compliance are continuous automated gates, not post-launch afterthoughts.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ✦ ARCANEA RED / BLUE TEAM SECURITY TAXONOMY                                │
├───────────────────────────────┬─────────────────────────────────────────────┤
│ RED TEAM (Adversarial Probes) │ • Prompt Injection & Jailbreak Fuzzing      │
│                               │ • Canon Drift & Lore Corruption Probes      │
│                               │ • Secret Leakage & Key Exposure Exploits    │
│                               │ • C2PA Metadata Stripping & Forgery Attacks │
├───────────────────────────────┼─────────────────────────────────────────────┤
│ BLUE TEAM (Defensive Shields) │ • Strict Schema Boundaries (Zod / JSON)     │
│                               │ • Local-First Sovereign Privacy Shield      │
│                               │ • Multi-Provider Model Failover & Rate Limiter│
│                               │ • Automated C2PA Cryptographic Signatures   │
└───────────────────────────────┴─────────────────────────────────────────────┘
```

* **Red Team Mandate**:
  - Test all agent tool-calling interfaces against indirect prompt injection (e.g., malicious user input attempting to rewrite `CANON_LOCKED.md` or execute arbitrary shell scripts).
  - Probe generative pipelines for hallucinated canon violations.
  - Run automated pre-commit scans (`gitleaks`, `git-secrets`) to ensure no API keys or tokens are committed.
* **Blue Team Mandate**:
  - **Local-First Privacy Shield**: User manuscripts and private world repos must remain on the local disk. Cloud sync is strictly opt-in and client-side encrypted.
  - **C2PA Provenance Compliance**: Every media export generated via Claw must be automatically stamped with C2PA cryptographic metadata to satisfy the **EU AI Act (2026)** limited-risk transparency requirements.
  - **Failover Routing**: The Cloudflare Model Router (`api.arcanea.ai`) must maintain automatic provider failover (Anthropic → Vertex AI → DeepSeek → Groq) to prevent downtime.

---

## 5. Technology Standards & Decision Rationale

| Layer | Standard Selection | Why Chosen Over Alternatives |
|---|---|---|
| **Edge API Plane** | **Cloudflare Workers + AI Gateway + Durable Objects** | Sub-30ms global routing, native prompt caching, zero-egress R2 media storage, stateful CRDT multiplayer rooms. Beats high AWS egress fees. |
| **Interactive Web** | **Vercel + Next.js 15 + Turbopack + AI SDK 5.x** | Sub-10ms TTFB, React 19 Server Components, standardized streaming responses across all clients. |
| **Desktop Shell** | **Tauri 2.0 (Rust backend + Webview2)** | 35MB RAM footprint (vs 900MB Electron), native NVMe file-system mapping, zero cold boot latency. |
| **Typesetting & Books** | **Typst (Rust typesetting engine)** | Compiles markdown manuscripts to publication-grade, typography-perfect collector hardcovers in sub-seconds. Replaces fragile LaTeX. |
| **3D & World Pipeline** | **OpenUSD (`.usda`) + WebGPU Gaussian Splats** | Pixar/NVIDIA standard compatible across Unreal Engine 5, Blender, and browser WebGPU at 60 FPS. |
| **Generative Nodes** | **React Flow / SvelteFlow + Headless ComfyUI** | Combines the infinite spatial canvas of ComfyUI with the monolithic luxury UI of Linear and Teenage Engineering. |

---

## 6. The Engineering Documentation Suite

All agents must align their work with the comprehensive engineering specifications:
* **Product Requirements Document (PRD)**: [`docs/PRD-ARCANEA-SOVEREIGN-OMNIVERSE.md`](docs/PRD-ARCANEA-SOVEREIGN-OMNIVERSE.md)
* **Architecture Requirements Document (ARD)**: [`docs/ARD-ARCANEA-SOVEREIGN-ARCHITECTURE.md`](docs/ARD-ARCANEA-SOVEREIGN-ARCHITECTURE.md)
* **Software Development Life Cycle & GitHub Board**: [`docs/SDLC-AND-GITHUB-BOARD.md`](docs/SDLC-AND-GITHUB-BOARD.md)
* **Red / Blue Team Security Framework**: [`docs/SECURITY-RED-BLUE-TEAM-FRAMEWORK.md`](docs/SECURITY-RED-BLUE-TEAM-FRAMEWORK.md)
* **World Repo Standard**: [`docs/WORLD_REPO_STANDARD.md`](docs/WORLD_REPO_STANDARD.md)
* **Session Ledger & Handover**: [`docs/SESSION-ARCANEA-SOVEREIGN-ECOSYSTEM-2026-10-10.md`](docs/SESSION-ARCANEA-SOVEREIGN-ECOSYSTEM-2026-10-10.md)

---

## 7. Definition of Done (DoD)

Before any task or branch is marked complete:
1. **Lint & Typecheck**: Zero TypeScript or lint errors (`pnpm type-check`, `pnpm lint`).
2. **Canon Alignment**: 100% verified compliance with `CANON_LOCKED.md`.
3. **Performance Budget**: Sub-50ms local TUI/CLI execution; sub-100ms API response time.
4. **Adversarial Pass**: Independent Santa Method review passed with zero critical gaps.
5. **Git Cleanliness**: Branch is rebased against `main`, commit messages follow conventional format, and temporary scratch files are purged.
