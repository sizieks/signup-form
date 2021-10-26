<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>Регистрация</h1>
  <p>Уже есть аккаунт? <a href="/">Войти</a></p>
  <Input id="name" class="custom" label="Имя" placeholder="Введите ваше имя" validation="name"/>
  <Input id="email" class="custom" label="Email" placeholder="Введите ваш email" validation="email"/>
  <Input id="phone" class="custom" label="Номер телефона" placeholder="Введите номер телефона" validation="phone"/>
  <div class="agreement">
  <Checkbox class="custom" /> <span>Принимаю <a href="/">условия</a> использования</span>
  </div>
  <Select class="custom" label="Язык" placeholder="Язык" :options="['Русский', 'Английский', 'Китайский', 'Испанский']"/>

  <!-- <Select placeholder="Cars" :options="['Audi', 'Bwm', 'Citroen', 'Ford', 'Honda', 'Jaguar', 'Land Rover', 'Mercedes', 'Mini', 'Nissan', 'Toyota', 'Volvo']"/> -->
  <Button class="custom" label="Зарегистрироваться"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import Checkbox from './components/Checkbox.vue'
import Select from './components/Select.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Button,
    Input,
    Checkbox,
    Select,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap');


#app {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 1.13%;

  margin: 10px auto;
  height: 789px;
  width: 460px;

  background: #FFFFFF;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
}

a {
  color: #0880AE;
  text-decoration: none;
}

h1 {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 44.2px;

  color: #2C2738;

  margin: 0px 30px;
  margin-top: 40px;
}

p {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #2C2738;

  margin: 0px 30px;
  margin-top: 8px;
  margin-bottom: 50px;
}

span {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: #756F86;
}

.agreement {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.agreement .custom {
  margin-right: 8px;
}

.custom {
  margin: 8px 30px;
}

.custom Checkbox {
  margin-right: 10px;
}

.custom Button {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
