<script setup lang="ts">
interface Plan {
  name: string
  price: string
  period: string
  features: string[]
  featured?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Base',
    price: '6.000€',
    period: 'una tantum · 4 mesi',
    features: [
      'Setup tecnico tracciamento',
      '2-3 contenuti / mese',
      'Ottimizzazione SEO base',
      'Report mensile sintetico',
      'Coordinamento Denani'
    ]
  },
  {
    name: 'Medio',
    price: '9.000€',
    period: 'una tantum · 4 mesi',
    badge: 'Consigliato',
    featured: true,
    features: [
      'Setup tecnico avanzato + GTM',
      '4-6 contenuti / mese (video + foto)',
      'SEO, GEO & AIO ottimizzazione',
      'Report mensile completo + insight',
      'A/B test creatività ADS',
      'Coordinamento Denani Senior'
    ]
  },
  {
    name: 'Pro',
    price: '12.000€',
    period: 'una tantum · 4 mesi',
    features: [
      'Setup full-stack + dashboard custom',
      '8-10 contenuti / mese (multi-formato)',
      'SEO, GEO, AIO + Entity Linking',
      'Report settimanale + KPI live',
      'Studio video professionale',
      'Strategia influencer educational'
    ]
  }
]
</script>

<template>
  <section class="pricing" id="campagna">
    <div class="container">
      <div class="section-head" data-reveal>
        <div class="eyebrow">Campagna Promozionale · 4 Mesi</div>
        <h2>Tre piani di lancio. Una sola direzione strategica.</h2>
        <p class="lead">
          Setup tecnico, content production, advertising e reportistica mensile per generare iscrizioni qualificate al ciclo formativo
          2026/27.
        </p>
      </div>

      <div class="pricing-row" data-reveal-stagger>
        <article v-for="plan in plans" :key="plan.name" class="price-card" :class="{ featured: plan.featured }">
          <div v-if="plan.badge" class="price-tag">{{ plan.badge }}</div>
          <div class="price-name">{{ plan.name }}</div>
          <div class="price-amount">{{ plan.price }}</div>
          <div class="price-period">{{ plan.period }}</div>
          <ul class="price-features">
            <li v-for="f in plan.features" :key="f">
              <span class="check-icon">✓</span> {{ f }}
            </li>
          </ul>

        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing { background: var(--white); }
.pricing-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1320px;
  margin: 0 auto;
}
.price-card {
  position: relative;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 40px 36px 36px;
  transition: all 0.5s var(--ease);
  overflow: hidden;
}
.price-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(0,45,98,0.15); }
.price-card.featured {
  background: linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%);
  color: var(--white);
  border: none;
  transform: scale(1.02);
  box-shadow: 0 32px 80px rgba(0,45,98,0.25);
}
.price-card.featured:hover { transform: scale(1.02) translateY(-6px); }
.price-card.featured::after {
  content: ''; position: absolute;
  width: 320px; height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--electric-glow) 0%, transparent 70%);
  opacity: 0.25; filter: blur(60px);
  bottom: -150px; right: -120px;
  z-index: 0;
}
.price-card > * { position: relative; z-index: 1; }
.price-tag {
  display: inline-flex;
  padding: 5px 12px;
  border-radius: 100px;
  background: var(--orange);
  color: var(--white);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  margin-bottom: 24px;
}
.price-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.0625rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 500;
  margin-bottom: 16px;
}
.price-amount {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.75rem, 4.5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 4px;
}
.price-card:not(.featured) .price-amount { color: var(--navy); }
.price-period { font-size: 0.875rem; opacity: 0.6; margin-bottom: 32px; }
.price-features { list-style: none; margin-bottom: 36px; }
.price-features li {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  font-size: 0.9375rem;
}
.price-card.featured .price-features li { border-top-color: rgba(255,255,255,0.12); }
.check-icon {
  flex-shrink: 0; width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--navy);
  color: white;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px;
  margin-top: 1px;
}
.price-card.featured .check-icon { background: var(--electric-glow); }
.price-cta {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 22px;
  border-radius: 100px;
  background: var(--navy);
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: all 0.3s var(--ease);
  width: 100%;
}
.price-card.featured .price-cta { background: var(--white); color: var(--navy); }
.price-card:not(.featured) .price-cta:hover { background: var(--navy-deep); }
.price-card.featured .price-cta:hover { background: var(--electric-glow); color: var(--white); }

@media (max-width: 980px) {
  .pricing-row { grid-template-columns: 1fr; }
  .price-card.featured { transform: none; }
  .price-card.featured:hover { transform: translateY(-6px); }
}
</style>
