const CACHE_NAME = 'wsbazaar-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/logo192.png',
  '/manifest.json',
  // आप अपने अन्य static assets यहां जोड़ सकते हैं:
  // '/image/banner1.jpg',
  // '/static/js/main.xxx.js',
];

// 🔹 Install: Cache essential files
self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});

// 🔹 Activate: Cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  return self.clients.claim(); // Activate service worker immediately
});

// 🔹 Fetch: Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached data
        return cachedResponse;
      }

      // Try fetching from network
      return fetch(event.request).catch(() => {
        // 🔻 Fallback (Optional): Serve fallback page if network fails
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
