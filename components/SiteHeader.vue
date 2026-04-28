<script setup lang="ts">
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const handleAnchor = (e: MouseEvent, id: string) => {
  const target = document.querySelector(id)
  if (target) {
    e.preventDefault()
    window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="header-inner">
      <a href="#" class="brand-mark" aria-label="ITS Fondazione Dalmine">
        <span class="logo-fondazione">
          <span class="blue">Fondazione</span><br />
          <span class="green">/Dalmine</span>
        </span>
        <span class="tagline">ITS Academy</span>
      </a>

      <nav class="nav-main" aria-label="Navigazione principale">
        <a href="#ecosistema" @click="handleAnchor($event, '#ecosistema')">Ecosistema</a>
        <a href="#campagna" @click="handleAnchor($event, '#campagna')">Campagna</a>
        <a href="#kpi" @click="handleAnchor($event, '#kpi')">KPI</a>
        <a href="#mantenimento" @click="handleAnchor($event, '#mantenimento')">Mantenimento</a>
        <a href="#scenario" @click="handleAnchor($event, '#scenario')">Scenario</a>
      </nav>

      <a href="#" class="quality-seal" aria-label="A cura di DENANI S.R.L — Sigillo di Qualità">
        <span class="seal-dot" aria-hidden="true"></span>
        <span class="seal-text">
          <small>A cura di</small>
          <img src="/DENANI-LOGO-WHITE.webp" alt="DENANI S.R.L" class="denani-logo" />
        </span>
      </a>

      <button class="hamburger" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav v-if="mobileMenuOpen" class="nav-mobile" aria-label="Navigazione mobile">
      <a href="#ecosistema" @click="handleAnchor($event, '#ecosistema')">Ecosistema</a>
      <a href="#campagna" @click="handleAnchor($event, '#campagna')">Campagna</a>
      <a href="#kpi" @click="handleAnchor($event, '#kpi')">KPI</a>
      <a href="#mantenimento" @click="handleAnchor($event, '#mantenimento')">Mantenimento</a>
      <a href="#scenario" @click="handleAnchor($event, '#scenario')">Scenario</a>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 18px 32px;
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  background: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid var(--line);
  transition: all 0.4s var(--ease);
}
.site-header.scrolled { padding: 12px 32px; background: rgba(255, 255, 255, 0.92); }
.header-inner { max-width: 1320px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 32px; }
.brand-mark { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.brand-mark .logo-fondazione {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1;
  letter-spacing: -0.02em;
}
.brand-mark .logo-fondazione .blue { color: var(--navy); }
.brand-mark .logo-fondazione .green { color: #1E8B3F; }
.brand-mark .tagline {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--slate-light);
  border-left: 1px solid var(--line);
  padding-left: 12px;
  font-weight: 500;
}
.nav-main { display: flex; gap: 36px; align-items: center; }
.nav-main a {
  font-size: 0.9375rem; color: var(--navy-deep); text-decoration: none;
  font-weight: 500; position: relative; transition: color 0.3s var(--ease);
}
.nav-main a::after {
  content: ''; position: absolute; bottom: -6px; left: 0; right: 0; height: 1px;
  background: var(--navy); transform: scaleX(0); transform-origin: right;
  transition: transform 0.4s var(--ease);
}
.nav-main a:hover { color: var(--navy); }
.nav-main a:hover::after { transform: scaleX(1); transform-origin: left; }

.quality-seal {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 14px 8px 10px;
  border-radius: 100px;
  background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
  color: var(--white);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: var(--shadow-md);
  transition: all 0.3s var(--ease);
  position: relative;
  overflow: hidden;
}
.denani-logo { height: 16px; width: auto; display: block; }
.seal-text img { height: 16px; width: auto; }
.quality-seal::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.18), transparent);
  transform: translateX(-100%);
  transition: transform 0.8s var(--ease);
}
.quality-seal:hover::before { transform: translateX(100%); }
.quality-seal:hover { transform: translateY(-1px); box-shadow: var(--shadow-lg); }
.seal-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 12px var(--orange); }
.seal-text { display: flex; flex-direction: row; align-items: center; gap: 6px; line-height: 1.1; }
.seal-text small { font-size: 0.625rem; opacity: 0.7; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
}
.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--navy-deep);
  border-radius: 1px;
  transition: all 0.3s var(--ease);
}
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.nav-mobile {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--line);
  flex-direction: column;
  padding: 16px 32px;
  gap: 16px;
}
.nav-mobile a {
  font-size: 1rem;
  color: var(--navy-deep);
  text-decoration: none;
  font-weight: 500;
}
.nav-mobile a:hover {
  color: var(--navy);
}

@media (max-width: 980px) {
  .nav-main { display: none; }
  .quality-seal { display: none; }
  .hamburger { display: flex; }
  .nav-mobile { display: flex; }
}
</style>
