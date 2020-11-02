import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state"

Vue.use(Vuex);

const todoModule = {
  namespaced:true,
  actions,
  state,
  getters,
  mutations


}

export default new Vuex.Store({

  modules: {
    todoModule,
  },
});
