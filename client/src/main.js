import "./plugins/veevalidate"
import "./assets/tailwind.css";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Bootstrap from "./bootstrap";
import VueRouter from "vue-router";
import Vuex from 'vuex'
import VueApexCharts from "vue-apexcharts";
import moment from "moment";

Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

Vue.prototype.moment = moment;

new Vue({
  vuetify,
  ...Bootstrap,
  render: (h) => h(App),
}).$mount("#app");
