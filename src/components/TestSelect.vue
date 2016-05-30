<template>
  <div>
    <multiselect :selected.sync="selected" :options="options"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    }
  }
}
</script>

<style scoped>
</style>