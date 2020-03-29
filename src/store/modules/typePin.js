import search from "./search";
import pins from "./pins";
import category from "./category";

import {
  SET_TYPE_PIN_TITLE,
  UPDATE_SEARCHING,
  SET_ENTERED,
  REFRESH_RECOMENDATION_PINS,
  REFRESH_RECOMENDATION_HINTS,
  SET_CATEGORY_TITLE
} from "../mutation-types";

const state = {
  typePinTitle: "All pins",
  typePins: [
    { title: "All pins" },
    { title: "Your pins" },
    { title: "Saved pins" }
  ]
};

const getters = {};

const actions = {
  changeTypePinTitle({ commit, dispatch }, payload) {
    let title = payload.title;
    commit(SET_TYPE_PIN_TITLE, title);
    commit(`search/${UPDATE_SEARCHING}`, null);
    commit(`search/${SET_ENTERED}`, "");
    commit(`pins/${REFRESH_RECOMENDATION_PINS}`, []);
    commit(`pins/${REFRESH_RECOMENDATION_HINTS}`, []);
    dispatch(`pins/manualUpdateGetter`);
    commit(`category/${SET_CATEGORY_TITLE}`, "Choose pin");
  }
};

const mutations = {
  [SET_TYPE_PIN_TITLE](state, payload) {
    state.typePinTitle = payload;
  }
};

const modules = {
  search,
  pins,
  category
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
};
