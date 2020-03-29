import {
  REFRESH_RECOMENDATION_PINS,
  SET_RECOMENDATION_PINS,
  REFRESH_RECOMENDATION_HINTS,
  SET_RECOMENDATION_HINTS,
  APPEND_TO_PINS_USER,
  APPEND_TO_PINS_USER_SAVED
} from "../mutation-types";

const state = {
  pinsGlobal: [
    {
      bookmarked: false,
      pin: "gaming",
      title: "gaming dependency",
      text: "what we gonna say about gaming dependency...",
      badges: ["game", "gamer", "games", "computer"],
      id: 1,
      counter: 0
    },
    {
      bookmarked: false,
      pin: "programming",
      title: "reactive frameworks",
      text: "new way to create apps",
      badges: ["programmer", "code", "coder", "javascript", "computer", "vue"],
      id: 3,
      counter: 0
    },
    {
      bookmarked: false,
      pin: "computers",
      title: "some title about computers",
      text: "some text here about computers",
      badges: ["computer", "network"],
      id: 3,
      counter: 0
    }
  ],
  pinsUser: [
    {
      pin: "USER - gaming",
      title: "USER - some title about gaming",
      text: "USER - some text here about gaming",
      badges: ["user_game", "user_gamer", "user_games", "user_computer"],
      id: 4,
      counter: 0
    }
  ],
  pinsUserSaved: [
    {
      pin: "USER_SAVED - gaming",
      title: "USER_SAVED - some title about gaming",
      text: "USER_SAVED - some text here about gaming",
      badges: [
        "user_saved_game",
        "user_saved_gamer",
        "user_saved_games",
        "user_saved_computer"
      ],
      id: 5,
      counter: 0
    }
  ],
  recommendedPins: [],
  recommendedHints: []
};

const getters = {
  pinsGlobal: state => {
    let arr = [];
    let pinsGlobal = state.pinsGlobal;
    for (let element in pinsGlobal) {
      let hint = pinsGlobal[element];
      arr.push(hint.pin);
    }
    return arr;
  },
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
  pinsUser: state => {
    let arr = [];
    let pinsUser = state.pinsUser;
    for (let element in pinsUser) {
      let hint = pinsUser[element];
      arr.push(hint.pin);
    }
    return arr;
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
  pinsUserSaved: state => {
    let arr = [];
    let pinsUserSaved = state.pinsUserSaved;
    for (let element in pinsUserSaved) {
      let hint = pinsUserSaved[element];
      arr.push(hint.pin);
    }
    return arr;
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
  },
  lastPinsUserId: state => {
    let pinsUser = state.pinsUser;
    let maximum = 0;

    pinsUser.map(function(obj) {
      if (obj.id > maximum) maximum = obj.id;
    });

    return maximum;
  },
  findPinById: state => id => {
    return state.pinsGlobal.find(pin => pin.id === id);
  }
};

const actions = {
  returnTypePinState({ rootState, state }) {
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
  returnTypePinGetter({ rootState, getters }) {
    let typePinTitle = rootState.typePin.typePinTitle;
    let typePins = rootState.typePin.typePins;

    if (typePinTitle === typePins[0].title) {
      let array = Array.from(new Set(getters.pinsGlobal));
      return [...array];
    }
    if (typePinTitle === typePins[1].title) {
      let array = Array.from(new Set(getters.pinsUser));
      return [...array];
    }
    if (typePinTitle === typePins[2].title) {
      let array = Array.from(new Set(getters.pinsUserSaved));
      return [...array];
    }
  },
  async manualUpdateGetter({ commit, dispatch }) {
    let getter = await dispatch("returnTypePinGetter");
    commit(REFRESH_RECOMENDATION_PINS, getter);
    dispatch("pushRecomendedHints");
  },
  async findElementInPins({ commit, dispatch }, payload) {
    let entered = payload.entered;
    commit(REFRESH_RECOMENDATION_PINS, []);
    let pins = await dispatch("returnTypePinState");
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
    let pins = await dispatch("returnTypePinState");
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
    await dispatch("returnTypePinState");
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
  },
  appendToPinsUser({ getters, commit, dispatch }, payload) {
    let maximum = getters.lastPinsUserId;
    maximum++;
    payload["id"] = maximum;
    payload["counter"] = 0;
    commit(APPEND_TO_PINS_USER, payload);
    dispatch("manualUpdateGetter");
  },
  changeBookmarked({ getters, commit }, payload) {
    let id = payload.id;
    let object = getters.findPinById(id);
    object.bookmarked = !object.bookmarked;
    commit(APPEND_TO_PINS_USER_SAVED, object);
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
  },
  [APPEND_TO_PINS_USER](state, payload) {
    state.pinsUser.unshift(payload);
  },
  [APPEND_TO_PINS_USER_SAVED](state, payload) {
    state.pinsUserSaved.unshift(payload);
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
