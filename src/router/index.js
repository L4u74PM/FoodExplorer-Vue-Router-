import { createRouter, createWebHistory } from 'vue-router'
import Recipes from '@/views/Recipes.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/recipes' },
    { path: '/recipes', name: 'recipes', component: Recipes },
    { path: '/recipes/:id', name: 'recipe-detail', component: RecipeDetail },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
})

export default router
