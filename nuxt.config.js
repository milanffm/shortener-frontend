const apiUrl = process.env.NODE_ENV === 'production' ? 'https://s.wwds.de/' : 'http://localhost:3333/'

export default {
  target: 'static',

  head: {
    title: 'shortener',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/scss/theme.scss'
  ],

  styleResources: {
    scss: [
      '~/node_modules/bourbon/core/_bourbon.scss',
      '~/assets/scss/vars/*.scss',
      '~/assets/scss/mixins/*.scss'
    ]
  },

  plugins: [
    { src: '~/plugins/hammer.directive', mode: 'client' }
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {
    baseURL: apiUrl // Used as fallback if no runtime config is provided
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'de',
      background_color: 'ffffff'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null
  }
}
