self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('toitpro-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
