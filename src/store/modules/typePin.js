import search from "./search";
import pins from "./pins";
import {
  SET_TYPE_PIN_TITLE,
  UPDATE_SEARCHING,
  SET_ENTERED,
  REFRESH_RECOMENDATION_PINS,
  REFRESH_RECOMENDATION_HINTS
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
  changeTypePinTitle({ commit }, payload) {
    let title = payload.title;
    commit(SET_TYPE_PIN_TITLE, title);
    commit(`search/${UPDATE_SEARCHING}`, null);
    commit(`search/${SET_ENTERED}`, "");
    commit(`pins/${REFRESH_RECOMENDATION_PINS}`, []);
    commit(`pins/${REFRESH_RECOMENDATION_HINTS}`, []);
  }
};

const mutations = {
  [SET_TYPE_PIN_TITLE](state, payload) {
    state.typePinTitle = payload;
  }
};

const modules = {
  search,
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
