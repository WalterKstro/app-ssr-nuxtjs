<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-5">
          Listado de mensajes
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div v-if="stateSpiner" class="text-center">
          <b-spinner variant="primary" label="Spinning" />
        </div>
        <!--TABLE-->
        <b-table
          v-else
          striped
          small
          responsive
          bordered
          :items="contact"
          :fields="fields"
        >
          <!--ICON DESCRIPTION AND MODAL-->
          <template v-slot:cell(message)="data">
            <b-btn v-b-modal="data.item.id" class="btn btn-sm" variant="primary">
              <b-icon icon="chat-right-text" />
            </b-btn>
            <b-modal :id="data.item.id" centered hide-footer>
              <p>{{ data.value }}</p>
            </b-modal>
          </template>
          <!--ICONS OPTIONS-->
          <template v-slot:cell(options)="data">
            <!--BUTTTON DELETE-->
            <b-btn class="btn-sm" variant="danger" @click="confirmDelete(data.item.id)">
              <b-icon icon="trash" />
            </b-btn>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AdminContact',
  layout: 'admin',
  data () {
    return {
      fields: ['id', { key: 'first_name', label: 'Nombre' }, 'email', { key: 'message', label: 'Mensaje' }, { key: 'options', label: 'Operaciones' }],
      loading: true,
      objService: null,
      response: ''
    }
  },
  computed: {
    ...mapState(['contact', 'stateSpiner'])
  },
  mounted () {
    this.selectContac()
  },
  methods: {
    ...mapActions(['selectContac', 'deleteOneDocument']),
    confirmDelete (id) {
      this.response = ''
      this.$bvModal.msgBoxConfirm('Confirme que si deseas eliminarlo', {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Si',
        cancelTitle: 'No',
        hideHeaderClose: true,
        centered: true
      })
        .then((value) => {
          if (value) {
            this.deleteOneDocument({ id, payload: 'contact' })
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
