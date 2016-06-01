import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// app initial state
const state = {
  count: 0,
  filter: {}
}

// define possible mutations
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  SETFILTER (state, filter) {
    state.filter = filter
  }
}

// create the store
export default new Vuex.Store({
  state,
  mutations
})
