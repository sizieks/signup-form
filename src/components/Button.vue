<template>
    <button
      :type="type"
      :disabled="!isValid"
    >
      {{ label }}
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    type: String,
    isValid: Boolean
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap');

button {
  height: 56px;
  width: 100%;
  min-width: 300px;
  border: none;
  background: #0880AE;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  color: #ebf4f8;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
}

button:hover {
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
}

button:active {
  border: 2px solid rgba(44, 39, 56, 0.86);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);
}

button:disabled {
  color: #2C2738;
  background: #DBE2EA;
  mix-blend-mode: normal;
  opacity: 0.5;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
}
</style>