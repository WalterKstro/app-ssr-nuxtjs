<template>
  <aside class="wrapper__banner">
    <b-img src="../assets/banner/bannerContac.jpg" fluid alt="Productos" />
    <div class="description ml-md-5 px-1">
      <h1 class="text-light underline">
        Estamos a las órdenes
      </h1>
      <p class="text-light">
        Somos una empresa que nos hemos dedicado a la salud y cuidado de su mascota con una experiencia de 12 años .
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'BannerContact'
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
