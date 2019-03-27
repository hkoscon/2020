import { fetchTopics, topicSlug } from './utils/fetchTopic';

const publicPath = (process.env.PUBLIC_PATH || '/2019').replace(/\/$/, '');

// Declare process.env.publicPath to
// unify build and dev environment.
process.env.publicPath = publicPath;

// A little hint for debug
console.log(`publicPath: "${publicPath}"`);

function fetchTopicUrl() {
  return fetchTopics()
    .then(topics => topics.map(topic => `/topics/${topicSlug(topic)}`));
}

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
      { hid: 'description', name: 'description', content: 'Hong Kong Open Source Conference is the biggest annual open source event in Hong Kong. Hong Kong Open Source Conference 2019 is going to held on 14 - 15 Jun, 2019 (Fri - Sat) at Hong Kong Science Park' },
      { hid: 'theme-color', name: 'theme-color', content: '#294454' },
      { hid: 'author', name: 'author', content: 'Team 404 Busters' },
      { hid: 'og:title', property: 'og:title', content: 'Hong Kong Open Source Conference 2019' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Hong Kong Open Source Conference 2019' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://hkoscon.org/logo.png' },
      { hid: 'description', name: 'description', content: 'Hong Kong Open Source Conference is the biggest annual open source event in Hong Kong. Hong Kong Open Source Conference 2019 is going to held on 14 - 15 Jun, 2019 (Fri - Sat) at Hong Kong Science Park' },
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
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/assets/',
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
  router: {
    base: publicPath,
  },
  generate: {
    dir: 'public',
    routes() {
      return fetchTopicUrl();
    },
  },
  env: {
    PUBLIC_PATH: publicPath,
    publicPath,
    PUBLIC_TIMETABLE_URL: process.env.PUBLIC_TIMETABLE_URL || `${publicPath}/data/timetable.json`,
    TIMETABLE_URL: process.env.TIMETABLE_URL || 'https://hkoscon.org/2018/data/timetable.json',
    NUXT_MODE: process.env.NUXT_MODE,
  },
  modules: [
    // eslint-disable-next-line global-require
    '@nuxtjs/manifest',
    '@404busters/nuxt-generate-workbox',
    '@nuxtjs/sitemap',
  ],

  /**
   * PWA related config
   */
  // eslint-disable-next-line global-require
  manifest: require('./utils/manifest'),
  workbox: {
    dev: process.env.NODE_ENV !== 'production',
    offlineAssets: [`${publicPath}/images/banner.jpg`, `${publicPath}/images/bg.jpg`, `${publicPath}/data/timetable.json`],
    plugin: {
      enabled: true,
    },
    generate: {
      cacheId: 'hkoscon-2019',
    },
  },

  sitemap: {
    hostname: 'https://hkoscon.org/2019/',
    generate: true,
    routes() {
      return fetchTopicUrl();
    },
  },
};
