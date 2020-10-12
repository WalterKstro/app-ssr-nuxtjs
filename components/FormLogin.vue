<template>
  <b-row class="h-100" align-v="center">
    <b-col cols="12" md="4" offset-md="4">
      <b-form @submit.prevent="login(account)">
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
          <b-icon icon="lock" />
          Iniciar sessión
        </b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
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
      login: 'auth/authnWithEmailAndPassword'
    })
  }
}
</script>

<style lang="scss" scoped></style>
