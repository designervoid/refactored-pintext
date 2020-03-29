import {
  REFRESH_RECOMENDATION_PINS,
  SET_RECOMENDATION_PINS,
  REFRESH_RECOMENDATION_HINTS,
  SET_RECOMENDATION_HINTS
} from "../mutation-types";

const state = {
  pinsGlobal: [
    {
      id: 1,
      pin: "GLOBAL - gaming",
      counter: 0,
      title: "GLOBAL - some title about gaming",
      text: "GLOBAL - some text here about gaming",
      badges: [
        "global_game",
        "global_gamer",
        "global_games",
        "global_computer"
      ],
      bookmarked: false
    }
  ],
  pinsUser: [
    {
      id: 2,
      pin: "USER - gaming",
      counter: 0,
      title: "USER - some title about gaming",
      text: "USER - some text here about gaming",
      badges: ["user_game", "user_gamer", "user_games", "user_computer"],
      bookmarked: false
    }
  ],
  pinsUserSaved: [
    {
      id: 3,
      pin: "USER_SAVED - gaming",
      counter: 0,
      title: "USER_SAVED - some title about gaming",
      text: "USER_SAVED - some text here about gaming",
      badges: [
        "user_saved_game",
        "user_saved_gamer",
        "user_saved_games",
        "user_saved_computer"
      ],
      bookmarked: false
    }
  ],
  recommendedPins: [],
  recommendedHints: []
};

const getters = {
  hintsGlobal: state => {
    let arr = [];
    let pinsGlobal = state.pinsGlobal;
    for (let element in pinsGlobal) {
      let item = pinsGlobal[element];
      arr.push(item.badges);
    }
    let merged = arr.flat(1);
    return merged;
  },
  hintsUser: state => {
    let arr = [];
    let pinsUser = state.pinsUser;
    for (let element in pinsUser) {
      let item = pinsUser[element];
      arr.push(item.badges);
    }
    let merged = arr.flat(1);
    return merged;
  },
  hintsUserSaved: state => {
    let arr = [];
    let pinsUserSaved = state.pinsUserSaved;
    for (let element in pinsUserSaved) {
      let item = pinsUserSaved[element];
      arr.push(item.badges);
    }
    let merged = arr.flat(1);
    return merged;
  }
};

const actions = {
  // manualUpdateGettersGlobal({
  //   state,
  //   commit,
  //   getters,
  //   dispatch
  // }) {
  //   if (state.recommendedPinsGlobal.length === 0) {
  //     commit(REFRESH_RECOMENDATION_PINS_GLOBAL, [...getters.pinsListGlobal]);
  //     dispatch('pushRecomendedHintsGlobal');
  //   }
  // },
  checkTypePin({ rootState, state }) {
    let typePinTitle = rootState.typePin.typePinTitle;
    let typePins = rootState.typePin.typePins;

    if (typePinTitle === typePins[0].title) {
      return state.pinsGlobal;
    }
    if (typePinTitle === typePins[1].title) {
      return state.pinsUser;
    }
    if (typePinTitle === typePins[2].title) {
      return state.pinsUserSaved;
    }
  },
  async findElementInPins({ commit, dispatch }, payload) {
    let entered = payload.entered;
    commit(REFRESH_RECOMENDATION_PINS, []);
    let pins = await dispatch("checkTypePin");
    for (let element in pins) {
      let item = pins[element];

      if (item.badges.indexOf(entered) !== -1) {
        item.counter += 1;
        commit(SET_RECOMENDATION_PINS, item.pin);
      }
    }
  },
  async iterateRecomendedPins({ commit, dispatch }, payload) {
    let pin = payload.pin;
    let pins = await dispatch("checkTypePin");
    for (let element in pins) {
      let item = pins[element];
      if (item.pin === pin) {
        commit(SET_RECOMENDATION_HINTS, item);
      }
    }
  },
  async pushRecomendedHints({ state, dispatch, commit }) {
    commit(REFRESH_RECOMENDATION_HINTS, []);
    let recommendedPins = state.recommendedPins;
    // idk why async search start working with that line
    await dispatch("checkTypePin");
    for (let element in recommendedPins) {
      let recommendedPin = recommendedPins[element];
      dispatch("iterateRecomendedPins", {
        pin: recommendedPin
      });
    }
  },
  filterByPin({ commit, dispatch }, payload) {
    let pin = payload.pin;
    commit(REFRESH_RECOMENDATION_HINTS, []);
    dispatch("iterateRecomendedPins", {
      pin: pin
    });
  }
};

const mutations = {
  [REFRESH_RECOMENDATION_PINS](state, payload) {
    state.recommendedPins = payload;
  },
  [SET_RECOMENDATION_PINS](state, payload) {
    state.recommendedPins.push(payload);
  },
  [REFRESH_RECOMENDATION_HINTS](state, payload) {
    state.recommendedHints = payload;
  },
  [SET_RECOMENDATION_HINTS](state, payload) {
    state.recommendedHints.push(payload);
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
