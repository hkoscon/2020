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
    "url": "/2020//200.html",
    "revision": "69fbe74e39a27105766991f9328ecb11"
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
    "url": "/2020//3377697d7dff4037385f.js",
    "revision": "85c6414127402ddff0aa39e7db9324d4"
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
    "url": "/2020//5bff372b7f4dcac823aa.css",
    "revision": "b67e06c651ba08242cf68631b1b526f6"
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
    "url": "/2020//a384ecae74bd8e0dff9f.js",
    "revision": "17b333b45e81a0b9f6f894fa660a0fb1"
  },
  {
    "url": "/2020//about/organizers/index.html",
    "revision": "2312c95ddc170002dde49a1197fff36c"
  },
  {
    "url": "/2020//about/volunteers/index.html",
    "revision": "c5c32e92c162ba22151e3add72cacce8"
  },
  {
    "url": "/2020//cfc/index.html",
    "revision": "ffb977116312ecd1e7ff3882d24bc1a0"
  },
  {
    "url": "/2020//cfp/index.html",
    "revision": "dcb4bcdbaabb1119569a5c83178942a0"
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
    "revision": "6cdcfc320cccf7fef5a990f3277fc4f7"
  },
  {
    "url": "/2020//sponsors/index.html",
    "revision": "e21e21e6a1d5922ffa97434d6dbd3318"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "e3c9c66fff2b9c63f8b4d30f5d7371a1"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/index.html",
    "revision": "77b38d16b87108d17429ee7e0ad2094f"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/index.html",
    "revision": "50d9959228b244ffb75bed1f0c5cfa7a"
  },
  {
    "url": "/2020//topics/build-and-maintain-civil-infrastructure-platform-using-open-source-projects/index.html",
    "revision": "de64d71c03e6fad7205e40ff40741e86"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/index.html",
    "revision": "07441a89714b0fc6bc94709d2aa9ab77"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/index.html",
    "revision": "ab14c273662b85b8f485a62ad00bedbd"
  },
  {
    "url": "/2020//topics/city-big-data-open-usage/index.html",
    "revision": "296cb85ee7a7f075001d5faeb76426ea"
  },
  {
    "url": "/2020//topics/containerize-apps-kubernetes-azure/index.html",
    "revision": "d14093903d68e56f6307e3c42ab0d0c5"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/index.html",
    "revision": "3cbec1c1adb913170070417b0940563c"
  },
  {
    "url": "/2020//topics/democratize-data-literacy-open-source-technology/index.html",
    "revision": "f77d67d0c2ccdce17d6fc7b52ae7b694"
  },
  {
    "url": "/2020//topics/emergency-response-demo-power-communities/index.html",
    "revision": "afb766cc66ae346371ad5c5d9002fff4"
  },
  {
    "url": "/2020//topics/github-actions-your-free-ci-engine-and-much-more/index.html",
    "revision": "415c5965664c54956ff6135ee72ee60d"
  },
  {
    "url": "/2020//topics/guide-responsible-ai-developers/index.html",
    "revision": "67a56c5d58444632bbacba86fad14289"
  },
  {
    "url": "/2020//topics/hitchhikers-guide-servo-contributor/index.html",
    "revision": "402ca69f48985d861713078b27dde4c0"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/index.html",
    "revision": "fbf39f8029100260193d15a4d107d922"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/index.html",
    "revision": "34382fad30060298903de077f293fcda"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "274e71de38945fde74ca8adc6bbb52ba"
  },
  {
    "url": "/2020//topics/intersection-between-open-source-and-blockchain-trust-and-consensus/index.html",
    "revision": "6c30e1850a98185ce1a2cc05a2a5034f"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/index.html",
    "revision": "b0ca9c626e895825ad972df1008b18d4"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/index.html",
    "revision": "2a4d0b162a92025438b42c881760f887"
  },
  {
    "url": "/2020//topics/lesson-learned-open-culture-under-covid-19-situation/index.html",
    "revision": "28aad7e9d1387d772c15e30fe9a77e3b"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/index.html",
    "revision": "d9db34d6cc6ff565742cdce35caf42c6"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/index.html",
    "revision": "3409b51c777a766d384d5c315d8d2667"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/index.html",
    "revision": "3b31ed74dcf1399dd830e440e6328da6"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/index.html",
    "revision": "44e7b0d2468e967742de37e7b8581eb5"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/index.html",
    "revision": "60cdbbfb4be34b14e838db36beb9f54c"
  },
  {
    "url": "/2020//topics/open-source-community-management-krunch/index.html",
    "revision": "e5798d00af63062e87123a7b7856d629"
  },
  {
    "url": "/2020//topics/opening-ceremony-and-welcome-speech/index.html",
    "revision": "36bf166a54fa43e7132c4a2b5f9ebfea"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/index.html",
    "revision": "19754fc6b271710f78f899498bc36d3a"
  },
  {
    "url": "/2020//topics/service-mesh-openshift/index.html",
    "revision": "00ac2c18933b343320102db7438ad9d4"
  },
  {
    "url": "/2020//topics/tvhk/index.html",
    "revision": "647cbecededd6df7ed107b743d9eafee"
  },
  {
    "url": "/2020//topics/zfs/index.html",
    "revision": "ddabd34124641028d5699ab5f9e8a7f6"
  },
  {
    "url": "/2020//about/organizers/",
    "revision": "2312c95ddc170002dde49a1197fff36c"
  },
  {
    "url": "/2020//about/volunteers/",
    "revision": "c5c32e92c162ba22151e3add72cacce8"
  },
  {
    "url": "/2020//cfc/",
    "revision": "ffb977116312ecd1e7ff3882d24bc1a0"
  },
  {
    "url": "/2020//cfp/",
    "revision": "dcb4bcdbaabb1119569a5c83178942a0"
  },
  {
    "url": "/2020//",
    "revision": "6cdcfc320cccf7fef5a990f3277fc4f7"
  },
  {
    "url": "/2020//sponsors/",
    "revision": "e21e21e6a1d5922ffa97434d6dbd3318"
  },
  {
    "url": "/2020//timetable/",
    "revision": "e3c9c66fff2b9c63f8b4d30f5d7371a1"
  },
  {
    "url": "/2020//topics/ansible-vm-kubernetes/",
    "revision": "77b38d16b87108d17429ee7e0ad2094f"
  },
  {
    "url": "/2020//topics/automating-kubernetes-gitops/",
    "revision": "50d9959228b244ffb75bed1f0c5cfa7a"
  },
  {
    "url": "/2020//topics/build-and-maintain-civil-infrastructure-platform-using-open-source-projects/",
    "revision": "de64d71c03e6fad7205e40ff40741e86"
  },
  {
    "url": "/2020//topics/build-api-service-using-ktor-rapidly/",
    "revision": "07441a89714b0fc6bc94709d2aa9ab77"
  },
  {
    "url": "/2020//topics/businessbrand-database-developed-software-package-repositories/",
    "revision": "ab14c273662b85b8f485a62ad00bedbd"
  },
  {
    "url": "/2020//topics/city-big-data-open-usage/",
    "revision": "296cb85ee7a7f075001d5faeb76426ea"
  },
  {
    "url": "/2020//topics/containerize-apps-kubernetes-azure/",
    "revision": "d14093903d68e56f6307e3c42ab0d0c5"
  },
  {
    "url": "/2020//topics/decentralized-content-registry-expanding-ipfs-functionality-cosmos-based-blockchain/",
    "revision": "3cbec1c1adb913170070417b0940563c"
  },
  {
    "url": "/2020//topics/democratize-data-literacy-open-source-technology/",
    "revision": "f77d67d0c2ccdce17d6fc7b52ae7b694"
  },
  {
    "url": "/2020//topics/emergency-response-demo-power-communities/",
    "revision": "afb766cc66ae346371ad5c5d9002fff4"
  },
  {
    "url": "/2020//topics/github-actions-your-free-ci-engine-and-much-more/",
    "revision": "415c5965664c54956ff6135ee72ee60d"
  },
  {
    "url": "/2020//topics/guide-responsible-ai-developers/",
    "revision": "67a56c5d58444632bbacba86fad14289"
  },
  {
    "url": "/2020//topics/hitchhikers-guide-servo-contributor/",
    "revision": "402ca69f48985d861713078b27dde4c0"
  },
  {
    "url": "/2020//topics/how-build-online-learning-platform-engages-and-educates-students-scale-amazon-kendra-amazon/",
    "revision": "fbf39f8029100260193d15a4d107d922"
  },
  {
    "url": "/2020//topics/how-i-do-troubleshooting-container-more-docker/",
    "revision": "34382fad30060298903de077f293fcda"
  },
  {
    "url": "/2020//topics/",
    "revision": "274e71de38945fde74ca8adc6bbb52ba"
  },
  {
    "url": "/2020//topics/intersection-between-open-source-and-blockchain-trust-and-consensus/",
    "revision": "6c30e1850a98185ce1a2cc05a2a5034f"
  },
  {
    "url": "/2020//topics/julia-looks-python-feels-lisp-runs-cfortran/",
    "revision": "b0ca9c626e895825ad972df1008b18d4"
  },
  {
    "url": "/2020//topics/launch-warsvote4hk-within-2-days-0-cost/",
    "revision": "2a4d0b162a92025438b42c881760f887"
  },
  {
    "url": "/2020//topics/lesson-learned-open-culture-under-covid-19-situation/",
    "revision": "28aad7e9d1387d772c15e30fe9a77e3b"
  },
  {
    "url": "/2020//topics/libreoffice-current-status-most-powerful-oss-office-suite/",
    "revision": "d9db34d6cc6ff565742cdce35caf42c6"
  },
  {
    "url": "/2020//topics/mysql-high-availability-deployment-practice/",
    "revision": "3409b51c777a766d384d5c315d8d2667"
  },
  {
    "url": "/2020//topics/mysql-security-best-practice/",
    "revision": "3b31ed74dcf1399dd830e440e6328da6"
  },
  {
    "url": "/2020//topics/oao-user-orientation-cloud-architecture-pi/",
    "revision": "44e7b0d2468e967742de37e7b8581eb5"
  },
  {
    "url": "/2020//topics/open-default-trying-run-startup-open-source-culture-mind/",
    "revision": "60cdbbfb4be34b14e838db36beb9f54c"
  },
  {
    "url": "/2020//topics/open-source-community-management-krunch/",
    "revision": "e5798d00af63062e87123a7b7856d629"
  },
  {
    "url": "/2020//topics/opening-ceremony-and-welcome-speech/",
    "revision": "36bf166a54fa43e7132c4a2b5f9ebfea"
  },
  {
    "url": "/2020//topics/rust-and-webassembly-powered-microservices/",
    "revision": "19754fc6b271710f78f899498bc36d3a"
  },
  {
    "url": "/2020//topics/service-mesh-openshift/",
    "revision": "00ac2c18933b343320102db7438ad9d4"
  },
  {
    "url": "/2020//topics/tvhk/",
    "revision": "647cbecededd6df7ed107b743d9eafee"
  },
  {
    "url": "/2020//topics/zfs/",
    "revision": "ddabd34124641028d5699ab5f9e8a7f6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
