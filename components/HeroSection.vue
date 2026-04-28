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
          Proposta strategica · 16 Mesi · 2026/27
        </div>
      </div>
      <h1 data-reveal>
        L'Evoluzione del Talento:<br />
        <span class="accent">Strategia Marketing Integrata</span> 2026.
      </h1>
      <p class="hero-sub" data-reveal>
        Un progetto coordinato da <strong>Denani Agency</strong> per ITS Fondazione Dalmine, in sinergia con i Founding Partner industriali
        <strong>Tenaris, Brembo e Lovato Electric</strong>. Connettere talento e industria nell'ecosistema meccatronico di Bergamo.
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

      <div class="hero-stats" data-reveal-stagger>
        <div v-for="stat in stats" :key="stat.label" class="stat-cell">
          <div class="num" v-html="stat.num"></div>
          <div class="label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
const stats = [
  { num: '16<span style="opacity:0.5">mo</span>', label: 'Strategia integrata' },
  { num: '3', label: 'Founding Partner industriali' },
  { num: '≥30', label: 'Iscritti attesi (target medio)' },
  { num: '44.500€', label: 'Investimento totale stimato' }
]
</script>

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
.hero-eyebrow .pulse {
  width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
  box-shadow: 0 0 0 0 var(--orange);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255,107,26,0.7); }
  70% { box-shadow: 0 0 0 12px rgba(255,107,26,0); }
  100% { box-shadow: 0 0 0 0 rgba(255,107,26,0); }
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
}
@media (max-width: 600px) {
  .hero-stats { grid-template-columns: 1fr 1fr; }
}
</style>
