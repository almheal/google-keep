<template>
  <button
    class="button"
    @click="clickOnBtn"
    type="submit"
    :disabled="activeDisabled"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: {
      type: String,
      default: '',
    },
    typeBtn: {
      type: String,
      default: '',
    },
    activeDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickOnBtn() {
      this.$emit('clickOnBtn')
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: block;
  padding: 18px 10px;
  width: 100%;
  background-color: #0880ae;
  border-radius: 6px;
  border: 2px solid transparent;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  transition: 0.3s;
  &:active {
    border: 2px solid #2c2738;
  }
  &:hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
    transition: 0.3s;
  }
}

button[disabled] {
  background: #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
  pointer-events: none;
  color: rgba(#2c2738, 0.5);
  user-select: none;
}
</style>
