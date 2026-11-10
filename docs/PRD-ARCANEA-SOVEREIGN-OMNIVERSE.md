# Product Requirements Document (PRD): Arcanea Sovereign Omniverse

**Document ID:** PRD-ARC-2026-001  
**Status:** APPROVED & LOCKED  
**Product Lead:** Frank / Arcanea Labs B.V.  
**Target Release:** Q4 2026 – Q1 2027  
**Canonical Anchor:** `C:/Users/frank/starlight/repos/arcanea-ecosystem`  

---

## 1. Product Vision & The "Why"

### 1.1 The Vision
Arcanea is the **Sovereign Creative Operating System** for authors, worldbuilders, digital artists, and autonomous studio directors. It dismantles the fragmented, amnesiac "subscription hell" of modern AI tools by unifying mythic worldbuilding, prose authoring, generative audio/visual pipelines, 3D gaming, and decentralized commerce into a single local-first, git-backed creative engine.

### 1.2 The Target Persona: The "Sovereign Synthesizer"
* **Demographics**: Independent authors, creative directors, technical founders, and transmedia game designers.
* **Core Need**: Total creative control. They do not want generic chatbot prompts; they want a permanent, locked creative universe where a character created today retains their voice, facial features, personality, and lore across novels, games, and cinematic shorts.
* **Psychographics**: High agency, obsessed with aesthetic craft (Dune, Tenet, Linear, Leica), allergic to cartoon AI slop and vendor lock-in.

---

