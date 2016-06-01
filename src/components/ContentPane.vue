<template>
  <p>{{ testmsg }}</p>
  <hr/>
  <div v-for="dataitem in dataitems">
    <p>{{ dataitem.id }} - {{ dataitem.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['dataitems'],
  data () {
    return {
      testmsg: 'test message'
    }
  },
  activate: function (done) {
    console.log('>>> activate ContentPane');
    done();
  },
  components: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
