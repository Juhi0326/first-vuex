import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

const todoModule = {
  namespaced:true,
  actions,
  state: {
    todos: [
      {
        title: "todo item a",
        completed: false,
      },
      {
        title: "todo item b",
        completed: false,
      },
    ],
  },
  getters,
  mutations


}

export default new Vuex.Store({

  modules: {
    todoModule,
  },
});
