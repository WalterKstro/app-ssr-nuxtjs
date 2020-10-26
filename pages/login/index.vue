<template>
  <b-container fluid class="wrapper__login">
    <b-row align-v="center" class="h-100">
      <b-col cols="12" md="4" offset-md="4" class="d-flex flex-column">
        <div class="w-75 m-auto">
          <b-img src="@/assets/media/LogoSmall.svg" alt="Logo Vets and Pets" />
        </div>
        <b-form class="mt-5" @submit.prevent="authnWithEmailAndPassword(account)">
          <b-form-group
            id="email"
            label="Correo electrónico:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="account.email"
              type="email"
              required
              placeholder="Ingrese su correo electrónico"
            />
          </b-form-group>

          <b-form-group id="password" label="Contraseña:" label-for="password">
            <b-form-input
              id="password"
              v-model="account.pass"
              type="password"
              required
              placeholder="Ingrese su contraseña"
            />
          </b-form-group>

          <b-button type="submit" variant="dark">
            <b-icon icon="lock" />
            Iniciar sessión
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  layout: 'login',
  data () {
    return {
      account: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['authnWithEmailAndPassword'])
  }
}
</script>

<style lang="scss" scoped>
.wrapper__login{
  height: 100vh;
  background-color: $primary-brand;
}
</style>
