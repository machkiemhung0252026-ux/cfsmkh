// ================= CẤU HÌNH 4 MÙA =================
// Mỗi mùa có: emoji niêm phong, tiêu đề, phụ đề, CTA nút gửi, icon+chữ lúc thành công,
// icon nút chọn mùa, kiểu hạt hiệu ứng (cánh hoa/nắng/lá/tuyết), và playlist riêng.
const SEASONS = {
  spring: {
    label: "Xuân",
    icon: "🌸",
    seal: "🌸",
    title: 'Điều giấu kín, gửi vào <em>mùa xuân</em>',
    subtitle: "Ở đây không ai biết bạn là ai. Cứ viết như đang thì thầm với một người bạn cũ.",
    cta: "Thả cánh hoa theo gió 🌸",
    successIcon: "🌸",
    successText: "Lời bạn vừa gửi đã theo cánh hoa xuân bay xa.<br>Cảm ơn vì đã tin tưởng mình 🤍",
    particle: { emoji: "🌸", count: 14 },
    playlist: [
      { title: "Xuân Về Trên Phố", artist: "Acoustic", src: "spring1.mp3", cover: "" },
      { title: "Cánh Hoa Rơi", artist: "Piano Chill", src: "spring2.mp3", cover: "" },
      { title: "Nắng Xuân Dịu Dàng", artist: "Lofi", src: "spring3.mp3", cover: "" },
      { title: "Gió Xuân Thì Thầm", artist: "Acoustic Guitar", src: "spring4.mp3", cover: "" },
      { title: "Chồi Non Mới Nở", artist: "Ambient", src: "spring5.mp3", cover: "" },
      { title: "Sương Sớm Mùa Xuân", artist: "Piano", src: "spring6.mp3", cover: "" },
      { title: "Hương Xuân", artist: "Lofi Chill", src: "spring7.mp3", cover: "" },
      { title: "Ngày Mới Bắt Đầu", artist: "Acoustic", src: "spring8.mp3", cover: "" },
      { title: "Vườn Hoa Tháng Ba", artist: "Instrumental", src: "spring9.mp3", cover: "" },
      { title: "Xuân Sang", artist: "Ambient Chill", src: "spring10.mp3", cover: "" }
    ]
  },
  summer: {
    label: "Hạ",
    icon: "☀️",
    seal: "☀",
    title: 'Điều giấu kín, gửi vào <em>mùa hạ</em>',
    subtitle: "Không tên, không tài khoản — chỉ có bạn và một khoảng lặng để nói thật lòng.",
    cta: "Thả nắng ra biển ☀",
    successIcon: "☀",
    successText: "Lời bạn vừa gửi đang trôi cùng nắng hạ ra khơi xa.<br>Cảm ơn vì đã tin tưởng mình 🤍",
    particle: { emoji: "✨", count: 12 },
    playlist: [
      { title: "Nắng Hè Rực Rỡ", artist: "Chill Pop", src: "summer1.mp3", cover: "" },
      { title: "Biển Chiều Hạ", artist: "Lofi Chill", src: "summer2.mp3", cover: "" },
      { title: "Kỳ Nghỉ Hè", artist: "Acoustic", src: "summer3.mp3", cover: "" },
      { title: "Gió Biển Mặn Mòi", artist: "Ambient", src: "summer4.mp3", cover: "" },
      { title: "Ve Kêu Mùa Hạ", artist: "Instrumental", src: "summer5.mp3", cover: "" },
      { title: "Nắng Vàng Sân Trường", artist: "Piano Chill", src: "summer6.mp3", cover: "" },
      { title: "Trưa Hè Yên Ả", artist: "Lofi", src: "summer7.mp3", cover: "" },
      { title: "Sóng Vỗ Bờ Cát", artist: "Ambient Ocean", src: "summer8.mp3", cover: "" },
      { title: "Hoàng Hôn Mùa Hạ", artist: "Acoustic Guitar", src: "summer9.mp3", cover: "" },
      { title: "Đêm Hè Gió Mát", artist: "Chill Beats", src: "summer10.mp3", cover: "" }
    ]
  },
  fall: {
    label: "Thu",
    icon: "🍂",
    seal: "🍂",
    title: 'Điều giấu kín, gửi vào <em>mùa thu</em>',
    subtitle: "Không ai biết bạn là ai. Cứ để những điều nặng lòng nhẹ nhàng rơi xuống, như lá thu.",
    cta: "Thả chiếc lá bay đi 🍂",
    successIcon: "🍂",
    successText: "Lời bạn vừa gửi đã cuốn theo gió thu bay xa.<br>Cảm ơn vì đã tin tưởng mình 🤍",
    particle: { emoji: "🍂", count: 12 },
    playlist: [
      { title: "Thu Vàng Lá Rơi", artist: "Piano Instrumental", src: "fall1.mp3", cover: "" },
      { title: "Heo May Đầu Ngõ", artist: "Acoustic", src: "fall2.mp3", cover: "" },
      { title: "Chiều Thu Se Lạnh", artist: "Lofi Chill", src: "fall3.mp3", cover: "" },
      { title: "Mùi Hương Cốm Mới", artist: "Ambient", src: "fall4.mp3", cover: "" },
      { title: "Con Đường Lá Đổ", artist: "Piano Chill", src: "fall5.mp3", cover: "" },
      { title: "Sương Mù Ban Mai", artist: "Instrumental", src: "fall6.mp3", cover: "" },
      { title: "Thu Sang", artist: "Acoustic Guitar", src: "fall7.mp3", cover: "" },
      { title: "Lá Vàng Cuối Thu", artist: "Ambient Chill", src: "fall8.mp3", cover: "" },
      { title: "Nắng Nhạt Chiều Thu", artist: "Lofi", src: "fall9.mp3", cover: "" },
      { title: "Gió Heo May", artist: "Piano", src: "fall10.mp3", cover: "" }
    ]
  },
  winter: {
    label: "Đông",
    icon: "❄️",
    seal: "❄",
    title: 'Điều giấu kín, gửi vào <em>mùa đông</em>',
    subtitle: "Đêm lạnh dễ khiến lòng người mềm hơn. Viết ra đây, không ai biết đó là bạn.",
    cta: "Thả bông tuyết lên trời ❄",
    successIcon: "❄",
    successText: "Lời bạn vừa gửi đang bay lên cùng bông tuyết giữa trời đêm.<br>Cảm ơn vì đã tin tưởng mình 🤍",
    particle: { emoji: "❄", count: 16 },
    playlist: [
      { title: "Tuyết Rơi Đêm Đông", artist: "Piano Instrumental", src: "winter1.mp3", cover: "" },
      { title: "Sưởi Ấm Mùa Đông", artist: "Acoustic", src: "winter2.mp3", cover: "" },
      { title: "Đêm Đông Yên Tĩnh", artist: "Ambient Chill", src: "winter3.mp3", cover: "" },
      { title: "Gió Lạnh Đầu Mùa", artist: "Lofi", src: "winter4.mp3", cover: "" },
      { title: "Bên Cửa Sổ Mùa Đông", artist: "Piano Chill", src: "winter5.mp3", cover: "" },
      { title: "Tuyết Trắng", artist: "Instrumental", src: "winter6.mp3", cover: "" },
      { title: "Đông Về", artist: "Acoustic Guitar", src: "winter7.mp3", cover: "" },
      { title: "Sương Giá Ban Mai", artist: "Ambient", src: "winter8.mp3", cover: "" },
      { title: "Lặng Yên Mùa Đông", artist: "Piano", src: "winter9.mp3", cover: "" },
      { title: "Chờ Xuân Sang", artist: "Lofi Chill", src: "winter10.mp3", cover: "" }
    ]
  }
};

