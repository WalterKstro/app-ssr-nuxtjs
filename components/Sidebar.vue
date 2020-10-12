<template>
  <b-sidebar
    id="sidebar-backdrop"
    title="Clinica Veterinaria"
    :backdrop-variant="variant"
    backdrop
    shadow
  >
    <div class="px-3 py-2">
      <h1>Menu</h1>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      variant: 'dark'
    }
  }
}
</script>

<style scoped>

</style>
