// ---------- PWA: đăng ký service worker (nhẹ, chỉ để cho phép cài vào màn hình chính) ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ---------- day/night palette tự động theo giờ ----------
const hour = new Date().getHours();
if(hour >= 6 && hour < 17){
  document.body.classList.add('daytime');
}

// ---------- dark mode toggle ----------
const darkModeBtn = document.getElementById('darkModeBtn');
let isDarkMode = false;
darkModeBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeBtn.textContent = isDarkMode ? '☀' : '🌙';
});

// ---------- chia sẻ link trang ----------
const shareBtn = document.getElementById('shareBtn');
const copiedBadge = document.getElementById('copiedBadge');
shareBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch (err) {
    const temp = document.createElement('input');
    temp.value = window.location.href;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  }
  copiedBadge.classList.add('show');
  setTimeout(() => copiedBadge.classList.remove('show'), 2000);
});

// ---------- ambient sky ----------
const sky = document.getElementById('sky');
const MOTE_COUNT = 14;
for(let i=0;i<MOTE_COUNT;i++){
  const m = document.createElement('div');
  m.className = 'mote';
  const size = 6 + Math.random()*16;
  m.style.width = size+'px';
  m.style.height = size+'px';
  m.style.left = (Math.random()*100)+'%';
  m.style.setProperty('--drift', (Math.random()*80-40)+'px');
  m.style.animationDuration = (10 + Math.random()*10)+'s';
  m.style.animationDelay = (Math.random()*14)+'s';
  sky.appendChild(m);
}

const GLINT_COUNT = 16;
for(let i=0;i<GLINT_COUNT;i++){
  const g = document.createElement('div');
  g.className = 'glint';
  const size = 3 + Math.random()*5;
  g.style.width = size+'px';
  g.style.height = size+'px';
  g.style.left = (Math.random()*100)+'%';
  g.style.top = (Math.random()*70)+'%';
  g.style.animationDuration = (2 + Math.random()*3)+'s';
  g.style.animationDelay = (Math.random()*5)+'s';
  sky.appendChild(g);
}

// ---------- tin nhắn khích lệ ----------
const encourageToast = document.getElementById('encourageToast');
const ENCOURAGE_MESSAGES = [
  "Một điều nhỏ bạn giữ trong lòng, có thể là điều ai đó cũng đang mong được nói ra",
  "Không sao nếu chưa sẵn sàng nói với ai — ở đây luôn lắng nghe",
  "Chia sẻ không làm bạn yếu đuối hơn, mà nhẹ lòng hơn",
  "Có những câu chuyện chỉ cần một người đọc thấy là đủ ấm",
  "Hôm nay, hãy để một điều bạn giấu được thấy ánh nắng",
  "Bạn không cần phải mạnh mẽ mọi lúc — cứ viết ra đây",
  "Mỗi lời tâm sự đều xứng đáng được lắng nghe, kể cả của bạn"
];
let encourageIndex = 0;

function showEncourageMessage(){
  encourageToast.textContent = ENCOURAGE_MESSAGES[encourageIndex];
  encourageToast.classList.add('show');
  encourageIndex = (encourageIndex + 1) % ENCOURAGE_MESSAGES.length;

  setTimeout(() => {
    encourageToast.classList.remove('show');
  }, 6500);
}

setTimeout(() => {
  showEncourageMessage();
  setInterval(showEncourageMessage, 22000);
}, 4000);

// ---------- captcha đếm mặt trời ----------
const captchaSuns = document.getElementById('captchaSuns');
const captchaInput = document.getElementById('captchaInput');
const captchaRefresh = document.getElementById('captchaRefresh');
const DECOY_EMOJIS = ['☁','⭐','🌙'];
let sunAnswer = 0;

