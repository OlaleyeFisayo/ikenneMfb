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
        name: "contact",
        path: "contact",
        component: () => import("../pages/Contact/ContactIndex.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
