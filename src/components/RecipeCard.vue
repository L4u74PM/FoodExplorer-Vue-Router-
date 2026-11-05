<script setup>
defineProps({
  recipe: { type: Object, required: true },
})
</script>

<template>
  <article class="card">
    <img :src="recipe.image" :alt="recipe.name" />
    <div class="info">
      <h3>{{ recipe.name }}</h3>
      <p>{{ recipe.desc }}</p>
      <RouterLink class="button" :to="`/recipes/${recipe.id}`">Ver receta</RouterLink>
    </div>
  </article>
</template>

<style scoped>
.card {
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 10px rgb(44 90 160 / 12%);
}

img {
  display: block;
  width: 100%;
  height: 190px;
  object-fit: cover;
}

.info {
  padding: 16px;
}

h3 {
  margin: 0 0 8px;
}

p {
  margin: 0 0 16px;
}

.button {
  display: inline-block;
  border-radius: 6px;
  padding: 7px 12px;
  background: #c65d18;
  color: #fff;
  text-decoration: none;
}
</style>