const isMobileScreen = window.innerWidth < 640;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sky = document.getElementById('sky');

let currentSeason = localStorage.getItem('confessionSeason') || 'spring';
if (!SEASONS[currentSeason]) currentSeason = 'spring';

// ================= HẠT HIỆU ỨNG THEO MÙA =================
function clearParticles() {
  sky.querySelectorAll('.season-particle').forEach(el => el.remove());
}

function spawnSeasonParticles(seasonKey) {
  clearParticles();
  if (prefersReducedMotion) return;

  const config = SEASONS[seasonKey].particle;
  const count = isMobileScreen ? Math.round(config.count * 0.6) : config.count;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'season-particle';
    p.textContent = config.emoji;
    const size = 12 + Math.random() * 10;
    p.style.fontSize = size + 'px';
    p.style.left = (Math.random() * 100) + '%';
    p.style.setProperty('--sway', (Math.random() * 100 - 50) + 'px');
    p.style.setProperty('--spin', (Math.random() * 360 - 180) + 'deg');
    p.style.animationDuration = (10 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 14) + 's';
    sky.appendChild(p);
  }
}

// Tạm dừng animation khi tab bị ẩn (tiết kiệm CPU/pin)
document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('anim-paused', document.hidden);
});

// ================= DARK MODE TOGGLE =================
const darkModeBtn = document.getElementById('darkModeBtn');
let isDarkMode = false;

