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
    "revision": "2b3b39fedb3fc5ebac1ec55b479861f1"
  },
  {
    "url": "about-me/aboutMe.html",
    "revision": "af7356f91bbc4fb3e4d4e0809b5fe50b"
  },
  {
    "url": "articles/index.html",
    "revision": "03d00f4afdddaa2a6168ebe9292b2c33"
  },
  {
    "url": "articles/JsWeb/Ts/ts-other.html",
    "revision": "5fdf5f0cf879788d627be58d1c49f232"
  },
  {
    "url": "articles/JsWeb/Ts/ts.html",
    "revision": "d413369ec290806e19fde4169bc90152"
  },
  {
    "url": "articles/JsWeb/Vue3/vue3.html",
    "revision": "704a31de368398641d206401d01e5a88"
  },
  {
    "url": "articles/Node/egg/egg.html",
    "revision": "074109465d4a79b8743a6adf3b8c10dc"
  },
  {
    "url": "articles/Node/express/express.html",
    "revision": "07c47ef70d155ec2c55f81ed98f8af3d"
  },
  {
    "url": "articles/Node/koa/koa.html",
    "revision": "ef1a4d208a73bf50f34fc7cb4099b616"
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
    "url": "assets/js/1.850f3655.js",
    "revision": "b1afe5b907e57393922524f744dd97de"
  },
  {
    "url": "assets/js/10.954262a3.js",
    "revision": "2b0ee1736c299574c5712fa4dda87925"
  },
  {
    "url": "assets/js/11.6de7621f.js",
    "revision": "e83c07a5594b67fa95243355165f362e"
  },
  {
    "url": "assets/js/12.b0ff165c.js",
    "revision": "b56420dec753dca23b1d55e3fab4287b"
  },
  {
    "url": "assets/js/13.115a7baa.js",
    "revision": "7f79e2f07976d6b18d2d8539c717fe67"
  },
  {
    "url": "assets/js/14.30f1584d.js",
    "revision": "e582567d763b63c3fd40a03bbadabbff"
  },
  {
    "url": "assets/js/15.1d6cd432.js",
    "revision": "e2295565699424d0c15cb0b56792e080"
  },
  {
    "url": "assets/js/16.74c66eac.js",
    "revision": "50f9ea4d09a2aa5002b6b61c4ff45f7e"
  },
  {
    "url": "assets/js/17.da772526.js",
    "revision": "0b9ccae7c639df5793378c94d1f7da93"
  },
  {
    "url": "assets/js/18.ac48bc5b.js",
    "revision": "cf1a6f7c40034de773fe7acdee4b2b31"
  },
  {
    "url": "assets/js/19.5f555cd6.js",
    "revision": "ae4db2fa4f595ef728541794eb0c5577"
  },
  {
    "url": "assets/js/20.a28cf599.js",
    "revision": "0752c9c44be766a6d6bfa45fde4afb8d"
  },
  {
    "url": "assets/js/21.fa02eb0d.js",
    "revision": "36ad109999dd32c523199dd5bfb97c6c"
  },
  {
    "url": "assets/js/22.c5790bde.js",
    "revision": "a526f1fc1db4a4089702e9542f557c57"
  },
  {
    "url": "assets/js/23.85d64f67.js",
    "revision": "355f99b44b342d2d4310695bebd7acef"
  },
  {
    "url": "assets/js/24.ff4930ca.js",
    "revision": "af06e22234c7a134a660a81cda3dd03e"
  },
  {
    "url": "assets/js/25.6b1c18c7.js",
    "revision": "966b99cadbb7799e8dc78ca0be8bf81d"
  },
  {
    "url": "assets/js/26.b59f4cf5.js",
    "revision": "ff9798fef8a792d837f53f6accb9673e"
  },
  {
    "url": "assets/js/4.f91ae297.js",
    "revision": "46802f82aecf636a3b797df621a90de3"
  },
  {
    "url": "assets/js/5.9a5d217c.js",
    "revision": "dc79f28dded967500b54ea22bfbd9b2f"
  },
  {
    "url": "assets/js/6.cbc0759b.js",
    "revision": "60a5acc14fad1db005e8a383aa64669e"
  },
  {
    "url": "assets/js/7.5db97fa8.js",
    "revision": "3601c7c3abff5a180dc14a0fb69f95f8"
  },
  {
    "url": "assets/js/8.edc2abff.js",
    "revision": "e2269dbd4bc3522bb057e57dbca87fa1"
  },
  {
    "url": "assets/js/9.756370aa.js",
    "revision": "2544435d0574869a97050296ae22cd50"
  },
  {
    "url": "assets/js/app.9c997a11.js",
    "revision": "06c67377adbac75cdef031c9b8ae996b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.cff1e9f5.js",
    "revision": "a805ae15f094e64a1dd058755328c747"
  },
  {
    "url": "avatar.jpg",
    "revision": "a992d5ffffde939a84af88d37f1d4c9d"
  },
  {
    "url": "categories/express/index.html",
    "revision": "09abf049def9507e9c2560232b7b6ce9"
  },
  {
    "url": "categories/index.html",
    "revision": "c915be54f72cf2dba1c36ac847fb5a32"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5346760a98b5f566d1a84e7da09040f7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "92bd858345768dd50e3cbd6841cb3390"
  },
  {
    "url": "categories/JsWeb/index.html",
    "revision": "e500019d4661d6a2c511566952eab78c"
  },
  {
    "url": "categories/koa/index.html",
    "revision": "c34fb3b99a3f0aaafb125923c034b77f"
  },
  {
    "url": "categories/Ts/index.html",
    "revision": "0ac7fbf6de574f3148d6add7c99d5b9b"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "d6b596423f1f8afb56c3980cfa188381"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1377dad6846e3a80142dd7399403b8c5"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2fe6badaa4605cb40f72bc42be48c18b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dc748be6c89b058d1fc9ab0a27ba459b"
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
    "revision": "4e8408b6df9606a94e74dd0298e3ddff"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6680c82dad0b4d488d39636520691190"
  },
  {
    "url": "tags/egg/index.html",
    "revision": "20c91f8eb680efbd0fb685f06a1dd458"
  },
  {
    "url": "tags/express/index.html",
    "revision": "c1b6d92de35c2b016537efbe3c217166"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a3d607f062d291a8596ea9506dd4d10a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7137adb5cf523c05b68f832b12b4acd2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "76c4a2cc8b6a1f5dd585e47410edb2a1"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "175fe4d98a1cab5ff818ebf2039bc632"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "dab19f306491db2bc1b1b423cca05c65"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "29a350fd186ace7f6488ba3cd31c4276"
  },
  {
    "url": "tags/Ts/index.html",
    "revision": "ad3f79b1519030bac183e820b36bc899"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c0517376f58f8c5692a318bcbe81bc05"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "cf99e63313a9621d4ac7f60c8e179d6a"
  },
  {
    "url": "tags/Vue学习/index.html",
    "revision": "61ef2fe591198aa2149d114f8ca35a34"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cef95bb6064eaa26b2c003bc76faef1a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "676da747c800f1d4be41e50bcc120fae"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8e5298dc534cd5fada7a144bac5ed015"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f128f263c58f7440873aba40f7430ce0"
  },
  {
    "url": "timeline/index.html",
    "revision": "b00c6a3bf7295b92b166b98fa28c29d9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "310ed11f2b25d8e1478217de97ade606"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "16a2fbf02f2aecc0503306c1f1347b2e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "429c7a6280622c4def9867b9d65c5814"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "72fa92779d39bcf75649e6dc6ef73398"
  },
  {
    "url": "生活分享/life.html",
    "revision": "facd9c4f97c3aca32cc7322258e1a772"
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
