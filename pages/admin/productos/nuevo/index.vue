<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-4">
          Nuevo producto
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" offset-md="3" md="6">
        <b-form @submit.prevent="uploadImage(objUpdate)">
          <b-form-group
            id="group_product"
            label="Nombre:"
            label-for="name_product"
          >
            <b-form-input
              id="input_product"
              v-model="product.nombre"
              type="text"
              required
              placeholder="Ingrese nombre del producto"
            />
          </b-form-group>

          <b-form-group id="group_price" label="Precio producto:" label-for="price_product">
            <b-form-input
              id="input_price"
              v-model="product.precio"
              type="text"
              required
              placeholder="Ingrese el precio del producto"
            />
          </b-form-group>

          <b-form-group id="group_description" label="Descripción producto:" label-for="description_product">
            <b-form-textarea
              id="input_description"
              v-model="product.descripcion"
              type="text"
              required
              placeholder="Ingrese la descripción del producto"
              rows="5"
              max-rows="6"
            />
          </b-form-group>

          <b-form-group id="group_url" label-for="url_product">
            <b-form-file
              placeholder="Seleccione una imagen"
              @change="setProduct($event)"
            />
          </b-form-group>
          <b-button type="submit" variant="primary" :disabled="objUpdate.file === null">
            Guardar
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Index',
  layout: 'admin',
  data () {
    return {
      product: {
        nombre: '',
        precio: '',
        descripcion: '',
        imagen: null,
        collection: 'productos'
      },
      objUpdate: {
        id: '',
        file: null,
        redirect: true,
        collection: 'productos'
      }
    }
  },
  methods: {
    ...mapActions(['uploadImage', 'createNew']),
    setProduct (event) {
      this.objUpdate.file = event.target.files[0]
      this.createNew(this.product)
        .then((id) => {
          this.objUpdate.id = id
        })
    }
  }
}
</script>

<style scoped>

</style>
