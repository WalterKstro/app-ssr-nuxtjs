export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Vets & Pets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD8AfL5wm4jt5HUA5DCiLAAu4__NKeozIw",
          authDomain: "vets-pets.firebaseapp.com",
          databaseURL: "https://vets-pets.firebaseio.com",
          projectId: "vets-pets",
          storageBucket: "vets-pets.appspot.com",
          messagingSenderId: "1021489739055",
          appId: "1:1021489739055:web:b34869feb4e9637ddd5dda",
          measurementId: "G-N6E3HWEXM6"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'auth/onAuthStateChangedAction'
            },
            ssr: true // default
          },
          firestore: {
            memoryOnly: false, // default
            static: false, // default
            preload: false, // default
            chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
            enablePersistence: true
          },
          storage: true
        }
      }
    ]
  ],
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin)
  },
  styleResources: {
    scss: [
      'assets/_variables.scss'
    ]
  },
  router: {
    middleware: ['authentication']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    babel: {
      compact: true
    }
  }
}
