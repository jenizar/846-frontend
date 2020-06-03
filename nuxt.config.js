export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/mock.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-babel',
    'vue-geolocation-api/nuxt',
    '@nuxtjs/axios',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyCU-aMd9JTEudzpUOQO9yMWDVM82_b4Kco'
      }
    ]
  ],
  styleResources: {
    scss: ['@/shared/theme/base.scss']
  },
  /*
   ** Build configuration
   */
  build: {}
}
