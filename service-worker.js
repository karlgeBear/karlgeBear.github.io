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
    "revision": "ea43577b7cbdccc715f4e79bc1e23f30"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "c26458b7690f256c3ea17cb15a345db0"
  },
  {
    "url": "articles/index.html",
    "revision": "44d3cc53ba45c69ea4a1186db47c203c"
  },
  {
    "url": "articles/JsWeb/Ts/01_start.html",
    "revision": "71994349e29f2a2014d8c2db5b21dd92"
  },
  {
    "url": "articles/JsWeb/Ts/02_tsBase.html",
    "revision": "b878257cc5a227dc47fda34eece84f49"
  },
  {
    "url": "articles/JsWeb/Ts/03_tsAdvanced.html",
    "revision": "a01a960a7feb1ba29f1d764a982507cb"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "a68b5aeab6ef1917831c3775b90d770e"
  },
  {
    "url": "articles/Node/egg/egg.html",
    "revision": "f7af44da2c1201ffca390ca564e89a0e"
  },
  {
    "url": "articles/Node/express/express.html",
    "revision": "5dbc492052a6681cd40da4d7ba1a5862"
  },
  {
    "url": "articles/Node/koa/koa.html",
    "revision": "b89cdbff170dd183c14c47e811c9295d"
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
    "url": "assets/js/10.f986b6a4.js",
    "revision": "163eaea64065d6e0ef3768ab9c9d53d5"
  },
  {
    "url": "assets/js/11.eb057e0a.js",
    "revision": "e97fb793f43a2ca432a0047a7e45b4a1"
  },
  {
    "url": "assets/js/12.e4173180.js",
    "revision": "6a91704d0ed57f0a52e8c1084a199c59"
  },
  {
    "url": "assets/js/13.96d6918e.js",
    "revision": "7177c29b7c7b74624131519468bd5ab9"
  },
  {
    "url": "assets/js/14.9894db7a.js",
    "revision": "bd17432b510e6f86e9d540789760ef40"
  },
  {
    "url": "assets/js/15.71c638dd.js",
    "revision": "e7d0bce6bb798bccb7b4a5ebfd323ed4"
  },
  {
    "url": "assets/js/16.d64d3c65.js",
    "revision": "d68fbc62cad6d191b79ae9e037a40b6a"
  },
  {
    "url": "assets/js/17.c699335b.js",
    "revision": "462baab72eedee636118c04933ff166d"
  },
  {
    "url": "assets/js/18.d0579ed2.js",
    "revision": "b54cc1e72d5e9280e30657c2753de8dc"
  },
  {
    "url": "assets/js/19.b89d488f.js",
    "revision": "d6c32025b92fc384270aa73064c17eaf"
  },
  {
    "url": "assets/js/20.a4c0c2f9.js",
    "revision": "bfac4cc4448908152956e772e6889fc0"
  },
  {
    "url": "assets/js/21.d114d24f.js",
    "revision": "d3b6fc5c4e70c0d3e1e41f8390686d13"
  },
  {
    "url": "assets/js/22.4505af8d.js",
    "revision": "0e8eb1083de85c105abe67ed0d882661"
  },
  {
    "url": "assets/js/23.2d15ccc5.js",
    "revision": "6434f0f289690df8f043fc8af53db155"
  },
  {
    "url": "assets/js/24.14127585.js",
    "revision": "a9ee9d39514ffbe242bb7cf90777e8b1"
  },
  {
    "url": "assets/js/25.4383514a.js",
    "revision": "b766d8399f1c14b426918cc02d8cd227"
  },
  {
    "url": "assets/js/26.21f51724.js",
    "revision": "ba29a065eaf4f29c56269b91a3ed40c3"
  },
  {
    "url": "assets/js/27.c2bd6713.js",
    "revision": "49ccbb860cfe9497fa6d303ba0ead0b5"
  },
  {
    "url": "assets/js/4.cde5c3f7.js",
    "revision": "27ada53a1346a3a254865d0db7001b9e"
  },
  {
    "url": "assets/js/5.fea7023c.js",
    "revision": "7c3f40a05bc5f6c266a95baba3a93981"
  },
  {
    "url": "assets/js/6.6ff712a7.js",
    "revision": "2cd4bb803f16441aca620d4aaaac87e4"
  },
  {
    "url": "assets/js/7.b53ce2a3.js",
    "revision": "9ed1e45f37282be548c3dd4b66b62cfa"
  },
  {
    "url": "assets/js/8.260c5053.js",
    "revision": "96f25e5f8627ab0e8d7074f04b235f0c"
  },
  {
    "url": "assets/js/9.ec72588a.js",
    "revision": "ce409ae60a1285617a2b0eb6b1ef929b"
  },
  {
    "url": "assets/js/app.50883ec6.js",
    "revision": "f8d8c8c99f39acb9c6974cc0065d60d6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.027eb493.js",
    "revision": "a0d6977b0491172ae1520d12c6df053e"
  },
  {
    "url": "avatar.jpg",
    "revision": "a992d5ffffde939a84af88d37f1d4c9d"
  },
  {
    "url": "categories/express/index.html",
    "revision": "395bc603d70dcea044b878b334d0f62d"
  },
  {
    "url": "categories/index.html",
    "revision": "dcec452e3714561c0eac357e50a6f80b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "153bb356420812320f511f24c9e645db"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6ab3fc2e50db0f39811d80a4d31d75ff"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "b1e2524a361630ff6d3f2678b1ba73f4"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "635dce32ecf000aad02df4c2d083847a"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "96ca49283a46fee1bf68e3c67afa9b32"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "86ae2cb5fe5c1d1b447d4ea1cf61027c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a70f55149b07d12eae92b1eeb4e5e90c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0fe32e78090ddea7157d979b13dc63e6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f6876d89a26cbc3b611e37e7a1ab18c9"
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
    "revision": "3016372f300957a2bcb454201d0768ba"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "95a9ede70c2dd7d9852d86b5e9791869"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "bb404524c8a83f378287e9a1c0faaae3"
  },
  {
    "url": "tags/express/index.html",
    "revision": "3a0c99b2019d7b82150601930a45d5f7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "961bf31b365b777942d5e09a2aa03d93"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4bba72b352607c60c3e741e7b8425457"
  },
  {
    "url": "tags/js/index.html",
    "revision": "257f1fc5146cb046b603ca1e1b6222f9"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "5daf5ecf9148eb3b071553a5913d9237"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "44bdeaed6d138d7f43df3a4cdb0381e5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "801abbff15b70d95e803511abae0a321"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "9d5c645c7b7ab4fdae43e77e9858c473"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7cffdf494c28412742be5ca77ee7f808"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "4c775af8591e06ebcee81bfe8674f42a"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "88f916d75c03a385abc17e0b01ee3b74"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "caabe223752aed028fd32de3dd61d48f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "62ce39bf4d0f2725725d4149b1fe2a2f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "41d4e88a9ccefd706519787b502da471"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "90270cb729fcf9d5fb0e032850b1bfa1"
  },
  {
    "url": "timeline/index.html",
    "revision": "56003016b8af0ba6413df59e006f482d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b762c5590f0cdbd496af8bd2a806fe24"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b7cdb4523347348ebdf18a796ab71e3b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b0e89ee4bb3aa3b10d809ccb9ed0acff"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c1c45612515b791ede9cfbc2acc72bb7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "66df9e49aae9a351bf60e8479d2ccde7"
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
