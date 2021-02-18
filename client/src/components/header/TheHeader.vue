<template>
  <header class="header">
    <div class="header__inner">
      <div class="header-left">
        <button class="button__menu">
          <span class="menu__line"></span>
        </button>
        <app-logo />
      </div>
      <div class="header-center">
        <app-search />
      </div>
      <div class="header-right"></div>
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/header/AppLogo'
import AppSearch from '@/components/AppSearch'

export default {
  name: 'TheHeader',
  components: {
    AppLogo,
    AppSearch,
  },
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: inset 0 -1px 0 0 #dadce0;
  background-color: #fff;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

.header-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  min-width: 232px;
}

.header-center {
  flex: 1 0 auto;
}

.header-right {
  height: 46px;
  flex: 1 0 auto;
}

.button__menu {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: transparent;
  transition: 0.3s;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
    transition: 0.3s;
  }
}

.menu__line {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 2px;
  background-color: #5f6368;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #5f6368;
  }
  &::before {
    top: -5px;
  }
  &::after {
    bottom: -5px;
  }
}
</style>
