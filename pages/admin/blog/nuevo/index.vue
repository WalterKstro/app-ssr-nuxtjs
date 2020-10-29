<template>
  <section>
    <b-row>
      <b-col cols="12">
        <h1 class="text-center my-3">
          Nueva publicación
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" offset-md="3" md="6">
        <b-form @submit.prevent="uploadImage(objUpdate)">
          <b-form-group
            id="group_title"
            label="Titulo de la publicación:"
            label-for="name_title"
          >
            <b-form-input
              id="input_title"
              v-model="post.nombre"
              type="text"
              required
              placeholder="Ingrese título de la publicación"
            />
          </b-form-group>

          <b-form-group id="group_body" label="Contenido de la publicación:" label-for="body">
            <b-form-textarea
              id="input_body"
              v-model="post.descripcion"
              type="text"
              required
              placeholder="Ingrese el contenido"
              rows="10"
              max-rows="15"
            />
          </b-form-group>
          <b-form-group id="group_date" label-for="date">
            <label for="date">Seleccione una fecha: </label>
            <b-form-datepicker
              id="date"
              v-model="post.precio"
              placeholder="Seleccione una fecha"
              locale="es-GT"
              class="mb-2"
            />
          </b-form-group>
          <b-form-group id="group_imagen" label-for="imagen">
            <b-form-file
              placeholder="Seleccione una imagen"
              @change="setPost($event)"
            />
            <small id="emailHelp" class="form-text text-muted">Tamaño de imagen 1024x600</small>
          </b-form-group>
          <b-button type="submit" variant="primary" :disabled="objUpdate.file === null">
            Publicar
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
      post: {
        nombre: '',
        descripcion: '',
        /**
         * precio es igual a fecha
         */
        precio: '',
        imagen: null,
        collection: 'blog'
      },
      objUpdate: {
        id: '',
        file: null,
        redirect: true,
        collection: 'blog'
      }
    }
  },
  methods: {
    ...mapActions(['createNew', 'uploadImage']),
    setPost (event) {
      this.objUpdate.file = event.target.files[0]
      this.createNew(this.post)
        .then((id) => {
          this.objUpdate.id = id
        })
    }
  }
}
</script>

<style scoped>

</style>
