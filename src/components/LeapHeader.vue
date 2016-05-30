<style scoped>
.leapon-header-container {
  padding: 8px;
  border: solid 1px #f9f9f9;
}
</style>

<template>
  <div class="leapon-header-container">
    header | <span class="blue">active: {{ active_tab }}</span>
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
