<template>
  <router-link class="logo" to="/">
    <img class="logo__img" src="../../assets/img/logo.png" alt="logo" />
    <span class="logo__name">Keep</span>
  </router-link>
</template>

<script>
export default {
  name: 'AppLogo',
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.logo__img {
  width: 40px;
  height: 40px;
}

.logo__name {
  display: inline-block;
  font-size: 22px;
  color: #5f6368;
  margin-left: 4px;
}
</style>
