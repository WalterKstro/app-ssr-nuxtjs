<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
          <h1 class="text-center my-3">
            Contactanos
          </h1>
          <b-form @submit.prevent="sendingMessage">
            <b-form-group
              id="name"
              label="Nombre:"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="contact.first_name"
                type="text"
                required
                placeholder="Ingrese su nombre"
              />
            </b-form-group>

            <b-form-group id="email" label="Tú correo electrónico:" label-for="email">
              <b-form-input
                id="email"
                v-model="contact.email"
                required
                placeholder="Ingrese su correo electrónico"
              />
            </b-form-group>

            <b-form-group id="message" label="Mensaje:" label-for="message">
              <b-form-textarea
                id="message"
                v-model="contact.message"
                required
                rows="5"
                max-rows="10"
                placeholder="Escribe tú mensaje aquí"
              />
            </b-form-group>
            <b-button type="submit" variant="primary">
              Enviar
            </b-button>
          </b-form>
          <b-alert v-if="stateMessage" variant="success" show class="mt-3">
            Mensaje enviado
          </b-alert>
        </b-col>
        <b-col cols="12" md="6">
          <h1 class="text-center my-3">
            Buscanos aquí
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d964.9774102393201!2d-90.82510642523393!3d14.661069062971148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde7156ec9f16a663!2sVets%20%26%20Pets!5e0!3m2!1ses-419!2sgt!4v1603322794538!5m2!1ses-419!2sgt"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      contact: {
        first_name: '',
        email: '',
        message: ''
      },
      stateMessage: false
    }
  },
  methods: {
    ...mapActions(['createContact']),
    sendingMessage () {
      this.createContact(this.contact)
        .then((r) => {
          r !== null && r !== undefined ? this.stateMessage = true : this.stateMessage = false
          this.contact.message = ''
          this.contact.first_name = ''
          this.contact.email = ''
        })
    }
  }
}
</script>

<style scoped>

</style>
