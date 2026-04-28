<script setup lang="ts">
const heroBg = ref<HTMLElement | null>(null)

const onScroll = () => {
  if (!heroBg.value) return
  const y = window.scrollY
  if (y < window.innerHeight) {
    heroBg.value.style.transform = `scale(1.1) translate3d(0, ${y * 0.35}px, 0)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section class="hero" id="hero">
    <div ref="heroBg" class="hero-bg" aria-hidden="true"></div>
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-inner">
      <div data-reveal>
        <div class="hero-eyebrow">
          <span class="pulse"></span>
          <span class="eyebrow-text eyebrow-text--lead">Proposta strategia di marketing</span>
          <span class="eyebrow-logos" aria-hidden="true">
            <img src="/DENANI-LOGO-WHITE.webp" alt="Denani" class="eyebrow-logo" />
            <span class="eyebrow-separator">|</span>
            <img src="/loghi-trasparenti-4.png" alt="Fondazione Dalmine" class="eyebrow-logo eyebrow-logo--fondazione" />
          </span>
          </div>
      </div>
      <h1 data-reveal>
        L'Evoluzione del Talento:<br />
        <span class="accent">Strategia Marketing Integrata</span> 2026
      </h1>
      <p class="hero-sub" data-reveal>
        Un progetto coordinato da <strong>DENANI S.R.L</strong> per <strong>ETS Fondazione Dalmine</strong>, polo d'innovazione italiano per l'alta formazione tecnica. Promuovere i percorsi post-diploma in tutto il Nord Italia, la casa dello studente e la partnership tra <strong>Tenaris, Brembo e Lovato Electric</strong>.
      </p>
      <div class="hero-cta-row" data-reveal>
        <a href="#scenario" class="btn btn-primary">
          Vedi Scenario Economico
          <span class="arrow">→</span>
        </a>
        <a href="#download" class="btn btn-ghost">
          Scarica PDF Riepilogo
        </a>
      </div>

    </div>
  </section>
</template>


<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex; align-items: center;
  overflow: hidden;
  color: var(--white);
  padding: 140px 32px 80px;
}
.hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2400&q=85');
  background-size: cover; background-position: center;
  transform: scale(1.1);
  will-change: transform;
}
.hero-bg::after {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 26, 61, 0.85) 0%, rgba(0, 26, 61, 0.65) 50%, rgba(0, 26, 61, 0.92) 100%),
    radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.25), transparent 50%);
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}

.hero-inner {
  position: relative; z-index: 2;
  max-width: 1320px; margin: 0 auto; width: 100%;
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,0.06);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 32px;
}
.eyebrow-text,
.eyebrow-logos {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.hero-eyebrow .pulse {
  width: 6px; height: 6px; border-radius: 50%; background: #7dd3fc;
  box-shadow: 0 0 0 0 #7dd3fc;
  animation: pulse 2s infinite;
}
.eyebrow-separator {
  opacity: 0.7;
}
.eyebrow-logo {
  height: 28px;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  margin: 0 6px;
  opacity: 0.9;
}
.eyebrow-logo--fondazione {
  height: 56px;
  filter: brightness(0) invert(1);
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(125,211,252,0.7); }
  70% { box-shadow: 0 0 0 12px rgba(125,211,252,0); }
  100% { box-shadow: 0 0 0 0 rgba(125,211,252,0); }
}
.hero h1 { max-width: 18ch; margin-bottom: 24px; }
.hero h1 .accent { color: var(--electric-glow); font-style: italic; font-weight: 400; }
.hero-sub {
  font-size: clamp(1.0625rem, 1.4vw, 1.3125rem);
  max-width: 60ch;
  color: rgba(255,255,255,0.78);
  line-height: 1.55;
  margin-bottom: 48px;
}
.hero-sub strong { color: var(--white); }
.hero-cta-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }

.hero-stats {
  margin-top: 96px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  overflow: hidden;
  backdrop-filter: blur(10px);
}
.stat-cell { padding: 28px 24px; background: rgba(0,26,61,0.4); }
.stat-cell .num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--white);
  line-height: 1;
  margin-bottom: 8px;
}
.stat-cell .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.6);
  font-weight: 500;
}

@media (max-width: 980px) {
  .hero { padding: 120px 24px 64px; }
  .hero-stats { grid-template-columns: repeat(2, 1fr); }
  .hero-eyebrow {
    font-size: 0.75rem;
    padding: 6px 12px;
    gap: 6px;
  }
  .eyebrow-logo {
    height: 24px;
    margin: 0 3px;
  }
  .eyebrow-logo--fondazione {
    height: 30px;
  }
}
@media (max-width: 600px) {
  .hero { padding: 124px 16px 64px; }
  .hero-stats { grid-template-columns: 1fr 1fr; }
  .hero h1 { max-width: 11ch; font-size: 2.25rem; line-height: 1.08; }
  .hero-sub { font-size: 0.9375rem; }
  .hero-eyebrow {
    border-radius: 20px;
    position: relative;
    font-size: 0.76rem;
    line-height: 1.15;
    padding: 40px 20px 18px;
    gap: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
  .eyebrow-text,
  .eyebrow-logos {
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
  }
  .eyebrow-text--lead {
    order: 1;
  }
  .eyebrow-text--meta {
    order: 2;
  }
  .eyebrow-logos {
    order: 3;
  }
  .eyebrow-separator {
    display: none;
  }
  .hero-eyebrow .pulse {
    display: block;
    position: absolute;
    top: 18px; /* push the dot further from the top border */
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
  }
  .eyebrow-text--lead,
  .eyebrow-text--meta {
    width: 100%;
  }
  .eyebrow-logo {
    height: 36px;
    margin: 0 2px;
  }
  .eyebrow-logo--fondazione {
    height: 54px;
  }
  .hero h1 .accent {
    display: inline;
  }
}
</style>
