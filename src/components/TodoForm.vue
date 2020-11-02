<template>
  <div>
    <input type="text" v-model="newToodoItem"/>
    <button @click="addNewTodoItem()">Submit</button>

  </div>
</template>

<script>


export default {
data () {
    return {
        newToodoItem: '',
    }
},
methods: {
    addNewTodoItem () {
        this.$store.dispatch('todoModule/addNewTodo',this.newToodoItem);
        this.newToodoItem='';
    }
}
};
</script>

<style></style>