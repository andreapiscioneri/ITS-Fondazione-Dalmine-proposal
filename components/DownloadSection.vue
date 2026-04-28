<script setup lang="ts">
const onDownload = (e: MouseEvent) => {
  e.preventDefault()
  window.open('/Denani ITS Fondazione Dalmine proposal.pdf', '_blank')
}
</script>

<template>
  <section class="pre-footer" id="download">
    <div class="download-card" data-reveal>
      <div>
        <div class="eyebrow">Area Download</div>
        <h3>Scarica il Riepilogo Tecnico-Economico.</h3>
        <p>
          Versione PDF completa della proposta strategica 2026/27, con tabelle KPI, scenario economico e roadmap 16 mesi. Documento
          ottimizzato per condivisione con stakeholder ITS Fondazione Dalmine e Founding Partner.
        </p>
        <a href="#" class="btn btn-electric download-btn" @click="onDownload">
          Scarica PDF Proposta
          <span class="arrow">↓</span>
        </a>
        <div class="download-meta">
        </div>
      </div>
      <div class="download-visual" aria-hidden="true">
        <div class="icon">
          <img src="/DENANI-LOGO-WHITE.webp" alt="DENANI" class="denani-logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pre-footer {
  background: var(--fog);
  padding: 120px 32px;
}
.download-card {
  max-width: 1080px;
  margin: 0 auto;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: 64px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}
.download-card::before {
  content: ''; position: absolute;
  top: 0; right: 0;
  width: 240px; height: 240px;
  background: radial-gradient(circle, var(--electric) 0%, transparent 70%);
  opacity: 0.08; filter: blur(40px);
}
.download-card .eyebrow { margin-bottom: 16px; }
.download-card h3 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: 16px;
  color: var(--navy-deep);
}
.download-card p { font-size: 1rem; color: var(--slate); margin-bottom: 32px; }
.download-btn { margin-bottom: 24px; }
.download-meta {
  display: flex; gap: 24px;
  font-size: 0.8125rem;
  color: var(--slate-light);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 500;
}
.download-visual {
  aspect-ratio: 1;
  background: linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 60%, var(--electric) 100%);
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  color: var(--white);
}
.download-visual::before {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
.download-visual .icon {
  width: 96px; height: 96px;
  border: 1.5px solid rgba(255,255,255,0.4);
  border-radius: 24px;
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,0.06);
  position: relative;
  z-index: 1;
  transition: transform 0.4s var(--ease);
}
.download-card:hover .download-visual .icon { transform: scale(1.08) rotate(-2deg); }
.download-visual .icon svg { width: 40px; height: 40px; }
.download-visual .icon .denani-logo { width: 56px; height: auto; display: block; }
.download-visual .filename {
  position: absolute;
  bottom: 24px; left: 24px; right: 24px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.55);
  font-family: 'Space Grotesk', monospace;
  z-index: 1;
}

@media (max-width: 980px) {
  .download-card { grid-template-columns: 1fr; padding: 36px; }
  .download-visual { aspect-ratio: 16/9; }
}
</style>
