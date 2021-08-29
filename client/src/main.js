import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Bootstrap from "./bootstrap";
import VueRouter from "vue-router";
import "./assets/tailwind.css";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueRouter);
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);
import moment from "moment";

Vue.prototype.moment = moment;
new Vue({
  vuetify,
  ...Bootstrap,
  render: (h) => h(App),
}).$mount("#app");
