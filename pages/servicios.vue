<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerServices />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BannerServices from '@/components/BannerServices'
export default {
  name: 'Servicios',
  components: {
    BannerServices
  }
}
</script>

<style lang="scss" scoped>

</style>
