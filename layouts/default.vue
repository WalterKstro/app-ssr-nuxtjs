<template>
  <div class="app">
    <!--COMPONENT HEADER-->
    <header>
      <Nav />
    </header>
    <main>
      <!--MAIN-->
      <b-container>
        <Nuxt />
      </b-container>
    </main>
  </div>
</template>
<script>
import Nav from '@/components/Navigaitor'
export default {
  name: 'DefaultTemplate',
  components: {
    Nav
  }
}
</script>
<style>

</style>
