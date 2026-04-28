<template>
  <section class="partners-section">
    <div class="partners-inner">
      <p class="partners-label">Founding Partner</p>
      <div class="partners-track">
        <div class="partners-logos">
          <div
            v-for="(item, idx) in logosLoop"
            :key="idx"
            class="logo-item"
            :class="{ 'logo-item--dark': item.dark }"
            :aria-hidden="idx >= logos.length"
          >
            <img :src="item.src" :alt="idx < logos.length ? item.alt : ''" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const logos = [
  { src: '/loghi-trasparenti-4.png', alt: 'Fondazione Dalmine', dark: false },
  { src: '/Brembo_logo_(2022).svg.png', alt: 'Brembo', dark: false },
  { src: '/Tenaris_Logo.svg.png', alt: 'Tenaris', dark: false },
  { src: '/Logo_lovatoelectric.png', alt: 'Lovato Electric', dark: false }
]

// Duplicate the array for a smooth marquee animation; duplicates marked as aria-hidden
const logosLoop = [...logos, ...logos]
</script>

<style scoped>
.partners-section {
  background: var(--white);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 48px 32px;
  overflow: hidden;
}
.partners-inner {
  max-width: 1320px;
  margin: 0 auto;
}
.partners-label {
  text-align: center;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--slate-light);
  font-weight: 600;
  margin-bottom: 36px;
}
.partners-track {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}
.partners-logos {
  display: flex;
  align-items: center;
  gap: 72px;
  width: max-content;
  animation: marquee 32s linear infinite;
}
.partners-logos:hover {
  animation-play-state: paused;
}
.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 52px;
  padding: 0 8px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.logo-item--dark {
  background: var(--black);
  border-radius: 8px;
  padding: 10px 18px;
  height: 52px;
  box-sizing: border-box;
}
.logo-item:hover {
  opacity: 1;
}
.logo-item img {
  height: 100%;
  width: auto;
  max-width: 180px;
  object-fit: contain;
  display: block;
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 600px) {
  .logo-item { height: 40px; }
  .partners-logos { gap: 48px; }
}
</style>
