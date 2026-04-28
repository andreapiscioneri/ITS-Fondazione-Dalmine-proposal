# ITS Fondazione Dalmine — Proposta Strategica 2026/27

Landing page **Nuxt 3** high-fidelity, institutional & industrial-tech, per la **Strategia Marketing Integrata 16 mesi** dedicata a **ITS Fondazione Dalmine**.

> Strategia e coordinamento a cura di **Denani Agency** · Founding Partner: **Tenaris · Brembo · Lovato Electric**

## Stack
- **Nuxt 3** (Vue 3, Composition API, `<script setup lang="ts">`)
- TypeScript
- CSS scoped per componente + design tokens globali
- Zero dipendenze runtime esterne (Google Fonts caricati via CDN)

## Setup
```bash
npm install
npm run dev      # dev server su http://localhost:3000
npm run build    # build di produzione (SSR)
npm run generate # static site (SSG)
npm run preview
```

## Struttura del Progetto
```
ITS Fondazione Dalmine-proposal/
├── app.vue                       # Root con <NuxtPage />
├── nuxt.config.ts                # Config + meta SEO globali
├── package.json
├── tsconfig.json
├── assets/css/main.css           # Design tokens, tipografia, animazioni
├── composables/
│   ├── useReveal.ts              # IntersectionObserver scroll-triggered
│   └── useMagnetic.ts            # Hover magnetico CTA
├── components/
│   ├── SiteHeader.vue            # Header sticky + Quality Seal Denani
│   ├── HeroSection.vue           # Parallax cinematografico + 4 stat cell
│   ├── EcosystemSection.vue      # Bento grid Tenaris/Brembo/Lovato
│   ├── PricingSection.vue        # Cards Base/Medio/Pro (campagna 4 mesi)
│   ├── KpiSection.vue            # Dashboard tabella KPI iscritti
│   ├── MaintenanceSection.vue    # Scroll orizzontale mantenimento 12 mesi
│   ├── ScenarioSection.vue       # Checkout style — totale 44.500€
│   ├── DownloadSection.vue       # Pre-footer download PDF
│   └── SiteFooter.vue            # Footer minimalista + social
└── pages/
    └── index.vue                 # Compone le sezioni + JSON-LD
```

## Architettura del Brand
- **Parent Brand (H1):** ITS Fondazione Dalmine — Navy `#002D62`
- **Founding Partner (H2):** Tenaris · Brembo · Lovato Electric (peso visivo equivalente)
- **Quality Seal / Coordinamento:** Denani Agency

## Sezioni della Landing Page
1. **Sticky Header** con Quality Seal Denani a destra
2. **Hero parallax** con headline 16 mesi + stat-cell live
3. **Bento Grid** "L'Ecosistema del Talento" (Apple/Spotify style)
4. **Pricing Cards** Campagna Promozionale (Base 6k · Medio 9k · Pro 12k)
5. **KPI Dashboard** "Iscritti Attesi" (machine-readable)
6. **Mantenimento Annuale** (horizontal scroll, Base/Medio/Pro + Add-on)
7. **Scenario Economico Totale** (44.500€) — checkout style su sezione dark
8. **Pre-footer Download** PDF
9. **Footer** minimalista

## Ottimizzazioni
- **SEO** semantic H1 → H2 → H3, meta description e Open Graph
- **GEO** (Generative Engine Optimization) — entity linking partner/Bergamo
- **AIO** (AI Answer Optimization) — tabelle dati strutturati + JSON-LD `Service`
- Animazioni scroll-triggered (IntersectionObserver, fade + stagger) via `useReveal`
- Hover magnetico sui CTA via `useMagnetic`
- Parallax cinematografico hero

## Design System
- **Tipografia:** Space Grotesk (display) + Inter (body)
- **Palette:** Navy Deep `#001A3D`, Navy `#002D62`, Electric Blue `#0066FF`, Tech Orange `#FF6B1A`, Slate, Fog
- **Stile:** Apple minimalism + Spotify Bento + Awwwards motion

## Lingua
Tutto il testo visibile è in **italiano**.