const MOON_ICON = `<svg viewBox="0 0 24 24" width="19" height="19" fill="none"><path d="M20 14.2A8.2 8.2 0 1 1 9.8 4 6.6 6.6 0 0 0 20 14.2Z" fill="currentColor"/></svg>`;
const SUN_ICON = `<svg viewBox="0 0 24 24" width="19" height="19" fill="none"><circle cx="12" cy="12" r="4.6" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1.5" x2="12" y2="4.2"/><line x1="12" y1="19.8" x2="12" y2="22.5"/><line x1="1.5" y1="12" x2="4.2" y2="12"/><line x1="19.8" y1="12" x2="22.5" y2="12"/><line x1="4.4" y1="4.4" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.6" y2="19.6"/><line x1="19.6" y1="4.4" x2="17.7" y2="6.3"/><line x1="6.3" y1="17.7" x2="4.4" y2="19.6"/></g></svg>`;

darkModeBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeBtn.innerHTML = isDarkMode ? SUN_ICON : MOON_ICON;
});

// ================= ÁP DỤNG GIAO DIỆN THEO MÙA =================
const seasonBtn = document.getElementById('seasonBtn');
const seasonBtnIcon = document.getElementById('seasonBtnIcon');
const seasonOverlay = document.getElementById('seasonOverlay');
const seasonClose = document.getElementById('seasonClose');
const seasonOptions = document.querySelectorAll('.season-option');

const cardSeal = document.getElementById('cardSeal');
const cardTitle = document.getElementById('cardTitle');
const cardSubtitle = document.getElementById('cardSubtitle');
const submitBtnTextEl = document.getElementById('submitBtnText');
const successIcon = document.getElementById('successIcon');
const successTextEl = document.getElementById('successText');

function applySeason(seasonKey, isInitialLoad) {
  const config = SEASONS[seasonKey];
  if (!config) return;

  document.body.classList.remove('season-spring', 'season-summer', 'season-fall', 'season-winter');
  document.body.classList.add('season-' + seasonKey);
  currentSeason = seasonKey;
  localStorage.setItem('confessionSeason', seasonKey);

  seasonBtnIcon.textContent = config.icon;
  cardSeal.textContent = config.seal;
  cardTitle.innerHTML = config.title;
  cardSubtitle.textContent = config.subtitle;
  submitBtnTextEl.textContent = config.cta;
  successIcon.textContent = config.successIcon;
  successTextEl.innerHTML = config.successText;

  seasonOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.season === seasonKey);
  });

  spawnSeasonParticles(seasonKey);
  loadPlaylistForSeason(seasonKey, isInitialLoad);

  if (window.setTreeSeason) window.setTreeSeason(seasonKey);
}

// Chuyển mùa mượt mà: mờ dần sang một sắc ấm trung tính, đổi cảnh phía sau
// khi màn hình đang che kín, rồi hiện mùa mới ra dần — tránh cảm giác "giật" đổi màu đột ngột.
const sceneFade = document.getElementById('sceneFade');
function transitionToSeason(seasonKey) {
  if (seasonKey === currentSeason) return;

  if (prefersReducedMotion) {
    applySeason(seasonKey, false);
    return;
  }

  sceneFade.classList.add('active');
  setTimeout(() => {
    applySeason(seasonKey, false);
    requestAnimationFrame(() => {
      sceneFade.classList.remove('active');
    });
  }, 480);
}

seasonBtn.addEventListener('click', () => {
  seasonOverlay.classList.add('open');
});
seasonClose.addEventListener('click', () => {
  seasonOverlay.classList.remove('open');
});
seasonOverlay.addEventListener('click', (e) => {
  if (e.target === seasonOverlay) seasonOverlay.classList.remove('open');
});
seasonOptions.forEach(opt => {
  opt.addEventListener('click', () => {
    transitionToSeason(opt.dataset.season);
    seasonOverlay.classList.remove('open');
  });
});

// ================= NHẠC NỀN (PLAYLIST THEO MÙA) =================
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const playerOverlay = document.getElementById('playerOverlay');
const playerClose = document.getElementById('playerClose');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const playerTitle = document.getElementById('playerTitle');
const playerArtist = document.getElementById('playerArtist');
const playerArt = document.getElementById('playerArt');
const playlistHeading = document.getElementById('playlistHeading');
const playlistList = document.getElementById('playlistList');

