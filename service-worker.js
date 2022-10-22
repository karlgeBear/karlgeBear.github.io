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
    "revision": "bd840a82dc1c16e47ee88b770137ff39"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "26b4137c3cd654bf3ea34e72c3c60242"
  },
  {
    "url": "articles/index.html",
    "revision": "2b20583523303a415fff6b51aa3ab3fc"
  },
  {
    "url": "articles/JsWeb/Ts/01_start.html",
    "revision": "94f5ffc2fb36ce3b63f007ffed30fb37"
  },
  {
    "url": "articles/JsWeb/Ts/02_tsBase.html",
    "revision": "4b02ce85c0dab6b12ef983220702c310"
  },
  {
    "url": "articles/JsWeb/Ts/03_tsAdvanced.html",
    "revision": "6ea0289bab2330c273e0501524900adb"
  },
  {
    "url": "articles/JsWeb/Ts/04_tsCreateProject.html",
    "revision": "70f4296b47ec0a2dbec341e05beb929c"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "d8ab70b915f166a5e4b90a392ac6ff82"
  },
  {
    "url": "articles/Node/egg/egg.html",
    "revision": "7f4f75f32e4f63253467cd8a554dd106"
  },
  {
    "url": "articles/Node/express/express.html",
    "revision": "495f348b65f4005bd6673279090498c3"
  },
  {
    "url": "articles/Node/koa/koa.html",
    "revision": "73187b7055537c19dbe12595db5673d4"
  },
  {
    "url": "assets/css/0.styles.6514727f.css",
    "revision": "ca6e7b25038d446cc146e3bb184c8d5b"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/declare1.0f9ccdd4.png",
    "revision": "0f9ccdd4f0c22f5e63abbe145deee1a3"
  },
  {
    "url": "assets/img/declare2.0debe564.png",
    "revision": "0debe564967df786a64c066d64a18050"
  },
  {
    "url": "assets/img/decorator.5be9fbb2.png",
    "revision": "5be9fbb257d7254d4a70bef17c45f53b"
  },
  {
    "url": "assets/img/dev_or_builid.c040a855.png",
    "revision": "c040a8557805d14b711e56fb91a730ad"
  },
  {
    "url": "assets/img/development.c8e01722.png",
    "revision": "c8e017227004b7b9fe9c397350dc8ca4"
  },
  {
    "url": "assets/img/fileTree.8b8b1d33.png",
    "revision": "8b8b1d33fd3586084ee99cb77f6b29c8"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/print_NODE_ENV.aaad0a80.png",
    "revision": "aaad0a8078121b43920a5ec7bde904c3"
  },
  {
    "url": "assets/img/production.6c311ee0.png",
    "revision": "6c311ee06a03b9ebd97df63cb95a5283"
  },
  {
    "url": "assets/img/promise.cf5fc2f9.png",
    "revision": "cf5fc2f9dd81b891be99c6298c923cf8"
  },
  {
    "url": "assets/img/publish-subscribe.c8d72dd1.png",
    "revision": "c8d72dd16c5eeec461531dbb4d8d3686"
  },
  {
    "url": "assets/img/typetuiduan2.262e9246.png",
    "revision": "262e9246797e0fe1f99f858e1a26d65a"
  },
  {
    "url": "assets/js/1.850f3655.js",
    "revision": "b1afe5b907e57393922524f744dd97de"
  },
  {
    "url": "assets/js/10.5524bc8f.js",
    "revision": "1ade7e84788ce27aff6a278f14e8d398"
  },
  {
    "url": "assets/js/11.8ffa9582.js",
    "revision": "e0d09ad19b61de3956c19aeed6d576fb"
  },
  {
    "url": "assets/js/12.585c7002.js",
    "revision": "d5ced63a7a81ac6d22c93b800d21329a"
  },
  {
    "url": "assets/js/13.16a3bf83.js",
    "revision": "b5d2aa6f15824fb0b0b615e10b521580"
  },
  {
    "url": "assets/js/14.926866d2.js",
    "revision": "defdab56dbe3a6c34af1cf1309ab7261"
  },
  {
    "url": "assets/js/15.bbee9ee2.js",
    "revision": "d03f01c7bb8f1ca533f4b9d53cd83cd0"
  },
  {
    "url": "assets/js/16.0546e043.js",
    "revision": "3fadf073ad6cd8a864ed943da1ff6921"
  },
  {
    "url": "assets/js/17.26064bf1.js",
    "revision": "d0d98da710473d76db8403dc2023cae1"
  },
  {
    "url": "assets/js/18.5cce9d2e.js",
    "revision": "267a1db00b855c983a86bb5e625f0aae"
  },
  {
    "url": "assets/js/19.fcd1f343.js",
    "revision": "23b003c16d4bf7dfd532ab2e4a9c870e"
  },
  {
    "url": "assets/js/20.b8e38701.js",
    "revision": "cf7607c73d14a4948ae051bae3f68512"
  },
  {
    "url": "assets/js/21.e02e50c4.js",
    "revision": "0a55cb7770842486c8037bc3e4940681"
  },
  {
    "url": "assets/js/22.3664ddc9.js",
    "revision": "61bc553c9e3a857240e40020e81946ea"
  },
  {
    "url": "assets/js/23.f9decf98.js",
    "revision": "4784c7d146f57bdcf6a7da3d6107ad09"
  },
  {
    "url": "assets/js/24.e88c87e6.js",
    "revision": "6b0ab5f18e4a0d62cdb4e5ba1afe2e88"
  },
  {
    "url": "assets/js/25.076adb64.js",
    "revision": "8d565e2b002689fd0de10b32c3c43e92"
  },
  {
    "url": "assets/js/26.f8e65ae2.js",
    "revision": "5ebf037a4c36a9a43d2140701bdff09b"
  },
  {
    "url": "assets/js/27.f59d647f.js",
    "revision": "ac2b362a3f52a4a602ef198cc4f7ecf0"
  },
  {
    "url": "assets/js/28.906137f1.js",
    "revision": "470a422be5a2a5c2517be55f9a4b8cc7"
  },
  {
    "url": "assets/js/4.344db7d2.js",
    "revision": "6c7731bed4b8a9b433d27c33da2c558a"
  },
  {
    "url": "assets/js/5.684c17ac.js",
    "revision": "21e8a6d5f287db7c6842ee5c4710903d"
  },
  {
    "url": "assets/js/6.794532db.js",
    "revision": "16127099c615e7d59fe41cfac3d47e69"
  },
  {
    "url": "assets/js/7.2d68d2ab.js",
    "revision": "97f09911d09131cb6b1693ea4b3167e1"
  },
  {
    "url": "assets/js/8.8fa0831c.js",
    "revision": "09ce5e79f505669bde26ed0d20ced08c"
  },
  {
    "url": "assets/js/9.7db52514.js",
    "revision": "2d6b1444b1ff4642c53e71b92693a896"
  },
  {
    "url": "assets/js/app.e2bab5be.js",
    "revision": "6df963d12868c2614598e2860caa08e8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.b13b7ecc.js",
    "revision": "99f3facd0fe8f9a4620bd69d6dc642da"
  },
  {
    "url": "avatar.jpg",
    "revision": "a992d5ffffde939a84af88d37f1d4c9d"
  },
  {
    "url": "categories/express/index.html",
    "revision": "03ec1286760f515df0e1c948ec26c26b"
  },
  {
    "url": "categories/index.html",
    "revision": "467ba4ffaab3d1baf664522c114fef25"
  },
  {
    "url": "categories/java/index.html",
    "revision": "548ec076ed9f00317d193086b8c252bf"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d613e810a02f6d83dec1a20c2828bfc6"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "1538ce85047e745a1209f274655c2fac"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "3d82adf0fc92034d7e8daa373c0f7405"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "590e612be66c47db3e51249b3a001592"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "2d694d31482117684426a3173f909231"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "94c4f781a87882df9eac6faa9a2f46d2"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d6e5bcdcac64f3442f8543d2384cfa1e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9257ebdb0f726584d3a2defdacdeebf9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/log.png",
    "revision": "65a0f3b7b9993f0412cc4e9d6bab2e44"
  },
  {
    "url": "img/logo.png",
    "revision": "683037d32f749e964cedc59783998374"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "838cea77b41d2b5d5656f5b0f0f5af1b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e426a83ec1e8527339945806a416fa55"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "76ad3413dbd9cec8294063b7b8e75754"
  },
  {
    "url": "tags/express/index.html",
    "revision": "202460b3782704078a88806a1486c2c4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "28e4636976bdb5518342098bdd34252c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d306974f36043ac4d0db4e99180accbc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2cd7ae1582fbacfa74bf47fec7ecceb1"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "bb790e1ae004ae987ad5514e7633dfe2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7396458f9f6f8db4f75aba1081d96ac2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "95f59148dc3c0eef66a4a14998a70ae4"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "91c968d70a7db8873f09d2fe7c934bb9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6e2b984a0e6b963ef7e59d2db0b34d22"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "144051d4eb5438d9fcedbfef5d1632dd"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "f44be3b09b8dee49f03c3124faaf17b1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a87e3022707756a61a2cdce58187aeb0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cd934a58bb99814e569cd327dbcc3d33"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "69c80a4e60f6840205efb8784365811d"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "24f5694e6c939e130486bdab742337e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "c5e5d03ad8979d5f41f68d9b78701e77"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1a27adef24d22b152233034aa1ad7ab1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "afeb6e5d2b33bf6592e6fe9e0982efd5"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "441d8bdc443f0e02bd7a98cf3cf2c105"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ef11dc5e65e6eea3be097e08c87ebd72"
  },
  {
    "url": "生活分享/life.html",
    "revision": "739acdfc9d2090d0d86d86028d1f03b5"
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
