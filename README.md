<div align="center">

# ✦ Arcanea Omniverse
### Sovereign Creative Operating System & Multi-Model Creation Engine

> *"Through the Gates we rise. With the Guardians we create."*

[![Standard: 10 October 2026](https://img.shields.io/badge/Standard-10_October_2026-00E5FF?style=flat-square&labelColor=090A0F)](docs/ARD-ARCANEA-SOVEREIGN-ARCHITECTURE.md)
[![Estate SSOT](https://img.shields.io/badge/SSOT-starlight%2Frepos-c9a96e?style=flat-square&labelColor=090A0F)](repos.json)
[![Architecture: Edge + Local](https://img.shields.io/badge/Architecture-Hono_%7C_Cloudflare_%7C_Tauri_2.0-7928CA?style=flat-square&labelColor=090A0F)](docs/ARD-ARCANEA-SOVEREIGN-ARCHITECTURE.md)
[![EU AI Act: C2PA Certified](https://img.shields.io/badge/C2PA-Provenance_Locked-22c55e?style=flat-square&labelColor=090A0F)](docs/SECURITY-RED-BLUE-TEAM-FRAMEWORK.md)

[Live Platform](https://arcanea.ai) · [Product Requirements (PRD)](docs/PRD-ARCANEA-SOVEREIGN-OMNIVERSE.md) · [Architecture (ARD)](docs/ARD-ARCANEA-SOVEREIGN-ARCHITECTURE.md) · [SDLC & Board](docs/SDLC-AND-GITHUB-BOARD.md) · [Red/Blue Framework](docs/SECURITY-RED-BLUE-TEAM-FRAMEWORK.md)

---

</div>

## 1. Executive Summary & Vision

Arcanea is the **Sovereign Creative Operating System** built for transmedia authors, digital artists, game designers, and AI creators. It eliminates the fragmentation, memory amnesia, and cognitive slop of disconnected generative AI tools by uniting narrative, visual latents, voice synthesis, audio composition, and on-chain ownership under an open, git-native substrate: the **World Repo Standard** (`world.arcanea.json`).

Every character, location, soundtrack, and rule in Arcanea possesses immutable lineage, cryptographic provenance (C2PA), and permanent multi-agent memory.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ✦ ARCANEA 7-SURFACE CREATIVE OPERATING TOPOLOGY                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. SOVEREIGN GATEWAY  │ Obsidian TUI & CLI dispatcher (`arcanea`)           │
│ 2. AUTHOR OS          │ Typst-compiled collector hardcovers & books         │
│ 3. ARCANEA STUDIO     │ WebGPU infinite spatial canvas & node DAG (`/flows`)│
│ 4. EDGE MODEL ROUTER  │ Sub-4ms Hono proxy + Cloudflare AI Gateway failover │
│ 5. ARCANEA CLAW       │ 24/7 autonomous media daemon & C2PA provenance      │
│ 6. MOBILE & DESKTOP   │ Tauri 2.0 shell (35MB RAM) + Next.js 15 PWA         │
│ 7. ARCANEA BAZAAR     │ Living package manager for worlds, skills, & skins  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Estate Constellation Routing Table (14 Repositories)

The Arcanea portfolio is maintained across 14 dedicated repositories anchored under `starlight/repos`. Git is the sole coordination plane:

| Repository | Primary Role | Local Path | Branch / Target | Production Tier |
|---|---|---|---|---|
| **[`arcanea-ai-app`](file:///C:/Users/frank/starlight/repos/arcanea-ai-app)** | **Product SSOT & Locked Lore** | `starlight/repos/arcanea-ai-app` | `agent/gemini/liquid-glass-zoom` | **Tier 0** (Core Platform) |
| **[`arcanea-ecosystem`](file:///C:/Users/frank/starlight/repos/arcanea-ecosystem)** | **Portfolio Governance & Specs** | `starlight/repos/arcanea-ecosystem` | `agent/gemini/arcanea-sovereign-governance` | **Tier 0** (Registry / Governance) |
| **[`arcanea-studio`](file:///C:/Users/frank/starlight/repos/arcanea-studio)** | **Spatial Canvas & Generative UI** | `starlight/repos/arcanea-studio` | `agent/codex/sovereign-canvas-20261010` | **Tier 1** (Creation Surface) |
| **[`arcanea-orchestrator`](file:///C:/Users/frank/starlight/repos/arcanea-orchestrator)** | **Swarm Brain & Edge Model Router** | `starlight/repos/arcanea-orchestrator` | `agent/codex/sovereign-router-20261010` | **Tier 1** (Compute / Routing) |
| **[`arcanea-claw`](file:///C:/Users/frank/starlight/repos/arcanea-claw)** | **Autonomous Media Engine & C2PA** | `starlight/repos/arcanea-claw` | `agent/claude/untrack-asph-wip` | **Tier 1** (Asset Automation) |
| **[`arcanea-academy`](file:///C:/Users/frank/starlight/repos/arcanea-academy)** | **World Proof Lab & Front Door** | `starlight/repos/arcanea-academy` | `main` | **Tier 1** (Public Education) |
| **[`arcanea-agent-skills`](file:///C:/Users/frank/starlight/repos/arcanea-agent-skills)** | **Creator Skills & Plugin Pack** | `starlight/repos/arcanea-agent-skills` | `codex/arcanea-gateway-productization` | **Tier 2** (Harness Capabilities) |
| **[`arcanea-mcp`](file:///C:/Users/frank/starlight/repos/arcanea-mcp)** | **Model Context Protocol Daemon** | `starlight/repos/arcanea-mcp` | `agent/codex/reader-canon-integration-20261003` | **Tier 2** (Tool Integration) |
| **[`arcanea-onchain`](file:///C:/Users/frank/starlight/repos/arcanea-onchain)** | **NFT Forge & IP Contracts** | `starlight/repos/arcanea-onchain` | `codex/repo-hygiene-20260911` | **Tier 2** (On-Chain Lineage) |
| **[`arcanea`](file:///C:/Users/frank/starlight/repos/arcanea)** | **Public GitHub Web Mirror** | `starlight/repos/arcanea` | `agent/codex/arcanea-github-story-20261005` | **Tier 2** (Open Source Mirror) |
| **[`arcanea-domain-portals`](file:///C:/Users/frank/starlight/repos/arcanea-domain-portals)** | **Multi-Tenant Gateway Routing** | `starlight/repos/arcanea-domain-portals` | `main` | **Tier 3** (Domain Routing) |
| **[`arcanea-spellbound`](file:///C:/Users/frank/starlight/repos/arcanea-spellbound)** | **Interactive Fiction Engine** | `starlight/repos/arcanea-spellbound` | `main` | **Tier 3** (Experiential Story) |
| **[`arcanea-agent-profile`](file:///C:/Users/frank/starlight/repos/arcanea-agent-profile)** | **Identity & Persona Specs** | `starlight/repos/arcanea-agent-profile` | `agent/hermes/arcanea-agent-v03` | **Tier 3** (Persona Taxonomy) |
| **[`arcanea-platform`](file:///C:/Users/frank/starlight/repos/arcanea-platform)** | **Legacy Supabase Creation Base** | `starlight/repos/arcanea-platform` | `agent/claude/ci-cost-fix` | **Tier 3** (Historical Base) |

---

## 3. Bleeding-Edge 2026 Technology Stack

Every layer of the Arcanea Omniverse is engineered for sub-second reactivity, memory efficiency, and local-first data sovereignty:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ✦ ARCANEA 2026 TECHNOLOGY MATRIX                                            │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Edge Routing & API   │ Hono on Cloudflare Workers (`api.arcanea.ai`)        │
│                      │ Sub-4ms TTFB, Cloudflare AI Gateway, Durable Objects │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Web      │ Vercel + Next.js 15 App Router + React 19 RSC        │
│                      │ Turbopack compilation, Vercel AI SDK 5.x streaming   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Desktop Shell        │ Tauri 2.0 (Rust backend + Webview2)                  │
│                      │ 35MB RAM footprint (vs 900MB Electron), NVMe direct  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Spatial Canvas       │ WebGPU compute shaders + React Flow / SvelteFlow     │
│                      │ Locked 120 FPS, Spatial LOD, Modular Synth aesthetic │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Manuscript Typeset   │ Typst (Rust typesetting engine)                      │
│                      │ Sub-second compilation to publication hardcovers     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Media & Provenance   │ Python 3.11 + Pillow/FFmpeg + C2PA Toolchain         │
│                      │ EU AI Act (2026) cryptographic synthetic provenance  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Developer Commerce   │ Polar.sh + Stripe Metered Billing                    │
│                      │ Token compute margins, instant template licensing    │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

---

## 4. The Omni-Dimensional Red/Blue Team Framework

Quality and longevity are continuously verified by adversarial Red/Blue stress testing across 5 dimensions:

1. **Design & Ergonomics**:
   - *Red Probe*: Node graphs turning into tangled "spaghetti wires" (ComfyUI failure mode) and purple-prose fantasy cringe.
   - *Blue Counter*: Spatial LOD cards, monolithic obsidian surfaces (`#090A0F`, `#1E2333`, `#00E5FF`), Swiss typography, and WebGPU hardware acceleration.
2. **Architecture & Latency**:
   - *Red Probe*: Heavy Node.js/Python server runtimes creating 500ms+ cold starts and local CUDA driver hell.
   - *Blue Counter*: Hono on Cloudflare Workers running in sub-5ms, single-binary Rust CLI (`arcanea-cli`), and serverless GPU bursts via Modal/Fal.ai.
3. **Competitor & Moat Defense**:
   - *Red Probe*: Single-modality platforms (Cursor for code, Midjourney for images, Scrivener for text) copying features.
   - *Blue Counter*: The **World Repo Standard** bridging all modalities into an open Git repository with zero amnesia and permanent cryptographic lore memory.
4. **GTM & Business Model**:
   - *Red Probe*: Token reseller commodity trap; marketplace ghost towns selling dead zip files.
   - *Blue Counter*: 35–50% compute margin arbitrage through pre-calibrated, prompt-cached cognitive swarms; the **Bazaar as a living package manager** (`arcanea install ...`) with recurring remix royalties.
5. **Security & Regulatory Compliance**:
   - *Red Probe*: Prompt injection, unbounded wallet drain loops, EU AI Act non-compliance penalties.
   - *Blue Counter*: Strict Zod tool sandboxing, hard recursion depth limits (max 3), per-session spend ceilings, and automated C2PA cryptographic provenance stamping.

---

## 5. Developer Quickstart & Gateway Usage

### Sovereign Gateway Command
The sovereign creative gateway is invoked directly from any shell on the machine:

```powershell
arcanea
```

* Launches the **Sovereign Creative Operating System & TUI Dispatcher** with sub-30ms startup.
* To launch a specific sub-agent or harness session:
  ```powershell
  arcanea agent claude     # Claude Code with Arcanea lore context
  arcanea agent hermes     # Hermes Agent Swarm
  arcanea agent codex      # OpenAI Codex session
  arcanea agent grok       # Grok Build session
  ```

### Inspecting Estate Telemetry
To inspect the status, branch health, and uncommitted diffs across all 14 repositories:

```bash
node scripts/status-all.mjs
```

### Running the Edge Model Router Locally
The model router is located in `arcanea-orchestrator/packages/router`:

```bash
cd ../arcanea-orchestrator/packages/router
npm test
```

---

## 6. Multi-Harness Coordination & Git Discipline

Multiple AI harnesses (**Claude Code, Codex, Antigravity, Grok, Hermes**) operate concurrently across the Arcanea estate. Coordination is maintained through strict Git rules:

* **One Harness = One Branch**: Every harness must work on an isolated branch: `agent/<harness>/<scope>` (e.g. `agent/gemini/arcanea-sovereign-governance`).
* **Pre-Flight 4-Fact Check**: Run `git branch --show-current`, verify repo toplevel, remote origin, and working tree before touching files.
* **Worktree Isolation**: If a repository's primary checkout is locked on another harness's active branch, use a dedicated worktree under `starlight/worktrees/`.
* **Adversarial Santa Method**: Major architectural or design changes require a two-agent review loop (Generation → Independent Critique → Consensus) before landing on `main`.

---

<div align="center">

*"Enter seeking, leave transformed, return whenever needed."*  
**Built by FrankX AI Systems · Canonical 2026**

</div>
