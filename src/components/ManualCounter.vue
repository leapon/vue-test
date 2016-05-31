<template>
    <div class="counter">
      Clicked: {{ count }} times
      <button v-on:click="increment">+</button>
      <button v-on:click="decrement">-</button>
    </div>
</template>

<script>
    import store from '../vuex/store'
    import { increment, decrement } from '../vuex/actions';
    
    export default {
        props: ['count'],
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
    /*
    .counter {
        border: 1px solid black;
        padding: 1rem 2rem;
        margin: 1rem;
        display: inline-block;
    }
    */
</style>
