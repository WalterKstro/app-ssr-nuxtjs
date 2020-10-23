<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerBlog />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 class="my-md-3">
            Últimos articulos
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="grid__card">
          <b-card
            v-for="post in posts"
            :key="post.id"
            :img-src="post.imagen"
            img-alt="Foto de la publicacion"
            img-top
          >
            <b-btn variant="link" class="text-decoration-none" @click="viewPost(post.nombre)">
              <h5 class="card-title">
                {{ post.nombre }}
              </h5>
            </b-btn>
            <small class="text-muted text-right d-block font-weight-lighter"><b-icon icon="calendar" /> {{ post.precio | reverseDate }}</small>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BannerBlog from '@/components/BannerBlog'
import { mapState, mapActions } from 'vuex'
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
  computed: {
    ...mapState(['posts'])
  },
  mounted () {
    this.selectDocuments({ payload: 'blog' })
  },
  methods: {
    ...mapActions(['selectDocuments']),
    viewPost (id) {
      const path = id.toLowerCase().split(' ').join('-')
      this.$router.push(`/blog/${path}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid__card{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  gap: 2rem;
}
</style>
