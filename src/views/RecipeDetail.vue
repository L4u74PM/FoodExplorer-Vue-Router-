<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { recipes } from '@/data/recipes'

const route = useRoute()
const recipe = computed(() => recipes.find((item) => String(item.id) === route.params.id))
</script>

<template>
  <article v-if="recipe" class="detail">
    <img :src="recipe.image" :alt="recipe.name" />
    <div>
      <h1>{{ recipe.name }}</h1>
      <p>{{ recipe.desc }}</p>
      <h2>Ingredientes</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
      <h2>Preparación</h2>
      <ol>
        <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
      </ol>
      <RouterLink to="/recipes">← Volver a recetas</RouterLink>
    </div>
  </article>
  <section v-else>
    <h1>Receta no encontrada</h1>
    <RouterLink to="/recipes">← Volver a recetas</RouterLink>
  </section>
</template>

<style scoped>
.detail {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 1.2fr);
  gap: 28px;
  align-items: start;
}

img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

h1 {
  margin-top: 0;
}

h2 {
  margin: 20px 0 8px;
  font-size: 1.1rem;
}

@media (max-width: 700px) {
  .detail {
    grid-template-columns: 1fr;
  }
}
</style>
