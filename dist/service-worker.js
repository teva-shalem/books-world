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
    "revision": "5d61aa7b6f6e3c36ec19830a034ac1eb"
  },
  {
    "url": "assets/css/0.styles.56891cbd.css",
    "revision": "04b5655141ac0e3285f9872ccce25733"
  },
  {
    "url": "assets/js/10.e8f637f7.js",
    "revision": "38d641853e247c9e211d68ebd1e3723a"
  },
  {
    "url": "assets/js/11.46d8ee24.js",
    "revision": "eb0b78d99f55c146930fc0d0df4ead87"
  },
  {
    "url": "assets/js/12.1298fcbf.js",
    "revision": "515c253206e9f2f0d5e1489e4741af68"
  },
  {
    "url": "assets/js/13.9707f21f.js",
    "revision": "7d631050e1affdfa91a4ca3a2e782435"
  },
  {
    "url": "assets/js/14.5dd87e7d.js",
    "revision": "dd8c70fadd50769672296f8e9ffc5756"
  },
  {
    "url": "assets/js/15.f4616b84.js",
    "revision": "72a481ac0777ffcfe1a7043c4397c5a2"
  },
  {
    "url": "assets/js/16.2780ea9f.js",
    "revision": "83138ec0d26f8bd5f40686e5f17b38ea"
  },
  {
    "url": "assets/js/17.fc07cc45.js",
    "revision": "04c4a7f7e6f8f0463ed98711ce4d7f19"
  },
  {
    "url": "assets/js/18.1f595317.js",
    "revision": "d8f462daeb9ca0480f894df777926af6"
  },
  {
    "url": "assets/js/19.7b8390ec.js",
    "revision": "2be530b73a7aa89c3bec30ec1fe31174"
  },
  {
    "url": "assets/js/2.29f5a74b.js",
    "revision": "268ece099072f2d0eac70006c7892880"
  },
  {
    "url": "assets/js/20.3b1da82e.js",
    "revision": "08698564f53c352d729d9a4c7590003f"
  },
  {
    "url": "assets/js/21.fc7fac12.js",
    "revision": "66aeeaa18bc894e1a1d0736756deb926"
  },
  {
    "url": "assets/js/22.4dab1a3d.js",
    "revision": "b5681d6dc9f397d3115416e8d47cd67c"
  },
  {
    "url": "assets/js/23.3d30670f.js",
    "revision": "46f42ca362e153086f0a58f72d6101f5"
  },
  {
    "url": "assets/js/3.a943c5c3.js",
    "revision": "802ef40dac6b657c68ba158f73990b38"
  },
  {
    "url": "assets/js/4.fd5b27bc.js",
    "revision": "74782f95e6eedbe1dcf0f34e61fe4fc3"
  },
  {
    "url": "assets/js/5.ff323453.js",
    "revision": "7f8800937bd0b2e0bf237d72f6e1cd3d"
  },
  {
    "url": "assets/js/6.31172f27.js",
    "revision": "9c200e0f1467b86c14895e3e7d7c8a9c"
  },
  {
    "url": "assets/js/7.7dcf9d38.js",
    "revision": "473aa96e1349359693d77ee21b922c9b"
  },
  {
    "url": "assets/js/8.e6037e64.js",
    "revision": "fcc4710a4dbc5f8a4d1b9849b81df0f2"
  },
  {
    "url": "assets/js/9.7670ee11.js",
    "revision": "85179b38a52e89869f065ff583b3328d"
  },
  {
    "url": "assets/js/app.7a2a89fe.js",
    "revision": "faeea7d4df8e97e3dc7e4bf5f4bb9b78"
  },
  {
    "url": "derech-hapeima/index.html",
    "revision": "78a401e2544251e74c98f8a416c95249"
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
    "revision": "16dd26e004791d58b1618cc1f7e7b983"
  },
  {
    "url": "mishvaot-hapeima/index.html",
    "revision": "92538f52df3b97c883ced168dc487aca"
  },
  {
    "url": "rosetta-stone/index.html",
    "revision": "9926080d52d77fa1bf98baa01e826a15"
  },
  {
    "url": "sefer-yetzira/index.html",
    "revision": "875ba2f4f17dd0c106ef4b62d16cb698"
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
