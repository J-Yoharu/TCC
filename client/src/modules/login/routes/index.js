export default [
  {
    path: "/login",
    name: "login",
    component: () => import(/*webpackChunckName: "home"*/ "../views/Login"),
    meta: {
      title: "login",
      layout: "app",
      requiresAuth: false,
    },
  },
];
