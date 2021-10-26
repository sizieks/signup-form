<template>
  <Title class="title"/>
  <Input id="name" class="input" label="Имя" placeholder="Введите ваше имя" validation="name"/>
  <Input id="email" class="input" label="Email" placeholder="Введите ваш email" validation="email"/>
  <Input id="phone" class="input" label="Номер телефона" placeholder="Введите номер телефона" validation="phone"/>
  <Select class="select" label="Язык" placeholder="Язык" :options="['Русский', 'Английский', 'Китайский', 'Испанский']"/>
  <Agreement class="agreement"/>
  <Button class="button" label="Зарегистрироваться"/>
  {{ $store.state[count] }}
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
  components: {
    Button,
    Input,
    Select,
    Title,
    Agreement
  },
  store: store,
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
