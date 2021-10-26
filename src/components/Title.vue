<template>
  <div>
    <h1>Регистрация</h1>
    <span>Уже есть аккаунт? <a href="/">Войти</a></span>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');

div {
  min-width: 300px;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #2C2738;
}

h1 {
  font-weight: 700;
  font-size: 34px;
  line-height: 44.2px;
  margin: 0px;
}

span {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: 8px;
}

a {
  text-decoration: none;
  color: #0880AE;
}
</style>