## 2. Epics & Surface Requirements

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ✦ ARCANEA PRODUCT MATRIX (7 SURFACES)                                       │
├─────────────┬───────────────────────────────────────────────────────────────┤
│ EPIC 1: TUI │ Terminal Gateway (`arcanea`) — sub-30ms instant dispatcher.   │
├─────────────┼───────────────────────────────────────────────────────────────┤
│ EPIC 2: OS  │ Sanctuary Desktop Cockpit (Tauri 2.0 Rust) — 3-column studio. │
├─────────────┼───────────────────────────────────────────────────────────────┤
│ EPIC 3: PRO │ Author OS — Monastic novel room + Typst book manufacturing.   │
├─────────────┼───────────────────────────────────────────────────────────────┤
│ EPIC 4: VIS │ Visual Studio — Infinite modular synth canvas (React Flow).   │
├─────────────┼───────────────────────────────────────────────────────────────┤
│ EPIC 5: MED │ Arcanea Claw — Multi-model audio/video + C2PA watermark engine│
├─────────────┼───────────────────────────────────────────────────────────────┤
│ EPIC 6: COM │ Web Platform & The Bazaar — P2P world/agent marketplace.      │
├─────────────┼───────────────────────────────────────────────────────────────┤
│ EPIC 7: MOB │ Mobile Companion — Zero-friction voice intake & Dawn pulse.   │
└─────────────┴───────────────────────────────────────────────────────────────┘
```

### Epic 1: Terminal Gateway (`arcanea` CLI / TUI)
* **User Story**: *As a developer or technical creator, I want to type `arcanea` in any terminal and immediately access my creative estate in `<30ms` without launching an AI chat session.*
* **Acceptance Criteria**:
  * Bare `arcanea` renders the monolithic Swiss typographic menu.
  * Direct subcommands execute with zero latency: `arcanea dev`, `arcanea status`, `arcanea write`, `arcanea studio`, `arcanea swarm`.
  * `arcanea status` audits all 14 constellation repos, printing branch names and dirty status cleanly.
  * Explicit harness invocation: `arcanea agent hermes|claude|grok|agy`.

### Epic 2: Sanctuary Desktop Cockpit (Tauri 2.0 Rust Shell)
* **User Story**: *As a studio director, I want a native desktop application that interacts directly with my NVMe disk with zero Electron memory bloat.*
* **Acceptance Criteria**:
  * Total RAM footprint `<50MB` at idle.
  * 3-column layout: Left (Ten-Gate taxonomy & assets), Center (Multi-modal stage), Right (Aiyami Executive Critic & telemetry).
  * Direct file-system mapping to `starlight/repos`. All changes saved instantly to local markdown.

### Epic 3: Author OS & Publishing Engine
* **User Story**: *As a novelist, I want a distraction-free writing environment that auto-links character names to canonical lore and formats print-ready hardcovers.*
* **Acceptance Criteria**:
  * Monastic markdown editor with Newsreader/Cartier editorial typography.
  * Inline lore highlighter: character names and locations underlined in subtle platinum; hovering shows canonical lore cards.
  * 1-click Typst export: compiles manuscripts into EPUB3, Amazon KDP-ready PDF, and luxury hardcover print files in `<2 seconds`.

### Epic 4: Visual Studio & Infinite Canvas
* **User Story**: *As an art director, I want an infinite spatial canvas to connect lore, camera angles, generative models, and voice synthesis into a coherent pipeline.*
* **Acceptance Criteria**:
  * Hardware-accelerated canvas (React Flow / WebGPU) with modular synth aesthetics.
  * Nodes for Canon (Lore), Visual DNA (LoRA/Seeds), Optics (Camera/Lenses), Generation (Veo/Flux/NanoBanana), Audio (Suno/ElevenLabs), and Compositing.
  * Serializes directly into `flow.arcanea.json` in the world repo.

### Epic 5: Arcanea Claw & Generative Pipelines
* **User Story**: *As a transmedia producer, I want batch video rendering with automatic audio-reactivity and legal provenance watermarking.*
* **Acceptance Criteria**:
  * Real-time stem mixer generating ambient Solfeggio backgrounds (174 Hz to 1111 Hz).
  * Automated C2PA metadata injection into all exported PNG/MP4 files (EU AI Act compliance).
  * Zero-orphan asset registry: all outputs indexed in `visual-registry.json` with prompt and seed provenance.

### Epic 6: Web Platform & The Arcanea Bazaar (Marketplace)
* **User Story**: *As a creator, I want to monetize my world templates, UI skins, and agent packs with global checkout and automated royalty splits.*
* **Acceptance Criteria**:
  * Public landing page featuring the 60fps WebGPU "Awakening Ring".
  * Bazaar marketplace grid with 1-click Apple Pay / credit card checkout via LemonSqueezy MoR.
  * Automated 85/15 creator royalty split calculation.

### Epic 7: Mobile Companion App (Expo / React Native)
* **User Story**: *As an author on the move, I want to record voice thoughts that automatically transcribe and classify into lore notes.*
* **Acceptance Criteria**:
  * Large, tactile cyan pulse record button.
  * Local offline SQLite storage with background sync to local SIS vector memory.
  * Morning Dawn briefing showing creative streaks and active community challenges.

---

## 3. Non-Functional Requirements & Performance Budgets

| Metric | Target Budget | Enforcement Mechanism |
|---|---|---|
| **TUI Startup Time** | $< 30 \text{ ms}$ | Native binary / optimized PowerShell script |
| **Desktop Cold Boot** | $< 1.0 \text{ s}$ | Tauri 2.0 Rust binary with pre-compiled Webview2 |
| **Editor Input Latency** | $< 16 \text{ ms}$ (1 frame) | Local-first state; zero network blocking |
| **Web App TTFB** | $< 25 \text{ ms}$ | Vercel Edge Network / Cloudflare Anycast |
| **Model Router Failover** | $< 150 \text{ ms}$ | Cloudflare AI Gateway automatic fallback |
| **Memory Consumption** | $< 80 \text{ MB}$ (Desktop idle) | Rust memory allocation; zero Node/Electron runtimes |

---

## 4. Success Metrics & North Star KPIs

1. **North Star: Weekly Active Worldbuilders (WAW)**
   * Target: 1,000 WAW by Month 3; 10,000 WAW by Month 6.
2. **Asset Compounding Index (ACI)**
   * Target: $\text{ACI} \ge 6.0$ (every core story produces at least 6 derivative assets: art, audio, shorts, game scenarios).
3. **Model Router Compute Margin**
   * Target: $\ge 40\%$ gross margin through SIP prompt caching and context compression.
4. **Marketplace GMV & Platform Take-Rate**
   * Target: \$50,000/mo GMV at 15% platform fee by Month 6.
