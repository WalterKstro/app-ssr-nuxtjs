<template>
  <section>
    <b-row class="h-100" align-v="center">
      <b-col cols="12">
        <b-form @submit="udpateService(service)">
          <b-row>
            <b-col cols="12" md="6">
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
            </b-col>
            <b-col cols="12" md="6">
              <b-img
                :src="service.imagen"
                thumbnail
                center
                class="w-50 mb-5"
                alt="Foto del servicio"
              />
              <b-form-group id="group_url" label-for="url_service">
                <b-form-file
                  placeholder="Seleccione una imagen"
                  @change="uploadImage($event)"
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
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditarServicio',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      service: { ...this.data },
      file: null
    }
  },
  computed: {
    ...mapState('services', ['oneService']),
    ...mapGetters('services', ['getOneService'])
  },
  methods: {
    ...mapActions('services', ['setImageStorage', 'setServiceFirestore', 'udpateService']),
    uploadImage (event) {
      this.file = event.target.files[0]
      this.setImageStorage(this.file).then((data) => {
        this.service.imagen = data
      })
    }
  }
}
</script>

<style scoped>

</style>
