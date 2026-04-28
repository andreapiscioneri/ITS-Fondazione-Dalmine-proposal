<script setup lang="ts">
const { init: initReveal } = useReveal()
const { apply: applyMagnetic } = useMagnetic()

// JSON-LD structured data per SEO/GEO/AIO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Strategia Marketing Integrata 2026/27 ITS Fondazione Dalmine',
        provider: {
          '@type': 'Organization',
          name: 'DENANI S.R.L',
          url: 'https://denani.odoo.com/'
        },
        areaServed: {
          '@type': 'Place',
          name: 'Bergamo, Lombardia, Italia'
        },
        serviceType: 'Marketing Strategico, SEO, GEO, AIO, Social Media Management',
        offers: [
          { '@type': 'Offer', name: 'Campagna Promozionale Base', price: '6000', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Campagna Promozionale Medio', price: '9000', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Campagna Promozionale Pro', price: '12000', priceCurrency: 'EUR' }
        ],
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'ITS Fondazione Dalmine'
        }
      })
    }
  ]
})

onMounted(() => {
  // Avvia osservatori e interazioni dopo il render
  nextTick(() => {
    initReveal()
    applyMagnetic()
  })
})
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <HeroSection />
      <PartnersSection />
      <EcosystemSection />
      <PricingSection />
      <KpiSection />
      <MaintenanceSection />
      <ScenarioSection />
      <DownloadSection />
    </main>
    <SiteFooter />
  </div>
</template>
