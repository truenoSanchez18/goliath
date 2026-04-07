const CACHE = 'golliat-v1';
const STATIC = [
  '/cotizador-ismerely.html',
  '/productos.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Solo cachear GET
  if (e.request.method !== 'GET') return;
  // No cachear llamadas a APIs externas (Supabase, OpenAI, Gemini)
  const url = e.request.url;
  if (url.includes('supabase.co') || url.includes('openai.com') ||
      url.includes('googleapis.com') || url.includes('generativelanguage')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200) return resp;
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => cached);
    })
  );
});
