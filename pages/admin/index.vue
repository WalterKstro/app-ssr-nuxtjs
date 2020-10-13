<template>
  <h1 v-if="currentAccount != null">
    {{ currentAccount.email }}
  </h1>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Admin',
  layout: 'admin',
  computed: {
    ...mapGetters({
      currentAccount: 'auth/getCurrentUser'
    })
  }
}
</script>

<style scoped>

</style>
