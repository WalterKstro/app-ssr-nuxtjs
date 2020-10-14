<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center">
          Nuevo servicio
        </h1>
      </b-col>
    </b-row>
    <b-row class="h-100" align-v="center">
      <b-col cols="12" md="6" offset-md="3">
        <b-form @submit="saveFirestore(service)">
          <b-form-group
            id="group_service"
            label="Nombre:"
            label-for="name_service"
          >
            <b-form-input
              id="input_service"
              v-model="service.name"
              type="text"
              required
              placeholder="Ingrese nombre del servicio"
            />
          </b-form-group>

          <b-form-group id="group_price" label="Precio servicio:" label-for="price_service">
            <b-form-input
              id="input_price"
              v-model="service.price"
              type="text"
              required
              placeholder="Ingrese el precio del servicio"
            />
          </b-form-group>

          <b-form-group id="group_description" label="Descripción servicio:" label-for="description_service">
            <b-form-textarea
              id="input_description"
              v-model="service.description"
              type="text"
              required
              placeholder="Ingrese la descripción del servicio"
              rows="5"
              max-rows="6"
            />
          </b-form-group>

          <b-form-group id="group_url" label-for="url_service">
            <b-form-file
              placeholder="Seleccione una imagen"
              @change="uploadImage($event)"
            />
          </b-form-group>
          <b-button type="submit" variant="primary" :disabled="service.file ===null">
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
  name: 'NuevoService',
  layout: 'admin',
  data () {
    return {
      service: {
        name: '',
        price: '',
        description: '',
        file: null
      },
      urlTemp: ''
    }
  },
  methods: {
    ...mapActions({
      loadImage: 'services/setImageStorage',
      saveFirestore: 'services/setServiceFirestore'
    }),
    uploadImage (event) {
      this.service.file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(this.service.file)
      reader.onload = (e) => {
        this.urlTemp = e.target.result
      }
      this.loadImage(this.service.file).then((data) => {
        this.service.file = data
      })
    }
  }
}
</script>

<style scoped>

</style>
