<template>
  <p>{{ label }}</p>
  <hr/>
  <div>
    <h4>Simple Tabs</h4>
    <tabset>
      <tab :header="'Tab 1'">
        This is Tab 1.
      </tab>
      <tab :header="'Tab 2'">
        This is Tab 2.
      </tab>
      <tab :header="'Tab 3'">
        This is Tab 3.
      </tab>
    </tabset>
    <br/>
  </div>
</template>

<script>
import { tabset, tab  } from 'vueboot'

module.exports = {
  props: ['label', 'value'],
  components: { tabset, tab },
  methods:{}
}
</script>

<style>
</style>
