<template>
  <div>
    <label
      :for="id"
    >
      {{ label }}
    </label>
    <input
      type="text"
      required
      v-bind:id="id"
      v-bind:placeholder="placeholder"
      @change="handler"
    />
    <span v-if="!zxc">
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      default: 'input',
    },
    label: {
      type: String,
      default: 'Label',
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    validation: String,
    handler: Function,
    zxc: [Boolean, String]
  },
  data: () => ({
    input: '',
    // message: '',
    isValid: false
  }),
  computed: {
    message() {
      if (!this.zxc) {
        return 'err message'
      } else {
        return ''
      }
    }
  },
  // watch: {
  //   input(value) {
  //     this.input = value
  //     this.validationHandler(value)
  //   }
  // },
  // methods: {
  //   validationHandler(value) {
  //     const name = /^[^0-9][a-zA-Z- ]{2,}$/
  //     const phone = /^\+?\d\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/
  //     const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  //     if (this.validation === 'name') {
  //       if (name.test(value) || value === '') {
  //         this.isValid = true
  //         this.$store.commit('nameHandler', value)
  //         console.log(this.$store.state.form.data.name)
  //       } else {
  //         this.message = 'Invalid name'
  //         this.isValid = false
  //       }
  //     } else if (this.validation === 'phone') {
  //       if (phone.test(value) || value === '') {
  //         this.isValid = true
  //       } else {
  //         this.message = 'Invalid phone'
  //         this.isValid = false
  //       }
  //     } else if (this.validation === 'email') {
  //       if (email.test(value) || value === '') {
  //         this.isValid = true
  //       } else {
  //         this.message = 'Invalid email'
  //         this.isValid = false
  //       }
  //     }
  //   }
  // }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap');

div {
  position: relative;
  height: 106px;
  min-width: 300px;
}

label {
  position: absolute;
  height: 21px;
  left: 0px;
  top: 0px;

  font-weight: 500;
  color: #756F86;
}

input {
  height: 52px;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 26px;

  padding-top: 16px;
  padding-bottom: 15px;
  padding-left: 16px;
  padding-right: 16px;

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;

  color: #2C2738;
}

input:focus {
  outline: none;
  border: 2px solid #0880AE;
}

input::placeholder {
  color: #7C9CBF;
}

span {
  position: absolute;
  min-width: 300px;
  height: 18px;
  left: 0px;
  bottom: 0px;

  font-size: 14px;
  line-height: 18px;
  color: #FF7171;
}

label, span, input, input::placeholder {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
}
</style>