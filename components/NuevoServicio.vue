<template>
  <section>
    <b-row>
      <b-col cols="12">
        <b-form @submit.prevent="uploadImage(objUpdate)">
          <b-form-group
            id="group_service"
            label="Nombre:"
            label-for="name_service"
          >
            <b-form-input
              id="input_service"
              v-model="service.nombre"
              type="text"
              required
              placeholder="Ingrese nombre del servicio"
            />
          </b-form-group>

          <b-form-group id="group_price" label="Precio servicio:" label-for="price_service">
            <b-form-input
              id="input_price"
              v-model="service.precio"
              type="text"
              required
              placeholder="Ingrese el precio del servicio"
            />
          </b-form-group>

          <b-form-group id="group_description" label="Descripción servicio:" label-for="description_service">
            <b-form-textarea
              id="input_description"
              v-model="service.descripcion"
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
              @change="setService($event)"
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
  name: 'NuevoService',
  data () {
    return {
      service: {
        nombre: '',
        precio: '',
        descripcion: '',
        imagen: null
      },
      objUpdate: {
        id: '',
        file: null
      }
    }
  },
  methods: {
    ...mapActions('services', ['uploadImage', 'createService', 'getServicesFirestore']),
    setService (event) {
      this.objUpdate.file = event.target.files[0]
      this.createService(this.service)
        .then((id) => {
          this.objUpdate.id = id
        })
    }
  }
}
</script>

<style scoped>

</style>
