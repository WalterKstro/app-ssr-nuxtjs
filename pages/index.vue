<template>
  <div>
    <div v-if="stateSpiner" class="h-100 text-center">
      <b-spinner variant="primary" label="Spinning" />
    </div>
    <template v-else>
      <Banner />
      <Services />
    </template>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import { mapState } from 'vuex'
export default {
  name: 'Index',
  components: {
    Banner,
    Services
  },
  async fetch ({ store }) {
    await store.dispatch('selectDocuments', { payload: 'servicios' })
  },
  computed: {
    ...mapState(['stateSpiner'])
  }
}
</script>

<style lang="scss" scoped>
</style>
