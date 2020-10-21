<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerProducts />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BannerProducts from '@/components/BannerProducts'
export default {
  name: 'Productos',
  components: {
    BannerProducts
  }
}
</script>

<style scoped>

</style>
