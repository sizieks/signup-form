import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      data: {
        name: false,
        email: null,
        phone: null,
        language: null,
        agreement: false
      },
      isValid: false
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    agreementHandler(state) {
      state.form.data.agreement = !state.form.data.agreement
    },
    nameHandler(state, value) {
      state.form.data.name = value
    }
  },
  actions: {
  },
  modules: {
  }
})
