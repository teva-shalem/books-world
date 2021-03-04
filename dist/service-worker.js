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
    "revision": "7f455dd558bab0deb6439c254b67f339"
  },
  {
    "url": "assets/css/0.styles.0306c264.css",
    "revision": "d843a39a20702aec5c29e789f8966001"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/js/10.1e98ee1c.js",
    "revision": "fff4b429cf1f2ca0a0c629f3bf848307"
  },
  {
    "url": "assets/js/11.13382685.js",
    "revision": "45ba8294625273f6f6763839613366d6"
  },
  {
    "url": "assets/js/12.380b300a.js",
    "revision": "73253bf377387ea7ef56616f340f81aa"
  },
  {
    "url": "assets/js/13.3e5cf395.js",
    "revision": "827e8fbfa96ba423fb4f57bdd34373e8"
  },
  {
    "url": "assets/js/14.148fb391.js",
    "revision": "b72ffdf60b5759dd3a8a71ba53b8b58e"
  },
  {
    "url": "assets/js/15.943af295.js",
    "revision": "9ca916f9664b5c0e999dd28735fdaae2"
  },
  {
    "url": "assets/js/16.1fece50f.js",
    "revision": "b58c6d789dfe4bb2b0592b688a95746c"
  },
  {
    "url": "assets/js/17.acddd478.js",
    "revision": "fd1c8afbfc0be6cad3322f8496d66a31"
  },
  {
    "url": "assets/js/18.1b6f3260.js",
    "revision": "fa1103ff101ae9ffc7973a9710be13de"
  },
  {
    "url": "assets/js/19.ab4584ce.js",
    "revision": "9b2cadf2a1118f7164adc07c2720d9a2"
  },
  {
    "url": "assets/js/2.534f035e.js",
    "revision": "b2044b304743721c4e4bf62632feaa11"
  },
  {
    "url": "assets/js/20.2a06bcd7.js",
    "revision": "e1bd4aca16869689915e1df043a56b50"
  },
  {
    "url": "assets/js/21.2d1b1b11.js",
    "revision": "b18d1484a06c7afa17ba59586e4e62a0"
  },
  {
    "url": "assets/js/22.b2b268f6.js",
    "revision": "c59769aebbfc80dd01ac128c38a68a5b"
  },
  {
    "url": "assets/js/23.51bb1e0d.js",
    "revision": "fdc9df0ed946e08a438d0550d81277e3"
  },
  {
    "url": "assets/js/24.d53ce89a.js",
    "revision": "88a6a56dd1836fedb69ccbae4c1d28e2"
  },
  {
    "url": "assets/js/25.f4bd59a8.js",
    "revision": "c4e69d0708815fd3f0d5e4397b5dad4e"
  },
  {
    "url": "assets/js/26.c7403120.js",
    "revision": "04f35e17db29b53e63a0484640b10894"
  },
  {
    "url": "assets/js/27.0d41c694.js",
    "revision": "9ab6c964e681ca35c279882aaf043abe"
  },
  {
    "url": "assets/js/28.91230f32.js",
    "revision": "3591b6e03749dce023bd3e61de4e5e6f"
  },
  {
    "url": "assets/js/29.b59328e1.js",
    "revision": "24ba9a40186b14aff6f3b2b5e170a860"
  },
  {
    "url": "assets/js/3.9bb817c2.js",
    "revision": "e688c2b8977a0d19ca20f1e0b8093b42"
  },
  {
    "url": "assets/js/30.86996fb1.js",
    "revision": "24836408632c88a5f0f8e6049d9c425b"
  },
  {
    "url": "assets/js/31.57d95827.js",
    "revision": "079d80e57986147d499c2cd604d1861a"
  },
  {
    "url": "assets/js/32.06ef70b7.js",
    "revision": "bfff8a427e2d8484ba343c42fcd4a4b9"
  },
  {
    "url": "assets/js/4.aee96c2b.js",
    "revision": "5faa6552c532dd2aa516996f0b7dba2c"
  },
  {
    "url": "assets/js/5.4c8691e7.js",
    "revision": "cc002f785b587d8bdbafa7efe1488a17"
  },
  {
    "url": "assets/js/6.516e98e5.js",
    "revision": "79b20d1f28cb03273825f7b4c4ec0202"
  },
  {
    "url": "assets/js/7.d064d207.js",
    "revision": "acec76c18241c1d85586fbc95b1f7830"
  },
  {
    "url": "assets/js/8.76c5caca.js",
    "revision": "e48844d9545115d599a5ff62580c2c6c"
  },
  {
    "url": "assets/js/9.7db3faf0.js",
    "revision": "4b53f77a7c8db964c148f847b4bf28cd"
  },
  {
    "url": "assets/js/app.4cddb5ce.js",
    "revision": "b612f0b3c0d1d30ce8337a3171987e5c"
  },
  {
    "url": "composition-book/index.html",
    "revision": "a86245b1f3f25ff15c77a324142a3fda"
  },
  {
    "url": "derech-hapeima/index.html",
    "revision": "e3c0e7079152c8208a0a4cce88162096"
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
    "url": "images/cosmology-model.jpg",
    "revision": "a8747aafef0d86182ff38e1beca4efdf"
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
    "url": "images/david-symbol-transparent.png",
    "revision": "0d70757a5f1ffead6bfe3b4e5ac412f5"
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
    "url": "images/equation-terra-dynamics.jpg",
    "revision": "3cb5d29bb0d5418144b97cd5eda77912"
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
    "url": "images/icon-down-arrow.png",
    "revision": "077613251f4f68c2c8e07f7bda643a86"
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
    "url": "images/layered-model.jpg",
    "revision": "594d5c02f8708489ba7d814715a83102"
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
    "url": "images/ndd/10.svg",
    "revision": "e8bb83392b34a6f4d668d2824924ca77"
  },
  {
    "url": "images/ndd/5.svg",
    "revision": "fe6d12f6cf09e16549510f1a79477a84"
  },
  {
    "url": "images/ndd/6.svg",
    "revision": "f6cae1eb90aa25d28e227ba6b295c2f1"
  },
  {
    "url": "images/ndd/7.svg",
    "revision": "fe95414ae6244766dce1b71a7f06ed1d"
  },
  {
    "url": "images/ndd/8.svg",
    "revision": "61626bd1a511daab4333f742a8f4691c"
  },
  {
    "url": "images/ndd/9.svg",
    "revision": "dcfed7e0bbb29357c33003a41cfb002f"
  },
  {
    "url": "images/ndd/Air.svg",
    "revision": "1c555cca3f5a21e81318a60058783560"
  },
  {
    "url": "images/ndd/Dot.svg",
    "revision": "b3f1c6bef11a504641ca2fb27157bd54"
  },
  {
    "url": "images/ndd/Eternity.svg",
    "revision": "9123157d8fb355371d62ca5908c513fd"
  },
  {
    "url": "images/ndd/Fire.svg",
    "revision": "4bbe8b2a250413b2f13523ffeb0ba003"
  },
  {
    "url": "images/ndd/Insight.svg",
    "revision": "f38a31c85dec690d7fff02805535913a"
  },
  {
    "url": "images/ndd/Love.svg",
    "revision": "7b9e7afbce7299ed7bb7a82049af0a8c"
  },
  {
    "url": "images/ndd/Pulse.svg",
    "revision": "09878a9e4e51fc4aac0851cd224ad19d"
  },
  {
    "url": "images/ndd/Water.svg",
    "revision": "12aea4a2423dedf8adf25b6f9ecc69ff"
  },
  {
    "url": "images/ndd/ג.svg",
    "revision": "7e13a40d4b3928707dc613e7d3e784e3"
  },
  {
    "url": "images/ndd/ד.svg",
    "revision": "6840ef85ba3adfaf20181907b9cd2353"
  },
  {
    "url": "images/ndd/ה.svg",
    "revision": "37cf36c7bd11da7020da889fb2256b18"
  },
  {
    "url": "images/ndd/ו.svg",
    "revision": "aaa9fb467dd9ac3ce90368f759af5bbf"
  },
  {
    "url": "images/ndd/ז.svg",
    "revision": "ca10e9d7b07a8b43cb76a6038d58466b"
  },
  {
    "url": "images/ndd/ח.svg",
    "revision": "e064eae1e6ff8cc49c60101fe722c67a"
  },
  {
    "url": "images/ndd/ט.svg",
    "revision": "c112fb72299d92128b533305e1ab9cef"
  },
  {
    "url": "images/ndd/י.svg",
    "revision": "0c645641c98e7df57fbe3aaf512468f3"
  },
  {
    "url": "images/ndd/כ.svg",
    "revision": "4d962a31ac4e22952c8bf6b2722458c0"
  },
  {
    "url": "images/ndd/ל.svg",
    "revision": "64011dea5640d3cc40f838cffd8058ef"
  },
  {
    "url": "images/ndd/נ.svg",
    "revision": "6b4be5517b4953edc2fb1ab8a0ea1c8f"
  },
  {
    "url": "images/ndd/ס.svg",
    "revision": "83ac197d286c867f406db95adb6aac7c"
  },
  {
    "url": "images/ndd/ע.svg",
    "revision": "0eed18beb51f908cef7234fe5e6606c7"
  },
  {
    "url": "images/ndd/פ.svg",
    "revision": "f9079985304e3a1618807df8eb94061c"
  },
  {
    "url": "images/ndd/צ.svg",
    "revision": "bcbba1ac733136796be58a47d87e118e"
  },
  {
    "url": "images/ndd/ק.svg",
    "revision": "7dacb9ffd1f16d5fd8316f396e06af82"
  },
  {
    "url": "images/ndd/ר.svg",
    "revision": "c53e0920f4890b7deb788f04b41c699a"
  },
  {
    "url": "images/ndd/ת.svg",
    "revision": "4b2b89c0acb665803dc0a610dafe7f1b"
  },
  {
    "url": "images/nostalgia.jpg",
    "revision": "fa8f3a9f0a5a378edc93c1045b61816e"
  },
  {
    "url": "images/osi-model.svg",
    "revision": "02e9fbf43294065e23c0bd8a2686f79c"
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
    "revision": "6ea8c5a343b3b5cdc13804db7fa740eb"
  },
  {
    "url": "mishvaot-hapeima/index.html",
    "revision": "1c5778dbf72965ca88a7f753c2268c44"
  },
  {
    "url": "rosetta-stone/index.html",
    "revision": "f25e1a5949e820ceee708775314d7732"
  },
  {
    "url": "sefer-yetzira/index.html",
    "revision": "e641ac567b379a25fd52ebd7c5760b0e"
  },
  {
    "url": "slideshow/index.html",
    "revision": "893ae8217d6d2e45c653c58bef4ffb16"
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
