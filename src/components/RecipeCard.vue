<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="recipe-card">
    <img :src="recipe.image" :alt="recipe.name" />
    <div class="content">
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.desc }}</p>
      <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }">
        Veure recepta
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.recipe-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
}

.recipe-card img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.content {
  padding: 18px;
}

.content h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.content p {
  margin: 0 0 16px;
  color: #4b5563;
  line-height: 1.5;
}

.content a {
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
