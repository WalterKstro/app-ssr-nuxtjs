<template>
  <b-container class="error-404">
    <b-row class="h-100 text-center" align-v="end">
      <b-col cols="12">
        <h3 v-if="error.statusCode === 404" class="text-muted">
          Opssss. Página no se encuentra
        </h3>
        <h3 v-else>
          Ha ocurrido un error
        </h3>
        <b-btn variant="primary" class="btn-sm mb-5" to="/">
          <b-icon icon="house-door" />
          Regresar a casa
        </b-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default () {
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.error-404{
  height: 81vh;
  background-image: url('../assets/media/error.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-position: center;
}
</style>
