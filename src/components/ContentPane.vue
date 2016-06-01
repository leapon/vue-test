<template>
    <p>{{ testmsg }}</p>
    <hr/>
    <p>{{ dataitems.length }}</p>
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
