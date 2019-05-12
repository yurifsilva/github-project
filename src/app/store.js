import Vue from "vue";
import Vuex from "vuex";
import githubModule from "../github/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github: githubModule
  }
});
