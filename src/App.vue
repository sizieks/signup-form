<template>
  <form
    class="signup-form"
  >
    <Title class="title"/>
    <Input
      id="name"
      class="input"
      label="Имя"
      placeholder="Введите ваше имя"
      message="Некорректное имя"
      :validation="nameHandler"
      :isValid="$store.state.form.data.name"
    />
    <Input
      id="email"
      class="input"
      label="Email"
      placeholder="Введите ваш email"
      message="Некорректный email"
      :validation="emailHandler"
      :isValid="$store.state.form.data.email"
    />
    <Input
      id="phone"
      class="input"
      label="Номер телефона"
      placeholder="Введите номер телефона"
      message="Некорректный номер телефона"
      :validation="phoneHandler"
      :isValid="$store.state.form.data.phone"
    />
    <Select
      class="select"
      label="Язык"
      placeholder="Язык"
      :options="['Русский', 'Английский', 'Китайский', 'Испанский']"
      @changeSelected="languageHandler"
    />
    <div
      class="agreement"
    >
      <Checkbox
        @changeCheck="agreementHandler"
      />
      <span>
        Принимаю <a href="/">условия</a> использования
      </span>
    </div>
    <Button
      class="button"
      label="Зарегистрироваться"
      type="submit"
      :isValid="$store.state.form.isValid"
    />
  </form>
</template>

<script>
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import Title from './components/Title.vue'
import Checkbox from './components/Checkbox.vue'
import store from '@/store'

export default {
  name: 'App',
  store: store,
  components: {
    Title,
    Input,
    Select,
    Checkbox,
    Button,
  },
  methods: {
    nameHandler(value) {
      const regex = /^[^0-9][a-zA-Zа-яА-Я- ]{2,}$/
      if (regex.test(value)) {
        this.$store.commit('updateName', value)
      } else {
        this.$store.commit('updateName', undefined)
      }
      this.formHandler()
    },
    emailHandler(value) {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (regex.test(value)) {
        this.$store.commit('updateEmail', value)
      } else {
        this.$store.commit('updateEmail', undefined)
      }
      this.formHandler()
    },
    phoneHandler(value) {
      const regex = /^\+?\d\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/
      if (regex.test(value)) {
        this.$store.commit('updatePhone', value)
      } else {
        this.$store.commit('updatePhone', undefined)
      }
      this.formHandler()
    },
    languageHandler(value) {
      this.$store.commit('updateLanguage', value)
      this.formHandler()
    },
    agreementHandler(value) {
      this.$store.commit('updateAgreement', value)
      this.formHandler()
    },
    formHandler() {
       this.$store.commit('updateForm')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 789px;
  min-width: 360px;
  max-width: 460px;
  box-sizing: border-box;
  padding: 40px 30px;
  margin: 30px auto;
  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
}

.title {
  margin-bottom: 58px;
}

.input {
  margin-bottom: 8px;
}

.select {
  margin-bottom: 34px;
}

.agreement {
  margin-bottom: 37px;
  display: flex;
  align-items: center;
  min-width: 300px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #756F86;
}

.agreement span {
  margin-left: 8px;
}

.agreement a {
  text-decoration: none;
  color: #0880AE;
}

.agreement a:focus {
  outline: none;
  border: 2px solid #0880AE;
}
</style>
