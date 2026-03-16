'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ef70f9f904a828fc59358e949b88871",
"version.json": "20156c37df70a167911571ce31e892e2",
"index.html": "7c95e69b526f2182c0f2aa19aab7bd6c",
"/": "7c95e69b526f2182c0f2aa19aab7bd6c",
"CNAME": "7b97cc27e5b53507b2c22d140e785732",
"main.dart.js": "21717aca968b0e1677c9d2ec5614a595",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f959f6fe18a634d7871e8bdcf6a9cef5",
".git/ORIG_HEAD": "f3af6dc45fa82872b7969bd79643f9f8",
".git/config": "0b75baa8f318a0982bae8024efede7ac",
".git/objects/92/df2da2a15a55c668a8b16e77170f895f8a8068": "7fa0d13638595c10646b4341c6d28690",
".git/objects/92/6a5af9cc109e4732f814b27eeebd5d7044abd1": "bfc2308ccb470954cd1a4ea864b31add",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/67/b8ee05e0f5b044daaa547a44ba6f004101336f": "c192e2be047fc5e53f043f5cd81a9431",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/5a/618515cf5ec1e580daab7e1552d38d0bb861c9": "952e2835a43da3ff1bb47600c6b40f68",
".git/objects/5f/b85fb39788179035513322926425b65cec8ccd": "ac33fff3df5984cebe1f18bef3267622",
".git/objects/b2/f859f37e6dcdfa99772c08404dd3b4338fc639": "7b5223df1b3a5511123a3bbf267b748d",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/a5/c1d08b6aae9639747632d52e4ac4ea935d9908": "38335dcc3e7ef37b2105e2239fa98f71",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/054531556d490b7347179df189db6febe083de": "792a1e332dc3b2f7172b6c04a735edba",
".git/objects/fc/5d4f9b26d6e6b87f01cb7f4a270e4bdb701636": "a9504192ad2b718f7b70607f06bd9039",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c1/da6041bcb135de17cfe8698b1f9196b4f801c6": "f8daa35a4661ce831e26301066edbb33",
".git/objects/29/3841764530ab93bc6aca416861c551b2c48a79": "6f790d21b69bc2289e688ebfcd462cb4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/1a9da75a3c6635d2ae23439a2c6109ef2c666d": "3b7c9a9b7c7fe724c18c58f613afb6ee",
".git/objects/42/204e89b40b4399fc74511f91c57cd647c42fe9": "0a03bee3112c3c0b2737330b8d92053f",
".git/objects/45/cc3681c6ba99cb7a2912514a2bc135e045c778": "545b7a0d556c85cb189a1070b86192ea",
".git/objects/1f/640bbfde3503b5191a2310c439d471fb942e0e": "9a1bad4986157632b21e98682e8659af",
".git/objects/73/bbd111eb6e7e058486c9cb3ab348f326447e1f": "e8455294e1a08de9df4d1fbfb874628f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/da22c2ea581bdd501db8d52b594ee7a3d01a44": "dee99c6ad360ccbf721530996d8bfce9",
".git/objects/86/ed97910a87d7a8a5d5c181b50abc19918c689d": "94946c53d231e59b51f21a25d1b360cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/dbaf7bc51a5f2d10319a9526564c366c27f430": "9df746b854b5421aa53669d2438995ec",
".git/objects/38/f79fde29a08caf493ea5607596e75d05f8c838": "a2637123d1c1c1e868f27f9f8f26c8a7",
".git/objects/00/907b38b4959f61ac895972663d3320f88c0cd5": "2edcd12ea7f0c8ad586d3ca72d52383c",
".git/objects/5c/87414dc2bffd451c8127e4c0a410151302df67": "a68b1650f03cccaf7ae9fe0d12e9db05",
".git/objects/09/4e1cd4285c2ab6831ee72334a812a90d1d4414": "2c993f16244e1e065ccfba90af6d4227",
".git/objects/65/d9b8f606b55d252600c19170640354624d6380": "e80963423b3b74d007d1e54ad6c3c352",
".git/objects/65/cb496e7bfadcefd1713ee4c8046e7e970f332d": "7c5e8da757f05329c89eadc44a487ed1",
".git/objects/96/32acf5c5f0f7d4d347a3c1690151e1323fdfd0": "6b63fa3e69eb45fe6ffaed845807ec6f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/98/5ea42f020f64b8e076e350cf82e6380b6b532f": "d0a62ae1f9ebe0be92b292ebfe8507b1",
".git/objects/5e/83a618ffdcb460948003f6d34b969e44e37e41": "78bfcf89f13bede96d6815ece91b1977",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/50ea4c8a89b42e252b461e54b3d3c7b9cef540": "a4a163ea9c83a4ab0efdf8a4adea2caf",
".git/objects/0a/d6d7b08dd1be4b93fa770eb03c7cee0aa8c8f6": "871adf601dfd1d47df840dad8cc6849a",
".git/objects/90/856bb44668e0730a2e34a8416cedfd6ba5df36": "c17b22a1562b1493c6b36126a140a894",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/23fc91fb7c38e568be5acead92cc5cacf20f5a": "7b0c2160847b9a29d0113e481118a8d2",
".git/objects/b6/61c56e489bbf7ced70822875bb6ab1e0d3b0c4": "d1615b4069e984e8b4161dfb2f012ad8",
".git/objects/b7/1827f30e8d8c7de5d87e99169d13b6b43ff8b7": "5eb12442576a977ca9a7274535dac558",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/edf7d8323643ec9f217ae7879fe73b878fcd71": "ede4ce338b504c14b11a2bd97eb9987a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/12f5347794952242f33110087f7d135c43cd74": "0bcaeb19a6d934a839d324ca1f68db96",
".git/objects/ef/3b4b774653cc8e697387985e2f3123a1f086f3": "dfa4b7420108bcd9738ecaf39ff09d5f",
".git/objects/cd/8dcc473f831343bc445fb2bead763e55b8fca3": "41d42a934e939280595ce9abd5b33ffd",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f7/9da4df2a51d53ba978e6b590389b6e3719ec94": "131db5175eba7a5b0ed0eeec3e1b741a",
".git/objects/fa/82c18db08a47f5763637498fd281db6269cd85": "917c2f42d816316e5bc439a71eda5ce0",
".git/objects/c2/839d7d82e63153b542df4fad2dbdd20d4784ef": "04ae7439180c82d7e80af7f381f0da3a",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/cedc6a41120d9800dec74c8547e3d1affea41e": "a567a9278ac11f93bb8239d4a61b887b",
".git/objects/f8/45a450666474144a57048d941bf253fab00a1f": "ed197ff4fe498f430b18700d89b591f4",
".git/objects/e0/f491af241fcf5de8d5f031a20070a35008b06e": "7a51de0c8218a21d959aeb45ad878432",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/84/0099ab31c213a454d274515c6fe63cad435fb3": "79a62cba18f19c26237c463baa2edd53",
".git/objects/23/50941e52ddac17d35343ac67b427d909ac96ab": "cea87f6a15776d744582bcf39bcebd47",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/82/eddb82ee08ebe597758faa87435e5795a52ad4": "0b9c7b71b71416d7457ce015823b6600",
".git/objects/2e/82d94c3b3e509d72ccb410aa2b95be398eeb07": "ed24ae719e98f7519dbcbc1f72515243",
".git/objects/7a/a8534a31961a718248fc2e79ad7ccbce96f7f4": "e8c59be3ba803f21a229e7caac432206",
".git/objects/7a/258070791659690bef95494c38c119f9317715": "1a0b0e85a201b9fe42a9420d4254c457",
".git/objects/8e/b57966b3ad200077d2dc7e19daf88687346f0d": "26fade6b48640d0f578f5469312437da",
".git/objects/8e/fa113ca7de03dcb52c3cfe6550b5471e769bfb": "8e0619c0db5ef46a8a255a9f3404d8f4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d36f060f439424a6d4f462dda12f289",
".git/logs/refs/heads/main": "e24dfe1d6202ecd960c745a43625a095",
".git/logs/refs/remotes/origin/main": "5a5b32276ac8a867eb8f77fbe5d58e59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3836fdc8cf3cf6df41057dcb3539eb50",
".git/refs/remotes/origin/main": "3836fdc8cf3cf6df41057dcb3539eb50",
".git/index": "fb931f9285614b2d3927d2136f5e2235",
".git/COMMIT_EDITMSG": "fc4b20032ff74498aeb3b7c2dde516bf",
".git/FETCH_HEAD": "b06d5756f370b98eb4e9e8a3366b9228",
"assets/NOTICES": "1b8b6406dc558f10fb7e248ee9b000e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c1d5f40f7ab39dc5d446b43112351b89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/pdfrx/assets/pdfium.wasm": "70a0620e6434254fcb5b1f770db50bc6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "5343e0f742afb6d7b63a9e3d178bc729",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "e3b7f6b9084b7f0aaef79180c01b32e5",
"assets/fonts/MaterialIcons-Regular.otf": "5e5dc2806a3dce1628db05417e623280",
"assets/assets/courses/copperhead.json": "da0167ce56c90c1e4ae8db2745f4bed4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
