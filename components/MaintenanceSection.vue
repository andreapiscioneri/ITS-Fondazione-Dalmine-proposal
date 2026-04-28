<script setup lang="ts">
interface Tier {
  name: string
  price: string
  period?: string
  summary: string
  list: string[]
  featured?: boolean
  addon?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Base',
    price: '1.200€',
    period: '/mese',
    summary: 'Presidio editoriale essenziale per mantenere viva la presenza online della Fondazione.',
    list: ['2 post / settimana social', '1 newsletter mensile', 'Monitoraggio performance', 'Community management base', 'Report trimestrale']
  },
  {
    name: 'Medio · Consigliato',
    price: '2.000€',
    period: '/mese',
    featured: true,
    summary: "Presidio editoriale e strategico continuativo, allineato al ciclo formativo dell'ITS.",
    list: [
      '4 post / settimana multicanale',
      '2 newsletter mensili segmentate',
      'Storytelling Founding Partner',
      'SEO content + AIO entity linking',
      'Community management avanzato',
      'Report mensile + call strategica'
    ]
  },
  {
    name: 'Pro',
    price: '2.800€',
    period: '/mese',
    summary: 'Presidio premium con produzione video continua, eventi e attivazione studenti.',
    list: [
      'Post quotidiani, multi-platform',
      '4 newsletter mensili targetizzate',
      'Video reportage mensile',
      'SEO/GEO/AIO full optimization',
      'Coverage eventi Fondazione & Partner',
      'Dashboard live KPI & report bisettimanale'
    ]
  },
  {
    name: 'Add-on Disponibili',
    price: 'Modulari',
    addon: true,
    summary: 'Servizi aggiuntivi attivabili on-demand per esigenze straordinarie.',
    list: [
      'Open Day strategy & coverage',
      'Video case-study Founding Partner',
      'PR e ufficio stampa locale',
      'Brand ambassador program studenti',
      'Sito sezione "Career Hub"'
    ]
  }
]
</script>

<template>
  <section class="maintenance" id="mantenimento">
    <div class="container">
      <div class="section-head left maintenance-head" data-reveal>
        <div class="head-text">
          <div class="eyebrow">Mantenimento Annuale · 12 Mesi</div>
          <h2>Brand continuity & social management.</h2>
          <p class="lead">
            Tre livelli di presidio continuativo per consolidare il posizionamento dell'ITS Fondazione Dalmine come riferimento dell'alta
            formazione tecnica in Lombardia.
          </p>
        </div>
        <div class="scroll-hint">Scorri orizzontalmente</div>
      </div>
    </div>
    <div class="maintenance-scroll-wrap" data-reveal>
      <div class="maintenance-scroll">
        <article
          v-for="tier in tiers"
          :key="tier.name"
          class="maint-card"
          :class="{ featured: tier.featured, addon: tier.addon }"
        >
          <div class="maint-name">{{ tier.name }}</div>
          <div class="maint-price">
            <span class="amount" :class="{ 'amount-sm': tier.addon }">{{ tier.price }}</span>
            <span v-if="tier.period" class="period">{{ tier.period }}</span>
          </div>
          <p class="maint-summary">{{ tier.summary }}</p>
          <ul class="maint-list">
            <li v-for="item in tier.list" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.maintenance { background: var(--white); padding-bottom: 80px; }
.maintenance-head { max-width: none; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 32px; }
.head-text { max-width: 640px; }
.scroll-hint {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--slate-light);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 500;
}
.scroll-hint::after { content: ' →'; }

.maintenance-scroll-wrap { position: relative; max-width: 1500px; margin: 0 auto; }
.maintenance-scroll {
  display: flex; gap: 24px;
  padding: 16px 32px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.maintenance-scroll::-webkit-scrollbar { display: none; }
.maint-card {
  flex: 0 0 420px;
  background: linear-gradient(160deg, var(--white) 0%, var(--fog) 100%);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 40px;
  scroll-snap-align: start;
  transition: all 0.5s var(--ease);
  position: relative;
  overflow: hidden;
}
.maint-card::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--navy), var(--electric));
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.6s var(--ease);
}
.maint-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.maint-card:hover::before { transform: scaleX(1); }
.maint-card.featured {
  background: linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 100%);
  color: var(--white);
  border: none;
}
.maint-card.featured::before { background: var(--orange); transform: scaleX(1); }
.maint-card.addon { background: linear-gradient(160deg, var(--fog) 0%, var(--white) 100%); }

.maint-name {
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 28px;
  opacity: 0.6;
}
.maint-card.featured .maint-name { opacity: 1; color: var(--orange); }

.maint-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: 12px; }
.maint-price .amount {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.5rem; font-weight: 600; letter-spacing: -0.04em; line-height: 0.95;
}
.maint-price .amount.amount-sm { font-size: 1.75rem; }
.maint-price .period { font-size: 1rem; opacity: 0.6; }

.maint-summary { font-size: 0.9375rem; line-height: 1.6; margin-bottom: 28px; opacity: 0.78; }
.maint-list { list-style: none; }
.maint-list li {
  padding: 10px 0;
  font-size: 0.9375rem;
  border-top: 1px solid var(--line);
  display: flex; align-items: center; gap: 10px;
}
.maint-card.featured .maint-list li { border-top-color: rgba(255,255,255,0.1); }
.maint-list li::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--navy);
}
.maint-card.featured .maint-list li::before { background: var(--orange); }
</style>
