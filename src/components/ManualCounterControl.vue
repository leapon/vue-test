<template>
    <div class="counter">
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
</template>

<script>
import { increment, decrement } from '../vuex/actions';

export default {
  vuex: {
    getters: {
      count: state => state.count
    },
    actions: {
        increment,
        decrement
    }
  }
}
</script>

<style>
</style>
