import { UPDATE_SEARCHING, SET_ENTERED } from "../mutation-types";

const state = {
  searching: null,
  entered: ""
};

const getters = {};

const actions = {};

const mutations = {
  [UPDATE_SEARCHING](state, payload) {
    state.searching = payload;
  },
  [SET_ENTERED](state, payload) {
    state.entered = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
