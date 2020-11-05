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
            v-for="service in services"
            :key="service.id"
            :img-src="service.imagen"
            img-alt="Foto del servicio"
            img-top
          >
            <b-card-title class="h5">
              {{ service.nombre }}
            </b-card-title>
            <b-card-text class="text__description">
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
    ...mapState(['services'])
  },
  mounted () {
    this.selectDocuments({ payload: 'servicios' })
  },
  methods: {
    ...mapActions(['selectDocuments'])
  },
  head: {
    title: 'Vets & Pets | Servicios',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contamos con toda una variedad de servicios veterinarios para la salud de tu mascota'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.grid__card{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  gap: 2rem;
}
.text__description{font-size: 0.9rem;}
.card-body{padding: 0.7rem;}
.card-footer{padding: 0.3rem 0.7rem;}
</style>
