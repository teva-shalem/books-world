module.exports = {
  title: "טבע שלם",
  description: "ספר זה הוא תמצית אחת, מתוך 'ספר החיים' אשר יצא במהדורה מוגבלת ב-2012. הספר מכיל כתבים שנכתבו בין השנים 2009-2004 , ביומנים אישיים, במקומות שונים בעולם ומהווים חלק מהיצירה הרב-תחומית - 'מעשה מרכבה', מאת המחבר",
  head: [
    ['link', { rel: 'icon', href: '/images/icons/icon-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  theme: "derech-hapeima",
  dest: "./dist",
  evergreen: true,
  markdown: {
    extractHeaders: [ 'h1', 'h2', 'h3', 'h4' ]
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
      'ga': 'UA-163403399-1' // UA-00000000-0
    }],

    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: 'תוכן חדש מוכן',
        buttonText: 'לחצו כאן לעדכון'
      }
    }]
  ],
}