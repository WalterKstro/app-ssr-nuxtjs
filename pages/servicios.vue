<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerServices />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" class="grid__card my-md-5">
          <b-card
            v-for="service in data"
            :key="service.id"
            :title="service.nombre"
            :img-src="service.imagen"
            img-alt="Foto del servicio"
            img-top
          >
            <b-card-text>
              {{ service.descripcion }}
            </b-card-text>
            <template v-slot:footer>
              <strong class="text-right d-block">{{ service.precio | price }}</strong>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BannerServices from '@/components/BannerServices'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Servicios',
  components: {
    BannerServices
  },
  filters: {
    price (value) {
      if (isNaN(value)) {
        return 'Precio variable'
      }
      return `Q ${value}`
    }
  },
  computed: {
    ...mapState('services', ['data'])
  },
  mounted () {
    this.getServicesFirestore()
  },
  methods: {
    ...mapActions('services', ['getServicesFirestore'])
  }
}
</script>

<style lang="scss" scoped>
.grid__card{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  gap: 2rem;
}
</style>
