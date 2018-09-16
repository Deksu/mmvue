module.exports = {
  generate: {
    fallback: true
  },
  router: { 
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Matti Marin - Goldsmith',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    {src: '~/plugins/fullpage-vue', ssr: false},
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
