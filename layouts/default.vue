<template>
  <div class="app">
    <header>
      <Navigaitor />
    </header>
    <main>
      <b-container>
        <Nuxt />
      </b-container>
    </main>
  </div>
</template>
<script>
import Navigaitor from '@/components/Navigaitor'
export default {
  name: 'DefaultTemplate',
  components: {
    Navigaitor
  }
}
</script>
<style>

</style>
