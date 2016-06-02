<template>
  <div class="simple-label-container">
    <div>label: {{ label }}</div>
  </div>
</template>

<script>
export default {
  props: ['label'],
  components: {},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.simple-label-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>