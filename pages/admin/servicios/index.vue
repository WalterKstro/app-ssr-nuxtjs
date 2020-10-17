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
        <!-- BUTTON ADD NEW SERVICE -->
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
          <NuevoServicio />
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div v-if="conditionalSpiner" class="text-center">
          <b-spinner variant="primary" label="Spinning" />
        </div>
        <!--TABLE-->
        <b-table
          v-else
          striped
          small
          responsive
          bordered
          :items="getData"
          :fields="fields"
        >
          <!--ICON IMAGE-->
          <template v-slot:cell(imagen)="data">
            <a :href="data.value" target="_blank">
              <b-icon icon="image" />
            </a>
          </template>
          <!--ICON DESCRIPTION AND MODAL-->
          <template v-slot:cell(descripcion)="data">
            <b-btn v-b-modal="data.item.id" class="btn btn-sm" variant="primary">
              <b-icon icon="chat-right-text" />
            </b-btn>
            <b-modal :id="data.item.id" centered hide-footer>
              <p>{{ data.value }}</p>
            </b-modal>
          </template>
          <!--ICONS OPTIONS-->
          <template v-slot:cell(options)="data">
            <b-btn v-b-modal="data.item.imagen" class="btn-sm" variant="primary" @click="getServiceSelected(data.item.id)">
              <b-icon icon="pencil-square" />
            </b-btn>
            <!--MODAL UPDATE SERVICE-->
            <b-modal :id="data.item.imagen" centered hide-footer size="xl">
              <EditarServicio :data="objService" />
            </b-modal>
            <b-btn class="btn-sm" variant="danger" @click="deleteServices(data.item.id)">
              <b-icon icon="trash" />
            </b-btn>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NuevoServicio from '@/components/NuevoServicio'
import EditarServicio from '@/components/EditarServicio'
export default {
  name: 'AdminServices',
  layout: 'admin',
  components: {
    NuevoServicio,
    EditarServicio
  },
  data () {
    return {
      fields: ['id', 'nombre', 'precio', { key: 'imagen', label: 'Imagen' }, { key: 'descripcion', label: 'Descripción' }, { key: 'options', label: 'Operaciones' }],
      loading: true,
      objService: null
    }
  },
  computed: {
    ...mapGetters({
      getData: 'services/getState',
      conditionalSpiner: 'services/getStateSpiner'
    })
  },
  created () {
    this.getServicesFirestore()
  },
  methods: {
    ...mapActions('services', ['getServicesFirestore', 'deleteOneService']),
    deleteServices (id) {
      const response = confirm('Desea eliminar el servicio con id: ' + id)
      if (response) {
        this.deleteOneService(id)
      }
    },
    getServiceSelected (id) {
      const index = this.getData.findIndex((service) => {
        return service.id === id
      })
      this.objService = this.getData[index]
    }
  }
}
</script>

<style scoped>

</style>