function generateCaptcha(){
  sunAnswer = 3 + Math.floor(Math.random()*5);
  const totalIcons = sunAnswer + 1 + Math.floor(Math.random()*3);
  let icons = [];
  for(let i=0;i<sunAnswer;i++) icons.push('☀');
  while(icons.length < totalIcons){
    icons.push(DECOY_EMOJIS[Math.floor(Math.random()*DECOY_EMOJIS.length)]);
  }
  for(let i=icons.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  captchaSuns.textContent = icons.join(' ');
  captchaInput.value = "";
}
generateCaptcha();
captchaRefresh.addEventListener('click', generateCaptcha);

const websiteHoneypot = document.getElementById('website');

// ---------- banner ảnh trường ----------
const schoolBannerImg = document.getElementById('schoolBannerImg');
const schoolBanner = document.getElementById('schoolBanner');
const SCHOOL_BANNER_URL = "school-banner.jpg";
schoolBannerImg.src = SCHOOL_BANNER_URL;
schoolBannerImg.addEventListener('error', () => {
  schoolBanner.innerHTML = '<div class="banner-placeholder">Thêm ảnh trường bạn vào đây — đổi SCHOOL_BANNER_URL trong script.js</div>';
});

// ---------- DANH SÁCH BÀI HÁT (PLAYLIST 40 BÀI) ----------
// Ảnh bìa: anhnhac1.jpg -> anhnhac40.jpg | File nhạc: nhac1.mp3 -> nhac40.mp3
// Đặt các file này cùng thư mục với index.html. Đổi tên bài/nghệ sĩ bên dưới tuỳ ý.
const TRACK_TITLES = [
  "Ánh Nắng Lặng Lẽ","Sóng Biển Rì Rào","Gió Thoảng Chiều Nắng","Hoàng Hôn Trên Biển","Cơn Gió Heo May",
  "Mưa Rơi Trên Mái Hiên","Nắng Nhẹ Sân Trường","Chiều Thu Vàng","Đêm Trăng Yên Bình","Sương Sớm Mai",
  "Biển Xanh Ngày Ấy","Lối Về Kỷ Niệm","Khúc Ca Dịu Dàng","Miền Ký Ức","Giọt Nắng Bên Thềm",
  "Tiếng Chuông Chiều","Cánh Diều Tuổi Thơ","Nhành Lan Tím","Bến Sông Xưa","Vệt Nắng Cuối Ngày",
  "Mây Trắng Ngang Trời","Nốt Nhạc Bình Yên","Thềm Nhà Xưa Cũ","Nắng Hạ Rực Rỡ","Lời Ru Của Biển",
  "Hơi Thở Đại Dương","Chiếc Lá Cuối Thu","Góc Phố Quen Thuộc","Dòng Sông Trôi Lặng","Ngày Nắng Đẹp",
  "Khoảng Trời Riêng","Ánh Đèn Phố Đêm","Giai Điệu Xa Xăm","Tiếng Sóng Vỗ Bờ","Chiều Vàng Trên Phố",
  "Nốt Lặng Bình Yên","Hạt Mưa Rơi Nhẹ","Ánh Trăng Soi Bóng","Cơn Gió Mùa Hạ","Lặng Nghe Biển Hát"
];
const TRACK_ARTISTS = [""];

const PLAYLIST = TRACK_TITLES.map((title, i) => ({
  title,
  artist: TRACK_ARTISTS[i % TRACK_ARTISTS.length],
  src: `music${i + 1}.mp3`,
  cover: `anhnhac${i + 1}.jpg`
}));

let currentTrackIndex = 0;
let isPlaying = false;

const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const playerModal = document.getElementById('playerModal');
const playerClose = document.getElementById('playerClose');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const playerTitle = document.getElementById('playerTitle');
const playerArtist = document.getElementById('playerArtist');
const albumArt = document.getElementById('albumArt');
const playlistListEl = document.getElementById('playlistList');
const playlistSearchEl = document.getElementById('playlistSearch');

bgMusic.volume = 0.7;

function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Hàm nạp bài hát
function loadTrack(index) {
  const track = PLAYLIST[index];
  bgMusic.src = track.src;
  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;
  
  if (track.cover) {
    albumArt.innerHTML = `<img src="${track.cover}" alt="Cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<span>🎵</span>';" />`;
  } else {
    albumArt.innerHTML = `<span>🎵</span>`;
  }
  
  progressFill.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  renderPlaylist(playlistSearchEl ? playlistSearchEl.value : '');
}

// Vẽ danh sách playlist (có thể lọc theo tên bài / nghệ sĩ)
function renderPlaylist(filterText){
  if(!playlistListEl) return;
  const f = (filterText || '').trim().toLowerCase();
  const filtered = PLAYLIST
    .map((t, i) => ({ ...t, i }))
    .filter(t => !f || t.title.toLowerCase().includes(f) || t.artist.toLowerCase().includes(f));

  if(filtered.length === 0){
    playlistListEl.innerHTML = '<div class="playlist-empty">Không tìm thấy bài hát nào 🎧</div>';
    return;
  }

  playlistListEl.innerHTML = filtered.map(t => `
    <button type="button" class="playlist-item${t.i === currentTrackIndex ? ' active' : ''}" data-index="${t.i}">
      <span class="playlist-item-cover">${t.cover ? `<img src="${t.cover}" alt="" onerror="this.style.display='none'; this.parentElement.textContent='🎵';" />` : '🎵'}</span>
      <span class="playlist-item-info">
        <span class="playlist-item-title">${escapeHtml(t.title)}</span>
        <span class="playlist-item-artist">${escapeHtml(t.artist)}</span>
      </span>
      <span class="playlist-item-icon">${t.i === currentTrackIndex && isPlaying ? '♪' : ''}</span>
    </button>
  `).join('');
}

// Chọn và phát một bài trực tiếp từ danh sách playlist
function playTrackAt(index){
  currentTrackIndex = index;
  loadTrack(currentTrackIndex);
  bgMusic.play().then(() => {
    isPlaying = true;
    playPauseBtn.textContent = "⏸";
    renderPlaylist(playlistSearchEl ? playlistSearchEl.value : '');
  }).catch(() => {
    showStatus("Không tìm thấy file nhạc — hãy kiểm tra lại file .mp3 trong thư mục web.", false);
  });
}

if(playlistListEl){
  playlistListEl.addEventListener('click', (e) => {
    const item = e.target.closest('.playlist-item');
    if(!item) return;
    const index = parseInt(item.dataset.index, 10);
    if(!isNaN(index)) playTrackAt(index);
  });
}

if(playlistSearchEl){
  playlistSearchEl.addEventListener('input', (e) => {
    renderPlaylist(e.target.value);
  });
}

// Khởi tạo bài hát đầu tiên
loadTrack(currentTrackIndex);

// Mở Player Modal
musicBtn.addEventListener('click', () => {
  playerModal.classList.add('open');
});

// Đóng Player khi bấm nút X
playerClose.addEventListener('click', () => {
  playerModal.classList.remove('open');
});

// Đóng Player khi bấm ra ngoài card
playerModal.addEventListener('click', (e) => {
  if(e.target === playerModal){
    playerModal.classList.remove('open');
  }
});

// Đóng Player khi bấm phím ESC
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && playerModal.classList.contains('open')){
    playerModal.classList.remove('open');
  }
});

