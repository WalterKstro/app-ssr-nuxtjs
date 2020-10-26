<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0">
        <b-navbar toggleable="md" type="light" class="main--nav">
          <!--MAIN NAV-->
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="d-flex flex-row justify-content-around social--icons">
              <b-btn v-b-toggle.sidebar-backdrop class="p-0 btn__sidebar">
                <b-icon icon="list" font-scale="2" class="btn-sidebar" />
              </b-btn>
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-toggle target="nav-collapse" />
          <!--BRAND ICON-->
          <b-navbar-brand to="/" class="brand" target="_blank">
            <img src="@/assets/media/LogoSmall.svg" alt="Logo de la empresa">
          </b-navbar-brand>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'NavbarAdmin'
}
</script>

<style lang="scss" scoped>
.main--nav{background-color: $dark;}
.brand{width: 170px;}
.btn__sidebar{
  background-color: transparent;
  border-color: transparent;
}
</style>
