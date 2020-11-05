<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <span />
      </b-col>
    </b-row>
  </b-container>
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