// Bật / Tạm dừng
playPauseBtn.addEventListener('click', () => {
  if(isPlaying){
    bgMusic.pause();
    playPauseBtn.textContent = "▶";
    isPlaying = false;
    renderPlaylist(playlistSearchEl ? playlistSearchEl.value : '');
  } else {
    bgMusic.play().then(() => {
      playPauseBtn.textContent = "⏸";
      isPlaying = true;
      renderPlaylist(playlistSearchEl ? playlistSearchEl.value : '');
    }).catch(() => {
      showStatus("Không tìm thấy file nhạc — hãy kiểm tra lại file .mp3 trong thư mục web.", false);
    });
  }
});

// ---------- popup gợi ý bật nhạc khi vừa vào trang ----------
const musicSuggestOverlay = document.getElementById('musicSuggestOverlay');
const musicSuggestYes = document.getElementById('musicSuggestYes');
const musicSuggestNo = document.getElementById('musicSuggestNo');

if (!sessionStorage.getItem('musicPromptSeen')) {
  setTimeout(() => {
    musicSuggestOverlay.classList.add('open');
  }, 1500);
}

function closeMusicSuggest(){
  musicSuggestOverlay.classList.remove('open');
  sessionStorage.setItem('musicPromptSeen', '1');
}

musicSuggestYes.addEventListener('click', () => {
  playerModal.classList.add('open');
  closeMusicSuggest();
});

musicSuggestNo.addEventListener('click', () => {
  closeMusicSuggest();
});

musicSuggestOverlay.addEventListener('click', (e) => {
  if (e.target === musicSuggestOverlay) {
    closeMusicSuggest();
  }
});

