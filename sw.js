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
    "url": "/2020//0455aa79af1720c79336.js",
    "revision": "39a958867e1163fee6ae1fb242263fd0"
  },
  {
    "url": "/2020//0553b7dd7e9ada579871.js",
    "revision": "2816633fd124dd75239eb2571273cb49"
  },
  {
    "url": "/2020//069de9fb9145532e70e5.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2020//0e46b9a2fe49ff898986.js",
    "revision": "a6b21e44c50cdc8d1e6853d927918409"
  },
  {
    "url": "/2020//0ecca2991f3806db74e6.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2020//198a76f8068a7af12c93.js",
    "revision": "7a02984b92d649eac36e70aee6d120a9"
  },
  {
    "url": "/2020//200.html",
    "revision": "bff8e9f5b498395e418a74da362ca72a"
  },
  {
    "url": "/2020//20fb7c0d17ab0b85954d.js",
    "revision": "0f83642378b9b2f2f7582be59ac6b008"
  },
  {
    "url": "/2020//2489aacb202ee136e319.js",
    "revision": "3c62623e2987945f022e2ac32abed2c6"
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
    "url": "/2020//4002db9f560e4020c562.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2020//453ff3cd640660a8e123.js",
    "revision": "a2ae769b7e12630c61716683c06d5c3f"
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
    "url": "/2020//5fff01192a0a16588939.js",
    "revision": "c55c11b8dc857b1c7e491643ab0245ad"
  },
  {
    "url": "/2020//67b0307485d4f2bbcd82.js",
    "revision": "dad61c656f126b5c927165e07672ae88"
  },
  {
    "url": "/2020//6da0471c97c7a9ce8339.js",
    "revision": "ace9575f9b21b04946884fb6b43d3668"
  },
  {
    "url": "/2020//753c2815285adca0a356.js",
    "revision": "4b186dce9b023929cba87fe15b11cd86"
  },
  {
    "url": "/2020//760f912205c7848261ea.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2020//7fe8416c942040f56f57.js",
    "revision": "83b9c1dc980eb23903ceea3e9c8411ba"
  },
  {
    "url": "/2020//859e5eb5acc97995e2ec.js",
    "revision": "000873189d6f84290e52ac370b6985a0"
  },
  {
    "url": "/2020//884aef19c7edaf5b65c7.js",
    "revision": "bb4be4ff9360112867443041d348787d"
  },
  {
    "url": "/2020//8a7d2700c4f8b4341041.js",
    "revision": "ec85a43c2a21f89d2a31b47917e8430e"
  },
  {
    "url": "/2020//8dff5adc6275e9d1bbd2.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2020//910151526448058a0ed2.js",
    "revision": "0e1111007ffd69b32c964aa84f95b1bc"
  },
  {
    "url": "/2020//919e200baba01393f7b7.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2020//91f5969e40874ae573a4.js",
    "revision": "690af06c3743668b34a44339ea7d2fac"
  },
  {
    "url": "/2020//9a628d5f5a1595075d19.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2020//9c0eb3a445a14350524f.js",
    "revision": "69f1b43371ef3de695af10019b2d4164"
  },
  {
    "url": "/2020//9c2f3e39eb7ff1d561d2.js",
    "revision": "882d05265844281368d85e366ddd6e55"
  },
  {
    "url": "/2020//9c346e55641f5446f4ac.js",
    "revision": "f797afff6e155be932252e9b7a4ad4c9"
  },
  {
    "url": "/2020//9fb7ab75fc9341ee3a8b.js",
    "revision": "b63f4ec167e489eacc405dd22af0981b"
  },
  {
    "url": "/2020//about/organizers/index.html",
    "revision": "2a806cc61850708c438b23ebd7af147f"
  },
  {
    "url": "/2020//about/volunteers/index.html",
    "revision": "fec80355d7a577158008ad6264a43239"
  },
  {
    "url": "/2020//ae00f393886b8f1adeba.css",
    "revision": "c35e1be9bc4f533def90ec507f6ac9de"
  },
  {
    "url": "/2020//cfc/index.html",
    "revision": "bd356380d2a5e0468660ca2d84d4b22d"
  },
  {
    "url": "/2020//cfp/index.html",
    "revision": "2c7c5c9ded95e7cd54ac50d90dd5f799"
  },
  {
    "url": "/2020//d273687cb6eef10a6f8e.css",
    "revision": "772136ef1541b21d75838289f65e1ea6"
  },
  {
    "url": "/2020//d43e8ac5dfa87fdf6bc0.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2020//d5bba6d1736a8885c27e.js",
    "revision": "aeadb09e53c355b8f43d9c63bbc366df"
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
    "url": "/2020//f066876c5418094bc350.js",
    "revision": "b61130771ee3a7f91fc9327dac54c74c"
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
    "revision": "7d01befc51cce216d98d7e9013b5c838"
  },
  {
    "url": "/2020//sponsors/index.html",
    "revision": "92e35a06c2ba0eb45c379368125b44aa"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "de40b0fac18cc504303cbd636b81ee27"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/index.html",
    "revision": "740ef98beba2462d742703b762abb126"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/index.html",
    "revision": "ba1458375a932a64b85891fd5319edf1"
  },
  {
    "url": "/2020//topics/build-and-maintain-civil-infrastructure-platform-using-open-source-projects/index.html",
    "revision": "c9976320e2685e19e1c0db32910e8859"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/index.html",
    "revision": "a80a06b99c1e5f5be9bd1f5f44ab7ac6"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/index.html",
    "revision": "38db4c8e3e687bf06873e61ac3e7042e"
  },
  {
    "url": "/2020//topics/containerize-apps-kubernetes-azure/index.html",
    "revision": "8b118df2e71d1878a9eb8f2cfc2688f0"
  },
  {
    "url": "/2020//topics/cyberport-tbc/index.html",
    "revision": "71f2453b41c95e99ade766e97ab42c8e"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/index.html",
    "revision": "3ba6c71afbba433c1b428705e71ea57c"
  },
  {
    "url": "/2020//topics/democratize-data-literacy-open-source-technology/index.html",
    "revision": "bb5d48f12b5e74ac68fb9b81bde60b71"
  },
  {
    "url": "/2020//topics/emergency-response-demo-power-communities/index.html",
    "revision": "be545b3afc3e63a1b1ec41626310aff9"
  },
  {
    "url": "/2020//topics/github-actions-your-free-ci-engine-and-much-more/index.html",
    "revision": "c1c35ba99bc8a400dfb4401004ca6da5"
  },
  {
    "url": "/2020//topics/guide-responsible-ai-developers/index.html",
    "revision": "5f6588b7d8e6acdb45cd2b4b3839ed20"
  },
  {
    "url": "/2020//topics/hitchhikers-guide-servo-contributor/index.html",
    "revision": "9b947af4ee09cce78b81d89fdf877755"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/index.html",
    "revision": "49e61c35373ca9ae552ada73dbe3d055"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/index.html",
    "revision": "3f5cd496419263836001155e7198abc1"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "38d8ee9edb575d6dcafbceb99b58350d"
  },
  {
    "url": "/2020//topics/intersection-between-open-source-and-blockchain-trust-and-consensus/index.html",
    "revision": "196b29ed781d93823fde859c803728a3"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/index.html",
    "revision": "58560b2b647f7f3ee8c8ef22fcdeb1fe"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/index.html",
    "revision": "3e91e3b700ca973b905c9a8308ca47de"
  },
  {
    "url": "/2020//topics/lesson-learned-open-culture-under-covid-19-situation/index.html",
    "revision": "06405dea88d05d0fcd43018b27e2f4b9"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/index.html",
    "revision": "231b822274e06b9c13871eb1ee51c62f"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/index.html",
    "revision": "71a1c361a0f95994ceb17a463deea85d"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/index.html",
    "revision": "2fc239796f58de303bb1592c3bf7d603"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/index.html",
    "revision": "7c7a03de545fbb7eb51f454f4dc942cf"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/index.html",
    "revision": "ed387b22659ecaa140288d4b0972cbd3"
  },
  {
    "url": "/2020//topics/opening-ceremony-and-welcome-speech/index.html",
    "revision": "109a93862d924f958ea18cac4461379c"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/index.html",
    "revision": "72450db487c958293cadfcb2b2b86bd1"
  },
  {
    "url": "/2020//topics/service-mesh-openshift/index.html",
    "revision": "39ddeb7378ac3d302212ced906954465"
  },
  {
    "url": "/2020//topics/tvhk/index.html",
    "revision": "4f5039edea1b7b97a21eba6ccb807e0f"
  },
  {
    "url": "/2020//topics/zfs/index.html",
    "revision": "1fbd69919394bf2be5e11bc732a6f0a3"
  },
  {
    "url": "/2020//about/organizers/",
    "revision": "2a806cc61850708c438b23ebd7af147f"
  },
  {
    "url": "/2020//about/volunteers/",
    "revision": "fec80355d7a577158008ad6264a43239"
  },
  {
    "url": "/2020//cfc/",
    "revision": "bd356380d2a5e0468660ca2d84d4b22d"
  },
  {
    "url": "/2020//cfp/",
    "revision": "2c7c5c9ded95e7cd54ac50d90dd5f799"
  },
  {
    "url": "/2020//",
    "revision": "7d01befc51cce216d98d7e9013b5c838"
  },
  {
    "url": "/2020//sponsors/",
    "revision": "92e35a06c2ba0eb45c379368125b44aa"
  },
  {
    "url": "/2020//timetable/",
    "revision": "de40b0fac18cc504303cbd636b81ee27"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/",
    "revision": "740ef98beba2462d742703b762abb126"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/",
    "revision": "ba1458375a932a64b85891fd5319edf1"
  },
  {
    "url": "/2020//topics/build-and-maintain-civil-infrastructure-platform-using-open-source-projects/",
    "revision": "c9976320e2685e19e1c0db32910e8859"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/",
    "revision": "a80a06b99c1e5f5be9bd1f5f44ab7ac6"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/",
    "revision": "38db4c8e3e687bf06873e61ac3e7042e"
  },
  {
    "url": "/2020//topics/containerize-apps-kubernetes-azure/",
    "revision": "8b118df2e71d1878a9eb8f2cfc2688f0"
  },
  {
    "url": "/2020//topics/cyberport-tbc/",
    "revision": "71f2453b41c95e99ade766e97ab42c8e"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/",
    "revision": "3ba6c71afbba433c1b428705e71ea57c"
  },
  {
    "url": "/2020//topics/democratize-data-literacy-open-source-technology/",
    "revision": "bb5d48f12b5e74ac68fb9b81bde60b71"
  },
  {
    "url": "/2020//topics/emergency-response-demo-power-communities/",
    "revision": "be545b3afc3e63a1b1ec41626310aff9"
  },
  {
    "url": "/2020//topics/github-actions-your-free-ci-engine-and-much-more/",
    "revision": "c1c35ba99bc8a400dfb4401004ca6da5"
  },
  {
    "url": "/2020//topics/guide-responsible-ai-developers/",
    "revision": "5f6588b7d8e6acdb45cd2b4b3839ed20"
  },
  {
    "url": "/2020//topics/hitchhikers-guide-servo-contributor/",
    "revision": "9b947af4ee09cce78b81d89fdf877755"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/",
    "revision": "49e61c35373ca9ae552ada73dbe3d055"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/",
    "revision": "3f5cd496419263836001155e7198abc1"
  },
  {
    "url": "/2020//topics/",
    "revision": "38d8ee9edb575d6dcafbceb99b58350d"
  },
  {
    "url": "/2020//topics/intersection-between-open-source-and-blockchain-trust-and-consensus/",
    "revision": "196b29ed781d93823fde859c803728a3"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/",
    "revision": "58560b2b647f7f3ee8c8ef22fcdeb1fe"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/",
    "revision": "3e91e3b700ca973b905c9a8308ca47de"
  },
  {
    "url": "/2020//topics/lesson-learned-open-culture-under-covid-19-situation/",
    "revision": "06405dea88d05d0fcd43018b27e2f4b9"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/",
    "revision": "231b822274e06b9c13871eb1ee51c62f"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/",
    "revision": "71a1c361a0f95994ceb17a463deea85d"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/",
    "revision": "2fc239796f58de303bb1592c3bf7d603"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/",
    "revision": "7c7a03de545fbb7eb51f454f4dc942cf"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/",
    "revision": "ed387b22659ecaa140288d4b0972cbd3"
  },
  {
    "url": "/2020//topics/opening-ceremony-and-welcome-speech/",
    "revision": "109a93862d924f958ea18cac4461379c"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/",
    "revision": "72450db487c958293cadfcb2b2b86bd1"
  },
  {
    "url": "/2020//topics/service-mesh-openshift/",
    "revision": "39ddeb7378ac3d302212ced906954465"
  },
  {
    "url": "/2020//topics/tvhk/",
    "revision": "4f5039edea1b7b97a21eba6ccb807e0f"
  },
  {
    "url": "/2020//topics/zfs/",
    "revision": "1fbd69919394bf2be5e11bc732a6f0a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
