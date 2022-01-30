import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "../views/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "HOME",
        component: () => import("../views/home/index.vue"),
        meta: {
          level: 0,
          name: "首页",
        },
      },
      {
        path: "/label",
        name: "LABEL",
        component: () => import("../views/label/index.vue"),
        meta: {
          level: 1,
          name: "便签",
        },
      },
      {
        path: "/label/add",
        name: "LABEL-ADD",
        component: () => import("../views/label/add.vue"),
        meta: {
          level: 1,
          name: "添加便签",
        },
      },
      {
        path: "/label/edit/:id",
        name: "LABEL-EDIT",
        component: () => import("../views/label/add.vue"),
        meta: {
          level: 1,
          name: "编辑便签",
        },
      },
      {
        path: "/wether",
        name: "WETHER",
        component: () => import("../views/wether/index.vue"),
        meta: {
          level: 1,
          name: "查询天气",
        },
      },
      {
        path: "/google-map",
        name: "GOOGLE-MAP",
        component: () => import("../views/google-map/index.vue"),
        meta: {
          level: 1,
          name: "谷歌地图",
        },
      },
      {
        path: "/map",
        name: "MAP",
        component: () => import("../views/map/index.vue"),
        meta: {
          level: 1,
          name: "Maps",
        },
      },
      {
        path: "/theme",
        name: "THEME",
        component: () => import("../views/theme/index.vue"),
        meta: {
          level: 1,
          name: "Theme",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
