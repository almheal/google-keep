<template>
  <div id="app">
    <app-sprites />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import './assets/scss/index.scss'
import Empty from '@/layouts/Empty'
import Default from '@/layouts/Default'
import AppSprites from '@/components/AppSprites'

export default {
  name: 'App',
  components: {
    Empty,
    Default,
    AppSprites
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
}
</script>

<style lang="scss" scoped></style>
