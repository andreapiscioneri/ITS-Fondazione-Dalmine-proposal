<script setup lang="ts">
interface Tier {
  name: string
  contenutiMensili: string
  gestione: string
  costoMensile: string
  costoAnnuo: string
  featured?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Base',
    contenutiMensili: '1 video (30/45 sec) + 2 post',
    gestione: 'Base',
    costoMensile: '1.200 €',
    costoAnnuo: '14.400 €'
  },
  {
    name: 'Medio',
    featured: true,
    contenutiMensili: '2 video (30/45 sec) + 1 attività',
    gestione: 'Completa',
    costoMensile: '2.000 €',
    costoAnnuo: '24.000 €'
  },
  {
    name: 'Pro',
    contenutiMensili: '3 video avanzati (45/60 sec)',
    gestione: 'Multi-canale',
    costoMensile: '2.800 €',
    costoAnnuo: '33.600 €'
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
            Servizio di gestione marketing con pubblicazioni organiche calendarizzate e sponsorizzazioni. Budget ADS incrementato nei primi 4 mesi di lancio, poi solo mantenimento. Tre livelli per consolidare il posizionamento del polo d'innovazione ETS Fondazione Dalmine nel Nord Italia.
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
          :class="{ featured: tier.featured }"
        >
          <div class="maint-name">{{ tier.name }}</div>
          <div class="maint-price">
            <span class="amount">{{ tier.costoMensile }}</span>
            <span class="period">/mese</span>
          </div>
          <ul class="maint-list">
            <li>
              <span class="maint-label">Contenuti mensili</span>
              <span>{{ tier.contenutiMensili }}</span>
            </li>
            <li>
              <span class="maint-label">Gestione campagna</span>
              <span>{{ tier.gestione }}</span>
            </li>
            <li>
              <span class="maint-label">Costo annuo</span>
              <span>{{ tier.costoAnnuo }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>

    <div class="container">
      <div class="video-notes" data-reveal>
        <div class="video-notes-title">Nota sulla realizzazione dei video</div>
        <ul>
          <li>
            <strong>Pacchetto base:</strong> video puliti, diretti e funzionali. Prevedono riprese standard nei laboratori e un montaggio classico con musica di sottofondo.
          </li>
          <li>
            <strong>Pacchetto Medio:</strong> i video diventano più ritmati e dinamici, pensati apposta per catturare l'attenzione sui social. Aggiungiamo animazioni, parole chiave in sovraimpressione che compaiono a schermo e transizioni moderne.
          </li>
          <li>
            <strong>Pacchetto Pro:</strong> la massima cura del dettaglio. Questo livello ci permette di investire più tempo nella lavorazione.
          </li>
        </ul>
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
.maint-price .period { font-size: 1rem; opacity: 0.6; }

.maint-list { list-style: none; margin-top: 24px; }
.maint-list li {
  padding: 12px 0;
  font-size: 0.9375rem;
  border-top: 1px solid var(--line);
  display: flex; flex-direction: column; gap: 2px;
}
.maint-card.featured .maint-list li { border-top-color: rgba(255,255,255,0.1); }
.maint-label {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  opacity: 0.5;
}

.video-notes {
  margin: 48px auto 0;
  padding: 32px 36px;
  background: var(--fog);
  border-radius: var(--radius-lg);
  border-left: 3px solid var(--navy);
}
.video-notes-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 16px;
}
.video-notes ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.video-notes li { font-size: 0.9375rem; color: var(--slate); line-height: 1.6; }
.video-notes li strong { color: var(--navy-deep); }
</style>
