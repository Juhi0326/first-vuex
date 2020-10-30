import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
    {
        title: 'todo item a',
        completed: false
    },
    {
        title: 'todo item b',
        completed: false
    },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});
