<script setup lang="ts">
const partners = [
  {
    name: 'Tenaris',
    role: 'Founding Partner · Acciaio',
    tagline: "Architettura industriale dell'acciaio: tubi senza saldatura per energia, automotive e infrastrutture critiche.",
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85',
    cls: 'tile-tenaris'
  },
  {
    name: 'Brembo',
    role: 'Founding Partner · Sistemi frenanti',
    tagline: 'High-performance braking systems: ricerca, materiali compositi e tecnologie per la mobilità del futuro.',
    img: 'https://images.unsplash.com/photo-1597007030739-6d2e7172ee6c?auto=format&fit=crop&w=1400&q=85',
    cls: 'tile-brembo'
  },
  {
    name: 'Lovato Electric',
    role: 'Founding Partner · Automazione elettrica',
    tagline: 'Smart electrical panels e soluzioni di automazione per gli impianti industriali Industry 4.0.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=85',
    cls: 'tile-lovato'
  }
]
</script>

<template>
  <section class="ecosystem" id="ecosistema">
    <div class="container">
      <div class="section-head" data-reveal>
        <div class="eyebrow">L'Ecosistema del Talento</div>
        <h2>Una sinergia d'eccellenza tra Fondazione e leader globali.</h2>
        <p class="lead">
          La forza dei <strong>Founding Partner</strong> industriali al servizio della formazione tecnica d'alto livello: meccatronica,
          automazione, energia e materiali avanzati nel cuore di Bergamo.
        </p>
      </div>

      <div class="bento" data-reveal-stagger>
        <article class="bento-tile tile-headline">
          <div class="glow" aria-hidden="true"></div>
          <h3>
            Tre Founding Partner. Una visione condivisa:
            <em>formare il futuro dell'industria.</em>
          </h3>
          <p class="lead-line">
            L'Ecosistema Meccatronico Bergamo unisce ITS Fondazione Dalmine ai leader globali Tenaris, Brembo e Lovato per costruire
            percorsi formativi ad alto impatto occupazionale.
          </p>
        </article>

        <article v-for="p in partners" :key="p.name" class="bento-tile" :class="p.cls">
          <div class="tile-bg" :style="{ backgroundImage: `url('${p.img}')` }" aria-hidden="true"></div>
          <div class="tile-overlay"></div>
          <div class="tile-content">
            <div class="tile-meta"><span class="dot"></span>{{ p.role }}</div>
            <div>
              <div class="tile-brand">{{ p.name }}</div>
              <div class="tile-tagline">{{ p.tagline }}</div>
            </div>
          </div>
        </article>

        <article class="bento-tile tile-stat">
          <div class="tile-content">
            <div>
              <div class="big-number">+92<span class="pct">%</span></div>
              <div class="label-text">
                Tasso di occupazione medio dei diplomati ITS Fondazione Dalmine entro 12 mesi.
              </div>
            </div>
            <div class="kicker">Indicatore di impatto</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ecosystem { background: var(--fog); }
.bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(140px, auto);
  gap: 16px;
  max-width: 1320px;
  margin: 0 auto;
}
.bento-tile {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--white);
  border: 1px solid var(--line);
  transition: all 0.5s var(--ease);
  will-change: transform;
}
.bento-tile:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.bento-tile .tile-bg {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  transition: transform 0.8s var(--ease);
}
.bento-tile:hover .tile-bg { transform: scale(1.06); }
.bento-tile .tile-content {
  position: relative; z-index: 2;
  padding: 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bento-tile .tile-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(180deg, rgba(0,26,61,0.1) 0%, rgba(0,26,61,0.85) 100%);
}
.tile-brand {
  color: var(--white);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}
.tile-tagline { color: rgba(255,255,255,0.85); font-size: 0.9375rem; line-height: 1.5; }
.tile-meta {
  display: flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 500;
}
.tile-meta .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }

.tile-headline { grid-column: span 6; padding: 56px 48px; min-height: 280px; background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%); color: var(--white); border: none; }
.tile-headline h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.15;
  max-width: 22ch;
  margin-bottom: 20px;
}
.tile-headline h3 em { color: var(--electric-glow); font-style: italic; font-weight: 400; }
.tile-headline .lead-line { color: rgba(255,255,255,0.65); font-size: 1.0625rem; max-width: 50ch; }
.tile-headline .glow {
  position: absolute; width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--electric) 0%, transparent 70%);
  opacity: 0.3; filter: blur(60px);
  right: -100px; top: -100px;
}

.tile-tenaris { grid-column: span 3; min-height: 320px; }
.tile-brembo { grid-column: span 3; min-height: 320px; }
.tile-lovato { grid-column: span 3; min-height: 240px; }
.tile-stat { grid-column: span 3; min-height: 240px; padding: 0; }

.tile-stat .tile-content { padding: 36px; background: var(--white); justify-content: space-between; }
.tile-stat .big-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-weight: 600;
  color: var(--navy);
  letter-spacing: -0.04em;
  line-height: 0.95;
}
.tile-stat .big-number .pct { font-size: 0.5em; color: var(--orange); }
.tile-stat .label-text {
  font-size: 0.875rem;
  color: var(--slate);
  margin-top: 12px;
  max-width: 32ch;
}
.tile-stat .kicker {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--slate-light);
  font-weight: 600;
}

@media (max-width: 980px) {
  .bento { grid-template-columns: repeat(2, 1fr); }
  .tile-headline, .tile-tenaris, .tile-brembo, .tile-lovato, .tile-stat { grid-column: span 2; }
}
</style>
