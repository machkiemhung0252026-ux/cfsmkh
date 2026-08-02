// Service worker "nhẹ" — chỉ đủ để trình duyệt cho phép "Thêm vào màn hình chính".
// Cache app-shell cơ bản, không cache nhạc/ảnh (để luôn lấy bản mới nhất).
const CACHE_NAME = "cfs-shell-v1";
const APP_SHELL = ["index.html", "style.css", "script.js", "manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Chỉ áp dụng cache-first cho app-shell; mọi request khác (nhạc, ảnh, API) đi thẳng mạng.
  const url = new URL(event.request.url);
  const isShellFile = APP_SHELL.some((f) => url.pathname.endsWith(f));
  if (!isShellFile) return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
