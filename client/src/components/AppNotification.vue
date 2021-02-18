<template>
  <div
    class="msg"
    :class="{ success: type === 'success', danger: type === 'danger' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppNotification',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.msg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px;
  animation: moveFromTop .7s linear;
  &.success {
    color: #155724;
    border-color: #c3e6cb;
    background-color: #d4edda;
  }
  &.danger {
    color: #721c24;
    border-color: #f5c6cb;
    background-color: #f8d7da;
  }
}

@keyframes moveFromTop {
  0% {
    top: -35px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
</style>
