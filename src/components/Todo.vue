<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between">
      <span 
      :class="{completed: todo.completed}"
      @click="toggleTodoStatus(todo)"
      >{{ todo.title }} </span>
      <button @click="removeTodo(todo)">Delete</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["todo"],
  methods: {
      ...mapActions({
          removeTodo:'todoModule/deleteTodo',
          toggleTodoStatus:'todoModule/toggleTodoStatus'
      }),
  },
};
</script>

<style scope>
    .completed {
       text-decoration: line-through; 
    }
</style>
