import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home - Abdul-Hafiz Aderemi",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About - Abdul-Hafiz Aderemi",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
    meta: {
      title: "Projects - Abdul-Hafiz Aderemi",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: "Contact - Abdul-Hafiz Aderemi",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Dynamically change page title

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Default Title";
});

export default router;
