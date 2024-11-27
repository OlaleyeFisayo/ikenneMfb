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
        path: "home",
        component: () => import("../pages/Index.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
