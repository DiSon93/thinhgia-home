import colors from 'vuetify/es5/util/colors';
import { resolve } from 'path';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kho Bất Động Sản Việt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/batdongsanviet.png' }
    ],
    script: [
      { type: 'text/javascript', src:'https://sp.zalo.me/plugins/sdk.js' },
      // { type: 'text/javascript', src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0' }
    ]
  },

  // target: 'static' ,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  loadingIndicator: {
    name: 'rectangle-bounce',
    color: '#242D4A',
    background: 'white'
  },

  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui.js" ,
    // { src: "@/plugins/vue-slick-carousel.js", mode: "client" },
    // { src: "@/plugins/vue-lazyloading.js", mode: "client" },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // light: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  
  alias: {
    '@image': resolve(__dirname, './assets/images'),
    '@component': resolve(__dirname, './components'),
    '@lang': resolve(__dirname, './lang'),
    '@scss': resolve(__dirname, './assets/scss'),
    '@asset': resolve(__dirname, './assets'),
    '@lib': resolve(__dirname, './library')
  },

  extensions: ['*', '.js', '.vue', '.json'],

  // generate: {
  //   fallback: true
  //  },

    // router: {
    //   scrollBehavior: function (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    //   }
    // },
}
