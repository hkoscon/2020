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
    "revision": "5a390facd1d2a84b193b071ce3f2d750"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "25b75c0fbda97046cad2a98d71b801f6"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/index.html",
    "revision": "5ba2bc0ab75e96bd977491dc7faebff0"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/index.html",
    "revision": "5e13b8ed8a7b8200330fa3bbf0874497"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/index.html",
    "revision": "bd4e56d61ed3fb5da6953b3c5ead131d"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/index.html",
    "revision": "42573d7e72f12af3642fabe6b61df726"
  },
  {
    "url": "/2020//topics/cyberport-tbc/index.html",
    "revision": "f13e4db9b7ce966069a96feaf5cbeeaa"
  },
  {
    "url": "/2020//topics/day-1-talk-1/index.html",
    "revision": "bcd8a109105be9de80bd1f368402a418"
  },
  {
    "url": "/2020//topics/day-1-talk-2/index.html",
    "revision": "c4c90df8936154ecddce70b8c7162717"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/index.html",
    "revision": "e842830930869815989b85f094ab7b12"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/index.html",
    "revision": "854ef20ed981315e43f5a3148c5a97e4"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/index.html",
    "revision": "898c8d50bd046bdc1ed6a5173195caf6"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "e02f388f279fb8ee820aef7a21ef0b25"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/index.html",
    "revision": "aa0b22f5b912b97bcefde6faefe1b432"
  },
  {
    "url": "/2020//topics/keynote-1/index.html",
    "revision": "8289d2a227d0f6ccaaf89883bb0782bc"
  },
  {
    "url": "/2020//topics/keynote-2/index.html",
    "revision": "7edb3db56f3eb875978c2625ca95408b"
  },
  {
    "url": "/2020//topics/keynote-3/index.html",
    "revision": "527f980929993acadd122bf8e82f55aa"
  },
  {
    "url": "/2020//topics/keynote-4/index.html",
    "revision": "3abdcb8eea9a6c31c463724086e8dc88"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/index.html",
    "revision": "efda20678fec637b635da3637c6c9d32"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/index.html",
    "revision": "0e81bbb4b189c9cd11297e0a84298146"
  },
  {
    "url": "/2020//topics/microsoft-tbc/index.html",
    "revision": "0a1d45a9c8ef56202150c84650b744b8"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/index.html",
    "revision": "a93fbee76af95f793710fd142d2ea1ea"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/index.html",
    "revision": "904336e8db5dd47a95261e8b8f3e576d"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/index.html",
    "revision": "0142f3ba0de53fb1e8827ae686c482f4"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/index.html",
    "revision": "1ea3cf6e2b944d47e3b15d9d06eda3c0"
  },
  {
    "url": "/2020//topics/red-hat-tbc/index.html",
    "revision": "8c5ecff979bc94ee59c3ab76e7d415ac"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/index.html",
    "revision": "441de2624ffe74b4230439d236a09588"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/index.html",
    "revision": "eae4a1f9eec0aac5899cac7ccdc9ef36"
  },
  {
    "url": "/2020//topics/tvhk/index.html",
    "revision": "a8afa218a5629c83ddddca2ff9e678b8"
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
    "revision": "5a390facd1d2a84b193b071ce3f2d750"
  },
  {
    "url": "/2020//timetable/",
    "revision": "25b75c0fbda97046cad2a98d71b801f6"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/",
    "revision": "5ba2bc0ab75e96bd977491dc7faebff0"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/",
    "revision": "5e13b8ed8a7b8200330fa3bbf0874497"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/",
    "revision": "bd4e56d61ed3fb5da6953b3c5ead131d"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/",
    "revision": "42573d7e72f12af3642fabe6b61df726"
  },
  {
    "url": "/2020//topics/cyberport-tbc/",
    "revision": "f13e4db9b7ce966069a96feaf5cbeeaa"
  },
  {
    "url": "/2020//topics/day-1-talk-1/",
    "revision": "bcd8a109105be9de80bd1f368402a418"
  },
  {
    "url": "/2020//topics/day-1-talk-2/",
    "revision": "c4c90df8936154ecddce70b8c7162717"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/",
    "revision": "e842830930869815989b85f094ab7b12"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/",
    "revision": "854ef20ed981315e43f5a3148c5a97e4"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/",
    "revision": "898c8d50bd046bdc1ed6a5173195caf6"
  },
  {
    "url": "/2020//topics/",
    "revision": "e02f388f279fb8ee820aef7a21ef0b25"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/",
    "revision": "aa0b22f5b912b97bcefde6faefe1b432"
  },
  {
    "url": "/2020//topics/keynote-1/",
    "revision": "8289d2a227d0f6ccaaf89883bb0782bc"
  },
  {
    "url": "/2020//topics/keynote-2/",
    "revision": "7edb3db56f3eb875978c2625ca95408b"
  },
  {
    "url": "/2020//topics/keynote-3/",
    "revision": "527f980929993acadd122bf8e82f55aa"
  },
  {
    "url": "/2020//topics/keynote-4/",
    "revision": "3abdcb8eea9a6c31c463724086e8dc88"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/",
    "revision": "efda20678fec637b635da3637c6c9d32"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/",
    "revision": "0e81bbb4b189c9cd11297e0a84298146"
  },
  {
    "url": "/2020//topics/microsoft-tbc/",
    "revision": "0a1d45a9c8ef56202150c84650b744b8"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/",
    "revision": "a93fbee76af95f793710fd142d2ea1ea"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/",
    "revision": "904336e8db5dd47a95261e8b8f3e576d"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/",
    "revision": "0142f3ba0de53fb1e8827ae686c482f4"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/",
    "revision": "1ea3cf6e2b944d47e3b15d9d06eda3c0"
  },
  {
    "url": "/2020//topics/red-hat-tbc/",
    "revision": "8c5ecff979bc94ee59c3ab76e7d415ac"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/",
    "revision": "441de2624ffe74b4230439d236a09588"
  },
  {
    "url": "/2020//topics/talk-tbc-coscup-reserved/",
    "revision": "eae4a1f9eec0aac5899cac7ccdc9ef36"
  },
  {
    "url": "/2020//topics/tvhk/",
    "revision": "a8afa218a5629c83ddddca2ff9e678b8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
