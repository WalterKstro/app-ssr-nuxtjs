<template>
  <aside>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-0">
          <BannerGalery />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" class="grid__galery my-5">
          <img v-for="(image, i) in images" :key="image.id" class="image img-fluid img-thumbnail" :src="image" @click="index = i">
          <client-only placeholder="Loading...">
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </aside>
</template>

<script>
import BannerGalery from '@/components/BannerGalery'
import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  name: 'Index',
  components: {
    BannerGalery,
    VueGallerySlideshow
  },
  data () {
    return {
      images: [
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg1.jpg?alt=media&token=56efeacd-bf60-4588-964f-de2a826928e6',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg10.jpg?alt=media&token=badcf3e9-dcc3-4221-9d61-028ea3b4e9da',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg2.jpg?alt=media&token=0170277d-6e86-4842-b435-6e1d5f79feb9',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg3.jpg?alt=media&token=4872ecf3-9c4b-47aa-ad8b-b1eea44062c2',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg4.jpg?alt=media&token=5d96119c-b479-4b9e-b6e1-ba8d9b90b2f0',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg5.jpg?alt=media&token=63679d0a-f9c6-486c-9ff3-271bb558bf92',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg6.jpg?alt=media&token=d3daa106-09aa-42b4-a80b-c4bedc60070d',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg11.jpg?alt=media&token=e1b6cdbc-9856-4a3f-9825-b74bf082bb0a',
        'https://firebasestorage.googleapis.com/v0/b/vets-pets.appspot.com/o/galery%2Fg9.jpg?alt=media&token=4e7e853c-bfd7-4acb-8b8d-cfea1f762058'
      ],
      index: null
    }
  },
  head: {
    title: 'Vets & Pets | Galeria',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Te mostramos todo el trabajo que dia con dia realizamos con mucho entusiasmo'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.grid__galery{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  gap: 2rem;
}
.image {
  background-size: cover;
  cursor: pointer;
  object-fit: contain;
}
</style>
