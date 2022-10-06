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
    "revision": "319542789b6e4a6b1461dbf8d8ab88f8"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "1015e445cc623d1a5e68a92bf5499a9b"
  },
  {
    "url": "articles/index.html",
    "revision": "9bc926f2d9a21a5c888eedba1864657a"
  },
  {
    "url": "articles/JsWeb/Ts/ts-other.html",
    "revision": "e290c83371378ecda02a4891cb127ddb"
  },
  {
    "url": "articles/JsWeb/Ts/ts.html",
    "revision": "820dad2726436bccb55e63f57c6c8bad"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "cbebdf69b3ec032ba72a932c1769efb7"
  },
  {
    "url": "articles/Node/egg/egg.html",
    "revision": "1a7b502ae14330b390489c487ae21e87"
  },
  {
    "url": "articles/Node/express/express.html",
    "revision": "6689567fe8555840425018df54fa512e"
  },
  {
    "url": "articles/Node/koa/koa.html",
    "revision": "90b2e0bb799b678a490dcb5c5277aacf"
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
    "url": "assets/js/12.0bd06ba5.js",
    "revision": "c01cd2933c8d76406e8efffbfb138cd7"
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
    "url": "assets/js/15.f831ebb7.js",
    "revision": "98b55fdfafea5d245ccc0cc7aed9f129"
  },
  {
    "url": "assets/js/16.ec2fed64.js",
    "revision": "d441c1a95a7549f073bb7390da41ea20"
  },
  {
    "url": "assets/js/17.560d77e3.js",
    "revision": "df47ea9d8531f6a4c7ffb24ce968fdbc"
  },
  {
    "url": "assets/js/18.040a0865.js",
    "revision": "733084e9a22066d8c64a856e9016a0b4"
  },
  {
    "url": "assets/js/19.ddcbba32.js",
    "revision": "5bb99b01342d12582159fbe5f3c002d3"
  },
  {
    "url": "assets/js/20.4b297d92.js",
    "revision": "a63f46c813198cb2b8e82b84d70b4285"
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
    "url": "assets/js/23.102ed7dc.js",
    "revision": "671ee174c15b09da87fe7d9c0d71b37e"
  },
  {
    "url": "assets/js/24.fcd899c1.js",
    "revision": "eff9d366949364315f3ef30ca2c2aa6a"
  },
  {
    "url": "assets/js/25.e82cf711.js",
    "revision": "fb462603395507fdd4e1ef7c1da14f1b"
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
    "url": "assets/js/app.ad5d091d.js",
    "revision": "e032456f10dd8f69a444e27fd1b8f3bf"
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
    "revision": "0375dc227cae6bfd2658b95eed034dcd"
  },
  {
    "url": "categories/index.html",
    "revision": "29c90012527aad52b8cc0f1a42dbfe41"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b5d3ccb9ef1ae270850dfa6037dbaf81"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "584dc38df1957964fb1bef2bc34eb9f6"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "dc3ce9c45089807454035909548e8a09"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "370ed649aab74444a25cf25c752c43a1"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "eff1a18af3752966b0d52af12f3b0126"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "e3b0eb2c6178e2ac7531be0de56c6ba9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4921f38dbb3f64754c76002c8e47290d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "fad69ac4da4621fcd95d6cbe2d8dd17a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "59b0c9cbec661f9cc56e7e6f1a80c191"
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
    "revision": "aee126997f1e57ef920f71f7003a1545"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "711733026bd2e147bce7f392a3cb7e6a"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "37b9db623d2c927e0f1babab6e3e2d43"
  },
  {
    "url": "tags/express/index.html",
    "revision": "cf0bf2f24b40dc25778fc3b4537f44f4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "752740e393c4f50756bf7533ff1e2b07"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4920fd7035c46d82e9056ed9607f4d29"
  },
  {
    "url": "tags/js/index.html",
    "revision": "544f2158b844b744b3d1d752f2acb363"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "2e88bbc66f21c0f9ba09b93c078ff83a"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3ffdbe4fc19319556ff47ee1f404d896"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "254ddec8972f973043d878cc3991f1f6"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "be0ab605925a38f32e9ebae7078aaa3d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "066b67748ae0a6166b614f863896aa52"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "8d03078059b757cca74f8288a2600d09"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "77b1905c890a3858f0df288670639842"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "deb96ebb3ec8885491f75fedebc00d1e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c0c15baa973b0af90d758f5c87f7c1e6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0ab08174ffc46818b26b87bdece386e5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "651e5236e416fe4d3c56cadac17273f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "e78664e58794119b194905ddd99effb7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "08e29dcb16d9fea7b24fa7b3134cb8cc"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "19a3031840277a24ae2a055aae782f77"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c39d7ba1027bae44071ac38f7807112e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5cec84764c63f4b077f3d2680e16087d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e297ba06245364b7271904204ec061bc"
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
