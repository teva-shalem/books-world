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
    "revision": "9313330519432a813e52ff94ab5abcad"
  },
  {
    "url": "assets/css/0.styles.01f91b6d.css",
    "revision": "203851ed5400656caacc7b244a04c3b3"
  },
  {
    "url": "assets/js/10.043dbc20.js",
    "revision": "f74d501160e877e7d9ec6001c7fdfacd"
  },
  {
    "url": "assets/js/11.c3b46415.js",
    "revision": "6a5c6068ef8bf843301fedc2c8483c06"
  },
  {
    "url": "assets/js/12.15a9ac1b.js",
    "revision": "6d2b41f5537bbf572842695032f75098"
  },
  {
    "url": "assets/js/13.98efc97f.js",
    "revision": "587922372f1580819c6fcf16e2690585"
  },
  {
    "url": "assets/js/14.179e09bb.js",
    "revision": "bfd6ec9534acfbce23c98a96a169e781"
  },
  {
    "url": "assets/js/15.3078042b.js",
    "revision": "4dca08fa3ff57a1b5d2d6cf571fa58df"
  },
  {
    "url": "assets/js/16.af9e36f7.js",
    "revision": "f65b4adedbfb35c2aa006a6f949e6db0"
  },
  {
    "url": "assets/js/17.a25bedd9.js",
    "revision": "d7b5faac30fcbdceadf3f7a8f0b1206f"
  },
  {
    "url": "assets/js/18.55cf783b.js",
    "revision": "22cb7ec941af3cd640ff73ca1a9cdcbd"
  },
  {
    "url": "assets/js/19.b42cdc29.js",
    "revision": "9560029880dfc099c2cb059802722e9f"
  },
  {
    "url": "assets/js/2.965a227f.js",
    "revision": "c448155d95d1e19c68453df51883f312"
  },
  {
    "url": "assets/js/20.cc8432f6.js",
    "revision": "a9801a9151482162a0cce1956f4491cd"
  },
  {
    "url": "assets/js/21.41c18e59.js",
    "revision": "92f2afa20859d3dcd5467305bf0ccedc"
  },
  {
    "url": "assets/js/22.4dab1a3d.js",
    "revision": "b5681d6dc9f397d3115416e8d47cd67c"
  },
  {
    "url": "assets/js/23.bf7cfb6b.js",
    "revision": "9ed7a82b3dd91e38009bbc7a12bdab0d"
  },
  {
    "url": "assets/js/3.494f2115.js",
    "revision": "83690bd103bf74b71423fad4f40b3684"
  },
  {
    "url": "assets/js/4.ab797474.js",
    "revision": "280a957a3b4c6b237ee2567a8b348fdb"
  },
  {
    "url": "assets/js/5.50e2a0e4.js",
    "revision": "a77792800e5e5f8af1aa426688eec62a"
  },
  {
    "url": "assets/js/6.c78eceac.js",
    "revision": "a85b7ff1771f2f2b29e0f46196b5aa9d"
  },
  {
    "url": "assets/js/7.cd0e0b83.js",
    "revision": "9a8a51bfaa268bc16e904f7426301caf"
  },
  {
    "url": "assets/js/8.53a95eba.js",
    "revision": "9f175beddc6f291bb8220a2fbe5b15f2"
  },
  {
    "url": "assets/js/9.8dc034a6.js",
    "revision": "c6046823f022fa36d9bc59c9f6c598d2"
  },
  {
    "url": "assets/js/app.77f06de0.js",
    "revision": "0f3fcb6c0c475e3b3bcc4ae274da3d66"
  },
  {
    "url": "derech-hapeima/index.html",
    "revision": "435e298d48944ba69e67f0bf8ab42f33"
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
    "revision": "2c2df945b737374aa348f8266f7e1ec5"
  },
  {
    "url": "mishvaot-hapeima/index.html",
    "revision": "93f2a0efa85d576fa87ae5de29a840c1"
  },
  {
    "url": "rosetta-stone/index.html",
    "revision": "dc6aa73944a4950a7a6cceb0db857b38"
  },
  {
    "url": "sefer-yetzira/index.html",
    "revision": "aa129dd5bb218399b19f032231e3aba8"
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
