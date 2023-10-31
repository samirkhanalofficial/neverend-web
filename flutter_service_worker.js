'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "52d38624836ee50e3fd2eb774bcac4aa",
"assets/AssetManifest.json": "a07380937e9314668d1224598f37251d",
"assets/assets/fonts/ExensaGrotesk-Black.ttf": "6be9e678d75ed6db550c8042d6f7d96d",
"assets/assets/fonts/ExensaGrotesk-Bold.ttf": "0b8b8c37cfc77fe871792ee160fff9f0",
"assets/assets/fonts/ExensaGrotesk-ExtraBold.ttf": "4c74f92c54a7cf980177001aa42c3a86",
"assets/assets/fonts/ExensaGrotesk-Light.ttf": "e6fc1468bf80336c7666527ada158d2c",
"assets/assets/fonts/ExensaGrotesk-Regular.ttf": "45e5a44b1ccb52bf7e19019ea95716db",
"assets/assets/icons/bank.svg": "e2dfaf639b86fbebb7d619ac5c91f93f",
"assets/assets/icons/cart-2.svg": "5af50e221f182e78ba011ec4ca0bf951",
"assets/assets/icons/cart-filled.svg": "1292179c75b27b2a58cab2f388638603",
"assets/assets/icons/cart.svg": "e7faa980dd75ad1a117b093269c32d33",
"assets/assets/icons/categories-filled.svg": "d3c02d5b8098b07722b2496541c0b7d1",
"assets/assets/icons/categories.svg": "f1b447666b10a4ac6cf12eebb6f22e40",
"assets/assets/icons/fire.png": "f826e977a3277d72528276630d8e9039",
"assets/assets/icons/headphone.svg": "3f9493d5dd7fd33b932f953c2bfe1d50",
"assets/assets/icons/heart.svg": "e3fc85caecf9b3f9ca7ed8db52d71af5",
"assets/assets/icons/home-filled.svg": "5855d133943771fd5ed2989b9442fdad",
"assets/assets/icons/home.svg": "082bc977da3633d97d2d82b8265e364a",
"assets/assets/icons/info.svg": "6267f59d9e8eff7db096f7115e026df4",
"assets/assets/icons/mic.svg": "72c3bdd867cb9cbf38ba5c0ad7d43cae",
"assets/assets/icons/moon.svg": "313bf4fe8f9c37c9a7e4266b9b223b1f",
"assets/assets/icons/notification-2.svg": "5adf199acae924ec8e50d37d23336c21",
"assets/assets/icons/notifications.svg": "774a7d2a7340ce51d2e0bbe1976549e8",
"assets/assets/icons/people.svg": "148a04959b54f2c44d2ace0d6461c151",
"assets/assets/icons/policies.svg": "94353c300f0d1d7d08da5fd162d31a3a",
"assets/assets/icons/search.svg": "d33888f0e89ff9f27ff18c5b6b86dcd4",
"assets/assets/icons/shipping.svg": "d31fb65bc34fb211f7d3b90fc6e1c62f",
"assets/assets/icons/store-filled.svg": "b800c1b97987872f47a7acf8037841af",
"assets/assets/icons/store.svg": "6af5baf3dcebf82cf574c9e75e10b4b1",
"assets/assets/icons/user-filled.svg": "3cd5051ea41c2e7665d6d1efaeb10047",
"assets/assets/icons/user.svg": "46801a2148a1d475af1aa5302e5964a0",
"assets/assets/images/appbar_logo.png": "7e5c1f8e3303918d5454af3cd663af60",
"assets/assets/images/logo.png": "7c653465d85d21f6fd63ac0479a62839",
"assets/assets/images/network/apple.png": "1ec11a869384bc5e59625bac39b6a099",
"assets/assets/images/network/carousel1.jpg": "d6ffbafd488f0ae0dc17638cf9d7da3e",
"assets/assets/images/network/emi.jpg": "35d4cfcf901c9dffbf2a12c7685d12d1",
"assets/assets/images/network/fashion.jpg": "ed9de87e17cadbf39f7fe80908f3afa7",
"assets/assets/images/network/nike-shoe.png": "77eed415b01a3ec4f6cb7758a5a2a6d4",
"assets/assets/images/network/nike.png": "662beedd79fabe01bf9f61157af93053",
"assets/assets/images/network/tv.png": "1d723f6fb08d8da5798cde6800807abc",
"assets/assets/images/network/women.jpg": "5509fcaa67a5468218592d908171562e",
"assets/FontManifest.json": "a32c9e479c3685a0d3bbe6bafebbecf9",
"assets/fonts/MaterialIcons-Regular.otf": "000986e41d943290fdaf877f6441801f",
"assets/NOTICES": "a458b3933f197454fb90a981f9d450a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "2b355fb6f6659bb9f5b44b849a56a9d4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "bd355ff343ebff941b794bbd4999e26c",
"icons/Icon-512.png": "d451576fd02394cff7470f70047a1928",
"icons/Icon-maskable-192.png": "bd355ff343ebff941b794bbd4999e26c",
"icons/Icon-maskable-512.png": "d451576fd02394cff7470f70047a1928",
"index.html": "30e065285dfc7d0143487ef9d085769a",
"/": "30e065285dfc7d0143487ef9d085769a",
"main.dart.js": "fc604cc9927686f3ed3130f970cfac4f",
"manifest.json": "799f92f6fe1cd94e35769e981363fb07",
"version.json": "2bdd4dc5c27fdd23cab6b1d6e49fb411"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
