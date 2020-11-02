import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";

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
  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },
    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
  },


}

export default new Vuex.Store({

  modules: {
    todoModule,
  },
});
