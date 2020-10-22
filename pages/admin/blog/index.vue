<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-5">
          Listado de publicaciones
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="d-flex">
        <!-- BUTTON ADD NEW SERVICE -->
        <b-btn class="btn btn-sm mb-4 ml-auto" variant="primary" to="/admin/blog/nuevo">
          <b-icon icon="plus-circle" />
          Agregar
        </b-btn>
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
          :items="posts"
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
            <!--BUTTON UPDATE-->
            <b-btn class="btn-sm" variant="primary" :to="`/admin/blog/${data.item.id}`">
              <b-icon icon="pencil-square" />
            </b-btn>
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
  name: 'AdminBlog',
  layout: 'admin',
  data () {
    return {
      fields: ['id', { key: 'nombre', label: 'Titulo' }, { key: 'descripcion', label: 'Contenido' }, { key: 'precio', label: 'Fecha' }, { key: 'imagen', label: 'Imagen' }, { key: 'options', label: 'Operaciones' }],
      loading: true,
      objBlog: null,
      response: ''
    }
  },
  computed: {
    ...mapState(['posts', 'stateSpiner'])
  },
  mounted () {
    this.selectDocuments({ payload: 'blog' })
  },
  methods: {
    ...mapActions(['selectDocuments', 'deleteOneDocument']),
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
            this.deleteOneDocument({ id, payload: 'blog' })
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
