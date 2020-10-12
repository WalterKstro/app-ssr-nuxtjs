<template>
  <b-sidebar
    id="sidebar-backdrop"
    title="Clinica Veterinaria"
    :backdrop-variant="variant"
    backdrop
    shadow
  >
    <template v-slot:default="{ hide }">
      <div class="p-3 h-100">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item active @click="hide">
              Active
            </b-nav-item>
            <b-nav-item href="#link-1" @click="hide">
              Link
            </b-nav-item>
            <b-nav-item href="#link-2" @click="hide">
              Another Link
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </template>
    <template v-slot:footer>
      <div class="d-flex align-items-center px-3 py-2">
        <b-button size="sm" @click="closeSession">
          <b-icon icon="box-arrow-right" />
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
      variant: 'dark'
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
