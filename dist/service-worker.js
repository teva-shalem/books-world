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
    "revision": "dcd8e3ee9194fc0ae281c620fc5fccbe"
  },
  {
    "url": "assets/css/0.styles.457df625.css",
    "revision": "04b5655141ac0e3285f9872ccce25733"
  },
  {
    "url": "assets/js/10.0462f1a0.js",
    "revision": "5371904d1a8594675005e1a44d7c987d"
  },
  {
    "url": "assets/js/11.0fa78603.js",
    "revision": "5fa9cb7c980cc15e2e127ab0a53d8127"
  },
  {
    "url": "assets/js/12.0878cbfb.js",
    "revision": "a67c9d31ce832f58a65a842fc9a7c306"
  },
  {
    "url": "assets/js/13.b3739871.js",
    "revision": "1a8af2b27ae3a396ddf515ec8b746cf5"
  },
  {
    "url": "assets/js/14.5fcf23de.js",
    "revision": "e8fe2c912879b0eb67c42531cd02cc8c"
  },
  {
    "url": "assets/js/15.d1649f4b.js",
    "revision": "72a481ac0777ffcfe1a7043c4397c5a2"
  },
  {
    "url": "assets/js/16.e45e4530.js",
    "revision": "7b3bba24ba98ca3b24e19c76b4af2284"
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
    "url": "assets/js/19.6a1ab8e3.js",
    "revision": "d8c0dcad2f737e0256d87b6abedc2c6f"
  },
  {
    "url": "assets/js/2.1b3dc579.js",
    "revision": "10118a3bc4f6af6f8ff381ba7305c437"
  },
  {
    "url": "assets/js/20.3a7f7830.js",
    "revision": "e83eba73932e1c09292680ad7dce5fa2"
  },
  {
    "url": "assets/js/21.7315fe7a.js",
    "revision": "92f2afa20859d3dcd5467305bf0ccedc"
  },
  {
    "url": "assets/js/22.96d66a86.js",
    "revision": "b5681d6dc9f397d3115416e8d47cd67c"
  },
  {
    "url": "assets/js/23.a2edc93d.js",
    "revision": "5a7205ad6a315359004a5b50911bba83"
  },
  {
    "url": "assets/js/3.554d400b.js",
    "revision": "273c20df336b121c30206b2367615545"
  },
  {
    "url": "assets/js/4.46facacd.js",
    "revision": "2765cfb4903eaf0161c103460835e9a2"
  },
  {
    "url": "assets/js/5.b42c71c0.js",
    "revision": "f0a7e0206b652887bc1e011be435780d"
  },
  {
    "url": "assets/js/6.d706052c.js",
    "revision": "0ffb476d3912224d58faefc4a6554d07"
  },
  {
    "url": "assets/js/7.7f010760.js",
    "revision": "a0f03a3fbef86ad5146d2e7313bedd97"
  },
  {
    "url": "assets/js/8.b9611aa2.js",
    "revision": "6075e3e5acb09d6803f283eb37670b55"
  },
  {
    "url": "assets/js/9.14f67906.js",
    "revision": "6378bf8f11b3c53389e999f234999769"
  },
  {
    "url": "assets/js/app.4d7be4d4.js",
    "revision": "88c265e4783053d2c72006ad6d1e4560"
  },
  {
    "url": "derech-hapeima/index.html",
    "revision": "a46c9e92af1f3bfae8daeb7cb57bc98c"
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
    "revision": "d34413826799d595a8e87435ebaaead3"
  },
  {
    "url": "mishvaot-hapeima/index.html",
    "revision": "ed79486a6c28754e6e6752693b8b6c31"
  },
  {
    "url": "rosetta-stone/index.html",
    "revision": "e6e13b4d9281d8e3e1a1423720a256f1"
  },
  {
    "url": "sefer-yetzira/index.html",
    "revision": "9bf6c3e5c18838f6640e549a5831eb88"
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
