import Vue from "vue";
import Vuex from "vuex";

import search from "@/store/modules/search";
import typePin from "@/store/modules/typePin";
import pins from "@/store/modules/pins";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    typePin,
    pins
  }
});
