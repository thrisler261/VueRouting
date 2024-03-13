import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharactersView from "../views/CharactersView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CharacterDetail from "../views/CharacterDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/character",
      name: "character",
      component: CharactersView,
    },
    {
        path: "/character/:id",
        name: "character-detail",
        component: CharacterDetail,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
