<template>
  <div tabindex="0"
    :class="{'select': true, 'is-active': isActive}"
    @blur="isActive = false"
    @click="selectHandler"
  >
    <span
      class="select-label"
    >
      {{ label }}
    </span>
    <div
      class="select-header"
    >
      <span
        v-if="isActive"
        class="select-current"
      >
        {{ placeholder }}
      </span>
      <span
        class="select-current"
        v-else-if="!selected"
        :style="{'color': '#7C9CBF'}"
      >
        {{ placeholder }}
      </span>
      <span
        class="select-current"
        v-else
      >
        {{ selected }}
      </span>
      <i
        class="select-icon material-icons"
      >
        expand_more
      </i>
    </div>
    <div
      class="select-body"
    >
      <div
        class="select-item"
        v-for="(option, index) in options"
        :key="option"
        @click="selectChoose(index)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    placeholder: {
      type: String,
      default: 'Dropdown'
    },
    options: {
      type: Array,
      default: () => ['Item', 'Item', 'Item', 'Item']
    }
  },
  data: () => ({
    isActive: false,
    selected: ''
  }),
  methods: {
    selectHandler() {
      this.isActive = !this.isActive
    },
    selectChoose(index) {
      this.selected = this.options[index]
      this.$emit('changeSelected', this.selected)
    }
  }
}

// <a @click="e => e.target.classList.toggle('active')"></a>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.select-label {
  position: absolute;
  width: 40px;
  height: 21px;
  left: 0px;
  top: 0px;
  color: #756F86;
  cursor: default;
}

.select {
  height: 80px;
  min-width: 300px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  position: relative;
  outline: none;
}

.select-header {
  height: 52px;
  min-width: 300px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 28px;
  bottom: 0%;
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}

.select.is-active .select-header {
  background: #FFFFFF;
  border: 2px solid #0880AE;
  box-sizing: border-box;
}

.select-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 11px;
  top: 11px;
  bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-icons {
  font-size: 24px;
  color: #0880AE;
}

.select-current {
  position: relative;
  height: 21px;
  left: 16px;
  top: 16px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #2C2738;
  cursor: default;
}

.select-body {
  height: 185px;
  min-width: 300px;
  margin-top: 4px;
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 80px;
  bottom: 0px;
  display: none; 
  z-index: 1;
  /* max-height: 132px; */
  /* overflow-y: auto; */
}

.select.is-active .select-body {
  display: block;
}

.select-item {
  cursor: pointer;
  line-height: 21px;
  padding-top: 12px;
  padding-bottom: 11px;
  padding-left: 16px;
}

.select-item:hover {
  background: #EBF4F8;
}
</style>