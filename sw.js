// Service worker "nhẹ" — chỉ đủ để cho phép "Thêm vào màn hình chính" (PWA)
// và có bản dự phòng khi mất mạng. KHÔNG ưu tiên cache cũ nữa.
//
// Chiến lược: NETWORK-FIRST — luôn thử tải bản MỚI NHẤT từ mạng trước.
// Chỉ dùng bản cache cũ khi thật sự mất mạng (không có internet).
// => Mỗi lần bạn deploy bản mới, người dùng vào web thường sẽ luôn thấy bản mới,
//    không cần họ phải xoá cache hay mở tab ẩn danh nữa.
//
// LƯU Ý: mỗi lần bạn đổi code, tăng số ở CACHE_NAME lên (v2 -> v3 -> v4...)
// để service worker biết mà dọn cache cũ đi, tránh cache phình to theo thời gian.
const CACHE_NAME = "cfs-shell-v2";
const APP_SHELL = ["index.html", "style.css", "script.js", "manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting(); // Kích hoạt bản service worker mới ngay, không chờ tab cũ đóng hết
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim(); // Chiếm quyền điều khiển các tab đang mở luôn, không cần load lại 2 lần
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isShellFile = APP_SHELL.some((f) => url.pathname.endsWith(f));
  if (!isShellFile) return; // Nhạc, ảnh, gọi API... luôn đi thẳng mạng, không qua cache

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Tải mạng thành công -> cập nhật cache cho lần sau lỡ mất mạng, rồi trả bản MỚI này
        const cloned = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned)).catch(() => {});
        return networkResponse;
      })
      .catch(() => {
        // Mất mạng -> mới dùng tạm bản cache cũ (còn hơn không có gì)
        return caches.match(event.request);
      })
  );
});
