export default{
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
  }