let currentTrackIndex = 0;
let isPlaying = false;

function loadPlaylistForSeason(seasonKey, keepPlaying) {
  currentTrackIndex = 0;
  playlistHeading.textContent = "Playlist mùa " + SEASONS[seasonKey].label.toLowerCase();
  renderPlaylist();
  loadTrack(currentTrackIndex, keepPlaying);
}

function getCurrentPlaylist() {
  return SEASONS[currentSeason].playlist;
}

// Vẽ lại toàn bộ danh sách 10 bài của mùa hiện tại, cho phép bấm chọn bài bất kỳ
function renderPlaylist() {
  const playlist = getCurrentPlaylist();
  playlistList.innerHTML = "";

  playlist.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'playlist-item' + (i === currentTrackIndex ? ' active' : '');
    item.innerHTML = `
      <span class="playlist-item-num">${i + 1}</span>
      <span class="playlist-item-info">
        <span class="playlist-item-title">${track.title}</span><br>
        <span class="playlist-item-artist">${track.artist}</span>
      </span>
      ${i === currentTrackIndex && isPlaying ? '<span class="playlist-item-playing">🎵</span>' : ''}
    `;
    item.addEventListener('click', () => {
      currentTrackIndex = i;
      loadTrack(currentTrackIndex, true); // bấm chọn bài thì tự phát luôn
      renderPlaylist();
    });
    playlistList.appendChild(item);
  });
}

function loadTrack(index, keepPlaying) {
  const playlist = getCurrentPlaylist();
  const track = playlist[index];
  if (!track) return;

  const wasPlaying = isPlaying;
  bgMusic.pause();
  bgMusic.src = track.src;
  playerTitle.textContent = track.title;
  playerArtist.textContent = track.artist;

  if (track.cover) {
    playerArt.innerHTML = `<img src="${track.cover}" alt="cover" style="width:100%;height:100%;object-fit:cover;border-radius:16px;" onerror="this.parentElement.innerHTML='🎵'" />`;
  } else {
    playerArt.innerHTML = SEASONS[currentSeason].icon;
  }

  if (keepPlaying) {
    bgMusic.play().then(() => {
      isPlaying = true;
      playPauseBtn.textContent = "⏸";
      renderPlaylist();
    }).catch(() => {
      isPlaying = false;
      playPauseBtn.textContent = "▶";
    });
  } else {
    isPlaying = false;
    playPauseBtn.textContent = "▶";
  }
}

musicBtn.addEventListener('click', () => {
  playerOverlay.classList.add('open');
});
playerClose.addEventListener('click', () => {
  playerOverlay.classList.remove('open');
});
playerOverlay.addEventListener('click', (e) => {
  if (e.target === playerOverlay) playerOverlay.classList.remove('open');
});

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    playPauseBtn.textContent = "▶";
    isPlaying = false;
  } else {
    bgMusic.play().then(() => {
      playPauseBtn.textContent = "⏸";
      isPlaying = true;
    }).catch(() => {
      showStatus("Không tìm thấy file nhạc cho bài này — kiểm tra lại thư mục nhạc.", false);
    });
  }
});

prevBtn.addEventListener('click', () => {
  const playlist = getCurrentPlaylist();
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex, true);
  renderPlaylist();
});
nextBtn.addEventListener('click', () => {
  const playlist = getCurrentPlaylist();
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex, true);
  renderPlaylist();
});
bgMusic.addEventListener('ended', () => {
  nextBtn.click();
});

volumeSlider.addEventListener('input', (e) => {
  bgMusic.volume = e.target.value / 100;
});
bgMusic.volume = 0.6;

// ================= ĐÁNH GIÁ (RATING) =================
const ratingStars = document.querySelectorAll('.rating-star');
let selectedRating = 0;

ratingStars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseInt(star.dataset.value, 10);
    selectedRating = (selectedRating === value) ? 0 : value;
    ratingStars.forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.value, 10) <= selectedRating);
    });
  });
});

// ================= DANH MỤC (CATEGORY) =================
const categorySelect = document.getElementById('categorySelect');

// ================= CAPTCHA ĐẾM MẶT TRỜI =================
const captchaSuns = document.getElementById('captchaSuns');
const captchaInput = document.getElementById('captchaInput');
const captchaRefresh = document.getElementById('captchaRefresh');
const DECOY_EMOJIS = ['🌙', '⭐', '☁'];
let sunAnswer = 0;

