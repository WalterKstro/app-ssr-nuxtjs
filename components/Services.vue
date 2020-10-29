<template>
  <main>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="text-center m-5">
            Nuestros servicios
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="grid__card">
          <b-card
            v-for="service in getFilterDocumentsServices"
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
      <b-row>
        <b-col cols="12" class="text-center">
          <b-btn variant="primary" class="m-5" to="/servicios">
            Ver servicios
          </b-btn>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: 'Services',
  filters: {
    price (value) {
      if (isNaN(value)) {
        return 'Precio variable'
      }
      return `Q ${value}`
    }
  },
  computed: {
    getFilterDocumentsServices () {
      return this.$store.getters.getFilterDocuments('services')
    }
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
