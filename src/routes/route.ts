import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../pages/Index.vue";
import AboutIndex from "../pages/About/AboutIndex.vue";
import AboutDetailsIndex from "../pages/About/AboutDetails/AboutDetailsIndex.vue";
import ServicesIndex from "../pages/Services/ServicesIndex.vue";
import BlogIndex from "../pages/Blog/BlogIndex.vue";
import GalleryIndex from "../pages/Gallery/GalleryIndex.vue";
import ContactIndex from "../pages/Contact/ContactIndex.vue";
import ResourcesIndex from "../pages/Resources/ResourcesIndex.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    redirect: {
      name: "home",
    },
    children: [
      {
        name: "home",
        path: "",
        component: Index,
      },
      {
        name: "about",
        path: "about",
        component: AboutIndex,
      },
      {
        name: "aboutDetails",
        path: "about/:id",
        component: AboutDetailsIndex,
      },
      {
        name: "services",
        path: "services",
        component: ServicesIndex,
      },
      {
        name: "gallery",
        path: "gallery",
        component: GalleryIndex,
      },
      {
        name: "resources",
        path: "resources",
        component: ResourcesIndex,
      },
      {
        name: "contact",
        path: "contact",
        component: ContactIndex,
      },
      {
        name: "blog",
        path: "blog",
        component: BlogIndex,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
        return savedPosition
    } else {
        return { top: 0, behavior: 'smooth' }
    }
  }
});
