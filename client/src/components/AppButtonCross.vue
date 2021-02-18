<template>
  <button class="button__cross"></button>
</template>

<script>
export default {
  name: 'AppButtonCross',
}
</script>

<style lang="scss" scoped>
.button__cross {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.3s;
  &::before,
  &::after {
    content: '';
    width: 19px;
    height: 2px;
    background-color: #5f6368;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
    transition: 0.3s;
  }
}
</style>
