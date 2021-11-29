import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      data: {
        name: undefined,
        email: undefined,
        phone: undefined,
        language: undefined,
        agreement: false
      },
      isValid: false
    }
  },
  mutations: {
    updateName(state, value) {
      state.form.data.name = value
    },
    updateEmail(state, value) {
      state.form.data.email = value
    },
    updatePhone(state, value) {
      state.form.data.phone = value
    },
    updateLanguage(state, value) {
      state.form.data.language = value
    },
    updateAgreement(state, value) {
      state.form.data.agreement = value
    },
    updateForm(state) {
      Object.values(state.form.data).every(Boolean)
      ? state.form.isValid = true
      : state.form.isValid = false
    }
  }
})
