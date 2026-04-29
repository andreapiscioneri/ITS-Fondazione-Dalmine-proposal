<script setup lang="ts">
interface PlatformEntry {
  label: string
  budget: string
  views: string
}

interface Row {
  budget: string
  width: string
  result: string
  num: string
  platforms: PlatformEntry[]
  tag: string
  high?: boolean
}

const rows: Row[] = [
  {
    budget: '2.000 — 3.000€',
    width: '30%', result: 'iscritti', num: '15-25',
    platforms: [
      { label: 'Meta', budget: '2.000–3.000€', views: '~100.000–150.000' }
    ],
    tag: 'Entry Level'
  },
  {
    budget: '3.000 — 5.000€',
    width: '55%', result: 'iscritti', num: '≥30',
    platforms: [
      { label: 'Meta', budget: '~2.200€', views: '~110.000' },
      { label: 'Google', budget: '~1.800€', views: '~95.000' }
    ],
    tag: 'Target Ottimale', high: true
  },
  {
    budget: '5.000 — 7.000€',
    width: '85%', result: 'iscritti', num: '35-50',
    platforms: [
      { label: 'Meta', budget: '~2.100€', views: '~105.000' },
      { label: 'TikTok', budget: '~2.400€', views: '~170.000' },
      { label: 'Google', budget: '~1.500€', views: '~80.000' }
    ],
    tag: 'Performance Massima'
  }
]

const fillsAnimated = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          fillsAnimated.value = true
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="kpi" id="kpi">
    <div class="container">
      <div class="section-head" data-reveal>
        <div class="eyebrow">Focus Risultati · KPI Iscritti Attesi</div>
        <h2>Proiezioni basate su analisi di mercato.</h2>
        <p class="lead">
          Le stime di iscrizione sono state elaborate attraverso un'analisi di mercato generica relativa alla gestione di campagne nel settore education e formazione tecnica. I dati riflettono benchmark medi di settore e non costituiscono garanzia di risultato.
        </p>
      </div>

      <div class="kpi-dashboard" data-reveal>
        <div class="dashboard-head">
          <h3>Budget ADS → Conversioni Stimate</h3>
          <div class="live-indicator">
            <span class="dot-blue"></span>
            Non incluso, a cura del cliente.
          </div>
        </div>
        <table class="kpi-table">
          <thead>
            <tr>
              <th>Investimento ADS</th>
              <th>Distribuzione Budget</th>
              <th>Iscritti Attesi</th>
              <th>Visualizzazioni Stimate</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.budget">
              <td><span class="budget-cell">{{ row.budget }}</span></td>
              <td>
                <div class="platform-split">
                  <div v-for="p in row.platforms" :key="p.label" class="platform-row">
                    <span class="platform-label" :class="p.label.toLowerCase()">{{ p.label }}</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="iscritti-result">
                  <span class="num">{{ row.num }}</span> {{ row.result }}
                </div>
              </td>
              <td>
                <div class="platform-split">
                  <div v-for="p in row.platforms" :key="p.label" class="platform-row">
                    <span class="platform-label" :class="p.label.toLowerCase()">{{ p.label }}</span>
                    <span class="platform-val">{{ p.views }}</span>
                  </div>
                </div>
              </td>
              <td><span class="roi-tag" :class="{ high: row.high }">{{ row.tag }}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="kpi-disclaimer">
          <strong>Nota metodologica:</strong> le proiezioni sono basate su benchmark del settore education-technical Lombardia. Variabili: stagionalità, qualità del messaggio, geo-targeting (Bergamo, Brescia, Lecco, Milano Nord-Est).
        </div>
        <p class="kpi-iva">Importi al netto IVA</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.kpi { background: var(--fog); }
.kpi-dashboard {
  max-width: 1320px;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 48px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-md);
}
.dashboard-head {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
}
.dashboard-head h3 { color: var(--navy-deep); }
.live-indicator { display: flex; gap: 8px; align-items: center; font-size: 0.8125rem; color: var(--slate-light); }
.dot-blue { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--electric); }

.kpi-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 32px;
}
.kpi-table thead th {
  text-align: left;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 600;
  color: var(--slate);
  padding: 16px 24px;
  border-bottom: 1px solid var(--line);
}
.kpi-table tbody tr {
  border-bottom: 1px solid var(--line);
  transition: background 0.3s var(--ease);
}
.kpi-table tbody tr:hover { background: var(--fog); }
.kpi-table tbody tr:last-child { border-bottom: none; }
.kpi-table td { padding: 28px 24px; vertical-align: middle; }

.budget-cell {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--navy);
  letter-spacing: -0.02em;
}
.budget-bar {
  width: 100%;
  height: 6px;
  background: var(--steel);
  border-radius: 100px;
  overflow: hidden;
  position: relative;
  max-width: 240px;
}
.budget-bar .fill {
  position: absolute; top: 0; left: 0; bottom: 0;
  background: linear-gradient(90deg, var(--navy) 0%, var(--electric) 100%);
  border-radius: 100px;
  transition: width 1.4s var(--ease);
}
.iscritti-result {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.875rem;
  font-weight: 600;
  color: var(--navy-deep);
  letter-spacing: -0.03em;
}
.iscritti-result .num { color: var(--orange); }
.platform-split { display: flex; flex-direction: column; gap: 6px; }
.platform-row { display: flex; align-items: center; gap: 8px; }
.platform-label {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 2px 6px;
  border-radius: 4px;
  min-width: 44px;
  text-align: center;
}
.platform-label.meta { background: #e7f0ff; color: #1877f2; }
.platform-label.tiktok { background: #f0f0f0; color: #111; }
.platform-label.google { background: #fef3e2; color: #ea4335; }
.platform-val {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--navy);
}

.roi-tag {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(0,45,98,0.06);
  color: var(--navy);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.roi-tag.high { background: rgba(255,107,26,0.12); color: var(--orange); }

.kpi-disclaimer {
  margin-top: 32px;
  padding: 20px 24px;
  background: var(--fog);
  border-left: 3px solid var(--electric);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--slate);
  line-height: 1.6;
}
.kpi-disclaimer strong { color: var(--navy-deep); }
.kpi-iva {
  margin-top: 12px;
  font-size: 0.8125rem;
  color: var(--slate-light);
  letter-spacing: 0.04em;
  text-align: center;
}

@media (max-width: 980px) {
  .kpi-dashboard { padding: 20px 16px; }
  .kpi-table { display: block; }
  .kpi-table thead { display: none; }
  .kpi-table tbody { display: flex; flex-direction: column; gap: 16px; }
  .kpi-table tbody tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 4px 12px;
    padding: 16px;
    background: var(--fog);
    border-radius: var(--radius-lg);
    border-bottom: none !important;
  }
  .kpi-table td { padding: 4px 0; }
  .kpi-table td:nth-child(1) { grid-column: 1 / -1; }
  .kpi-table td:nth-child(3) { grid-column: 1 / -1; }
  .kpi-table td:nth-child(5) { grid-column: 1 / -1; }
  .budget-cell { font-size: 1.125rem; }
  .iscritti-result { font-size: 1.375rem; }
}
</style>