function generateCaptcha() {
  sunAnswer = 3 + Math.floor(Math.random() * 5);
  const totalIcons = sunAnswer + 1 + Math.floor(Math.random() * 3);
  let icons = [];
  for (let i = 0; i < sunAnswer; i++) icons.push('☀');
  while (icons.length < totalIcons) {
    icons.push(DECOY_EMOJIS[Math.floor(Math.random() * DECOY_EMOJIS.length)]);
  }
  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  captchaSuns.textContent = icons.join(' ');
  captchaInput.value = "";
}
generateCaptcha();
captchaRefresh.addEventListener('click', generateCaptcha);

const websiteHoneypot = document.getElementById('website');

// ================= FORM: NỘI DUNG + ẢNH =================
// ⚠️ THAY URL NÀY bằng Web App URL sau khi bạn deploy Google Apps Script (xem SETUP.md)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjUs5CxzQ08ja8g845-kn2jiY8kCyv9luVKlFyKWJNVbYLLPN3DqVRtVM7REgnDn2w/exec";

const contentEl = document.getElementById('content');
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const polaroid = document.getElementById('polaroid');
const fileLabelText = document.getElementById('fileLabelText');
const submitBtn = document.getElementById('submitBtn');
const statusEl = document.getElementById('status');
const card = document.getElementById('card');
const formView = document.getElementById('formView');
const successView = document.getElementById('successView');
const againBtn = document.getElementById('againBtn');
const charCounter = document.getElementById('charCounter');

let selectedFile = null;
let previewObjectUrl = null;
const MAX_CHARS = 3000;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showStatus("Chỉ nhận file ảnh thôi nhé.", false);
    imageInput.value = "";
    return;
  }
  if (file.size > MAX_FILE_SIZE) {
    showStatus("Ảnh quá lớn (tối đa 5MB).", false);
    imageInput.value = "";
    return;
  }

  fileLabelText.textContent = file.name;
  selectedFile = file;

  if (previewObjectUrl) URL.revokeObjectURL(previewObjectUrl);
  previewObjectUrl = URL.createObjectURL(file);
  preview.src = previewObjectUrl;
  polaroid.style.display = 'block';
});

const removeImageBtn = document.getElementById('removeImageBtn');
removeImageBtn.addEventListener('click', () => {
  imageInput.value = "";
  selectedFile = null;
  if (previewObjectUrl) {
    URL.revokeObjectURL(previewObjectUrl);
    previewObjectUrl = null;
  }
  preview.src = "";
  polaroid.style.display = 'none';
  fileLabelText.textContent = "Đính kèm hình ảnh (không bắt buộc, tối đa 5MB)";
});

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result.split(',')[1]);
    reader.onerror = () => reject(new Error("read-failed"));
    reader.readAsDataURL(file);
  });
}

// ================= HIỆU ỨNG LẤP LÁNH KHI GỬI THÀNH CÔNG =================
const sparkBurst = document.getElementById('sparkBurst');

function spawnSparks() {
  const emoji = SEASONS[currentSeason].particle.emoji;
  const extras = ['✨', SEASONS[currentSeason].seal];
  const count = 3 + Math.floor(Math.random() * 2);
  const positions = [-70, -35, 0, 35, 70];
  const shuffled = positions.sort(() => Math.random() - 0.5).slice(0, count);

  shuffled.forEach((offset, i) => {
    const s = document.createElement('span');
    s.className = 'spark';
    const pool = [emoji, emoji, ...extras];
    s.textContent = pool[Math.floor(Math.random() * pool.length)];
    s.style.left = `calc(50% + ${offset}px)`;
    s.style.top = '0px';
    s.style.animationDelay = (i * 0.12) + 's';
    sparkBurst.appendChild(s);
    setTimeout(() => s.remove(), 2800);
  });
}

