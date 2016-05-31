<template>
  <div>
    <p>{{ label }}</p>
    <p>values: {{ values.length }}</p>
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
    //console.log('>>> this:', this);
    //for (var p in this) {
    //  console.log('>>>', p);
    //}
    //console.log('>>> label:', this.$get('label'));
    //console.log('>>> values:', this.$get('values'));
    return {
      multiValue: null,
      source: this.$get('values')
    }
  }
}
</script>

<style scoped>
</style>