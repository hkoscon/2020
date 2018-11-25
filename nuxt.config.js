module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'HKOSCon 2019',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Hong Kong Open Source Conference is the biggest annual open source event in Hong Kong' },
      { hid: 'theme-color', name: 'theme-color', content: '#294454' },

      // og tag
      { name: 'author', content: 'Hong Kong Open Source Conference 2019' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://hkoscon.org/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato|Noto+Sans+TC|Material+Icons' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F3CB02' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.scss',
  ],

  /*
  ** Build configuration
  */
  build: {
    cssSourceMap: true,
    extractCSS: true,
    publicPath: '/2019/',
    loaders: {
      scss: {
        // eslint-disable-next-line
        implementation: require('sass'),
        data: '@import "~/assets/css/_variable.scss";',
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      config.devtool = '#source-map';
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
