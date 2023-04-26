import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ProjectDetailPage from  "../pages/ProjectDetailPage.vue";
import Error404Page from  "../pages/Error404Page.vue";



const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass:'',
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },    
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: Error404Page,
    },
  ],
});
export{router};