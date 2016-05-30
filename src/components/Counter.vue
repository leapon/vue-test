<template>
  <div class="counter">
    <p>I am a Counter Component</p>
    <p>Current count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return { count: 0 }
  },

  ready () {
    this.handle = setInterval(() => {
      this.count++
    }, 1000)
  },

  destroyed () {
    clearInterval(this.handle)
  }
}
</script>

<style>
.counter {
  padding: 10px;
  border: solid 1px #f9f9f9;
}
</style>
