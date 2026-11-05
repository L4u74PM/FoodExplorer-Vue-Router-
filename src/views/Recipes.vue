<script setup>
import RecipeCard from '@/components/RecipeCard.vue'
import { recipes } from '@/data/recipes'
</script>

<template>
  <section>
    <h1>Receptes</h1>
    <div class="grid">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
</style>
