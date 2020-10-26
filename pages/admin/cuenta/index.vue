<template>
  <div class="register">
    <b-row class="h-100" align-v="center">
      <b-col cols="12" offset-md="4" md="4">
        <h1 class="text-center mb-5">
          Crear nueva cuenta
        </h1>
        <b-form @submit.prevent="createAccount(account)">
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

          <b-button type="submit" variant="primary">
            <b-icon icon="person-plus" />
            Crear cuenta
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FormRegister',
  layout: 'admin',
  data () {
    return {
      account: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions({
      createAccount: 'auth/signUpWithEmailAndPassword'
    })
  }
}
</script>

<style lang="scss" scoped>
.register{
  height: 76vh;
}
</style>
