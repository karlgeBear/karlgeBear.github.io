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
    "revision": "6391628747da0db923b2174d999ef981"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "48094984a399aea821ff2c5da123016a"
  },
  {
    "url": "articles/index.html",
    "revision": "78662c0c757e1472cd84cf71ae894adf"
  },
  {
    "url": "articles/JsWeb/Ts/01_start.html",
    "revision": "861e742b73ff34769faa59034d2b2079"
  },
  {
    "url": "articles/JsWeb/Ts/02_tsBase.html",
    "revision": "31494843936c6d4cffd645fe1502ca7a"
  },
  {
    "url": "articles/JsWeb/Ts/03_tsAdvanced.html",
    "revision": "bdbe60851068f6497112b7521044b08c"
  },
  {
    "url": "articles/JsWeb/Ts/04_tsCreateProject.html",
    "revision": "3e1fdfa51edefebf79640be8a3513114"
  },
  {
    "url": "articles/JsWeb/Vue3/01_start.html",
    "revision": "b4928372ea59ebed0914799e9c95aa8e"
  },
  {
    "url": "articles/JsWeb/Vue3/02_study.html",
    "revision": "01fd36d80aeb0dc4821d47674efcae30"
  },
  {
    "url": "articles/Node/egg/egg.html",
    "revision": "fa833fe9f9cbcba8f5a49f6d6a409ae1"
  },
  {
    "url": "articles/Node/express/express.html",
    "revision": "814a5adfc9c20e40c6c049ba4b7e5a58"
  },
  {
    "url": "articles/Node/koa/koa.html",
    "revision": "89dc9c7a1f48bd1469b14e47c192c077"
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
    "url": "assets/img/computed.e127ee02.png",
    "revision": "e127ee02a5eb751001d7ef34f3ca789b"
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
    "url": "assets/img/lifecycleVue2.6f2c97f0.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "assets/img/lifecycleVue3.1ae3c5f4.png",
    "revision": "1ae3c5f487a9e53a6371f3447f1728b8"
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
    "url": "assets/img/reactive.0a703167.png",
    "revision": "0a7031676fb87c2f12b1b22a99690ddd"
  },
  {
    "url": "assets/img/ref.da35f518.png",
    "revision": "da35f518a975683c4f687596f55f4b48"
  },
  {
    "url": "assets/img/toRefs.16bf2e3e.png",
    "revision": "16bf2e3e3d1f1d407e1f3c03b043e56f"
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
    "url": "assets/js/10.7434ffe6.js",
    "revision": "e2069865e011fbca5447faa5cb80541f"
  },
  {
    "url": "assets/js/11.aa98cd58.js",
    "revision": "27eb33286e3c1b3a3709e32ff05087d2"
  },
  {
    "url": "assets/js/12.d5b0e2e6.js",
    "revision": "2b20fef597d491e44f4ad422c28df3b9"
  },
  {
    "url": "assets/js/13.55a90a65.js",
    "revision": "bcf0db6f42709563cc61f2fffc371f6d"
  },
  {
    "url": "assets/js/14.7d42b608.js",
    "revision": "1cb371a9e4b84c45dcaa1fde405d73f5"
  },
  {
    "url": "assets/js/15.bfaefe9d.js",
    "revision": "d09cf61614ae44808c42c975672cbd2c"
  },
  {
    "url": "assets/js/16.67722db1.js",
    "revision": "ed320f9d2224a2341523c9780cd4ded5"
  },
  {
    "url": "assets/js/17.f9f01931.js",
    "revision": "592219c20f55527b767ca9610ef060ef"
  },
  {
    "url": "assets/js/18.fbbf3cc0.js",
    "revision": "f48138ef8395672c28e6c598977bb84e"
  },
  {
    "url": "assets/js/19.c915782e.js",
    "revision": "817814f5db4e21379f7a9105d8008025"
  },
  {
    "url": "assets/js/20.36a72117.js",
    "revision": "57c2dee9b715af7bf988909167005f5e"
  },
  {
    "url": "assets/js/21.6e8448be.js",
    "revision": "58eb1b4549cacff96ef93633a96f0835"
  },
  {
    "url": "assets/js/22.38de0398.js",
    "revision": "8cfcaa642230410e6879a06974fe1261"
  },
  {
    "url": "assets/js/23.b8186df4.js",
    "revision": "181e01fd8250cc2995e36f523cadc158"
  },
  {
    "url": "assets/js/24.10781e47.js",
    "revision": "8b45200cbb8058b12eee3b8c5f07662a"
  },
  {
    "url": "assets/js/25.cd1faec7.js",
    "revision": "73f4d505f80f6494a2bb8135dc68fc79"
  },
  {
    "url": "assets/js/26.7a917fd0.js",
    "revision": "f82fe56bb01fc48b02aafd28da1781c2"
  },
  {
    "url": "assets/js/27.593291db.js",
    "revision": "1484e5da51050919346e414913c57904"
  },
  {
    "url": "assets/js/28.de99d88b.js",
    "revision": "061791c98cc76ab28abddeeedd1bc5b2"
  },
  {
    "url": "assets/js/29.b146c640.js",
    "revision": "663b1c816eb2682273f2705652e3b066"
  },
  {
    "url": "assets/js/4.0ab9c2ca.js",
    "revision": "94e3f9fd42f72af228996dccb4802362"
  },
  {
    "url": "assets/js/5.c6f13b2f.js",
    "revision": "7e1635ed9f774f3fe779ece8466551d7"
  },
  {
    "url": "assets/js/6.58e0a218.js",
    "revision": "61d138f6179a46cef7d1c444b23accdb"
  },
  {
    "url": "assets/js/7.301e818d.js",
    "revision": "b75e183a8e635cdc8c014ef112a191d4"
  },
  {
    "url": "assets/js/8.985ca961.js",
    "revision": "e7b39498cb07426e8ae605d7c279e26a"
  },
  {
    "url": "assets/js/9.295f1808.js",
    "revision": "7bef2187b7a0c7545c67636e8f9dc3b6"
  },
  {
    "url": "assets/js/app.919cac50.js",
    "revision": "959b460874284a69d658a6f192845eca"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.33fdbb35.js",
    "revision": "c902c68a1c9fa5fd434df5f2dc7a125d"
  },
  {
    "url": "avatar.jpg",
    "revision": "a992d5ffffde939a84af88d37f1d4c9d"
  },
  {
    "url": "categories/express/index.html",
    "revision": "c051e513fac53eeac0d317b5bc4f6725"
  },
  {
    "url": "categories/index.html",
    "revision": "510d5b6fa3e1b2acd63ff1e01497ff10"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c0c8fbbe233edef189f2a3aea3d73727"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e1ac13f6cdc303362b21e35977d439ae"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "3749961f63280679c23340982696525d"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "62784972e7359a11b8b2f33283a6e391"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "69332be590a5e556aee57bda9a3c382c"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "2190beea1fc7ccdc78fa544419e4a8a4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "90b04f185d579a62e847545bfff0955c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5bf9f9e17490936540cd39742d083ba4"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "73f9ee62e3c563e9060e708d4dbd7614"
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
    "revision": "bea9ddfee3ec3cb0a1f36252549b779b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "lifecycle-vue2.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "lifecycle-vue3.png",
    "revision": "1ae3c5f487a9e53a6371f3447f1728b8"
  },
  {
    "url": "tag/index.html",
    "revision": "5d16474b76cb6d17f64e9462c128eec1"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "d0f0c007337d4c012512bdf124287150"
  },
  {
    "url": "tags/express/index.html",
    "revision": "eac9a44a4410bf844f9b0696fe4e27fc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "120c14397bdbf5bd44d09e26014abebe"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "07593f4ca1072961f136e3cceba83db9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "35cca2f83532476908ecc7931f68c8f9"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "497db0b30ba3973293fb910db5658531"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6daed7b669f73829e756f7ec1c88193b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "df93a2319fcf0895269ee35b48a667e7"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "4b055440f48682d1ddf48503990c2221"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0f7be6128357717267eccf0ac85f8133"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "69045393ff6666837d78e18e2604ad1b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9586886a3599518f4fd0640771f92138"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "936dcc8eda06518a039fe0fed61b3297"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "37a735661b16d57ac306c68a3a23df3c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "925216e343029a3739376987acf51ed5"
  },
  {
    "url": "timeline/index.html",
    "revision": "763d2394e448cf5e3b478a1bad426f70"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1ef44fb34048e5c6e74f9d6079332ab7"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2a2c56f66fe31e1d380b8ff8d96a2ac5"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0c55c573cced0f47a0733d8929c7a41e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a8d876df4d5c86a7951afd3b3632996b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7511388f0f2fd4c1017feaa157ed9713"
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
