import modules from "@/modules";
import Vuex from "vuex";
import Vue from "vue";

const states = {};

Object.keys(modules).forEach((module) => {
  if(modules[module].state){
    states[module] = {...modules[module].state}
  }
});
  
Vue.use(Vuex); //must be call before next line;

const store = new Vuex.Store({
  modules:states,
});

export default store;
