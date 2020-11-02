
export default {
    addNewTodo({ commit }, todoItem) {
      commit("NEW_TODO", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
    toggleTodoStatus({ commit }, todoItem) {
      commit("TOGGLE_TODO_STATUS", todoItem);
    },
  }