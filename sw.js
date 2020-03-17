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
    "url": "/2020//02c0588cd876d28ed163.js",
    "revision": "ee52dca13068ecae0ca5366c1f0facd4"
  },
  {
    "url": "/2020//069de9fb9145532e70e5.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2020//0b243992cf10f81d252f.js",
    "revision": "818d19e8323d28ba8736416ced6225ce"
  },
  {
    "url": "/2020//0c44cb6649024f91677f.js",
    "revision": "0ad356d4358322affc12071b570a6d43"
  },
  {
    "url": "/2020//0ecca2991f3806db74e6.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2020//1575949ee13075d38079.js",
    "revision": "c790f391c2e7840db8548de5906f9aec"
  },
  {
    "url": "/2020//200.html",
    "revision": "a97a2af21c2141cb9bb2b588b9bc50a4"
  },
  {
    "url": "/2020//231096c57acf96f40de3.js",
    "revision": "cb9e183787560c405e4f31b90ce0157c"
  },
  {
    "url": "/2020//25a892e3828a7f2ed0bd.js",
    "revision": "ff0162ccffbddf893033f03df469c9e2"
  },
  {
    "url": "/2020//28cdd51912d6c3edca1d.js",
    "revision": "e5d06ecd713a392f124d3cbcb48b5f23"
  },
  {
    "url": "/2020//2c204a3389f4a1761c1b.css",
    "revision": "92ac8a848037992b93004565ee7c018b"
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
    "url": "/2020//322c89a5a3ab970656f6.js",
    "revision": "dcb8278a19ca762afbc7064f7f8838f9"
  },
  {
    "url": "/2020//335447078017e2183256.js",
    "revision": "bc0c91bdc57991a39160eeb20c3b72ab"
  },
  {
    "url": "/2020//3dcce04029020334e030.js",
    "revision": "6746c37fd0af545b7c2d71274f41fbb2"
  },
  {
    "url": "/2020//3f728523d1e187d6987d.js",
    "revision": "adce77b0a5e5fa1ba5e5ad8fb4e52f44"
  },
  {
    "url": "/2020//4002db9f560e4020c562.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2020//42aadb4f3dcb0b7a8fb4.js",
    "revision": "30c0d1b4b811cb600e8832168118b83f"
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
    "url": "/2020//884aef19c7edaf5b65c7.js",
    "revision": "bb4be4ff9360112867443041d348787d"
  },
  {
    "url": "/2020//8a5ab48f476dff6864c3.js",
    "revision": "76cb4f39a46d2bb82b85906128510ba6"
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
    "url": "/2020//97b4069d7b5b01a05445.js",
    "revision": "1d7795f1d315d6d52fab47b09d6641c7"
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
    "revision": "ff53171ff145bb22a1153cec6fb21608"
  },
  {
    "url": "/2020//about/conference/index.html",
    "revision": "2badbc6daad2ff543fbc0308bee94a27"
  },
  {
    "url": "/2020//about/organizers/index.html",
    "revision": "57602ebdbbb701773e5ce4764fc0c287"
  },
  {
    "url": "/2020//about/volunteers/index.html",
    "revision": "3ec3df69c53bcf914eb0c4ba0ba148a8"
  },
  {
    "url": "/2020//c3615f69657859b1661f.js",
    "revision": "5e50c26e1d9c00f4e9c92e593b6a78b4"
  },
  {
    "url": "/2020//ccbc070402f265d78231.js",
    "revision": "c606e6f729985c54d6f34cadfcdfd707"
  },
  {
    "url": "/2020//cfc/index.html",
    "revision": "95e17c728d954b92e84d2ff5150bdc63"
  },
  {
    "url": "/2020//cfp/index.html",
    "revision": "770fd8d6aeb954026eaba15ca0c726e5"
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
    "url": "/2020//dad1bd596acabc56605b.js",
    "revision": "d030ec73737f5db78d5604ae637a5a77"
  },
  {
    "url": "/2020//daf04e70da865502c99c.js",
    "revision": "687d4c3294fa74f05272aaee6b123430"
  },
  {
    "url": "/2020//dca501444ccb2bf8efab.css",
    "revision": "48bebad343b53e94a957a80019e523ec"
  },
  {
    "url": "/2020//e50135a4278a0f9bd08d.css",
    "revision": "08e5d711f8ddba6decd032a030f80540"
  },
  {
    "url": "/2020//e50b78d4b50e678f8f97.js",
    "revision": "f7d1ef281116a7b1c566a559baa08d74"
  },
  {
    "url": "/2020//e61cdb5af62543deb17a.js",
    "revision": "480a9c3ee06b364fb07536faf2c0fd76"
  },
  {
    "url": "/2020//efc8351fff6a02246ae3.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2020//f9392e386532846d5d60.js",
    "revision": "ec1f1ff71e36cb6716c985b6e785d4cf"
  },
  {
    "url": "/2020//images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2020//images/bg.jpg",
    "revision": "fbc85c77524af2f3694fcd7ce2abc048"
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
    "revision": "0be1a06b783bfb8503ea3d77047e92f6"
  },
  {
    "url": "/2020//sponsors/index.html",
    "revision": "09ba6f292598bd6ab9b70414bccbc2bf"
  },
  {
    "url": "/2020//timetable/index.html",
    "revision": "76743ade09f440154b7aae7a0e8f9358"
  },
  {
    "url": "/2020//topics/index.html",
    "revision": "7c9857be5a108f9382363ed7a1c2cb13"
  },
  {
    "url": "/2020//about/coc/",
    "revision": "ff53171ff145bb22a1153cec6fb21608"
  },
  {
    "url": "/2020//about/conference/",
    "revision": "2badbc6daad2ff543fbc0308bee94a27"
  },
  {
    "url": "/2020//about/organizers/",
    "revision": "57602ebdbbb701773e5ce4764fc0c287"
  },
  {
    "url": "/2020//about/volunteers/",
    "revision": "3ec3df69c53bcf914eb0c4ba0ba148a8"
  },
  {
    "url": "/2020//cfc/",
    "revision": "95e17c728d954b92e84d2ff5150bdc63"
  },
  {
    "url": "/2020//cfp/",
    "revision": "770fd8d6aeb954026eaba15ca0c726e5"
  },
  {
    "url": "/2020//",
    "revision": "0be1a06b783bfb8503ea3d77047e92f6"
  },
  {
    "url": "/2020//sponsors/",
    "revision": "09ba6f292598bd6ab9b70414bccbc2bf"
  },
  {
    "url": "/2020//timetable/",
    "revision": "76743ade09f440154b7aae7a0e8f9358"
  },
  {
    "url": "/2020//topics/",
    "revision": "7c9857be5a108f9382363ed7a1c2cb13"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2020//", new workbox.strategies.NetworkFirst(), 'GET');
