<template>
  <div class="layout__default">
    <the-header />
    <div class="layout__body">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'

export default {
  name: 'Default',
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss" scoped>
.layout__default {
  background-color: #fff;
  min-height: 100vh;
}
</style>
