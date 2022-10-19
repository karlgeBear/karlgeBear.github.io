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
    "revision": "05f519e98643b05ea6faa4512ae86ffa"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "0dfe30aa052c36800f0ee365d6d58222"
  },
  {
    "url": "articles/index.html",
    "revision": "8818cdc5185d2d1615780e41f14457ac"
  },
  {
    "url": "articles/JsWeb/Ts/01.start.html",
    "revision": "b6db4e5f012b08859b63ac1701952627"
  },
  {
    "url": "articles/JsWeb/Ts/02.ts.html",
    "revision": "79adf150c1897a88d788dabab5598edb"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "5075ad38aebc6d7c635510e793ee1dc6"
  },
  {
    "url": "articles/Node/egg/egg.html",
    "revision": "8dc315e9336769e8f0c4bb041379dfe1"
  },
  {
    "url": "articles/Node/express/express.html",
    "revision": "8354b9499226be67dacc4d350bcef651"
  },
  {
    "url": "articles/Node/koa/koa.html",
    "revision": "c8fa0e3318dd4fe3dc31feddf1e07f62"
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
    "url": "assets/img/promise.cf5fc2f9.png",
    "revision": "cf5fc2f9dd81b891be99c6298c923cf8"
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
    "url": "assets/js/10.1c4cdd64.js",
    "revision": "163eaea64065d6e0ef3768ab9c9d53d5"
  },
  {
    "url": "assets/js/11.6644dfb5.js",
    "revision": "962a59b770d3214e677e436fd4709e50"
  },
  {
    "url": "assets/js/12.e930190a.js",
    "revision": "08ee278aad76c2e94ebb010ce45bdbb0"
  },
  {
    "url": "assets/js/13.73b5ced1.js",
    "revision": "4f3bf881b200e54816ad804006855576"
  },
  {
    "url": "assets/js/14.1e745fa8.js",
    "revision": "4f4a2aaa43cff6c2227032dac300a23a"
  },
  {
    "url": "assets/js/15.f02d85c6.js",
    "revision": "f9146af634440e3786ff4cd87680e6df"
  },
  {
    "url": "assets/js/16.7df78dbf.js",
    "revision": "20f346f22f83b7dc19921d613eea80f5"
  },
  {
    "url": "assets/js/17.b064c3c9.js",
    "revision": "4eaf25966b0b512f8facf2825a9913b3"
  },
  {
    "url": "assets/js/18.b16023aa.js",
    "revision": "7cc2696e31108a8753bcf6e782794acc"
  },
  {
    "url": "assets/js/19.2a59e101.js",
    "revision": "927609196f52bb06e442c1eb17fe66ea"
  },
  {
    "url": "assets/js/20.5935f6c2.js",
    "revision": "7103b4555a96de54751eeb865b2299b9"
  },
  {
    "url": "assets/js/21.90f904ee.js",
    "revision": "e4d0fd9f81281fccb0f079b045a1aade"
  },
  {
    "url": "assets/js/22.da9f9416.js",
    "revision": "fe84630509a7b4893eb8226cba33f3d1"
  },
  {
    "url": "assets/js/23.f4bc3d4a.js",
    "revision": "c0f1ef9b5d5eb5365b37ca880b5d157e"
  },
  {
    "url": "assets/js/24.2dd2c680.js",
    "revision": "e1277b4fd4658bbdde60fbe5c55752bf"
  },
  {
    "url": "assets/js/25.83913aed.js",
    "revision": "b89d37d8952cdc1e949b53579487451b"
  },
  {
    "url": "assets/js/26.195ef756.js",
    "revision": "68da5b3082404e8748313def6c907627"
  },
  {
    "url": "assets/js/4.7fc6f1df.js",
    "revision": "4fb5e893f5f62f98bda0c34bd217bcf9"
  },
  {
    "url": "assets/js/5.bc16a2d3.js",
    "revision": "54cce987cf17b1de21a1042d2db4caaa"
  },
  {
    "url": "assets/js/6.109e9835.js",
    "revision": "3710438f0441c9f4de5e805033126eb2"
  },
  {
    "url": "assets/js/7.cabfe0b1.js",
    "revision": "d76a952f93d94ddb1f96dee65d5c9117"
  },
  {
    "url": "assets/js/8.e481b482.js",
    "revision": "217576ee4d389282291d246cb2f3cc8d"
  },
  {
    "url": "assets/js/9.3d9f66e7.js",
    "revision": "14806f1d773cbb24c0e1f28a30489488"
  },
  {
    "url": "assets/js/app.d4d7aff8.js",
    "revision": "c0fc7fa73237a52d856eb646ef0fe2d9"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a58d92ae.js",
    "revision": "7d4f597c8547f3bdfdeaee8e3a79ffc7"
  },
  {
    "url": "avatar.jpg",
    "revision": "a992d5ffffde939a84af88d37f1d4c9d"
  },
  {
    "url": "categories/express/index.html",
    "revision": "9483039beb32211df30bd434e8dfe4b9"
  },
  {
    "url": "categories/index.html",
    "revision": "f8cd564f89d1364ef572e17eb1785f24"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0c67c3b92d4983b0d78b67f3db204a1d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b971260cd1404911d70a5e39a3b580a3"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "a8bacf9809c4f195e420bec21e4b3bf7"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "fb6d76037457e37c6ecc545be20bddee"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "5e04c59a20b421f216fcba1f1c8ab025"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "2577b907d7ae269ef82f7c02ebe76c66"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8cdf66c3c8521ca99e5309c1dfde360d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f01f941570a3518be4c9d02586c696b0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3fc17a5149ce12fd3f03475c96517f67"
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
    "revision": "b4f72a44495e380deb35e1b3fa3e95ab"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ad12dc3df55243620948a0df387ff255"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "c5684f6623064b9c379b0512e29fa0e9"
  },
  {
    "url": "tags/express/index.html",
    "revision": "9bbbc0108b7350f13c019ffd1510f4b8"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a307fa57b2e2c0a450fa48d358d069e2"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3af7cd3d3c86215cb213bf5c3ecb22aa"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1e92e6cb225b2023afdd8799c53d8ec2"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "e1c0921132945c11b3ae08159d2fc188"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ca38676e834fd84c996305fb871ee2d7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a08c8553b8169b5b78e25aa942fc7d40"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "56f7d05eb7ad5d961f6dbd8adacbe4d2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "01ba15162c48b092bd10a2a291c61bd7"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "e41261b58d8f5be89852ae189bde32c7"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "a52c7e48610d65d031b307e4c574f55f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4a9efa1c76d15ee0dab52829b6c644e4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c1124ad36b0ceba914987d980a966445"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1a3f6bdf964d77c06aad9b08ce54f8fa"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "79605b6bbc980c6b15073b49cb367fe7"
  },
  {
    "url": "timeline/index.html",
    "revision": "d885688b0848412440bc8e8aa113ee4a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a08a1a9c9bad04282bf46af48fde58cd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bd4849033afa886e2dc3390323d1f1f6"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "70a0bceb1a21d649d102d20bc8438d0a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "216d246046c8dd725706dfc2f2c95913"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3a4c75c751a4b71faf4182990ff2714b"
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
