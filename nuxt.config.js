module.exports = {
  generate: {
    fallback: true
  },
  router: { 
    scrollBehavior: function (to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash }
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 }
      }
      }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'mattimarin - goldsmith',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
