<style scoped>
.container {
  border: 1px solid #00f;
}
.red {
  color: #f00;
}
</style>

<template>
  <div class="container">
    <h2 class="blue">{{ active_tab }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active_tab: 'service'
    }
  }
}
</script>
