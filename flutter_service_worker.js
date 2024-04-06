'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "76aeb4926d9b645a60cdaeabd26aad67",
"assets/AssetManifest.bin.json": "45f9ad546b787dd0aa78374d31121409",
"assets/AssetManifest.json": "2c143021c902f659e330bcadc654ef73",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/4dgeg.png": "67e35b819114283253e38cbd98be5351",
"assets/assets/images/964979w2q6_7372_1.png": "e851b3d72197027cace180aac3f5ecc1",
"assets/assets/images/app_launcher_icon.png": "89a987980a7391e214976f8bb13131a1",
"assets/assets/images/Back_Visa.png": "2509fb6a538fe6edbd90250811977075",
"assets/assets/images/defw.png": "d5b8fc2a0fd27e379849a54f147324a2",
"assets/assets/images/Ellipse_1.png": "6af671a2d54b020807ab28685f2976e0",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Fra34ftme_292.png": "7ac113f8900767fff3c65cf4e88a5e12",
"assets/assets/images/Fram3d3e.png": "eee4826a15016f309ab1c9d64b7eecf8",
"assets/assets/images/Frame_19.png": "38a49b19ee791dcd80c46caf9adab698",
"assets/assets/images/Frame_21.png": "7def5c86dc7dccc0c7c07fa12476c9a0",
"assets/assets/images/Frame_244.png": "9c70c74479d581f943d79ae41769d3e3",
"assets/assets/images/Frame_246.png": "b53c857db2eeda4fabcb77602dc523c9",
"assets/assets/images/Frame_292w2-1.png": "5f39ce1f44a17befb03137d887719b73",
"assets/assets/images/Frame_2d392.png": "7ac113f8900767fff3c65cf4e88a5e12",
"assets/assets/images/Frame_39.png": "a62f26d7944955ccd03cc310589ce21d",
"assets/assets/images/Frame_93.png": "2dcebfd2de119e6aa816d388ca7c3e51",
"assets/assets/images/Grou43p.png": "ce786291e46d297cbd855277d3b88d2c",
"assets/assets/images/Groudsd3p.png": "ae02b5273c9d0555c179840176521626",
"assets/assets/images/iconamooe4n_discover-thin.png": "c74ba55db0c86b1a4910b26dbfd15945",
"assets/assets/images/ic_roun43d-check.png": "3b3fb789ee9a5c4043a7912d2c09c3f2",
"assets/assets/images/image_1.png": "34951172dca29361059eca31a4fa4522",
"assets/assets/images/INFO.png": "d4d10dcb93b3b53dd7ff88507dac6b94",
"assets/assets/images/Logo-Picture-White.png": "e44e2effb748fc2c130512d2198d3ccb",
"assets/assets/images/Logo32.png": "8e8c4bf6ae7f7d208077f1c4302e7b70",
"assets/assets/images/Logosplash.png": "8b163b41b0bcf8fb2f99e85f34f7fae1",
"assets/assets/images/logos_mastercard.png": "748748ab3798df44a4878e20bd9c6846",
"assets/assets/images/logos_vis2a.png": "a29481ffcc22ad2b4cda1b9b3c03482d",
"assets/assets/images/logos_visa.png": "1fc815e808040f8a2a6a98f12c249e00",
"assets/assets/images/mdi_tree.png": "fb3f347a063b1a8d982b3dc1b024e0c9",
"assets/assets/images/monesave_app_icon_720.png": "89a987980a7391e214976f8bb13131a1",
"assets/assets/images/OBJ42ECTS.png": "b6db88e049183bdeb07e478f4ea65295",
"assets/assets/images/OBJECTS.png": "d5dade148f7fc30e52014377dd4a74d1",
"assets/assets/images/Rectang423le_13.png": "b0f263e521698a9f15b43759854674f0",
"assets/assets/images/Rectangle_28.png": "647dad11813d5f1cb350c24a319aa289",
"assets/assets/images/rred.png": "33c080ae89461be208ff7cc423af5a00",
"assets/assets/images/Screenshot_2023-08-30_at_10.21_1.png": "92ddb8530a026a2dff5453cdb29200d0",
"assets/assets/images/Vect2w1or.png": "c0443a85604c67b59d682278c20ff463",
"assets/assets/images/Vecwegdstor.png": "3f8e25d1f0f077f5373891d9da9a6414",
"assets/assets/images/Visa_Card.jpg": "fd8e86e5a79cdb442b03320d1a378637",
"assets/assets/images/Visa_Card.png": "c0259ec8ae64bfef8c50aee8884f35d1",
"assets/assets/images/ygrd.png": "1f87a6783b319432e4ed05098c335223",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f5494a922d16ca0cd09948bea34bd450",
"assets/NOTICES": "6ae630d20cfe71d191a2494c1660a78a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5bfb0aff1d6e0b0966bed892bb08ffaf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "fe22a328a9263ad4bf452648d0d13904",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "860021359b9d146362aca3a5cfda0601",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "9bf8b1ab7b28925759539f5dab0f7942",
"canvaskit/canvaskit.wasm": "ae51eacec65638751a9f8337a12ce1e8",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4204b7a336643ac3dbd6d57125388d8f",
"canvaskit/chromium/canvaskit.wasm": "a88b8f0f6ae548cfdb1fc64066e498e0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "4372fb8a8815b82f7df32021d3817016",
"canvaskit/skwasm.wasm": "74508f684b7e5dd9c4cbfe4612c00422",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/app_launcher_icon.png": "89a987980a7391e214976f8bb13131a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "836dfebf1ec87b67879d999f3d22b08b",
"/": "836dfebf1ec87b67879d999f3d22b08b",
"main.dart.js": "d272bb81ee22cd659010e1f0f96d9f96",
"monesave_app_icon_720.png": "89a987980a7391e214976f8bb13131a1",
"version.json": "d0f810fbc3bfa7b70ef71d3da62576b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
