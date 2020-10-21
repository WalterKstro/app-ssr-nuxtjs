<template>
  <div>
    <div v-if="stateSpiner" class="h-100 text-center">
      <b-spinner variant="primary" label="Spinning" />
    </div>
    <template v-else>
      <Banner />
      <Services />
      <Products />
    </template>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Products from '@/components/Products'
import { mapState } from 'vuex'
export default {
  name: 'Index',
  components: {
    Banner,
    Services,
    Products
  },
  async fetch ({ store }) {
    /**
     * GET COLLECTIONS BEFORE RENDER THE INDEX
     */
    await store.dispatch('selectDocuments', { payload: 'servicios' })
    await store.dispatch('selectDocuments', { payload: 'productos' })
  },
  computed: {
    ...mapState(['stateSpiner'])
  }
}
</script>

<style lang="scss" scoped>
</style>
