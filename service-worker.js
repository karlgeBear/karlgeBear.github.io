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
    "revision": "6168e587a53287c59eab7fbe74b56b52"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "6bd3b9931960b661bfc56b94a42ffb89"
  },
  {
    "url": "articles/index.html",
    "revision": "50389d59b4642056d5c5aaa4ae73a69c"
  },
  {
    "url": "articles/JsWeb/Ts/ts-other.html",
    "revision": "4cd2e4e0b3aa2930a1c7a6b936bc0755"
  },
  {
    "url": "articles/JsWeb/Ts/ts.html",
    "revision": "564793bb1042202bc361fd74d5d11364"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "5e967eb37542d367dbe6415bbc7c12d1"
  },
  {
    "url": "articles/Node.js/egg/egg.html",
    "revision": "dab5cd684a79c84e6000b23bd54c20e4"
  },
  {
    "url": "articles/Node.js/express/express.html",
    "revision": "16c476bd486860586a3514006ad94c2f"
  },
  {
    "url": "articles/Node.js/koa/koa.html",
    "revision": "4118ee3428d9287f2997ef5c71836ab3"
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
    "url": "assets/js/1.850f3655.js",
    "revision": "b1afe5b907e57393922524f744dd97de"
  },
  {
    "url": "assets/js/10.0a31588f.js",
    "revision": "8a74a0827214d757f9f6014f55384d4e"
  },
  {
    "url": "assets/js/11.8c8e9645.js",
    "revision": "3dea214b1eabacc8d43fbb7fc42e59db"
  },
  {
    "url": "assets/js/12.3bd577ca.js",
    "revision": "e35853ad169e69fbda367eca83a6bafd"
  },
  {
    "url": "assets/js/13.e77af1b8.js",
    "revision": "a7cb6703987b540bd94cc73926a335e4"
  },
  {
    "url": "assets/js/14.cacf9030.js",
    "revision": "304764c7c89ab7bd8ea344de104b34c2"
  },
  {
    "url": "assets/js/15.f831ebb7.js",
    "revision": "98b55fdfafea5d245ccc0cc7aed9f129"
  },
  {
    "url": "assets/js/16.6d4c3c16.js",
    "revision": "bc3ff2c3078ed0460301647d12025682"
  },
  {
    "url": "assets/js/17.560d77e3.js",
    "revision": "df47ea9d8531f6a4c7ffb24ce968fdbc"
  },
  {
    "url": "assets/js/18.3b8affc9.js",
    "revision": "733084e9a22066d8c64a856e9016a0b4"
  },
  {
    "url": "assets/js/19.2c320c50.js",
    "revision": "90de1edf6a3d2cf88697511e8b80dd3e"
  },
  {
    "url": "assets/js/20.7e8aa851.js",
    "revision": "58816ee8eae74c3d0d29dcd573504f1a"
  },
  {
    "url": "assets/js/21.25b49f4a.js",
    "revision": "891f593938449c84b98b7167f0237cef"
  },
  {
    "url": "assets/js/22.d3abe735.js",
    "revision": "13e30f31862a1865e4b06c64e1eda659"
  },
  {
    "url": "assets/js/23.85d64f67.js",
    "revision": "355f99b44b342d2d4310695bebd7acef"
  },
  {
    "url": "assets/js/24.f1fe6262.js",
    "revision": "7517b17b8b0b5008bc178f3de10f590b"
  },
  {
    "url": "assets/js/25.bd8e2742.js",
    "revision": "cccadf695d3b752ca2e2c07945b22a8f"
  },
  {
    "url": "assets/js/26.b59f4cf5.js",
    "revision": "ff9798fef8a792d837f53f6accb9673e"
  },
  {
    "url": "assets/js/4.2717be7a.js",
    "revision": "c2010d8f47b8cf1a85332ec0ca5fad99"
  },
  {
    "url": "assets/js/5.568676c0.js",
    "revision": "62eb803f96828be3eee7c3da6056041c"
  },
  {
    "url": "assets/js/6.bd449b93.js",
    "revision": "ff719e07b11787e8276dc112fc26df0e"
  },
  {
    "url": "assets/js/7.7d26f9c6.js",
    "revision": "0ae65415b33d3872d753af9a45f789c8"
  },
  {
    "url": "assets/js/8.5f2be3ca.js",
    "revision": "d55a2791a620d291e1e83e2f4b25570e"
  },
  {
    "url": "assets/js/9.6d5cab7c.js",
    "revision": "ea5e006ef50a55a7b7a348a08e046f0f"
  },
  {
    "url": "assets/js/app.9655dba0.js",
    "revision": "d396765afd390df832701e3a28bf90cc"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.jpg",
    "revision": "a992d5ffffde939a84af88d37f1d4c9d"
  },
  {
    "url": "categories/express/index.html",
    "revision": "6d259939c8e2e2ccbb283960bfeffbea"
  },
  {
    "url": "categories/index.html",
    "revision": "f96e7814389ea5d1344c844676361c36"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4f3fcf9acbaa38b9e8624dfebc2a8d6e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "233f14bd291b360d308040f2ab4136c3"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "41716facf681114ea16980ff8d7b6e55"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "393a6830d60a78aea352ddce87ef4b95"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "1a9b0a93447faaceaf94cf5b8785c9ad"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "b73e1134e707fa870ef14f9d70a4b678"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8a4d94ec4afacbf2de1440c874971802"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "46ac0a561cded52a7c66db3b0c4cfbc5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "94ad399e7850adc44af9c955327c839c"
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
    "revision": "1b55bb187f8bbc2fb67f8e9a9104c1bf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3da4c5d993d1b6c206688af118a9053e"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "1cb3ad2bfcea88ab4b8517d636e43873"
  },
  {
    "url": "tags/express/index.html",
    "revision": "d6776f053b7e9b6896dd34d0836c7990"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "cabe661b5be73b2f521564ff7779a5a4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d4dddbdd52ded25a7b0e9e078eadbcc6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "44f6346bf4ea99d5c16edc5a44ff5d27"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "436cce5657453ca49f5d589af23bc906"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "c9068f49753ee762020d9432f23394f8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "eb5f293b2fc70af1f8f73f368b1257ae"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "f7bf17fa942357ab5ee794fdbafe5db7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4bf8ba53ef2c646e9180e65f7b475f5a"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "2f656e647c6da8fe49c33690f5ea75ee"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "9b504f2114957de43eb4dc0e65f84968"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "462190ef0608b8ee2572910fdd2c113b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a4698045e18d67f6df716e6262e08711"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fd2a1b336422bbd04d7fe6e41feca0af"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e9a298bc1dec8908fd35b500da8d76a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "d154a2c3d2d17650cb73b2d8bf5096e9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7b6eb10bc7196729b95845b729a602e1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f48189f06e4d751692a4609899a487b0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d872d2b7c72cff69a9759c2e95d73b49"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e1b70c4c3931ed820326f437498d6e5b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e43702ecc57ff7a1a94c174cfebbcab5"
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
