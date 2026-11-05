<script setup>
</script>

<template>
  <section class="home">
    <div class="hero">
      <img
        class="hero-image"
        src="/images/vista-arriba-mesa-llena-comida_23-2149209229.jpg"
        alt="Mesa llenya de menjar"
      />
      <div class="hero-copy">
        <p class="eyebrow">Descobreix receptes</p>
        <h1>Explora sabors que et conviden a cuinar</h1>
        <p>
          Troba inspiració per a les teves pròximes creacions culinàries amb la nostra col·lecció de receptes delicioses i fàcils de seguir.
        </p>
        <RouterLink class="cta" to="/recipes">Veure receptes</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  display: grid;
  gap: 32px;
}

.hero {
  position: relative;
  min-height: 420px;
  border-radius: 24px;
  overflow: hidden;
  background: #111827;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 620px;
  min-height: 420px;
  padding: 40px 32px;
  color: #fff;
}

.eyebrow {
  margin: 0 0 10px;
  color: #fbbf24;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.1;
}

.hero-copy p {
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05rem;
}

.cta {
  display: inline-block;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 999px;
  background: #c65d18;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
</style>
