import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
        component: () => import("../pages/Index.vue"),
      },
      {
        name: "about",
        path: "about",
        component: () => import("../pages/About/AboutIndex.vue"),
      },
      {
        name: "aboutDetails",
        path: "about/:id",
        component: () =>
          import("../pages/About/AboutDetails/AboutDetailsIndex.vue"),
      },
      {
        name: "services",
        path: "services",
        component: () => import("../pages/Services/ServicesIndex.vue"),
      },
      {
        name: "gallery",
        path: "gallery",
        component: () => import("../pages/Gallery/GalleryIndex.vue"),
      },
      {
        name: "resources",
        path: "resources",
        component: () => import("../pages/Resources/ResourcesIndex.vue"),
      },
      {
        name: "contact",
        path: "contact",
        component: () => import("../pages/Contact/ContactIndex.vue"),
      },
      {
        name: "blog",
        path: "blog",
        component: () => import("../pages/Blog/BlogIndex.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
