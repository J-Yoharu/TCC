export default [
  {
    path: "/chat",
    name: "chat",
    component: () => import(/*webpackChunckName: "home"*/ "../views/Chat"),
    meta: {
      title: "Chat",
      layout: "auth",
      requiresAuth: true,
    },
  },
];
