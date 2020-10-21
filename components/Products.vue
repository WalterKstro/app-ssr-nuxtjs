<template>
  <section class="wrapper__products">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="text-center m-5 text-light">
            Nuestros productos y accesorios
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="grid__card">
          <b-card
            v-for="product in getFilterDocumentsProducts"
            :key="product.id"
            :title="product.nombre"
            :img-src="product.imagen"
            img-alt="Foto del servicio"
            img-top
          >
            <b-card-text>
              {{ product.descripcion }}
            </b-card-text>
            <template v-slot:footer>
              <strong class="text-right d-block">{{ product.precio | price }}</strong>
            </template>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="text-center">
          <b-btn variant="primary" class="m-5" to="/productos">
            Ver productos
          </b-btn>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Products',
  filters: {
    price (value) {
      if (isNaN(value)) {
        return 'Precio variable'
      }
      return `Q ${value}`
    }
  },
  computed: {
    getFilterDocumentsProducts () {
      return this.$store.getters.getFilterDocuments('products')
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
.wrapper__products{
  background-image: url("../assets/media/fondo_products.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
