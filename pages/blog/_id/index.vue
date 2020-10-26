<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerBlog />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" offset-md="2" md="8">
          <b-img :src="createCopyArray[0].imagen" fluid alt="Imagen del post" />
          <small class="text-muted text-right d-block font-weight-lighter m-1"><b-icon icon="calendar" /> {{ createCopyArray[0].precio | reverseDate }}</small>
          <h2>{{ createCopyArray[0].nombre }}</h2>
          <p class="lead">
            {{ createCopyArray[0].descripcion }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BannerBlog from '@/components/BannerBlog'
export default {
  name: 'Index',
  filters: {
    reverseDate (value) {
      return value.split('-').reverse().join('/')
    }
  },
  components: {
    BannerBlog
  },
  async fetch ({ store }) {
    await store.dispatch('selectDocuments', { payload: 'blog' })
  },
  data () {
    return {
      param: this.$route.params.id.split('-').join(' '),
      copyPosts: ''
    }
  },
  computed: {
    ...mapState(['posts']),
    createCopyArray () {
      const data = JSON.parse(JSON.stringify(this.posts))
      for (const post of data) {
        post.nombre = post.nombre.toLowerCase()
      }
      const result = data.filter(post => post.nombre === this.param)
      return result
    }
  }
}
</script>

<style scoped>

</style>
