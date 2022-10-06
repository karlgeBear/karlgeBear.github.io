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
    "revision": "e8d27d61d0e7abafd2bd1fa31a54730e"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "9a5fa5733b82d2542391e309efb8bbd9"
  },
  {
    "url": "articles/index.html",
    "revision": "d4a74d3173ec13b0549f1fd88654d39e"
  },
  {
    "url": "articles/JsWeb/Ts/ts-other.html",
    "revision": "3b1b63bf19e63fc1a4f09279a4ef28e3"
  },
  {
    "url": "articles/JsWeb/Ts/ts.html",
    "revision": "703ed1e8329bed35e320f31e111d7f35"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "3b9f5fcf1657185b806b9495a6698dd8"
  },
  {
    "url": "articles/Node.js/egg/egg.html",
    "revision": "18556186f1125c63211ff52394073f8c"
  },
  {
    "url": "articles/Node.js/express/express.html",
    "revision": "d84a004625089a77d231ed14bfa18ff3"
  },
  {
    "url": "articles/Node.js/koa/koa.html",
    "revision": "5f05fd598ad8430f22ed56b387eb2775"
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
    "url": "assets/js/12.ffe16f83.js",
    "revision": "11a59f4445fa8cfef7987c89b7b1d183"
  },
  {
    "url": "assets/js/13.54a72402.js",
    "revision": "7d12096787f40af81cf49522671a3ffd"
  },
  {
    "url": "assets/js/14.cacf9030.js",
    "revision": "304764c7c89ab7bd8ea344de104b34c2"
  },
  {
    "url": "assets/js/15.757fb186.js",
    "revision": "4bc65a70ed88ac905c23d33a51e3b695"
  },
  {
    "url": "assets/js/16.9b7d3ac4.js",
    "revision": "bd4d5570ef5598291c29f099d4c65dfb"
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
    "url": "assets/js/19.57ddf0ee.js",
    "revision": "5bb99b01342d12582159fbe5f3c002d3"
  },
  {
    "url": "assets/js/20.2315656a.js",
    "revision": "8916087229cbfd7942bd15846d53fd7a"
  },
  {
    "url": "assets/js/21.e0bf50ea.js",
    "revision": "a1becf2bc1ea4fb3739dc8256dcde4ed"
  },
  {
    "url": "assets/js/22.da9f9416.js",
    "revision": "fe84630509a7b4893eb8226cba33f3d1"
  },
  {
    "url": "assets/js/23.6abababc.js",
    "revision": "0bd4f1dcf9246c66176d48aeadfcd23c"
  },
  {
    "url": "assets/js/24.a5b94957.js",
    "revision": "0c996c6802fdc7fa056c4f0e4f78fd16"
  },
  {
    "url": "assets/js/25.1db46df8.js",
    "revision": "90e535229b95190d393338ac097df004"
  },
  {
    "url": "assets/js/26.548b6dc2.js",
    "revision": "87e705238d506e926f6d3922e3cd3fbd"
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
    "url": "assets/js/app.7a34b398.js",
    "revision": "cd0ced5ed391f9d905929a42dfdf719c"
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
    "revision": "e416a7f8e040b098d4281d3e8185d47b"
  },
  {
    "url": "categories/index.html",
    "revision": "10aae9e8ebe51651137e29b3bf68e475"
  },
  {
    "url": "categories/java/index.html",
    "revision": "daa98b3af3382281ce0575fc2ec48627"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "53bea0fa45211a5ebcbe4f1a2823e3ed"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "027cb217c852c7b8661ae4fcbf711cba"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "f9c97dd0881f2d613cbb1ae587adede8"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "44048bf93ce5b41ada7608bf901985e6"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "46ecd4e634a98eb05bfd93d3b3838864"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bb262d03f34548952fc7b8927a51b151"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "826e40c1529447488c6082f2d77e6ecb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "55a97a537533953661b61ae1f7f0c7ee"
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
    "revision": "68e2799a1d3b683e3f3c11dd25c64325"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0bdaf608e1f0e71fedbf379812dd62ea"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "307d46a5d40989b81960d0f9e846fbcc"
  },
  {
    "url": "tags/express/index.html",
    "revision": "285fd7626c6016125537ccdadf0eea10"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ae5fa3742063a03a47708c7a95a6d506"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "eb073ca39697082ded4121abc1ad8107"
  },
  {
    "url": "tags/js/index.html",
    "revision": "663606cceb5f46c85268e63385d370f5"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "99e92ea62aeb71cf2784ba4e202cc19c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "707b64b36f21614025b08a74ad9a4a5e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "00871c165b3ff4935049c60b0d894ff6"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "90f3b33f533b8086393e6a765b05eaa3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f5ee9433b42f10640e93556ff47fca50"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "16885906a2d02504717ae5e86efcd975"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "43e989f2ca3aaf3c77bce896ec7e9668"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "47f8d98d6b1e79971acb61fc3fd20dde"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9c741159ab93c8d1c5848f9164597921"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b125fff8e6e8b9e87c86da10ae943071"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4dcfd58e2de0380d2bf88f80d22f393f"
  },
  {
    "url": "timeline/index.html",
    "revision": "9f0ca8abe6163d846b7215100f2d57ae"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f7ca3c981f01725062d264b5f990c837"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f9128d05a896827415f05c57ba8fdb4c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f2236016756151a4d9c3a1a6f2e70038"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "472ad072cce171004e2ccbc78e43e87b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8d739eab94983383392c4aa9e7163680"
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
