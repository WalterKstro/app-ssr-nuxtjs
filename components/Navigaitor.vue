<template>
  <b-container fluid class="mb-5">
    <b-row>
      <b-col class="p-0">
        <b-navbar toggleable="md" type="light" class="main--nav" fixed="top">
          <!--BRAND ICON-->
          <b-navbar-brand to="/" class="brand">
            <img src="@/assets/media/LogoSmall.svg" alt="Logo de la empresa">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />
          <!--MAIN NAV-->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="text-center nav--list m-auto">
              <b-nav-item v-for="link in links" :key="link.id" :to="link.path" class="nav--item">
                {{ link.name }}
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!--SOCIAL NAV-->
            <b-navbar-nav class="d-flex flex-row justify-content-around social--icons ml-md-auto">
              <b-nav-item class="social--icons_link" :href="facebook" target="_blank">
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
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Productos', path: '/productos' },
        { name: 'Blog', path: '/blog' },
        { name: 'Galería', path: '/galeria' },
        { name: 'Contacto', path: '/contacto' }
      ],
      facebook: 'https://www.facebook.com/Clinica-Veterinaria-Vets-and-Pets-618779588161715'
    }
  }
}
</script>

<style lang="scss" scoped>
.main--nav{background-color: $dark;}
.brand{width: 170px;}
.social--icons{
  &_link{
    width: 35px;
    @media screen and (max-width: 768px) {
      width: 20px;
    }
  }
}
.nav--item > *{
  color: $white !important;
}
</style>
