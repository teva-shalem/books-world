/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e08aa1618e4b3bb58652aae3b563e66d"
  },
  {
    "url": "assets/css/0.styles.34008f46.css",
    "revision": "63b48bb0a43f354b84d420cabeeaa7ea"
  },
  {
    "url": "assets/js/10.43943165.js",
    "revision": "991ad9059ade90489032da0325010bf6"
  },
  {
    "url": "assets/js/11.ecc5de56.js",
    "revision": "4b5e2bc4741c4a1931ef9318fa956202"
  },
  {
    "url": "assets/js/12.d255b52d.js",
    "revision": "216b6cfa4c2917e831637f00f3766c40"
  },
  {
    "url": "assets/js/13.6b47e9cb.js",
    "revision": "bfe6b1ae269e892bba19190992a13de3"
  },
  {
    "url": "assets/js/14.80497135.js",
    "revision": "954b6d167d28e219dd7b97d50aa286b7"
  },
  {
    "url": "assets/js/15.d1649f4b.js",
    "revision": "72a481ac0777ffcfe1a7043c4397c5a2"
  },
  {
    "url": "assets/js/16.cddec9a1.js",
    "revision": "83138ec0d26f8bd5f40686e5f17b38ea"
  },
  {
    "url": "assets/js/17.39c8b96f.js",
    "revision": "4c6da4597f2d3acdcb68009a89cd5271"
  },
  {
    "url": "assets/js/18.dd526253.js",
    "revision": "0130c842a6283a6dfbb351b08d1150b1"
  },
  {
    "url": "assets/js/19.f99eb53c.js",
    "revision": "f813d0f86be84ea8b0738bdd20da1207"
  },
  {
    "url": "assets/js/2.f4abd031.js",
    "revision": "8df195974df7ff06230831b4e6f7326d"
  },
  {
    "url": "assets/js/20.d30cb8fc.js",
    "revision": "4cf339103ae9511b315b7b7a8f6b3fee"
  },
  {
    "url": "assets/js/21.e8a64f7f.js",
    "revision": "01e51319481fa07ee47aededcde9703b"
  },
  {
    "url": "assets/js/22.99444439.js",
    "revision": "343bd45f971f1683a3ebcbfd54c9d3bf"
  },
  {
    "url": "assets/js/23.63ce7172.js",
    "revision": "46f42ca362e153086f0a58f72d6101f5"
  },
  {
    "url": "assets/js/3.e33b35aa.js",
    "revision": "3cb16532707edc26c09cb4f959a81315"
  },
  {
    "url": "assets/js/4.40d2ccf3.js",
    "revision": "171201bdf81e8bded08564b7f52c750f"
  },
  {
    "url": "assets/js/5.b0b712f2.js",
    "revision": "b3c965b0ed48f5cfb83af2df44f562e2"
  },
  {
    "url": "assets/js/6.1062239f.js",
    "revision": "8b084611e2fcecf09b71156ad98060b4"
  },
  {
    "url": "assets/js/7.2802263b.js",
    "revision": "4a2eaba4e09e50134202fa20e9ffef22"
  },
  {
    "url": "assets/js/8.94cdff40.js",
    "revision": "baa61e01fb3e11c7b536095f8e118db9"
  },
  {
    "url": "assets/js/9.c86bcc94.js",
    "revision": "739e453fb15b7b48ebdb47163dac380f"
  },
  {
    "url": "assets/js/app.16b925ea.js",
    "revision": "5d93727ec3cd53c47feda1844713cd4d"
  },
  {
    "url": "derech-hapeima/index.html",
    "revision": "57058724b48203477e088c99b2d4e678"
  },
  {
    "url": "images/axis-z.jpg",
    "revision": "c47c2a6c9b0f6a43158a3f30dc40fa30"
  },
  {
    "url": "images/caressing.jpg",
    "revision": "c541e98c21a9498d58ef56159f8220b3"
  },
  {
    "url": "images/classification.jpg",
    "revision": "3ebf9bbc67cbf96df99468e175b716dc"
  },
  {
    "url": "images/constant-m.jpg",
    "revision": "3c35e26284643ce36ae1099c14d50fde"
  },
  {
    "url": "images/constant-n.jpg",
    "revision": "e05525552d556cf974cb905fc2fd35b0"
  },
  {
    "url": "images/cover.jpg",
    "revision": "dd6abdc164369c0546079dbaa1178653"
  },
  {
    "url": "images/darwish.jpg",
    "revision": "20025b59c22750083cbae02ea76b1a25"
  },
  {
    "url": "images/david-symbol.jpg",
    "revision": "affe75354121d1e561da150390a5ec9a"
  },
  {
    "url": "images/david.jpg",
    "revision": "759e4b032232de81f4572a4fe18867f7"
  },
  {
    "url": "images/disentanglement.jpg",
    "revision": "756e297babe121f50633d3154b9844bb"
  },
  {
    "url": "images/drainage-divide.jpg",
    "revision": "4b4b8a98400fdc298967b367de8b2529"
  },
  {
    "url": "images/equation-balance.jpg",
    "revision": "2e69c8cf09f240a416db1e712fc97f95"
  },
  {
    "url": "images/equation-human.jpg",
    "revision": "8d66f6b80e1550e2f82a777a73fa0309"
  },
  {
    "url": "images/equation-i.jpg",
    "revision": "d9613fcc5033cf035b4c1ac55072c11b"
  },
  {
    "url": "images/equation-maaseh-merkavah.jpg",
    "revision": "d23aa892f8e6d66c8febc9ed2dc794b3"
  },
  {
    "url": "images/equation-one.jpg",
    "revision": "07a3096dce422dc0d6db28f4207f07fb"
  },
  {
    "url": "images/equation-soul.jpg",
    "revision": "1bc0db0f2097f786048807cdce1f4b06"
  },
  {
    "url": "images/equation-two.jpg",
    "revision": "4ec331ee1466bdb7f9fc002da0a3dd2c"
  },
  {
    "url": "images/equation-way.jpg",
    "revision": "189b11142c096d2dc05c7d5e959d55dd"
  },
  {
    "url": "images/equation-zero.jpg",
    "revision": "e01c2d80380672dfc64f3d03b04f8022"
  },
  {
    "url": "images/filipe.jpg",
    "revision": "a0c74a1aeb3b2c874bd54c6cb78b12ed"
  },
  {
    "url": "images/forcefulness.jpg",
    "revision": "3f202f49d02bcd031f454ddc8f2964e8"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "0c8237c855acba25c523cc8e52a073b4"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "383ad0288ab7620592bc009dc0d52ee1"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "d52025e499efcbcf2c520a1b5bb6c3a8"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d52025e499efcbcf2c520a1b5bb6c3a8"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "d52025e499efcbcf2c520a1b5bb6c3a8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "d52025e499efcbcf2c520a1b5bb6c3a8"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "0bb61341f0df4f6868f079e2c29175fe"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "6e82055b409889b3db66cbd278dea64a"
  },
  {
    "url": "images/kissing.jpg",
    "revision": "9bd8030c6c78c6a292a9f73c1e561610"
  },
  {
    "url": "images/legend-composition.jpg",
    "revision": "a4bfe1b9a960a620e9d401bacff3f7bd"
  },
  {
    "url": "images/merkavah-arrows.jpg",
    "revision": "2f4905059edc68854f7742498e7dbfd6"
  },
  {
    "url": "images/merkavah-axes.jpg",
    "revision": "133bd90f618b452ffe6f34cfbc7dac96"
  },
  {
    "url": "images/merkavah-body.jpg",
    "revision": "8841797a891d519f321018b9c5442b46"
  },
  {
    "url": "images/merkavah-letter-values.jpg",
    "revision": "82bdac2a0388fa6d1561ce0902167625"
  },
  {
    "url": "images/merkavah-logo.jpg",
    "revision": "0e6fc47637f1772d6b9adbffa995917d"
  },
  {
    "url": "images/merkavah-mapping.jpg",
    "revision": "ef032425543696d3d03336370951185f"
  },
  {
    "url": "images/merkavah-personal.jpg",
    "revision": "c84a18c5d1f50aad457dae98f09ab848"
  },
  {
    "url": "images/mountain.jpg",
    "revision": "f62410b19320cfd43f6335a8b8b07a29"
  },
  {
    "url": "images/movement.jpg",
    "revision": "b32466f352524ebab4aadca92edf4b90"
  },
  {
    "url": "images/nostalgia.jpg",
    "revision": "fa8f3a9f0a5a378edc93c1045b61816e"
  },
  {
    "url": "images/paradoxality.jpg",
    "revision": "3173060aee833c95a9cc11d7d0800883"
  },
  {
    "url": "images/sanity.jpg",
    "revision": "75c44bc76eba1408f7e1997e5e049197"
  },
  {
    "url": "images/spacer.png",
    "revision": "f9fb1d9849c9caa5f81dac4f1418151a"
  },
  {
    "url": "images/system-axes-values.jpg",
    "revision": "ec599df73dab7e16674b715489f3d35c"
  },
  {
    "url": "images/system-mapping.jpg",
    "revision": "a6edcd2d6294fc2454d11cb3e8005629"
  },
  {
    "url": "images/variable-m.jpg",
    "revision": "74b03d0c8ea4e6de0c2418bcfe8d0343"
  },
  {
    "url": "images/west.jpg",
    "revision": "4f71e726f26bbfb83745fe414b513822"
  },
  {
    "url": "index.html",
    "revision": "bee886e5c6c170fbed3ccca800c8f5c5"
  },
  {
    "url": "mishvaot-hapeima/index.html",
    "revision": "f5efdbd583eaf727f132ee71acbe7063"
  },
  {
    "url": "rosetta-stone/index.html",
    "revision": "ecd09cf218eb3d9ceb1e6350ea84109e"
  },
  {
    "url": "sefer-yetzira/index.html",
    "revision": "613864a5e7152dc3384c811b933e739a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
