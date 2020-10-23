<template>
  <aside class="wrapper__banner">
    <b-img src="../assets/banner/bannerBlog.jpg" fluid alt="Publicaciones" />
    <div class="description ml-md-5 px-1">
      <h1 class="text-light underline">
        Artículos del blog
      </h1>
      <p class="text-light">
        Este blog esta pensado para tratar temas que le permitan conocer, la importancia de prestarle cualquier anomalia que su mascota presente
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'BannerBlog'
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
