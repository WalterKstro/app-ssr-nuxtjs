<template>
  <aside>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="5000"
            controls
            indicators
            img-width="1024"
            img-height="340"
            fade
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              img-src="../assets/banner/banner_1.jpg"
            >
              <h1>Brindamos el mejor cuidado para sus mascotas</h1>
              <p class="h5">
                La mejor clínica de mascotas, en Chimaltenango, más de 3,000
                clientes felices
              </p>
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="../assets/banner/banner_2.jpg">
              <h1>Abre tu corazón y tu hogar</h1>
              <p class="h5">
                A una mascota que necesita ayuda, y te mostrara su agradecimiento por el resto de sus vidas
              </p>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </aside>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
