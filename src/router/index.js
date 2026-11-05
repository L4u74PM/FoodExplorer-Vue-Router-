import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Recipes from '@/views/Recipes.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/recipes', name: 'recipes', component: Recipes },
    { path: '/recipes/:id', name: 'recipe-detail', component: RecipeDetail },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
})

export default router
