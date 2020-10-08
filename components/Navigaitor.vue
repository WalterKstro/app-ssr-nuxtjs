<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0">
        <b-navbar toggleable="md" type="light" class="main--nav">
          <!--BRAND ICON-->
          <b-navbar-brand href="#" class="brand">
            <img src="@/assets/media/LogoSmall.svg" alt="Logo de la empresa">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />
          <!--MAIN NAV-->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="text-center nav--list">
              <b-nav-item v-for="link in links" :key="link.id" class="nav--item">
                {{ link.name }}
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!--SOCIAL NAV-->
            <b-navbar-nav class="d-flex flex-row justify-content-around social--icons ml-md-auto">
              <b-nav-item class="social--icons_link">
                <img src="@/assets/media/facebook.svg" alt="Logo de la empresa">
              </b-nav-item>
              <b-nav-item class="social--icons_link">
                <img src="@/assets/media/whatsapp.svg" alt="Logo de la empresa">
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Navigaitor',
  data () {
    return {
      links: [
        { name: 'Acerca', path: '/acerca' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Productos', path: '/productos' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/contacto' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main--nav{background-color: $primary-brand;}
.brand{width: 30vmin;}
.social--icons{
  &_link{width: 6vmin;}
}
.nav--item > *{
  color: $white !important;
}
</style>
