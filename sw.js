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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "hkoscon-2020"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/2020//0025f9f7403d88cdcc18.css",
    "revision": "0e3190a3834ba99bd57316a7842095fd"
  },
  {
    "url": "/2020//02c0588cd876d28ed163.js",
    "revision": "ee52dca13068ecae0ca5366c1f0facd4"
  },
  {
    "url": "/2020//02f1ba7ebd09238a9ee6.js",
    "revision": "5f917b37e424009dfbce9c9468867b9d"
  },
  {
    "url": "/2020//069de9fb9145532e70e5.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2020//0ecca2991f3806db74e6.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2020//1e0b6fce47f089bd8458.js",
    "revision": "0d5f994b34db9ca6ce14bf4f67019b1c"
  },
  {
    "url": "/2020//200.html",
    "revision": "0bb608d593e5ea246402e23fb5badf8f"
  },
  {
    "url": "/2020//25143d70fed381c8ed86.css",
    "revision": "772136ef1541b21d75838289f65e1ea6"
  },
  {
    "url": "/2020//2bb2c23834a8c14fb7ba.js",
    "revision": "084bdcf05a47ec9dd5bdf13275def845"
  },
  {
    "url": "/2020//2d1a02d2f1ea78d87c15.js",
    "revision": "2fc26be0cb1930e60d731908ab813231"
  },
  {
    "url": "/2020//2f717ef7f5924747b5d6.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2020//3529ba37471a42e5b677.css",
    "revision": "2c1a9c4649e2b515d483c71b83883754"
  },
  {
    "url": "/2020//3b14978c26b16cb0b453.js",
    "revision": "609e1330c783ddee3fa075a72b8bd7d1"
  },
  {
    "url": "/2020//4002db9f560e4020c562.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2020//4095eb1d75ee3554b6c1.js",
    "revision": "fe36eaaff2f52a0ea607e57e15e0a671"
  },
  {
    "url": "/2020//41c670523ca9ec9470e0.js",
    "revision": "fc371024614c8fbee57dceec319dc013"
  },
  {
    "url": "/2020//47a48e792c2d4219e1e6.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2020//4f24108e7f2d17081d00.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2020//51b879d3ebe404444eec.js",
    "revision": "9e5012198bb154bbf635013442242208"
  },
  {
    "url": "/2020//52fd6a35b164914d3907.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2020//6ed75c6fb9583cd825e5.js",
    "revision": "70d5a2932883292d8d81b6bf0545260c"
  },
  {
    "url": "/2020//71bc4738255e96ccf798.css",
    "revision": "2ec47afeca7210758bb8a7b6fc139634"
  },
  {
    "url": "/2020//7a8e976329513d83e4d7.js",
    "revision": "dd05bc09bf6561f2f987a3fce84edb71"
  },
  {
    "url": "/2020//84a55930a4df002e38c4.js",
    "revision": "b21fe15caf6f8e312a1f475ceadff575"
  },
  {
    "url": "/2020//884aef19c7edaf5b65c7.js",
    "revision": "bb4be4ff9360112867443041d348787d"
  },
  {
    "url": "/2020//8dff5adc6275e9d1bbd2.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2020//919e200baba01393f7b7.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2020//9a628d5f5a1595075d19.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2020//9b5d9a26e2ec083c50fd.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2020//about/coc/index.html",
    "revision": "0fee5614eec6ccf3baef52cec6525aef"
  },
  {
    "url": "/2020//about/conference/index.html",
    "revision": "b60172c34742f3b73b50486307cf8803"
  },
  {
    "url": "/2020//about/organizers/index.html",
    "revision": "485d4d48470b74ef2fa2de4cc1006e1d"
  },
  {
    "url": "/2020//about/volunteers/index.html",
    "revision": "25badc5f772844c534bee3ba475ecfef"
  },
  {
    "url": "/2020//af03c4b6f36e99d31103.js",
    "revision": "7d89476bbf81f5df11ed66b44e41956f"
  },
  {
    "url": "/2020//b4a043514a8024b5051f.js",
    "revision": "bf6c03c48fa9c04b634f105d29f521cb"
  },
  {
    "url": "/2020//c12a59e48277b5a895c8.js",
    "revision": "f78335dfd5a87ada873c21cf65667cf9"
  },
  {
    "url": "/2020//c1bb92e2c79093e13a16.js",
    "revision": "871fffdaf936c9035c70430e5b4d986b"
  },
  {
    "url": "/2020//c96f783aa938ae6888d7.js",
    "revision": "65610997cd47930c118f61fb228ce50f"
  },
  {
    "url": "/2020//cdf96ad14927a6e9ca39.js",
    "revision": "37c67bf223cadce8ba6002c2d5be3d2f"
  },
  {
    "url": "/2020//cfc/index.html",
    "revision": "c3ac51b1163dfb44521575b100185f25"
  },
  {
    "url": "/2020//cfp/index.html",
    "revision": "c64ea6f9f8142761291ebe53b081ec7e"
  },
  {
    "url": "/2020//d19278a8c87356f943fe.js",
    "revision": "5681ffa6de100490a6289c6dcabaf22f"
  },
  {
    "url": "/2020//d43e8ac5dfa87fdf6bc0.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2020//d44a573365f99f9c7b12.js",
    "revision": "70dbc74eea3d8069565de63156a549e7"
  },
  {
    "url": "/2020//d8e98911c2f6d414c6dc.js",
    "revision": "4e0506b0757487f7d11c80f977ea6dbf"
  },
  {
    "url": "/2020//dd7551bf613aa09f8026.js",
    "revision": "d2d530e635eeb44d2a977234ca91593b"
  },
  {
    "url": "/2020//efc8351fff6a02246ae3.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2020//f2453e5adba758f024fe.js",
    "revision": "37121a9712049452b95122781201fb3b"
  },
  {
    "url": "/2020//f6cac62fd54dbfae704d.js",
    "revision": "1e27d37e2d01f6bf20b20b1dcb2a84da"
  },
  {
    "url": "/2020//fddfe34803ae27cc9e87.js",
    "revision": "1353c94b42633aaa0c6d277b0da7fae3"
  },
  {
    "url": "/2020//images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2020//images/bg.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
  },
  {
    "url": "/2020//images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg",
    "revision": "f2b53740fd1d3af56ae27da3a98f1f8b"
  },
  {
    "url": "/2020//images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg",
    "revision": "718f2353e9a4a2fc0f69966ff9c3f00e"
  },
  {
    "url": "/2020//images/volunteer/36cc4b80c152f962ea08477ad3d92182.jpg",
    "revision": "36cc4b80c152f962ea08477ad3d92182"
  },
  {
    "url": "/2020//images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg",
    "revision": "559c8ad17d71fcc1a17855be0ede9e22"
  },
  {
    "url": "/2020//images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg",
    "revision": "ddf79060560d8a397533f628e4ea9031"
  },
  {
    "url": "/2020//images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg",
    "revision": "81670649ca0068b39c53d2e42b90545c"
  },
  {
    "url": "/2020//images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg",
    "revision": "3c8dcde9b5dead1c6b9f242d762ea194"
  },
  {
    "url": "/2020//images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg",
    "revision": "52910f14529df88f419b1ff33be78533"
  },
  {
    "url": "/2020//images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg",
    "revision": "0d09e273188248b025e5863d54621aa0"
  },
  {
    "url": "/2020//images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg",
    "revision": "8ed0d10320039ed20e70de248003c340"
  },
  {
    "url": "/2020//images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg",
    "revision": "59b8d98dc974c797f7ddefba6943b2b6"
  },
  {
    "url": "/2020//images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg",
    "revision": "be8f9bae79059fff2c7d6989509de383"
  },
  {
    "url": "/2020//images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg",
    "revision": "d663ee0d529cbd942b4e1a7e674cf68f"
  },
  {
    "url": "/2020//images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg",
    "revision": "7c31719da41196175814289839bd8a57"
  },
  {
    "url": "/2020//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2020//index.html",
    "revision": "efe8e2f0e955e0365a30bd6888d0792a"
  },
  {
    "url": "/2020//sponsors/index.html",
    "revision": "248bfebdd60445c2c21a98fcdf378f4f"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "bd976e456bac566e256a66f4a98fe04d"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/index.html",
    "revision": "651cf9a4f32d0b7a23dd87f82e9ae364"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/index.html",
    "revision": "545c971a95f77889bc2e66dd64fd7a4e"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/index.html",
    "revision": "ed053bac9d6aa069f5790577e0dc7829"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/index.html",
    "revision": "81fe43b966bc87a94229ae961c9fbc1c"
  },
  {
    "url": "/2020//topics/cyberport-tbc/index.html",
    "revision": "8ff800fb32ef201777ecc1dd1b050130"
  },
  {
    "url": "/2020//topics/day-1-talk-1/index.html",
    "revision": "d9956a5a6a15cd5b18480e5068760207"
  },
  {
    "url": "/2020//topics/day-1-talk-2/index.html",
    "revision": "cfa025403426ce2668fc777f5bda971a"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/index.html",
    "revision": "bc51dc405652761ba16d16af59a70933"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/index.html",
    "revision": "382ad4ecdc29317a00e0773461cb5b2d"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/index.html",
    "revision": "e00d0f32fe2f7efeffdadc59e08796f8"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "a6ef57a8632f423032e0878955e80732"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/index.html",
    "revision": "12c18914ae477bf4180872ea30d637ac"
  },
  {
    "url": "/2020//topics/keynote-1/index.html",
    "revision": "699d62b4c0e52bd5ce1b7ddde11e136c"
  },
  {
    "url": "/2020//topics/keynote-2/index.html",
    "revision": "abc5403f8903ed172add148d30753fdc"
  },
  {
    "url": "/2020//topics/keynote-3/index.html",
    "revision": "075c22d494640bd5244bfbe9d7490b7b"
  },
  {
    "url": "/2020//topics/keynote-4/index.html",
    "revision": "6f43bf1c65ab3d47064fbf1e5763d04b"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/index.html",
    "revision": "42190ecd4d1c5c087fb5eb7542b29060"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/index.html",
    "revision": "863b2971a9baabbae0556191bce51abf"
  },
  {
    "url": "/2020//topics/microsoft-tbc/index.html",
    "revision": "6b769df192e33fa4d07652db1d3acc9a"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/index.html",
    "revision": "8321ad24d20e9703305aa3ff91db798b"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/index.html",
    "revision": "6cb97d5d04f3346f404fe86e8e6feaec"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/index.html",
    "revision": "d97e84593c6fa99b93c7e4c48f4aaa6b"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/index.html",
    "revision": "5c78b7183efb73d8d3d92a499ffd383b"
  },
  {
    "url": "/2020//topics/red-hat-tbc/index.html",
    "revision": "5cc8364460a9627bd453eabdbb72ce4d"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/index.html",
    "revision": "34e147802b4fd8aace82cf32e99bf99c"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/index.html",
    "revision": "5c9cfbbcf5695bce3328c40566fd8e34"
  },
  {
    "url": "/2020//topics/tvhk/index.html",
    "revision": "256513bb4185d26dcf4d572259f128f4"
  },
  {
    "url": "/2020//about/coc/",
    "revision": "0fee5614eec6ccf3baef52cec6525aef"
  },
  {
    "url": "/2020//about/conference/",
    "revision": "b60172c34742f3b73b50486307cf8803"
  },
  {
    "url": "/2020//about/organizers/",
    "revision": "485d4d48470b74ef2fa2de4cc1006e1d"
  },
  {
    "url": "/2020//about/volunteers/",
    "revision": "25badc5f772844c534bee3ba475ecfef"
  },
  {
    "url": "/2020//cfc/",
    "revision": "c3ac51b1163dfb44521575b100185f25"
  },
  {
    "url": "/2020//cfp/",
    "revision": "c64ea6f9f8142761291ebe53b081ec7e"
  },
  {
    "url": "/2020//",
    "revision": "efe8e2f0e955e0365a30bd6888d0792a"
  },
  {
    "url": "/2020//sponsors/",
    "revision": "248bfebdd60445c2c21a98fcdf378f4f"
  },
  {
    "url": "/2020//timetable/",
    "revision": "bd976e456bac566e256a66f4a98fe04d"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/",
    "revision": "651cf9a4f32d0b7a23dd87f82e9ae364"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/",
    "revision": "545c971a95f77889bc2e66dd64fd7a4e"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/",
    "revision": "ed053bac9d6aa069f5790577e0dc7829"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/",
    "revision": "81fe43b966bc87a94229ae961c9fbc1c"
  },
  {
    "url": "/2020//topics/cyberport-tbc/",
    "revision": "8ff800fb32ef201777ecc1dd1b050130"
  },
  {
    "url": "/2020//topics/day-1-talk-1/",
    "revision": "d9956a5a6a15cd5b18480e5068760207"
  },
  {
    "url": "/2020//topics/day-1-talk-2/",
    "revision": "cfa025403426ce2668fc777f5bda971a"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/",
    "revision": "bc51dc405652761ba16d16af59a70933"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/",
    "revision": "382ad4ecdc29317a00e0773461cb5b2d"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/",
    "revision": "e00d0f32fe2f7efeffdadc59e08796f8"
  },
  {
    "url": "/2020//topics/",
    "revision": "a6ef57a8632f423032e0878955e80732"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/",
    "revision": "12c18914ae477bf4180872ea30d637ac"
  },
  {
    "url": "/2020//topics/keynote-1/",
    "revision": "699d62b4c0e52bd5ce1b7ddde11e136c"
  },
  {
    "url": "/2020//topics/keynote-2/",
    "revision": "abc5403f8903ed172add148d30753fdc"
  },
  {
    "url": "/2020//topics/keynote-3/",
    "revision": "075c22d494640bd5244bfbe9d7490b7b"
  },
  {
    "url": "/2020//topics/keynote-4/",
    "revision": "6f43bf1c65ab3d47064fbf1e5763d04b"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/",
    "revision": "42190ecd4d1c5c087fb5eb7542b29060"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/",
    "revision": "863b2971a9baabbae0556191bce51abf"
  },
  {
    "url": "/2020//topics/microsoft-tbc/",
    "revision": "6b769df192e33fa4d07652db1d3acc9a"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/",
    "revision": "8321ad24d20e9703305aa3ff91db798b"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/",
    "revision": "6cb97d5d04f3346f404fe86e8e6feaec"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/",
    "revision": "d97e84593c6fa99b93c7e4c48f4aaa6b"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/",
    "revision": "5c78b7183efb73d8d3d92a499ffd383b"
  },
  {
    "url": "/2020//topics/red-hat-tbc/",
    "revision": "5cc8364460a9627bd453eabdbb72ce4d"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/",
    "revision": "34e147802b4fd8aace82cf32e99bf99c"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/",
    "revision": "5c9cfbbcf5695bce3328c40566fd8e34"
  },
  {
    "url": "/2020//topics/tvhk/",
    "revision": "256513bb4185d26dcf4d572259f128f4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
