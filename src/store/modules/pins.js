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
  pinsListGlobal: state => {
    let arr = [];
    for (let element in state.pinsGlobal) {
      let hint = state.pinsGlobal[element];
      arr.push(hint.pin);
    }
    return arr;
  },
  pinsListUser: state => {
    let arr = [];
    for (let element in state.pinsUser) {
      let hint = state.pinsUser[element];
      arr.push(hint.pin);
    }
    return arr;
  },
  pinsListUserSaved: state => {
    let arr = [];
    for (let element in state.pinsUserSaved) {
      let hint = state.pinsUserSaved[element];
      arr.push(hint.pin);
    }
    return arr;
  }
};

const actions = {};

const mutations = {};

const modules = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules
};
