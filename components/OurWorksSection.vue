<script setup lang="ts">
interface Video {
  title: string
  description: string
  youtubeId: string
}

const videos: Video[] = [
  {
    title: 'Titolo video 1',
    description: 'Breve descrizione del lavoro',
    youtubeId: 'VIDEO_ID_1'
  },
  {
    title: 'Titolo video 2',
    description: 'Breve descrizione del lavoro',
    youtubeId: 'VIDEO_ID_2'
  },
  {
    title: 'Titolo video 3',
    description: 'Breve descrizione del lavoro',
    youtubeId: 'VIDEO_ID_3'
  }
]
</script>

<template>
  <section class="our-works" id="lavori">
    <div class="container">
      <div class="section-head" data-reveal>
        <div class="eyebrow">Portfolio</div>
        <h2>I nostri lavori.</h2>
        <p class="lead">
          Una selezione dei progetti video realizzati da DENANI S.R.L — dal video istituzionale ai contenuti social dinamici.
        </p>
      </div>

      <div class="videos-grid" data-reveal-stagger>
        <article v-for="video in videos" :key="video.youtubeId" class="video-card">
          <div class="video-embed">
            <iframe
              :src="`https://www.youtube.com/embed/${video.youtubeId}`"
              :title="video.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-info">
            <div class="video-title">{{ video.title }}</div>
            <div class="video-desc">{{ video.description }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.our-works { background: var(--fog); }

.videos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1320px;
  margin: 0 auto;
}

.video-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.5s var(--ease);
}
.video-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--navy-deep);
}
.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.video-info { padding: 20px 24px; }
.video-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--navy-deep);
  margin-bottom: 4px;
}
.video-desc { font-size: 0.875rem; color: var(--slate); line-height: 1.5; }

@media (max-width: 980px) {
  .videos-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .videos-grid { gap: 16px; }
}
</style>
