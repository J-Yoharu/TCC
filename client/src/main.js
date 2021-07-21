import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Bootstrap from "./bootstrap";
import VueRouter from "vue-router";
import './assets/tailwind.css'
Vue.use(VueRouter);

new Vue({
  vuetify,
  ...Bootstrap,
  render: (h) => h(App),
}).$mount("#app");
