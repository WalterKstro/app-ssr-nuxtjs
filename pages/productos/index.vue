<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerProducts />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" class="grid__card my-md-5">
          <b-card
            v-for="product in products"
            :key="product.id"
            :img-src="product.imagen"
            img-alt="Foto del servicio"
            img-top
          >
            <b-card-title class="h5">
              {{ product.nombre }}
            </b-card-title>
            <b-card-text class="text__description">
              {{ product.descripcion }}
            </b-card-text>
            <template v-slot:footer>
              <strong class="text-right d-block">{{ product.precio | price }}</strong>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BannerProducts from '@/components/BannerProducts'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Productos',
  components: {
    BannerProducts
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
    ...mapState(['products'])
  },
  mounted () {
    this.selectDocuments({ payload: 'productos' })
  },
  methods: {
    ...mapActions(['selectDocuments'])
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
