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
    "revision": "1fc9d3b20590c7ff30b6e53b6108b83f"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "174d9f9e84c0380b74bf83765a579875"
  },
  {
    "url": "articles/index.html",
    "revision": "1ae39f1933fab60ddf529fb652b774fb"
  },
  {
    "url": "articles/JsWeb/Ts/ts-other.html",
    "revision": "30b38998bbb7ee5e30816196d828236f"
  },
  {
    "url": "articles/JsWeb/Ts/ts.html",
    "revision": "2e363ce36dc9960f4dbe3c2913dfaa3e"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "d3b19c8da5826ef87c083447dcc2cd40"
  },
  {
    "url": "articles/Node.js/egg/egg.html",
    "revision": "7a4d395a2f885eb7b0b52915411da51d"
  },
  {
    "url": "articles/Node.js/express/express.html",
    "revision": "c26e2a767de3769e3189cc41c017e813"
  },
  {
    "url": "articles/Node.js/koa/koa.html",
    "revision": "0180fd366f91b5087ee403cf87d5ec35"
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
    "url": "assets/js/12.8b0b2c84.js",
    "revision": "da73181ff8f0d9cc6b772635be1e3199"
  },
  {
    "url": "assets/js/13.ef904a0f.js",
    "revision": "1a0b1f8e49b87fd1da4c71804c1e692e"
  },
  {
    "url": "assets/js/14.3d853aba.js",
    "revision": "8391fbbd022471c136d45186a8a2d3f3"
  },
  {
    "url": "assets/js/15.4f583bd2.js",
    "revision": "2d920b9aaf07d7776cb09edbdd6f128f"
  },
  {
    "url": "assets/js/16.6d4c3c16.js",
    "revision": "bc3ff2c3078ed0460301647d12025682"
  },
  {
    "url": "assets/js/17.c11915df.js",
    "revision": "e15c55b7f9c89dfaed34cd95fb64b130"
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
    "url": "assets/js/22.f1d48d80.js",
    "revision": "61adf9c18c94b05c8d4b8b5043b92c45"
  },
  {
    "url": "assets/js/23.102ed7dc.js",
    "revision": "671ee174c15b09da87fe7d9c0d71b37e"
  },
  {
    "url": "assets/js/24.7565adff.js",
    "revision": "75c71430c3e78cf70aa64b6f15a6b04f"
  },
  {
    "url": "assets/js/25.bd8e2742.js",
    "revision": "cccadf695d3b752ca2e2c07945b22a8f"
  },
  {
    "url": "assets/js/26.75386530.js",
    "revision": "3c2984023784045534539f5b1d33c7f6"
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
    "url": "assets/js/app.44ba8307.js",
    "revision": "a909845baac0cdec2129f494607f638b"
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
    "revision": "8731dbbad47b5b1a99aa76e2a8336fce"
  },
  {
    "url": "categories/index.html",
    "revision": "64b602f369f82dd2678027c35a83c20f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "89ef2d7e613a5bf4c09671c0344daaf4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "53b66e4e1e86b3153d68da08d365a41f"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "c46e69f78cc488fb2268f37e15d9ff74"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "c65b8de63c4e238f6ce9a288ece1fc30"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "60cea96e3972964c0e1d820840e63045"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "cfc66901cf8ea7ba8833dc0cd15f1760"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b8e37d88a3559571c44faec3d9c46186"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ba2a381b561ecae9646afa1d270d9340"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "492fd16c509b7da28662e7ca6b904387"
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
    "revision": "be84573ffb46af0e8bae93c0d0947404"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5c52118518d26a50d2bf40b746490c32"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "96158dc909efab394e25befadbc9046f"
  },
  {
    "url": "tags/express/index.html",
    "revision": "b01ac4bef508066fd91dae38dbf47b15"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c5b3b02663bb76b74f8b5d1b9101f494"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2e98c847c69d5a41c45b03dfb60ba68f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b8b918d952106305e42b9f93e5b6de63"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "68de325a07ec48ee018c0f2d5afbb81d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a262df1b7e5c97af2b4e970519dc8b71"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "58410692717f533d3c0c139e41462540"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "ce08f0f2dfc86fa79a3821afa490a4a0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "28216104f2f99e3ee4772251b24b3597"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "6ad5f5b057c7475ff65292b61f326684"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "3221187ce47e2e6b59ae1df458ae80a6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "58f8de1fd822ede4e91ea5ebbe6ef57c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9a572e16505c62af7ee3c9bc10ba271c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a9c1f9b77ae7cf1287a7ec0663370d80"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8ae6f1db3084bf25c5cd31f648a872e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "02df071b24218a57406932a71360be70"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2a2b3bf3cb7411eb3aa995df32ef6af3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "de5b227c792a5caa083672fddaafd7f7"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "11e1b5c97f329638be0ff1258e886211"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "594d33c4acb9bc7a9342cc0b9fec9e5c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b98e7c47cd9570d63f36a7f16bb00d9c"
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
