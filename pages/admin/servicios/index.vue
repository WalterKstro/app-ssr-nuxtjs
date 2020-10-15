<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-5">
          Listado de servicios
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="d-flex">
        <b-btn v-b-modal.modal-prevent-closing class="btn btn-sm mb-4 ml-auto" variant="primary">
          <b-icon icon="plus-circle" />
          Agregar
        </b-btn>
        <!-- MODA NEW SERVICE -->
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Nuevo servicio"
          size="lg"
          centered
          hide-footer
        >
          <Nuevo />
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <!--TABLE-->
        <b-table striped small responsive :items="getData" :fields="fields">
          <template v-slot:cell(imagen)="data">
            <a :href="data.value" target="_blank">
              <b-icon icon="image" />
            </a>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Nuevo from '@/components/Nuevo'
export default {
  name: 'AdminServices',
  layout: 'admin',
  components: {
    Nuevo
  },
  data () {
    return {
      fields: ['id', 'nombre', 'precio', { key: 'imagen', label: 'Imagen' }, 'descripcion']
    }
  },
  computed: {
    ...mapGetters({
      getData: 'services/getState'
    })
  },
  created () {
    this.loadData()
  },
  methods: {
    ...mapActions({
      loadData: 'services/getServicesFirestore'
    })
  }
}
</script>

<style scoped>

</style>
