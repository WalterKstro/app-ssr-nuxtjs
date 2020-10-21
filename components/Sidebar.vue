<template>
  <b-sidebar
    id="sidebar-backdrop"
    title="Clinica Veterinaria"
    :backdrop-variant="variant"
    backdrop
    shadow
  >
    <template v-slot:default>
      <div class="p-3 h-100">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item v-for="link in links" :key="link.id" :to="link.path">
              {{ link.name }}
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </template>
    <template v-slot:footer>
      <div class="d-flex align-items-center px-3 py-2">
        <b-button size="sm" @click="closeSession">
          <b-icon icon="power" />
          Cerrar sessión
        </b-button>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  data () {
    return {
      variant: 'dark',
      links: [
        { name: 'Servicios', path: '/admin/servicios' },
        { name: 'Productos', path: '/admin/productos' },
        { name: 'Mensajes', path: '/admin/mensajes' },
        { name: 'Blog', path: '/admin/blog' },
        { name: 'Crear usuario', path: '/admin/cuenta' }
      ]
    }
  },
  methods: {
    ...mapActions({
      closeSession: 'auth/signOutSession'
    })
  }
}
</script>

<style scoped>

</style>
