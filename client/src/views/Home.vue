<template>
  <div class="home">
    {{ getUser }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters({
      getUser: 'user/getUser',
    }),
  },
}
</script>