// Chuyển bài trước
prevBtn.addEventListener('click', () => {
  const newIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
  if (isPlaying) {
    playTrackAt(newIndex);
  } else {
    currentTrackIndex = newIndex;
    loadTrack(currentTrackIndex);
  }
});

// Chuyển bài kế tiếp
nextBtn.addEventListener('click', () => {
  const newIndex = (currentTrackIndex + 1) % PLAYLIST.length;
  if (isPlaying) {
    playTrackAt(newIndex);
  } else {
    currentTrackIndex = newIndex;
    loadTrack(currentTrackIndex);
  }
});

// Tự động phát bài tiếp theo khi hết bài
bgMusic.addEventListener('ended', () => {
  playTrackAt((currentTrackIndex + 1) % PLAYLIST.length);
});

// Điều chỉnh âm lượng
volumeSlider.addEventListener('input', (e) => {
  bgMusic.volume = e.target.value / 100;
});

// Cập nhật tiến trình phát nhạc
bgMusic.addEventListener('timeupdate', () => {
  if(bgMusic.duration){
    const percent = (bgMusic.currentTime / bgMusic.duration) * 100;
    progressFill.style.width = percent + '%';
    currentTimeEl.textContent = formatTime(bgMusic.currentTime);
  }
});

bgMusic.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(bgMusic.duration);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  if (bgMusic.duration) {
    bgMusic.currentTime = percent * bgMusic.duration;
  }
});

function formatTime(seconds){
  if(isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + (s < 10 ? "0" : "") + s;
}

// ---------- FORM LOGIC ----------
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjUs5CxzQ08ja8g845-kn2jiY8kCyv9luVKlFyKWJNVbYLLPN3DqVRtVM7REgnDn2w/exec";

const categorySelect = document.getElementById('categorySelect');
const contentEl = document.getElementById('content');
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const polaroid = document.getElementById('polaroid');
const fileLabelText = document.getElementById('fileLabelText');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const statusEl = document.getElementById('status');
const card = document.getElementById('card');
const formView = document.getElementById('formView');
const successView = document.getElementById('successView');
const againBtn = document.getElementById('againBtn');
const charCounter = document.getElementById('charCounter');

let imageBase64 = "";
let imageMime = "";
const MAX_CHARS = 3000;

// ---------- Giới hạn số lượt gửi mỗi ngày (chống spam, lưu theo trình duyệt) ----------
const MAX_SUBMISSIONS_PER_DAY = 5;
const RATE_LIMIT_KEY = 'cfsSubmitLog';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function getRecentSubmitTimes(){
  try{
    const raw = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || "[]");
    const now = Date.now();
    return Array.isArray(raw) ? raw.filter(t => now - t < ONE_DAY_MS) : [];
  }catch(e){
    return [];
  }
}

function recordSubmitTime(){
  const times = getRecentSubmitTimes();
  times.push(Date.now());
  try{ localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(times)); }catch(e){}
}

function msUntilNextSlot(times){
  if(times.length === 0) return 0;
  const oldest = Math.min(...times);
  return Math.max(0, ONE_DAY_MS - (Date.now() - oldest));
}

function formatHoursMinutes(ms){
  const totalMinutes = Math.ceil(ms / 60000);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if(h <= 0) return `${m} phút`;
  return `${h} giờ ${m} phút`;
}

let typingTimeout;
contentEl.addEventListener('input', () => {
  const len = contentEl.value.length;
  charCounter.textContent = len + "/" + MAX_CHARS;
  charCounter.classList.toggle('near-limit', len > MAX_CHARS * 0.9);

  contentEl.classList.add('typing-glow');
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    contentEl.classList.remove('typing-glow');
  }, 500);
});

// ---------- Nén ảnh trước khi gửi (giảm dung lượng base64 cho Google Sheet/Apps Script) ----------
const MAX_IMAGE_DIMENSION = 1600; // px, cạnh dài nhất sau khi resize
const IMAGE_JPEG_QUALITY = 0.82;

function compressImage(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
          const scale = MAX_IMAGE_DIMENSION / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve({ dataUrl: canvas.toDataURL('image/jpeg', IMAGE_JPEG_QUALITY), mime: 'image/jpeg' });
      };
      img.onerror = () => reject(new Error('Không đọc được ảnh.'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Không đọc được file.'));
    reader.readAsDataURL(file);
  });
}

