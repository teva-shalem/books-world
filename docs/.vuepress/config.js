module.exports = {
  // base: "/derech-peima/",
  title: "דרך הפעימה",
  theme: "derech-hapeima",
  evergreen: true,
  markdown: {
    anchor: { permalink: false },
    extractHeaders: [ 'h1', 'h2', 'h3', 'h4' ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@images': '../docs/.vuepress/images'
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    'vuepress-plugin-smooth-scroll',

    ['@vuepress/medium-zoom', {
      selector: 'img.img',
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }],

    ['vuepress-plugin-typescript', {
      tsLoaderOptions: {},
    }],

    ['@vuepress/google-analytics', {
      'ga': '' // UA-00000000-0
    }],
  ],
}