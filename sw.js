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
    "revision": "c34dde151d134be9f951a4b61e852fb9"
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
    "revision": "800601a7d9260be02ec08f70c224329c"
  },
  {
    "url": "/2020//about/conference/index.html",
    "revision": "8d5d05abd050de35cd2e7b33c8aa87a2"
  },
  {
    "url": "/2020//about/organizers/index.html",
    "revision": "86941fc4e18f97c7c8b427d4667244eb"
  },
  {
    "url": "/2020//about/volunteers/index.html",
    "revision": "20037b710da6b9c90a98351ed1efe90e"
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
    "revision": "4d1c3b6d6bdb87c8e89c3b1f9f6fd460"
  },
  {
    "url": "/2020//cfp/index.html",
    "revision": "87bf72acf6a23443b76039968d114616"
  },
  {
    "url": "/2020//d05230e79ecb0fd4b3e3.js",
    "revision": "1396e99c94bb8d987f9a080641d72e5c"
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
    "url": "/2020//dad1bd596acabc56605b.js",
    "revision": "d030ec73737f5db78d5604ae637a5a77"
  },
  {
    "url": "/2020//dd7551bf613aa09f8026.js",
    "revision": "d2d530e635eeb44d2a977234ca91593b"
  },
  {
    "url": "/2020//e50135a4278a0f9bd08d.css",
    "revision": "08e5d711f8ddba6decd032a030f80540"
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
    "revision": "ec2831750a4c1e8f9f22db7d2f6e6207"
  },
  {
    "url": "/2020//sponsors/index.html",
    "revision": "38ca1a77a784ebf3e3a31077add9d20f"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "9a93e62370f5e8fdcf9464e6e3cc231c"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/index.html",
    "revision": "b3c77c94ff8de6cb0c3f8ceb66007355"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/index.html",
    "revision": "23c120081f2b80845dd7094bea82c13c"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/index.html",
    "revision": "e6b8d8fdbc024c2e78e8f841f7d783df"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/index.html",
    "revision": "71e2fc1599f755d8fc9cf3b77db3cfab"
  },
  {
    "url": "/2020//topics/cyberport-tbc/index.html",
    "revision": "a723cf4d18f3f33e3e955f732b9260a8"
  },
  {
    "url": "/2020//topics/day-1-talk-1/index.html",
    "revision": "e7524fc22a26aa837782f7fa83a52145"
  },
  {
    "url": "/2020//topics/day-1-talk-2/index.html",
    "revision": "ad25355dbfd00a65baafa936c8f7fadc"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/index.html",
    "revision": "a64243a39c15568d0482a32f54dfc949"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/index.html",
    "revision": "a1e54d4a4027e2f67ab016b77b8ff64a"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/index.html",
    "revision": "7c47a1f9c8907c7df57486f0f72ed3b5"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "b9e481a569a103685bb85489faf2141c"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/index.html",
    "revision": "7dae08dd84cec0ec491d7f0acbe2a07e"
  },
  {
    "url": "/2020//topics/keynote-1/index.html",
    "revision": "b5c6dc93813e22f227ab68d0d04ba7a6"
  },
  {
    "url": "/2020//topics/keynote-2/index.html",
    "revision": "2592a7ccf359d7e81f69257b401f99f8"
  },
  {
    "url": "/2020//topics/keynote-3/index.html",
    "revision": "e0a7e493e16c9d1fb47d5d2f6ee6317c"
  },
  {
    "url": "/2020//topics/keynote-4/index.html",
    "revision": "7b236b23f57f28bbacada135b3cafd3c"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/index.html",
    "revision": "59b9c0a6c66160c343df81180a175f24"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/index.html",
    "revision": "0856402ff85be188377117a74badfeef"
  },
  {
    "url": "/2020//topics/microsoft-tbc/index.html",
    "revision": "a45a6a897a3a545d5286455c16f0a7bb"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/index.html",
    "revision": "c922adf8b22e71189e033b6337912d94"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/index.html",
    "revision": "84f8378c16dcd168910486d76af8558c"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/index.html",
    "revision": "3e7a235023e50c8881a787b338a0ebf8"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/index.html",
    "revision": "7c16190ceeacb9703027f791638c36ae"
  },
  {
    "url": "/2020//topics/red-hat-tbc/index.html",
    "revision": "dd8c9ea716ad664f2ba553734005bace"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/index.html",
    "revision": "a860f9041571da7cad8a72b2df9d525b"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/index.html",
    "revision": "e5b7ca036a6319c1fc614e2ec9ac2bd2"
  },
  {
    "url": "/2020//topics/tvhk/index.html",
    "revision": "b2a4383eecf1797c0a348d72cf6b37bb"
  },
  {
    "url": "/2020//about/coc/",
    "revision": "800601a7d9260be02ec08f70c224329c"
  },
  {
    "url": "/2020//about/conference/",
    "revision": "8d5d05abd050de35cd2e7b33c8aa87a2"
  },
  {
    "url": "/2020//about/organizers/",
    "revision": "86941fc4e18f97c7c8b427d4667244eb"
  },
  {
    "url": "/2020//about/volunteers/",
    "revision": "20037b710da6b9c90a98351ed1efe90e"
  },
  {
    "url": "/2020//cfc/",
    "revision": "4d1c3b6d6bdb87c8e89c3b1f9f6fd460"
  },
  {
    "url": "/2020//cfp/",
    "revision": "87bf72acf6a23443b76039968d114616"
  },
  {
    "url": "/2020//",
    "revision": "ec2831750a4c1e8f9f22db7d2f6e6207"
  },
  {
    "url": "/2020//sponsors/",
    "revision": "38ca1a77a784ebf3e3a31077add9d20f"
  },
  {
    "url": "/2020//timetable/",
    "revision": "9a93e62370f5e8fdcf9464e6e3cc231c"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/",
    "revision": "b3c77c94ff8de6cb0c3f8ceb66007355"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/",
    "revision": "23c120081f2b80845dd7094bea82c13c"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/",
    "revision": "e6b8d8fdbc024c2e78e8f841f7d783df"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/",
    "revision": "71e2fc1599f755d8fc9cf3b77db3cfab"
  },
  {
    "url": "/2020//topics/cyberport-tbc/",
    "revision": "a723cf4d18f3f33e3e955f732b9260a8"
  },
  {
    "url": "/2020//topics/day-1-talk-1/",
    "revision": "e7524fc22a26aa837782f7fa83a52145"
  },
  {
    "url": "/2020//topics/day-1-talk-2/",
    "revision": "ad25355dbfd00a65baafa936c8f7fadc"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/",
    "revision": "a64243a39c15568d0482a32f54dfc949"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/",
    "revision": "a1e54d4a4027e2f67ab016b77b8ff64a"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/",
    "revision": "7c47a1f9c8907c7df57486f0f72ed3b5"
  },
  {
    "url": "/2020//topics/",
    "revision": "b9e481a569a103685bb85489faf2141c"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/",
    "revision": "7dae08dd84cec0ec491d7f0acbe2a07e"
  },
  {
    "url": "/2020//topics/keynote-1/",
    "revision": "b5c6dc93813e22f227ab68d0d04ba7a6"
  },
  {
    "url": "/2020//topics/keynote-2/",
    "revision": "2592a7ccf359d7e81f69257b401f99f8"
  },
  {
    "url": "/2020//topics/keynote-3/",
    "revision": "e0a7e493e16c9d1fb47d5d2f6ee6317c"
  },
  {
    "url": "/2020//topics/keynote-4/",
    "revision": "7b236b23f57f28bbacada135b3cafd3c"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/",
    "revision": "59b9c0a6c66160c343df81180a175f24"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/",
    "revision": "0856402ff85be188377117a74badfeef"
  },
  {
    "url": "/2020//topics/microsoft-tbc/",
    "revision": "a45a6a897a3a545d5286455c16f0a7bb"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/",
    "revision": "c922adf8b22e71189e033b6337912d94"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/",
    "revision": "84f8378c16dcd168910486d76af8558c"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/",
    "revision": "3e7a235023e50c8881a787b338a0ebf8"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/",
    "revision": "7c16190ceeacb9703027f791638c36ae"
  },
  {
    "url": "/2020//topics/red-hat-tbc/",
    "revision": "dd8c9ea716ad664f2ba553734005bace"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/",
    "revision": "a860f9041571da7cad8a72b2df9d525b"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/",
    "revision": "e5b7ca036a6319c1fc614e2ec9ac2bd2"
  },
  {
    "url": "/2020//topics/tvhk/",
    "revision": "b2a4383eecf1797c0a348d72cf6b37bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
