export default [
  {
    path: "/feed",
    name: "feed",
    component: () => import(/*webpackChunckName: "home"*/ "../views/Feed"),
    meta: {
      title: "Feed",
      layout: "auth",
      requiresAuth: true,
    },
  },
];