imageInput.addEventListener('change', async () => {
  const file = imageInput.files[0];
  if (!file) return;
  if (file.size > 8 * 1024 * 1024) {
    showStatus("Ảnh quá lớn (tối đa 8MB).", false);
    imageInput.value = "";
    return;
  }

  fileLabelText.textContent = "Đang nén ảnh...";
  try {
    const { dataUrl, mime } = await compressImage(file);
    imageMime = mime;
    imageBase64 = dataUrl.split(',')[1];
    preview.src = dataUrl;
    polaroid.style.display = 'block';
    fileLabelText.textContent = file.name;
  } catch (err) {
    showStatus("Không xử lý được ảnh này, thử ảnh khác nhé.", false);
    imageInput.value = "";
    fileLabelText.textContent = "Đính kèm hình ảnh (không bắt buộc)";
  }
});

submitBtn.addEventListener('click', async () => {
  const content = contentEl.value.trim();
  const category = categorySelect.value;

  if (websiteHoneypot.value.trim() !== "") {
    showStatus("Có lỗi xảy ra, vui lòng thử lại.", false);
    return;
  }

  const recentTimes = getRecentSubmitTimes();
  if (recentTimes.length >= MAX_SUBMISSIONS_PER_DAY) {
    const waitLabel = formatHoursMinutes(msUntilNextSlot(recentTimes));
    showStatus(`Bạn đã gửi tối đa ${MAX_SUBMISSIONS_PER_DAY} confession hôm nay. Quay lại sau ${waitLabel} nhé 🌤`, false);
    return;
  }

  if (!content) {
    showStatus("Bạn chưa viết nội dung confession.", false);
    return;
  }

  const userAnswer = parseInt(captchaInput.value, 10);
  if (isNaN(userAnswer) || userAnswer !== sunAnswer) {
    showStatus("Đếm lại số mặt trời ☀ giúp mình nhé.", false);
    generateCaptcha();
    return;
  }

    if (!SCRIPT_URL || SCRIPT_URL === "" || SCRIPT_URL.includes("YOUR_SCRIPT_URL_HERE")) {
    showStatus("Chưa cấu hình SCRIPT_URL trong file script.js.", false);
    return;
    }

  submitBtn.disabled = true;
  submitBtnText.innerHTML = 'Đang gửi <span class="btn-dots"><span></span><span></span><span></span></span>';
  showStatus("", true);

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        category: category,
        content: content,
        imageBase64: imageBase64,
        imageMime: imageMime
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });
    const data = await res.json();
    if (data.success) {
      recordSubmitTime();
      card.classList.add('sending');
      setTimeout(() => {
        formView.style.display = 'none';
        successView.style.display = 'block';
        card.classList.remove('sending');
        card.style.transform = 'none';
        card.style.opacity = '1';
        contentEl.value = "";
        imageInput.value = "";
        imageBase64 = "";
        polaroid.style.display = 'none';
        fileLabelText.textContent = "Đính kèm hình ảnh (không bắt buộc)";
        statusEl.textContent = "";
        charCounter.textContent = "0/" + MAX_CHARS;
        charCounter.classList.remove('near-limit');
        generateCaptcha();
      }, 550);
    } else {
      showStatus("Có lỗi xảy ra: " + (data.error || "không rõ nguyên nhân"), false);
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
    }
  } catch (err) {
    showStatus("Không gửi được. Vui lòng thử lại.", false);
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 400);
  } finally {
    submitBtn.disabled = false;
    submitBtnText.textContent = "Thả trôi ra biển ⛵";
  }
});

againBtn.addEventListener('click', () => {
  successView.style.display = 'none';
  formView.style.display = 'block';
});

function showStatus(msg, ok) {
  statusEl.textContent = msg;
  statusEl.className = "status " + (ok ? "ok" : "err");
}

// ---------- Mở/đóng chi tiết chính sách riêng tư ----------
const privacyToggle = document.getElementById('privacyToggle');
const privacyDetails = document.getElementById('privacyDetails');
if (privacyToggle && privacyDetails) {
  privacyToggle.addEventListener('click', () => {
    const isOpen = privacyDetails.classList.toggle('open');
    privacyToggle.textContent = isOpen ? "Ẩn chính sách riêng tư ⌃" : "Xem chính sách riêng tư ⌄";
  });
}
