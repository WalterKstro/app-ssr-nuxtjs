<template>
  <div class="app">
    <!--COMPONENT HEADER-->
    <header>
      <Nav />
    </header>
    <main>
      <!--MAIN-->
      <Nuxt />
    </main>
    <!--FOOTER-->
    <footer class="footer__bottom">
      <b-container>
        <b-row align-v="center">
          <b-col cols="12" md="6">
            <div class="footer__brand py-1">
              <img src="@/assets/media/LogoSmall.svg" alt="Logo de la empresa">
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="d-flex justify-content-end nav__bottom py-1">
              <b-nav>
                <b-nav-item v-for="link in links" :key="link.id" :to="link.path" class="nav__item">
                  {{ link.name }}
                </b-nav-item>
              </b-nav>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <p class="text-center small">
              &copy; Derechos Reservados {{ date }} Vets & Pets
            </p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
<script>
import Nav from '@/components/Navigaitor'
export default {
  name: 'DefaultTemplate',
  components: {
    Nav
  },
  data () {
    return {
      date: new Date().getFullYear(),
      links: [
        { name: 'Acerca', path: '/galeria' },
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
.footer__bottom{
  background-color: $dark;
}
.footer__brand{
  width: 20%;
}
.nav__item > *{
  color: $white !important;
  font-size: 0.8rem;
}
.text-center{color: $white;}
</style>
