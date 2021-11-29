<template>
  <div tabindex="0"
    :class="{'checked': check}"
    @click="checkHandler"
    @keydown.enter="checkHandler"
  >
    <i
      :class="{'material-icons': true, 'checked': check}"
    >
      done
    </i>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data: () => ({
    check: false
  }),
  methods: {
    checkHandler() {
      this.check = !this.check
      this.$emit('changeCheck', this.check)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 28px;
  width: 28px;
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
}

div:hover {
  border: 2px solid #0880AE;
}

div:focus {
  outline: none;
  border: 2px solid #0880AE;
}

div.checked {
  border: 2px solid #0880AE;
}

.material-icons {
  display: none;
  font-size: 21px;
  color: #0880AE;
}

.material-icons.checked {
  display: block;
}
</style>