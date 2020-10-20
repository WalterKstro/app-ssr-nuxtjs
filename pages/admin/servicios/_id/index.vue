<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-4">
          Editar servicio
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" offset-md="2" md="8">
        <b-form @submit.prevent="udpateDocument(serviceSelected)">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group
                id="group_service"
                label="Nombre:"
                label-for="name_service"
              >
                <b-form-input
                  id="input_service"
                  v-model="serviceSelected.nombre"
                  type="text"
                  required
                  placeholder="Ingrese nombre del servicio"
                />
              </b-form-group>

              <b-form-group id="group_price" label="Precio servicio:" label-for="price_service">
                <b-form-input
                  id="input_price"
                  v-model="serviceSelected.precio"
                  type="text"
                  required
                  placeholder="Ingrese el precio del servicio"
                />
              </b-form-group>

              <b-form-group id="group_description" label="Descripción servicio:" label-for="description_service">
                <b-form-textarea
                  id="input_description"
                  v-model="serviceSelected.descripcion"
                  type="text"
                  required
                  placeholder="Ingrese la descripción del servicio"
                  rows="5"
                  max-rows="6"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-img
                :src="serviceSelected.imagen"
                thumbnail
                center
                class="w-75 mb-5"
                alt="Foto del servicio"
              />
              <b-form-group id="group_url" label-for="url_service">
                <b-form-file
                  placeholder="Seleccione una imagen"
                  @change="changeImage($event)"
                />
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
  name: 'Actualizar',
  layout: 'admin',
  data () {
    return {
      id: this.$route.params.id,
      serviceSelected: '',
      objUpdate: {
        id: this.$route.params.id,
        file: null,
        opt: false
      }
    }
  },
  computed: {
    ...mapState(['services'])
  },
  mounted () {
    this.getServideById()
  },
  methods: {
    ...mapActions(['uploadImage', 'udpateDocument']),
    changeImage (event) {
      this.objUpdate.file = event.target.files[0]
      this.uploadImage(this.objUpdate).then((data) => {
        this.serviceSelected.imagen = data
      })
    },
    /**
     * SEARCH ONE SEVICE FORM STORAGE WITH ID
     */
    getServideById () {
      const index = this.services.findIndex(service => service.id === this.id)
      this.serviceSelected = { ...this.services[index] }
    }
  }
}
</script>
<style scoped>

</style>
