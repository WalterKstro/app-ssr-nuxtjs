<template>
  <div class="form__login">
    <div class="main__form">
      <div class="brand">
        <b-img src="@/assets/media/LogoSmall.svg" fluid block center alt="Logo Vets and Pets" />
      </div>
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
    </div>
  </div>
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

<style lang="scss" scoped>
.form__login{
  background-color: $primary-brand;
  height:100%;
  display: flex;
}
.main__form{
  margin: auto;
  width: 30%;
}
.brand{
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
}
</style>
