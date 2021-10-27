<template>
  <Title class="title"/>
  <Input
    id="name"
    class="input"
    label="Имя"
    placeholder="Введите ваше имя"
    validation="name"
    :handler="nameHandler"
    :zxc="this.$store.state.form.data.name"
  />
  <Input id="email" class="input" label="Email" placeholder="Введите ваш email" validation="email"/>
  <Input id="phone" class="input" label="Номер телефона" placeholder="Введите номер телефона" validation="phone"/>
  <Select class="select" label="Язык" placeholder="Язык" :options="['Русский', 'Английский', 'Китайский', 'Испанский']"/>
  <Agreement class="agreement"/>
  <Button class="button" label="Зарегистрироваться"/>
</template>

<script>
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import Title from './components/Title.vue'
import Agreement from './components/Agreement.vue'
import store from '@/store'

export default {
  name: 'App',
  store: store,
  components: {
    Button,
    Input,
    Select,
    Title,
    Agreement
  },
  data: () => ({
    isValidName: false
  }),
  methods: {
    nameHandler(e) {
      const value = e.target.value
      const name = /^[^0-9][a-zA-Z- ]{2,}$/
      if (name.test(value) || value === '') {
        this.isValidName = true
        console.log('Valid nameHandler by parent')
        console.log('Name from store', this.$store.state.form.data.name)
        this.$store.commit('nameHandler', value)
      } else {
        this.isValidName = false
        console.log('Invalid nameHandler by parent')
        // this.message = 'Некорректное имя'
        this.$store.commit('nameHandler', false)
        console.log('Name from store', this.$store.state.form.data.name)
      }
    },
    emailHandler(value) {
      const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (email.test(value) || value === '') {
        this.isValid = true
      } else {
        this.message = 'Некорректный email'
        this.isValid = false
      }
    },
    phoneHandler(value) {
      const phone = /^\+?\d\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/
      if (phone.test(value) || value === '') {
        this.isValid = true
      } else {
        this.message = 'Некорректный номер телефона'
        this.isValid = false
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 789px;
  width: 460px;

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
}
</style>
