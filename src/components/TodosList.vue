<template>
  <div>
    <Todo v-for="(todo, index) in $store.state.todos" :key="index" />
  </div>
</template>

<script>
import Todo from './Todo'

export default {
    components: {
        Todo
    },
};
</script>

<style></style>
