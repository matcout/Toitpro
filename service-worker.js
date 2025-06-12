self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('toiture-cache').then(function(cache) {
      return cache.addAll([
        './',  // Ajout de la page principale
        './index.html',
        './manifest.json',
        // Ajouter d'autres ressources nécessaires
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