// ================= GỬI CONFESSION =================
submitBtn.addEventListener('click', async () => {
  const content = contentEl.value.trim();

  if (websiteHoneypot.value.trim() !== "") {
    showStatus("Có lỗi xảy ra, vui lòng thử lại.", false);
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

  if (!SCRIPT_URL || SCRIPT_URL.includes("PASTE_YOUR")) {
    showStatus("Chưa cấu hình SCRIPT_URL trong file script.js.", false);
    return;
  }

  submitBtn.disabled = true;
  const submitTextSpan = document.getElementById('submitBtnText');

  try {
    let imageBase64 = "";
    let imageMime = "";

    if (selectedFile) {
      submitTextSpan.innerHTML = 'Đang xử lý ảnh <span class="btn-dots"><span></span><span></span><span></span></span>';
      showStatus("", true);
      imageBase64 = await readFileAsBase64(selectedFile);
      imageMime = selectedFile.type;
    }

    submitTextSpan.innerHTML = 'Đang gửi <span class="btn-dots"><span></span><span></span><span></span></span>';
    showStatus("", true);

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        category: categorySelect.value,
        content: content,
        rating: selectedRating,
        imageBase64: imageBase64,
        imageMime: imageMime
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });

    const rawText = await res.text();
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseErr) {
      console.error("Phản hồi không phải JSON hợp lệ:", rawText.slice(0, 500));
      showStatus("Không gửi được — link Apps Script có thể chưa đúng quyền truy cập (\"Anyone\") hoặc chưa Deploy bản mới.", false);
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
      return;
    }

    if (data.success) {
      card.classList.add('sending');
      setTimeout(() => {
        formView.style.display = 'none';
        successView.style.display = 'block';
        card.classList.remove('sending');
        card.style.transform = 'none';
        card.style.opacity = '1';

        contentEl.value = "";
        imageInput.value = "";
        selectedFile = null;
        if (previewObjectUrl) {
          URL.revokeObjectURL(previewObjectUrl);
          previewObjectUrl = null;
        }
        preview.src = "";
        polaroid.style.display = 'none';
        fileLabelText.textContent = "Đính kèm hình ảnh (không bắt buộc, tối đa 5MB)";
        statusEl.textContent = "";
        charCounter.textContent = "0/" + MAX_CHARS;
        charCounter.classList.remove('near-limit');

        selectedRating = 0;
        ratingStars.forEach(s => s.classList.remove('active'));
        categorySelect.value = "Khác";

        spawnSparks();
        generateCaptcha();
      }, 550);
    } else {
      showStatus("Có lỗi xảy ra: " + (data.error || "không rõ nguyên nhân"), false);
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
    }
  } catch (err) {
    showStatus("Không gửi được. Kiểm tra lại kết nối mạng.", false);
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 400);
  } finally {
    submitBtn.disabled = false;
    submitTextSpan.textContent = SEASONS[currentSeason].cta;
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

// ================= KHỞI TẠO =================
applySeason(currentSeason, false);
// ================= CÂY CANVAS 4 MÙA =================
(function() {
  const canvas = document.getElementById('treeCanvas');
  const ctx = canvas.getContext('2d');

  let W, H;
  let treeSeason = 'spring'; // nội bộ cây: spring, summer, autumn, winter

  // Cấu trúc cây fractal
  const branches = [];
  const leafPoints = [];
  let leafRenderData = [];     // {x, y, angle, color, size, visible}
  let fallingParticles = [];
  let snowPatches = [];

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    // Vẽ lại cây sau khi resize (chạy lại toàn bộ khởi tạo)
    initTreeData();
  }

  function buildTree() {
    branches.length = 0;
    leafPoints.length = 0;

    const startX = W / 2;
    const startY = H - 40;
    const startLen = Math.min(H * 0.25, 160);
    const startAngle = -Math.PI / 2;
    const startWidth = 14;
    const maxDepth = 7;

    function addBranch(x, y, len, angle, width, depth) {
      if (depth < 1 || len < 4) return;
      const x2 = x + len * Math.cos(angle);
      const y2 = y + len * Math.sin(angle);
      branches.push({ x1: x, y1: y, x2: x2, y2: y2, width: width });

      const steps = Math.floor(len / 9) + 1;
      for (let i = 1; i <= steps; i++) {
        const t = i / (steps + 0.5);
        const lx = x + (x2 - x) * t;
        const ly = y + (y2 - y) * t;
        const offsetX = (Math.random() - 0.5) * 4;
        const offsetY = (Math.random() - 0.5) * 4;
        leafPoints.push({ x: lx + offsetX, y: ly + offsetY, angle: angle });
      }

      const childLen = len * 0.68;
      const childWidth = width * 0.72;
      const angleDiff = 0.45 + Math.random() * 0.2;
      addBranch(x2, y2, childLen * (0.9 + Math.random() * 0.2), angle - angleDiff, childWidth, depth - 1);
      addBranch(x2, y2, childLen * (0.9 + Math.random() * 0.2), angle + angleDiff, childWidth, depth - 1);
      if (depth > 3 && Math.random() < 0.4) {
        addBranch(x2, y2, childLen * 0.5, angle + (Math.random() - 0.5) * 0.8, childWidth * 0.6, depth - 2);
      }
    }
    addBranch(startX, startY, startLen, startAngle, startWidth, maxDepth);
  }

  function prepareLeafData(season) {
    leafRenderData = [];
    let density, colorPalette;
    switch (season) {
      case 'spring':
        density = 1.0;
        colorPalette = ['#43A047', '#66BB6A', '#81C784', '#2E7D32', '#4CAF50'];
        break;
      case 'summer':
        density = 0.95;
        colorPalette = ['#FBC02D', '#F9A825', '#F57F17', '#FFB300', '#FFA000', '#E65100'];
        break;
      case 'autumn':
        density = 0.35;
        colorPalette = ['#D84315', '#E65100', '#EF6C00', '#FF8F00', '#F9A825', '#C62828', '#B71C1C', '#8D6E63'];
        break;
      case 'winter':
      default:
        density = 0;
        colorPalette = [];
        break;
    }
    for (let i = 0; i < leafPoints.length; i++) {
      const p = leafPoints[i];
      const seed = (i * 9301 + 49297) % 233280;
      const rand = seed / 233280;
      if (rand < density) {
        const color = colorPalette[Math.floor((seed * 7.13) % colorPalette.length)];
        const size = 5.5 + (seed * 4.2) % 3.5;
        leafRenderData.push({ x: p.x, y: p.y, angle: p.angle, color, size, visible: true });
      }
    }
  }

  function buildSnowPatches() {
    snowPatches = [];
    for (let b of branches) {
      const len = Math.hypot(b.x2 - b.x1, b.y2 - b.y1);
      if (len < 8) continue;
      const patchesCount = Math.floor(len / 15) + 1;
      for (let i = 0; i < patchesCount; i++) {
        const t = (i + 0.5) / patchesCount;
        const bx = b.x1 + (b.x2 - b.x1) * t;
        const by = b.y1 + (b.y2 - b.y1) * t;
        const r = b.width * 1.6 + Math.random() * 3.5;
        snowPatches.push({ x: bx + (Math.random() - 0.5) * 4, y: by + (Math.random() - 0.5) * 5, r: Math.max(2.5, r) });
      }
    }
  }

  function resetFallingParticles(season) {
    fallingParticles = [];
    if (season === 'autumn') {
      const leafColors = ['#D84315', '#EF6C00', '#FF8F00', '#F9A825', '#C62828', '#BF360C', '#E65100'];
      for (let i = 0; i < 60; i++) {
        fallingParticles.push({
          type: 'leaf',
          x: Math.random() * W * 0.8 + W * 0.1,
          y: Math.random() * H * 0.6 + 20,
          vx: (Math.random() - 0.5) * 1.8,
          vy: Math.random() * 1.2 + 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.08,
          color: leafColors[Math.floor(Math.random() * leafColors.length)],
          size: 5 + Math.random() * 6
        });
      }
    } else if (season === 'winter') {
      for (let i = 0; i < 80; i++) {
        fallingParticles.push({
          type: 'snow',
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 1.5 + 0.4,
          radius: 1.2 + Math.random() * 2.2,
          opacity: 0.6 + Math.random() * 0.4
        });
      }
    }
  }

  // ---- Vẽ ----
  function drawBackground(season) {
    let gradient;
    switch (season) {
      case 'spring':
        gradient = ctx.createLinearGradient(0, 0, 0, H);
        gradient.addColorStop(0, '#E8F5E9');
        gradient.addColorStop(0.7, '#C8E6C9');
        gradient.addColorStop(1, '#A5D6A7');
        break;
      case 'summer':
        gradient = ctx.createLinearGradient(0, 0, 0, H);
        gradient.addColorStop(0, '#FFF8E1');
        gradient.addColorStop(0.6, '#FFECB3');
        gradient.addColorStop(1, '#FFE082');
        break;
      case 'autumn':
        gradient = ctx.createLinearGradient(0, 0, 0, H);
        gradient.addColorStop(0, '#FBE9E7');
        gradient.addColorStop(0.5, '#FFCCBC');
        gradient.addColorStop(1, '#D7CCC8');
        break;
      case 'winter':
        gradient = ctx.createLinearGradient(0, 0, 0, H);
        gradient.addColorStop(0, '#CFD8DC');
        gradient.addColorStop(0.7, '#B0BEC5');
        gradient.addColorStop(1, '#90A4AE');
        break;
      default: gradient = '#F5F0E6';
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);

    // Mặt đất
    ctx.fillStyle = '#8D6E63';
    ctx.beginPath();
    ctx.rect(0, H - 25, W, 30);
    ctx.fill();
    ctx.fillStyle = '#6D4C41';
    ctx.beginPath();
    ctx.ellipse(W/2, H-25, Math.min(W*0.4, 300), 14, 0, 0, Math.PI*2);
    ctx.fill();
  }

  function drawBranches() {
    for (let b of branches) {
      ctx.beginPath();
      ctx.moveTo(b.x1, b.y1);
      ctx.lineTo(b.x2, b.y2);
      ctx.strokeStyle = '#6D4C41';
      ctx.lineWidth = b.width;
      ctx.lineCap = 'round';
      ctx.stroke();
      if (b.width > 3) {
        ctx.beginPath();
        ctx.moveTo(b.x1, b.y1);
        ctx.lineTo(b.x2, b.y2);
        ctx.strokeStyle = '#8D6E63';
        ctx.lineWidth = b.width * 0.5;
        ctx.stroke();
      }
    }
  }

  function drawLeaves() {
    for (let leaf of leafRenderData) {
      if (!leaf.visible) continue;
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, leaf.size, leaf.size * 0.4, 0, 0, Math.PI * 2);
      ctx.fillStyle = leaf.color;
      ctx.fill();
      ctx.strokeStyle = '#00000022';
      ctx.lineWidth = 0.6;
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawSnowPatches() {
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = '#ffffffcc';
    ctx.shadowBlur = 4;
    for (let p of snowPatches) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
  }

  function updateAndDrawParticles(season) {
    if (season !== 'autumn' && season !== 'winter') return;
    for (let p of fallingParticles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.type === 'leaf') {
        p.vy += 0.025;
        p.rotation += p.rotSpeed;
        p.vx += (Math.random() - 0.5) * 0.08;
      } else if (p.type === 'snow') {
        p.vy += 0.004;
        p.vx += (Math.random() - 0.5) * 0.03;
      }
      if (p.y > H + 20) {
        p.y = -10;
        p.x = Math.random() * W;
        p.vy = p.type === 'leaf' ? Math.random() * 0.6 + 0.3 : Math.random() * 1.2 + 0.3;
        p.vx = (Math.random() - 0.5) * (p.type === 'leaf' ? 1.5 : 0.7);
      }
      if (p.x < -20) p.x = W + 15;
      if (p.x > W + 20) p.x = -15;

      ctx.save();
      if (p.type === 'leaf') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.4, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.strokeStyle = '#00000018';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (p.type === 'snow') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
        ctx.strokeStyle = '#ffffffdd';
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawBackground(treeSeason);
    drawBranches();
    if (treeSeason === 'winter') {
      drawSnowPatches();
    } else {
      drawLeaves();
    }
    updateAndDrawParticles(treeSeason);
    requestAnimationFrame(animate);
  }

  // Khởi tạo dữ liệu cây (gọi khi resize hoặc lần đầu)
  function initTreeData() {
    buildTree();
    prepareLeafData(treeSeason);
    if (treeSeason === 'winter') buildSnowPatches();
    else snowPatches = [];
    resetFallingParticles(treeSeason);
  }

  // Hàm công khai để web CFS gọi đổi mùa
  window.setTreeSeason = function(seasonKey) {
    // Ánh xạ fall -> autumn
    const mapped = seasonKey === 'fall' ? 'autumn' : seasonKey;
    if (mapped === treeSeason) return;
    treeSeason = mapped;
    prepareLeafData(mapped);
    if (mapped === 'winter') buildSnowPatches();
    else snowPatches = [];
    resetFallingParticles(mapped);
  };

  // Lắng nghe resize
  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  // Tạm dừng animation khi tab không active (tiết kiệm pin)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Có thể hủy animation frame để dừng hẳn, nhưng đơn giản ta không làm gì,
      // requestAnimationFrame tự động giảm tần suất khi tab ẩn.
    }
  });

  // Bắt đầu
  resizeCanvas();
  // Đồng bộ mùa ban đầu với web CFS (nếu đã có currentSeason từ localStorage)
  const initialSeason = localStorage.getItem('confessionSeason') || 'spring';
  treeSeason = initialSeason === 'fall' ? 'autumn' : initialSeason;
  initTreeData();
  animate();
})();
