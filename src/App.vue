<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="app-shell">

    <header class="site-header">
      <div class="brand-group">
        <img class="nav-image" src="/images/meal.jpg" alt="Mesa llena de comida" />
        <RouterLink class="brand" to="/">Food Explorer</RouterLink>
      </div>

      <nav aria-label="Navegación principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/recipes">Recetas</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
.app-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand {
  color: #263238;
  font-size: 1.4rem;
  font-weight: 700;
}

.site-header nav {
  display: flex;
  gap: 16px;
}

.site-header nav a,
.brand {
  text-decoration: none;
}

.site-header nav a {
  color: #374151;
}

.site-header nav a.router-link-active {
  color: #c65d18;
}
.nav-image {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
