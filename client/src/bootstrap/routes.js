import VueRouter from "vue-router";
import modules from "@/modules";

const routes = [];

Object.keys(modules).map((module) => {
  modules[module].routes.forEach((route) => routes.push(route));
});

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
