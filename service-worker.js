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
    "revision": "c5df054eb03909f6867de7d8ee629aba"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
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
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.3e94535d.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.cf8bfb2f.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.4881051f.js",
    "revision": "34daa3004d2519dbf33b84631dcb4446"
  },
  {
    "url": "assets/js/13.cd66c14e.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.93df3760.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.e8d3ea25.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.a65a16f6.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.22ecac8d.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.558301ea.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.7ba65a8e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.38ad200e.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.e9124f59.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.f99d6d8e.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.b9207daf.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.c432a680.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.f2c32038.js",
    "revision": "6345d447e2ec3ab75b33de1a66b724ab"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "ff201602ad3a56ac980d382dc471e616"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ef6867d76ad20cf0f531ba7a8540421f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "242c8bd4e52a32ae26bd74b524617ccb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "be64fc7e937ac2004a9cf8e42aa99c03"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "35e9a48d3a6a3f6ca3a84697a214527a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "cacbbfe6387d4913e8b6cf19460d8937"
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
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
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
    "revision": "db8b7a0e739ea7a2a7fead19a699a939"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2746c5b469e19c3b3e4bfa2635fe0e6d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "aca7ad66439ffd68ab7dba1f2d8e0776"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d4e109449b3ce5491cf7124869f98634"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6233636d77f2f40fee910bedfc58d48a"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b68be1f0b96a862c9ea55b8b89687702"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "eb8be6060c11a329ccdb1dcd603b72fe"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a5dc8e494099d12a44af8ad7935d6cee"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "34229168ae57ae910eef46c4bb0137bd"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "94ac6c55d88f1f3fe68161735a53d9dd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4dde2e34e0a52aab267a96821b3f2c1c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7af572c6f77c45b0c6bc388ed2329953"
  },
  {
    "url": "timeline/index.html",
    "revision": "bc5f3726664152e41076a2d4e315fb18"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f120e785b2b57c75c9b345497c706c00"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bdf313754668eb317ebb3eacf6a928fa"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "7ffdbc7f4f98278d5c465bb0939a7439"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "830a322f9f9b347a0cd9d062c425eba4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4020af896c4b2379de1c68d0e5708b78"
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
