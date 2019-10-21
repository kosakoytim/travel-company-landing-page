const pkg = require('./package')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nusa Indah Travel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nusa-indah-travel.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela+Round'}
    ],
    script: [
      { src : "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" },
      { src : "https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts/font.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-carousel.js', ssr: false },
    { src: '~plugins/vue-parallax.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // srcDir: '/',
  generate: {
    dir: 'public',
    minify: {
      // collapseWhitespace: false
    }
  },
  
  /*
  ** Build configuration
  */
  // buildDir: './public',
  build: {
    // publicPath: '/public/',
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
