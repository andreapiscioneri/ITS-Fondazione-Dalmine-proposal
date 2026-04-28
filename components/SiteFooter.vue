<script setup lang="ts">
const cols = [
  {
    title: 'Proposta',
    links: [
      { label: 'Ecosistema', href: '#ecosistema' },
      { label: 'Campagna', href: '#campagna' },
      { label: 'KPI', href: '#kpi' },
      { label: 'Mantenimento', href: '#mantenimento' }
    ]
  },
  {
    title: 'Founding Partner',
    links: [
      { label: 'Tenaris', href: '#' },
      { label: 'Brembo', href: '#' },
      { label: 'Lovato Electric', href: '#' },
      { label: 'ITS Fondazione Dalmine', href: '#' }
    ]
  },
  {
    title: 'Contatti',
    links: [
      { label: 'hello@denani.it', href: 'mailto:hello@denani.it' },
      { label: 'Bergamo, Italia', href: '#' },
      { label: 'denani.it', href: '#' }
    ]
  }
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="signature">Denani Agency</div>
          <p>
            Strategia e coordinamento a cura di Denani Agency. Marketing strategico, branding e comunicazione per l'industria e la formazione
            tecnica d'eccellenza.
          </p>
        </div>
        <div v-for="col in cols" :key="col.title" class="footer-col">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Denani Agency · Strategia per ITS Fondazione Dalmine</div>
        <div class="social-row">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--black);
  color: rgba(255,255,255,0.6);
  padding: 80px 32px 40px;
}
.footer-inner { max-width: 1320px; margin: 0 auto; }
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 56px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand .signature {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}
.footer-brand p { font-size: 0.9375rem; color: rgba(255,255,255,0.5); max-width: 38ch; }
.footer-col h4 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--white);
  font-weight: 600;
  margin-bottom: 20px;
}
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 12px; }
.footer-col a {
  color: rgba(255,255,255,0.55);
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.3s var(--ease);
}
.footer-col a:hover { color: var(--white); }
.footer-bottom {
  padding-top: 32px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 20px;
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.45);
}
.social-row { display: flex; gap: 12px; }
.social-row a {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  transition: all 0.3s var(--ease);
}
.social-row a:hover { background: var(--white); color: var(--black); border-color: var(--white); }
.social-row svg { width: 16px; height: 16px; }

@media (max-width: 980px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
