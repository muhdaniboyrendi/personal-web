import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/projects/:id",
      name: "project-details",
      component: () => import("../components/Projects/ProjectDetail.vue"),
      props: true,
      meta: { title: "Muhdani Boyrendi Erlan Azhari | Projects" },
    },
    {
      path: "/equipments",
      name: "equipments",
      component: () => import("../views/EquipmentsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router
