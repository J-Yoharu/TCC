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
  {
    path: "/cadastro",
    name: "cadastro",
    component: () => import(/*webpackChunckName: "home"*/ "../views/Cadastro"),
    meta: {
      title: "Cadastro",
      layout: "app",
      requiresAuth: false,
    },
  },
];
