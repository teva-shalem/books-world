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
    "revision": "89c2480baa1df0fcfe4f5c2e5d3cb99a"
  },
  {
    "url": "assets/css/0.styles.f3a6069f.css",
    "revision": "5829ed1160d5613201324706f0d3c094"
  },
  {
    "url": "assets/js/10.8fa7362c.js",
    "revision": "f9c96320ab476fe65922500aa5d32427"
  },
  {
    "url": "assets/js/11.4b757437.js",
    "revision": "2290c6031a65466d21f08026722ebcfc"
  },
  {
    "url": "assets/js/12.0112e74b.js",
    "revision": "95411de3056f1dd9b60231092d365a34"
  },
  {
    "url": "assets/js/13.9492ec57.js",
    "revision": "99fb4c47c53f097bbd432efd6210ce1d"
  },
  {
    "url": "assets/js/14.a0d920cd.js",
    "revision": "9b237cf8de3ef9ffdbfcb07e1a679184"
  },
  {
    "url": "assets/js/15.1bb3a637.js",
    "revision": "f7ec59ba7bd501f7729b625bfa2a2f3f"
  },
  {
    "url": "assets/js/16.c1f7d9b4.js",
    "revision": "5dcda260de781f2690e184a89fe9ede3"
  },
  {
    "url": "assets/js/17.598f91aa.js",
    "revision": "22dfebf2419d2e25eef28bdfa5f744cf"
  },
  {
    "url": "assets/js/18.6e287c2a.js",
    "revision": "2e6165f40203b4f81d530b58c699b356"
  },
  {
    "url": "assets/js/19.a816918d.js",
    "revision": "7c9dd5dbb6711a73313fcbd562467ba7"
  },
  {
    "url": "assets/js/2.85973b40.js",
    "revision": "834a033b68984770864cbf5d278db854"
  },
  {
    "url": "assets/js/20.d3e63991.js",
    "revision": "9926711ba318531fc82abfce40eb0279"
  },
  {
    "url": "assets/js/21.2b19750c.js",
    "revision": "7054fd64da7e86a95277935555d9dc1b"
  },
  {
    "url": "assets/js/22.6a1d9ebb.js",
    "revision": "a3d8c208f7e6b945875151c6e5ab3321"
  },
  {
    "url": "assets/js/23.177dc324.js",
    "revision": "b643798a36caf132a240ec0a6e7569fe"
  },
  {
    "url": "assets/js/24.2117792b.js",
    "revision": "43e802208ba6ed7dc77f7c6a61dee145"
  },
  {
    "url": "assets/js/25.63684041.js",
    "revision": "d8ca5bc05306d590e6c57e75dedf7108"
  },
  {
    "url": "assets/js/26.7f859fd8.js",
    "revision": "dfb3f1f391f997275203eb7f466acf67"
  },
  {
    "url": "assets/js/3.1b35129e.js",
    "revision": "e9970646ead2827005db84f7d942be12"
  },
  {
    "url": "assets/js/4.9815d02e.js",
    "revision": "5498f67fc8b362f6a46ec0762ed23550"
  },
  {
    "url": "assets/js/5.dff3c3ec.js",
    "revision": "733518d1400f1c49acaa377d4cbe69ac"
  },
  {
    "url": "assets/js/6.b4fe0bd4.js",
    "revision": "8c6b2cb30042faf2b60146548bac6f0d"
  },
  {
    "url": "assets/js/7.09cb9547.js",
    "revision": "745c1b5d2e7dc936c61e36b0a00f0e0d"
  },
  {
    "url": "assets/js/8.d50b638f.js",
    "revision": "2557d38b9d21ee587fd3f83b9b8c5773"
  },
  {
    "url": "assets/js/9.d2e54b91.js",
    "revision": "ef6c72c0cff614019d3151d8e884d4d9"
  },
  {
    "url": "assets/js/app.1bfc0c24.js",
    "revision": "7aa44ae27fea16748b6688ae7ad0ad43"
  },
  {
    "url": "derech-hapeima/index.html",
    "revision": "e5085ebb3ab9a722ae99fdd391c9c192"
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
    "revision": "6b73bbb96aae7d9e46384f00d6bbcccd"
  },
  {
    "url": "mishvaot-hapeima/index.html",
    "revision": "9667a2a78c607bb8a1f5a6f9e3c02395"
  },
  {
    "url": "rosetta-stone/index.html",
    "revision": "28cc4b84d54e57145e4378d533de989d"
  },
  {
    "url": "sefer-yetzira/index.html",
    "revision": "68e89335550f8dbb07867c1cd8bb984a"
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
