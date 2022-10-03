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
    "revision": "807ed7c04dfd3fd77edc8b6269b4d182"
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
    "url": "assets/js/14.66ed8247.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.45732e83.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.ad3b47d3.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.b0b32db7.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.9152c63f.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
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
    "url": "assets/js/app.901966cd.js",
    "revision": "b81747e60c4e2e787243b4bce4d542c6"
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
    "revision": "7aab4f9ef34c53574fd80768e05709d5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "70e34de65d2e017e076a4c81e434ea79"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "315a7e62c16dbcd98f60145ce5c4ad8c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "125e88594e2d1f11af42a0a0ba6c69e6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9bdc34006e0c06078d24bb6ded4f4042"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4bfe8b951cd57323da563df7eeefb403"
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
    "revision": "9793ed50a6d7cb5eb52665e15f915e31"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8d3a038cd6ed80806ce0f8f6f2e8b263"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2d351600bb5bea5190c6dc3fd36a50fe"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7b745d43931e5ed2a0c860c0c65e6781"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7efec156b0027d646c8a821f608e7f14"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2c01beb2e042ee9d05c9c1a0bb4703d1"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "81ba8343a651f97aaa5b426eaae6651d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "aa8aca47e2977bac0b85af43d3e8acc8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "68f77a89606a73f0daad429779078b08"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ade7da104c397638d512cb29b8644dc3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "41608aaa70b02f7259ebb55b8a15836c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "32d4374b68b8fb4f58aec5af46d16724"
  },
  {
    "url": "timeline/index.html",
    "revision": "065ffce9841feca69836b32fa53144ed"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b3573db55aacbfabd4b505c4fb29104c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f197f0c1cd5352d28fe80d9f9319ea11"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "389be2378f2a6ac80fb3bb78cd97cb1c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cf896a666b3c24f65de477c65a11edec"
  },
  {
    "url": "生活分享/life.html",
    "revision": "59766171e88c739d7a8168682e1952bb"
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
