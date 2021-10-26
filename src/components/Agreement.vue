<template>
  <div class="agreement">
    <Checkbox/>
    <span>Принимаю <a href="/">условия</a> использования</span>
  </div>
</template>

<script>
import Checkbox from './Checkbox.vue'

export default {
  name: 'Agreement',
  components: {
    Checkbox
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap');

.agreement {
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

span {
  margin-left: 8px;
}

a {
  text-decoration: none;
  color: #0880AE;
}
</style>