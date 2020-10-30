<template>
  <div>
    <input type="text" v-model="newToodoItem"/>
    <button>Submit</button>

  </div>
</template>

<script>


export default {
data () {
    return {
        newToodoItem: '',
    }
}
};
</script>

<style></style>