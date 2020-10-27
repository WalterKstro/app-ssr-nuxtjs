<template>
  <aside class="wrapper__banner">
    <b-img src="../assets/banner/bannerGallery.jpg" fluid alt="Galeria" />
    <div class="description ml-md-5 px-1">
      <h1 class="text-light underline">
        Nuestra galeria
      </h1>
      <p class="text-light">
        Acercate a hechar un vistazo, a nuestra labor que con todo el entusiasmo del mundo realizamos dia a dia
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'BannerGalery'
}
</script>

<style lang="scss" scoped>
.wrapper__banner{
  position: relative;
  display: flex;
  align-items: center;
  &::before{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(30, 143, 187,.7);
    clip-path: polygon(0 0, 70% 0, 50% 100%, 0% 100%);
  }
}
.description {
  position: absolute;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 576px) {
    width: 90%;
  }
}
.text-light{display: inline-block;}
</style>
