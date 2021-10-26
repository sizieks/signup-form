import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 124
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
