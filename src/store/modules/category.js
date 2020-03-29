import pins from "./pins";
import { SET_CATEGORY_TITLE } from "../mutation-types";

const state = {
  categoryTitle: "Choose pin"
};

const getters = {};

const actions = {
  changeCategoryTitle({ commit, dispatch }, payload) {
    let title = payload.title;
    commit(SET_CATEGORY_TITLE, title);
    dispatch("pins/filterByPin", {
      pin: title
    });
  },
  refreshCategory({ commit, dispatch }) {
    commit(SET_CATEGORY_TITLE, "Choose pin");
    dispatch("pins/pushRecomendedHints");
  }
};

const mutations = {
  [SET_CATEGORY_TITLE](state, payload) {
    state.categoryTitle = payload;
  }
};

const modules = {
  pins
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
};
