<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center m-4">
          Editar publicación
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="12">
        <b-form @submit.prevent="udpateDocument(postSelected)">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group
                id="group_title"
                label="Titulo de la publicación:"
                label-for="name_title"
              >
                <b-form-input
                  id="input_title"
                  v-model="postSelected.nombre"
                  type="text"
                  required
                  placeholder="Ingrese titulo de la publicación"
                />
              </b-form-group>

              <b-form-group id="group_description" label="Contenido de la publicación:" label-for="description_post">
                <b-form-textarea
                  id="input_description"
                  v-model="postSelected.descripcion"
                  type="text"
                  required
                  placeholder="Ingrese el contenido de la publicación"
                  rows="10"
                  max-rows="15"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group id="group_date" label-for="date">
                <label for="date">Seleccione una fecha: </label>
                <b-form-datepicker id="date" v-model="postSelected.precio" class="mb-2" />
              </b-form-group>
              <b-img
                :src="postSelected.imagen"
                thumbnail
                center
                class="w-75 mb-5"
                alt="Foto de la publicación"
              />
              <b-form-group id="group_url" label-for="url_post">
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
  name: 'UpdateBlog',
  layout: 'admin',
  data () {
    return {
      id: this.$route.params.id,
      postSelected: '',
      objUpdate: {
        id: this.$route.params.id,
        file: null,
        redirect: false,
        collection: 'blog'
      }
    }
  },
  computed: {
    ...mapState(['posts'])
  },
  mounted () {
    this.getPostById()
  },
  methods: {
    ...mapActions(['uploadImage', 'udpateDocument']),
    changeImage (event) {
      this.objUpdate.file = event.target.files[0]
      this.uploadImage(this.objUpdate).then((data) => {
        this.postSelected.imagen = data
      })
    },
    /**
     * SEARCH ONE POST FORM STORAGE WITH ID
     */
    getPostById () {
      const index = this.posts.findIndex(post => post.id === this.id)
      this.postSelected = { ...this.posts[index] }
      this.postSelected.collection = 'blog'
    }
  }
}
</script>

<style scoped>

</style>
