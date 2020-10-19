<template>
  <div>
    <Banner />
    <Services />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Services from '@/components/Services'
export default {
  name: 'Index',
  components: {
    Banner,
    Services
  },
  async fetch ({ store }) {
    await store.dispatch('services/getServicesFirestore')
  }
}
</script>

<style lang="scss" scoped>
</style>
