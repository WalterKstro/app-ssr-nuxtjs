<template>
  <aside class="wrapper__banner">
    <b-img src="../assets/banner/bannerProducts.jpg" fluid alt="Productos" />
    <div class="description ml-md-5 px-1">
      <h1 class="text-light underline">
        Productos y accesorios
      </h1>
      <p class="text-light">
        En clinica vets & pets contamos con todo una gama de accesorios y productos pensados especialmente en la comodida, alimentacion y diversion de su mascota, todos de marcas reconocidas
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'BannerProducts'
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
