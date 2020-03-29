import { SET_CATEGORY_TITLE } from "../mutation-types";

const state = {
  categoryTitle: "Выберите пин"
};

const getters = {};

const actions = {
  changeCategoryTitle({ commit }, payload) {
    let title = payload.title;
    commit(SET_CATEGORY_TITLE, title);
  },
  refreshCategory({ commit }) {
    commit(SET_CATEGORY_TITLE, "Выберите пин");
  }
};

const mutations = {
  [SET_CATEGORY_TITLE](state, payload) {
    state.categoryTitle = payload;
  }
};

const modules = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
};
