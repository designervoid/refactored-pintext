import { SET_TYPE_PIN_TITLE } from "../mutation-types";

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
  }
};

const mutations = {
  [SET_TYPE_PIN_TITLE](state, payload) {
    state.typePinTitle = payload;
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
