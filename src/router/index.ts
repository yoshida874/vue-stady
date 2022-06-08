import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/Todo.vue";
import BeforeTableView from "../views/BeforeTable.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todo",
      component: TodoView,
    },
    {
      path: "/before",
      name: "beforeTable",
      component: BeforeTableView,
    },
    // {
    //   path: "/todo",
    //   name: "todo",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/Todo.vue"),
    // },
  ],
});

export default router;
