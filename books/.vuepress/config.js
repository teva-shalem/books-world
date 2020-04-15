module.exports = {
  title: "טבע שלם",
  theme: "derech-hapeima",
  dest: "./dist",
  evergreen: true,
  markdown: {
    extractHeaders: [ 'h1', 'h2', 'h3', 'h4' ]
  },
  plugins: [
    'img-lazy',
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
      'ga': 'UA-163403399-1' // UA-00000000-0
    }],
  ],
}