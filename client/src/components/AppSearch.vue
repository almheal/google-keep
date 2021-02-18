<template>
  <div class="search focus-active" :class="{ 'focus-active': isFocus }">
    <button class="search__button">
      <svg class="search__icon">
        <use xlink:href="#search"></use>
      </svg>
    </button>
    <input class="input__search" type="text" placeholder="Поиск" />
    <app-button-cross class="cross" />
  </div>
</template>

<script>
import AppButtonCross from '@/components/AppButtonCross'

export default {
  name: 'AppSearch',
  components: {
    AppButtonCross,
  },
  data: () => ({
    isFocus: false,
  }),
}
</script>

<style lang="scss" scoped>
.search {
  height: 46px;
  background-color: #f1f3f4;
  border-radius: 8px;
  max-width: 760px;
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  &.focus-active {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),
      0 1px 3px 1px rgba(65, 69, 73, 0.15);
  }
}

.input__search {
  flex: 1 1 auto;
  height: 46px;
  padding: 11px 0;
  font-size: 15px;
  background-color: transparent;
  color: black;
  font-weight: 400;
}

.cross {
  margin: 0 10px;
}

.search__button {
  position: relative;
  width: 40px;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(60, 64, 67, 0.08);
    opacity: 0;
    transition: 0.3s;
  }
  &:hover::before {
    opacity: 1;
    transition: 0.3s;
  }
}

.search__icon {
  width: 24px;
  height: 24px;
  fill: #5f6368;
}

::-webkit-input-placeholder {
  color: #5f6368;
  font-weight: 300;
}
::-moz-placeholder {
  color: #5f6368;
}
:-moz-placeholder {
  color: #5f6368;
}
:-ms-input-placeholder {
  color: #5f6368;
}
</style>
