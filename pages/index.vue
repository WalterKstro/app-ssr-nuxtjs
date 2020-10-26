<template>
  <div>
    <div v-if="stateSpiner" class="h-100 text-center">
      <b-spinner variant="primary" label="Spinning" />
    </div>
    <template v-else>
      <Banner />
      <Services />
      <Products />
      <b-container class="py-5">
        <b-row>
          <b-col cols="12">
            <h1 class="text-center mb-5">
              Lo que dicen nuestros clientes
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <VueSlickCarousel
              :arrows="true"
              :dots="true"
              :autoplay="true"
              :accessibility="true"
              :slides-to-show="3"
            >
              <div v-for="coment in comments" :key="coment.id" class="comment p-3">
                <h6 class="comment__name">
                  {{ coment.name }}
                </h6>
                <p class="comment__comment text-muted">
                  {{ coment.comment }}
                </p>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Products from '@/components/Products'
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: 'Index',
  components: {
    Banner,
    Services,
    Products,
    VueSlickCarousel
  },
  async fetch ({ store }) {
    /**
     * GET COLLECTIONS BEFORE RENDER THE INDEX
     */
    await store.dispatch('selectDocuments', { payload: 'servicios' })
    await store.dispatch('selectDocuments', { payload: 'productos' })
  },
  data () {
    return {
      numSlides: 9,
      comments: [
        { name: 'Yulianna De León', comment: 'Estoy muy satisfecha por la atención por línea que me brindaron. Mi gatita quedó espectacular, sin duda seré cliente frecuente. ¡Muchas gracias !' },
        { name: 'Cris Ruyán', comment: 'Excelente clínica siempre nos han atendido bien y tienen un trato especial con los animalitos' },
        { name: 'Ivi Celada', comment: 'El trato para las mascotas es excelente' },
        { name: 'Mayie Reyies', comment: 'El excelente servicio y cuidado hacia las moscotas.' },
        { name: 'Rociio Orellana', comment: 'La mejor de todas realmente, no cambio esta clínica por ninguna otra!!' }
      ]
    }
  },
  computed: {
    ...mapState(['stateSpiner'])
  }
}
</script>

<style lang="scss" scoped>
.comment{
  &__comment{
    font-size: 1rem;
  }
}

</style>
