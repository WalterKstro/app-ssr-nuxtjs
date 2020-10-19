<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="text-center m-5">
            Nuestros servicios
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="grid__card">
          <b-card
            v-for="service in getIndexServices"
            :key="service.id"
            :title="service.nombre"
            :img-src="service.imagen"
            img-alt="Foto del servicio"
            img-top
          >
            <b-card-text>
              {{ service.descripcion }}
            </b-card-text>
            <template v-slot:footer>
              <strong class="text-right d-block">Q{{ service.precio }}</strong>
            </template>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="text-center">
          <b-btn variant="primary" class="m-5" to="/servicios">
            Ver servicios
          </b-btn>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Services',
  computed: {
    ...mapGetters('services', ['getIndexServices'])
  }

}
</script>

<style lang="scss" scoped>
.grid__card{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  gap: 2rem;
}
</style>
