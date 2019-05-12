import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  Users: []
};

export default {
  name: "github",
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
