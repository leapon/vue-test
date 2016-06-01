<template>
    <div class="counter">
      count: {{ count }}
    </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      count: state => state.count
    },
    actions: {
    }
  }
}
</script>

<style>
</style>
