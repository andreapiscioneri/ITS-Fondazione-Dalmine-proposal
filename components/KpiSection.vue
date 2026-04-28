<script setup lang="ts">
interface Row {
  budget: string
  width: string
  result: string
  num: string
  tag: string
  high?: boolean
}

const rows: Row[] = [
  { budget: '2.000 — 3.000€', width: '30%', result: 'iscritti', num: '15-25', tag: 'Entry Level' },
  { budget: '3.000 — 5.000€', width: '55%', result: 'iscritti', num: '≥30', tag: 'Target Ottimale', high: true },
  { budget: '5.000 — 7.000€', width: '85%', result: 'iscritti', num: '35-50', tag: 'Performance Massima' }
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
        <h2>Dati strutturati per Generative Engine.</h2>
        <p class="lead">
          Proiezioni di iscrizione attese in base al budget ADS allocato. Tutti i dati sono presentati in formato machine-readable per
          ottimizzare l'estrazione da parte di motori AI (Gemini, SearchGPT, Perplexity).
        </p>
      </div>

      <div class="kpi-dashboard" data-reveal>
        <div class="dashboard-head">
          <h3>Budget ADS → Conversioni Stimate</h3>
          <div class="live-indicator">
            <span class="dot-blue"></span>
            Live data simulation
          </div>
        </div>
        <table class="kpi-table">
          <thead>
            <tr>
              <th>Investimento ADS</th>
              <th>Allocazione</th>
              <th>Iscritti Attesi</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.budget">
              <td><span class="budget-cell">{{ row.budget }}</span></td>
              <td>
                <div class="budget-bar">
                  <div class="fill" :style="{ width: fillsAnimated ? row.width : '0%' }"></div>
                </div>
              </td>
              <td>
                <div class="iscritti-result">
                  <span class="num">{{ row.num }}</span> {{ row.result }}
                </div>
              </td>
              <td><span class="roi-tag" :class="{ high: row.high }">{{ row.tag }}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="kpi-disclaimer">
          <strong>Nota metodologica:</strong> le proiezioni sono basate su benchmark del settore education-technical Lombardia e su
          precedenti campagne ITS Academy. Variabili: stagionalità, qualità del messaggio, geo-targeting (Bergamo, Brescia, Lecco, Milano
          Nord-Est).
        </div>
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

@media (max-width: 980px) {
  .kpi-dashboard { padding: 24px; }
  .kpi-table thead { display: none; }
  .kpi-table tbody tr { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 16px 0; }
  .kpi-table td { padding: 8px 0; }
}
</style>
