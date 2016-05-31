<template>
  <div>
    <p>{{ label }}</p>
    <multiselect
      :options="source",
      :selected.sync="multiValue",
      :multiple="true",
      :searchable="true",
      placeholder="Pick states",
      label="name",
      :close-on-select="true"
      key="name"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: ['label', 'values'],
  components: { Multiselect },
  data () {
    return {
      multiValue: null,
      source: this.$get('values')
    }
  }
}
</script>

<style scoped>
</style>