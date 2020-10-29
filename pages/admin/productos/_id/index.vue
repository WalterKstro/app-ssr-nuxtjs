<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-4">
          Editar producto
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" offset-md="2" md="8">
        <b-form @submit.prevent="udpateDocument(productSelected)">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group
                id="group_product"
                label="Nombre:"
                label-for="name_product"
              >
                <b-form-input
                  id="input_product"
                  v-model="productSelected.nombre"
                  type="text"
                  required
                  placeholder="Ingrese nombre del producto"
                />
              </b-form-group>

              <b-form-group id="group_price" label="Precio producto:" label-for="price_product">
                <b-form-input
                  id="input_price"
                  v-model="productSelected.precio"
                  type="text"
                  required
                  placeholder="Ingrese el precio del producto"
                />
              </b-form-group>

              <b-form-group id="group_description" label="Descripción producto:" label-for="description_producto">
                <b-form-textarea
                  id="input_description"
                  v-model="productSelected.descripcion"
                  type="text"
                  required
                  placeholder="Ingrese la descripción del producto"
                  rows="5"
                  max-rows="6"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-img
                :src="productSelected.imagen"
                thumbnail
                center
                class="w-75 mb-5"
                alt="Foto del producto"
              />
              <b-form-group id="group_url" label-for="url_product">
                <b-form-file
                  placeholder="Seleccione una imagen"
                  @change="changeImage($event)"
                />
                <small id="emailHelp" class="form-text text-muted">Tamaño de imagen 380x250</small>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button type="submit" variant="primary">
            Actualizar
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'UpdateProducts',
  layout: 'admin',
  data () {
    return {
      id: this.$route.params.id,
      productSelected: '',
      objUpdate: {
        id: this.$route.params.id,
        file: null,
        redirect: false,
        collection: 'productos'
      }
    }
  },
  computed: {
    ...mapState(['products'])
  },
  mounted () {
    this.getProductById()
  },
  methods: {
    ...mapActions(['uploadImage', 'udpateDocument']),
    changeImage (event) {
      this.objUpdate.file = event.target.files[0]
      this.uploadImage(this.objUpdate).then((data) => {
        this.productSelected.imagen = data
      })
    },
    /**
     * SEARCH ONE PRODUCT FORM STORAGE WITH ID
     */
    getProductById () {
      const index = this.products.findIndex(product => product.id === this.id)
      this.productSelected = { ...this.products[index] }
      this.productSelected.collection = 'productos'
    }
  }
}
</script>

<style scoped>

</style>
