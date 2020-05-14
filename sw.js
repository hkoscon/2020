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
    "url": "/2020//069de9fb9145532e70e5.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2020//09f07124403d22d81cde.js",
    "revision": "1acac50a48de8b14b0baf35f6bd2e8dd"
  },
  {
    "url": "/2020//0ecca2991f3806db74e6.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2020//10c31d3cb5dab2eb3eb9.js",
    "revision": "8ee8c0f04d991e04a38a42afbf216cd1"
  },
  {
    "url": "/2020//1403383a4278086ecb51.js",
    "revision": "2187142addfcd9939da2fd2889bb620e"
  },
  {
    "url": "/2020//1bd6a652b32228087c51.js",
    "revision": "8b481bfcfd2825bd73e6c21e80296c93"
  },
  {
    "url": "/2020//1e0b6fce47f089bd8458.js",
    "revision": "0d5f994b34db9ca6ce14bf4f67019b1c"
  },
  {
    "url": "/2020//200.html",
    "revision": "cc2ee943c72731203d05a007d769f4b0"
  },
  {
    "url": "/2020//25143d70fed381c8ed86.css",
    "revision": "772136ef1541b21d75838289f65e1ea6"
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
    "url": "/2020//370f3618b0e5916db5cf.js",
    "revision": "d58ac932257601fb396cd17a0b0097eb"
  },
  {
    "url": "/2020//3940030ec50a3a0aae89.js",
    "revision": "d36c9957d4a26a43680fa4ac87c79693"
  },
  {
    "url": "/2020//4002db9f560e4020c562.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2020//463c8ad6ba16e4ad86af.js",
    "revision": "f7e6e5c91bf78e9d21514036dcc8dc02"
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
    "url": "/2020//52fd6a35b164914d3907.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2020//630496d947ccd060b242.js",
    "revision": "13d362d6bdbae908f0dcac80e7844192"
  },
  {
    "url": "/2020//71bc4738255e96ccf798.css",
    "revision": "2ec47afeca7210758bb8a7b6fc139634"
  },
  {
    "url": "/2020//7538976af12cdc257094.js",
    "revision": "53a58ec1b6cafddc98f04e0ffec6519c"
  },
  {
    "url": "/2020//80a74d54d7538bfa01e3.js",
    "revision": "1a93ae3d011bd7fc81dc93af03143863"
  },
  {
    "url": "/2020//84a55930a4df002e38c4.js",
    "revision": "b21fe15caf6f8e312a1f475ceadff575"
  },
  {
    "url": "/2020//8519f7506f4a7e8dabeb.js",
    "revision": "50144a8d266dd154f95237b0cd39bd0a"
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
    "url": "/2020//9c368e4e5041de3a0b50.js",
    "revision": "ebfd46dc6adcff85a64263a11b817d2b"
  },
  {
    "url": "/2020//9ea58a5cf746cffcb167.js",
    "revision": "953c52f05516e0ae688af312eef0265b"
  },
  {
    "url": "/2020//about/coc/index.html",
    "revision": "2ff41b8b7dc19bb5477b77e9b4c8688f"
  },
  {
    "url": "/2020//about/conference/index.html",
    "revision": "d87aec35ea2c948dd97ae4b8c60e08d8"
  },
  {
    "url": "/2020//about/organizers/index.html",
    "revision": "18dac546b29b16e254b076df8702dbec"
  },
  {
    "url": "/2020//about/volunteers/index.html",
    "revision": "d40eadd04085fa8471e514becde3da22"
  },
  {
    "url": "/2020//af03c4b6f36e99d31103.js",
    "revision": "7d89476bbf81f5df11ed66b44e41956f"
  },
  {
    "url": "/2020//b679ca1c21a4eb04d66a.js",
    "revision": "22040c3a148d93686b0e20fe9f03d22d"
  },
  {
    "url": "/2020//c12a59e48277b5a895c8.js",
    "revision": "f78335dfd5a87ada873c21cf65667cf9"
  },
  {
    "url": "/2020//cdf96ad14927a6e9ca39.js",
    "revision": "37c67bf223cadce8ba6002c2d5be3d2f"
  },
  {
    "url": "/2020//cfc/index.html",
    "revision": "7399851d34649ab416ad0b1df1f8ce5f"
  },
  {
    "url": "/2020//cfp/index.html",
    "revision": "5dca40d5f1b58e3a0d81980bc1d8ea7a"
  },
  {
    "url": "/2020//d19278a8c87356f943fe.js",
    "revision": "5681ffa6de100490a6289c6dcabaf22f"
  },
  {
    "url": "/2020//d22dd8cec7a4ad1690b6.js",
    "revision": "3ca1cff88de43ca078bbd7ccd4cf833d"
  },
  {
    "url": "/2020//d43e8ac5dfa87fdf6bc0.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2020//daef6a7b622aa08e5677.js",
    "revision": "26fef796c2e4649c70deeb9e708c8cd8"
  },
  {
    "url": "/2020//dd7551bf613aa09f8026.js",
    "revision": "d2d530e635eeb44d2a977234ca91593b"
  },
  {
    "url": "/2020//e54496ef784c18699b92.js",
    "revision": "8a9b3296267d3046194096d9fb5bdfc2"
  },
  {
    "url": "/2020//efc8351fff6a02246ae3.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
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
    "revision": "64d9aabf7a616b47d097d5df884bfcd6"
  },
  {
    "url": "/2020//sponsors/index.html",
    "revision": "130ac7784e55f20f1c33cd6810f1c9e3"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "1b99ab612aa6bf6a2db320c3e20419bc"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/index.html",
    "revision": "c694a6b7ea588277d4407babbebacc3d"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/index.html",
    "revision": "727c906fd917a2f5a2d877bbb03254a9"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/index.html",
    "revision": "8003d8ef5a60a1419826124b0b745f62"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/index.html",
    "revision": "3e9bc375d74d44280db7454c930e27ee"
  },
  {
    "url": "/2020//topics/cyberport-tbc/index.html",
    "revision": "7acd30b73ac775b3c9ab29f96890b4d5"
  },
  {
    "url": "/2020//topics/day-1-talk-2/index.html",
    "revision": "56fabf285a953f41bb1d45ba34c2435f"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/index.html",
    "revision": "f446d881974f4be09793e5e8f16169ab"
  },
  {
    "url": "/2020//topics/github-actions-your-free-ci-engine-and-much-more/index.html",
    "revision": "297fd93f11cd80b7cab10c6bc0094d9c"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/index.html",
    "revision": "83a28cbac80043bd060f8a8e46410ec7"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/index.html",
    "revision": "984b75bbebea6e282d815232fc26122a"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "b8f31721a61903c08ae662c593e4ec65"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/index.html",
    "revision": "a8855632a55377fe828ea766a3d0f352"
  },
  {
    "url": "/2020//topics/keynote-1/index.html",
    "revision": "750b06eaa53da73174a2ddd47c8025fb"
  },
  {
    "url": "/2020//topics/keynote-2/index.html",
    "revision": "369d02d024abe209b20c61165bf99e79"
  },
  {
    "url": "/2020//topics/keynote-3/index.html",
    "revision": "026687f21c509ac51acb076930e291ad"
  },
  {
    "url": "/2020//topics/keynote-4/index.html",
    "revision": "f354f1b983f8495aa2dd619fca4b9101"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/index.html",
    "revision": "b08b42d5070aa8b54c63afcddc4acaca"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/index.html",
    "revision": "bf76671d52901693dc0def1b08023dc8"
  },
  {
    "url": "/2020//topics/microsoft-tbc/index.html",
    "revision": "81545b09eee1be796e8bc58e40bad42d"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/index.html",
    "revision": "83d10b24e8b70e8a05ea84faae405272"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/index.html",
    "revision": "7e2cf36a6663217552810db3ef9e3b4c"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/index.html",
    "revision": "3488c154926c4bb180cb2b0129359bfe"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/index.html",
    "revision": "7a7ba2264efe45cc25db32d04ad3eb6f"
  },
  {
    "url": "/2020//topics/red-hat-tbc/index.html",
    "revision": "6741d9ad9f64e1ce969a61af59340503"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/index.html",
    "revision": "d565a4c6dad0152c5262b60e9cf20e86"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/index.html",
    "revision": "05b5c5f7436ad44338e6e30fe3ba3003"
  },
  {
    "url": "/2020//topics/tvhk/index.html",
    "revision": "674ade4cc4548ce5fb40bb4916402b00"
  },
  {
    "url": "/2020//about/coc/",
    "revision": "2ff41b8b7dc19bb5477b77e9b4c8688f"
  },
  {
    "url": "/2020//about/conference/",
    "revision": "d87aec35ea2c948dd97ae4b8c60e08d8"
  },
  {
    "url": "/2020//about/organizers/",
    "revision": "18dac546b29b16e254b076df8702dbec"
  },
  {
    "url": "/2020//about/volunteers/",
    "revision": "d40eadd04085fa8471e514becde3da22"
  },
  {
    "url": "/2020//cfc/",
    "revision": "7399851d34649ab416ad0b1df1f8ce5f"
  },
  {
    "url": "/2020//cfp/",
    "revision": "5dca40d5f1b58e3a0d81980bc1d8ea7a"
  },
  {
    "url": "/2020//",
    "revision": "64d9aabf7a616b47d097d5df884bfcd6"
  },
  {
    "url": "/2020//sponsors/",
    "revision": "130ac7784e55f20f1c33cd6810f1c9e3"
  },
  {
    "url": "/2020//timetable/",
    "revision": "1b99ab612aa6bf6a2db320c3e20419bc"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/",
    "revision": "c694a6b7ea588277d4407babbebacc3d"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/",
    "revision": "727c906fd917a2f5a2d877bbb03254a9"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/",
    "revision": "8003d8ef5a60a1419826124b0b745f62"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/",
    "revision": "3e9bc375d74d44280db7454c930e27ee"
  },
  {
    "url": "/2020//topics/cyberport-tbc/",
    "revision": "7acd30b73ac775b3c9ab29f96890b4d5"
  },
  {
    "url": "/2020//topics/day-1-talk-2/",
    "revision": "56fabf285a953f41bb1d45ba34c2435f"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/",
    "revision": "f446d881974f4be09793e5e8f16169ab"
  },
  {
    "url": "/2020//topics/github-actions-your-free-ci-engine-and-much-more/",
    "revision": "297fd93f11cd80b7cab10c6bc0094d9c"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/",
    "revision": "83a28cbac80043bd060f8a8e46410ec7"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/",
    "revision": "984b75bbebea6e282d815232fc26122a"
  },
  {
    "url": "/2020//topics/",
    "revision": "b8f31721a61903c08ae662c593e4ec65"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/",
    "revision": "a8855632a55377fe828ea766a3d0f352"
  },
  {
    "url": "/2020//topics/keynote-1/",
    "revision": "750b06eaa53da73174a2ddd47c8025fb"
  },
  {
    "url": "/2020//topics/keynote-2/",
    "revision": "369d02d024abe209b20c61165bf99e79"
  },
  {
    "url": "/2020//topics/keynote-3/",
    "revision": "026687f21c509ac51acb076930e291ad"
  },
  {
    "url": "/2020//topics/keynote-4/",
    "revision": "f354f1b983f8495aa2dd619fca4b9101"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/",
    "revision": "b08b42d5070aa8b54c63afcddc4acaca"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/",
    "revision": "bf76671d52901693dc0def1b08023dc8"
  },
  {
    "url": "/2020//topics/microsoft-tbc/",
    "revision": "81545b09eee1be796e8bc58e40bad42d"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/",
    "revision": "83d10b24e8b70e8a05ea84faae405272"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/",
    "revision": "7e2cf36a6663217552810db3ef9e3b4c"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/",
    "revision": "3488c154926c4bb180cb2b0129359bfe"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/",
    "revision": "7a7ba2264efe45cc25db32d04ad3eb6f"
  },
  {
    "url": "/2020//topics/red-hat-tbc/",
    "revision": "6741d9ad9f64e1ce969a61af59340503"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/",
    "revision": "d565a4c6dad0152c5262b60e9cf20e86"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/",
    "revision": "05b5c5f7436ad44338e6e30fe3ba3003"
  },
  {
    "url": "/2020//topics/tvhk/",
    "revision": "674ade4cc4548ce5fb40bb4916402b00"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
