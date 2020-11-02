import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions"

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
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => {
        return todo.completed === true;
      }).length;
    },
    pendingTodos(state) {
      return state.todos.filter((todo) => {
        return todo.completed === false;
      }).length;
    },
  },
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
