// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'ITS Fondazione Dalmine — Strategia Marketing Integrata 2026/27 | Denani Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Proposta strategica 16 mesi per ITS Fondazione Dalmine. Ecosistema meccatronico Bergamo con Tenaris, Brembo, Lovato. Coordinamento Denani Agency. Investimento totale stimato 44.500€.'
        },
        {
          name: 'keywords',
          content:
            'ITS Fondazione Dalmine, marketing integrato, Tenaris, Brembo, Lovato, ecosistema meccatronico, Bergamo, Denani Agency, KPI iscritti, formazione tecnica'
        },
        { name: 'author', content: 'Denani Agency' },
        { property: 'og:title', content: 'Strategia Marketing Integrata 2026/27 — ITS Fondazione Dalmine' },
        {
          property: 'og:description',
          content: 'Connettere Talento e Industria. Proposta a cura di Denani Agency in sinergia con Tenaris, Brembo, Lovato.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'it_IT' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  }
})
