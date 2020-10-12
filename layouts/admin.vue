<template>
  <div class="app__admin">
    <!--COMPONENT HEADER-->
    <header>
      <NavbarAdmin />
    </header>
    <main>
      <!--MAIN-->
      <b-container>
        <Nuxt />
      </b-container>
    </main>
    <sidebar>
      <Sidebar />
    </sidebar>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'AdminTemplate',
  components: {
    NavbarAdmin,
    Sidebar
  }
}
</script>

<style scoped>

</style>
