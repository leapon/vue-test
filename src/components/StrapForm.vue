<template>
  <p>{{ label }}</p>
  <hr/>
  <div>
    <h4>VueStrap Tabs</h4>
    <br/>
    <tooltip effect="scale" placement="bottom" content="Lorem ipsum dolor sit onsectetur">
      <button class="btn btn-default">
        tooltip on bottom
      </button>
    </tooltip>
  </div>
  <br/>
  <div>
    <h4>VueStrap Typeahead</h4>
    <br/>
    <typeahead
      :data="states"
      placeholder="enter us state">
    </typeahead>
  </div>
  <br/>
</template>

<script>
import { tooltip,typeahead } from 'vue-strap'

module.exports = {
  props: ['label', 'states'],
  components: { tooltip,typeahead },
  methods:{}
}
</script>

<style>
</style>
