export default [
  {
    path: "/",
    name: "home",
    component: () => import(/*webpackChunckName: "home"*/ "../views/Home"),
    meta: {
      title: "Home",
      layout: "auth",
      requiresAuth: true,
    },
  },
];
