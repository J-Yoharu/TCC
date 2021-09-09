export default [
  {
    path: "/info",
    name: "info",
    component: () => import(/*webpackChunckName: "home"*/ "../views/Info"),
    meta: {
      title: "Info",
      layout: "auth",
      requiresAuth: false,
    },
  },
];
