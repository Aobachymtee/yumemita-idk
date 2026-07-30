/* ============================================================
   main.js — logic HIỂN THỊ dùng chung cho mọi trang.
   ============================================================ */

function getMemberById(id){
  return membersData.find(m => m.id === id);
}

function initial(name){
  return name.trim().charAt(0).toUpperCase();
}

function renderMemberCard(m, hrefPrefix){
  const avatarHtml = m.avatar 
    ? `<div class="member-card__avatar-wrap"><img src="${m.avatar}" alt="${m.name}" class="member-card__img"></div>`
    : `<div class="member-card__avatar">${initial(m.shortName)}</div>`;

  return `
    <a class="member-card" style="--accent:${m.color}" href="${hrefPrefix}detail.html?id=${m.id}">
      ${avatarHtml}
      <div class="member-card__content">
        <div class="member-card__badge-row">
          <span class="eyebrow member-card__role">${m.roleTag}</span>
          ${m.nickname ? `<span class="member-card__nickname">🏷️ ${m.nickname.split('/')[0]}</span>` : ''}
        </div>
        <h3>${m.name}</h3>
        <p class="member-card__jp">${m.nameJp}</p>
        <p class="member-card__tagline">${m.tagline}</p>
      </div>
    </a>`;
}

function renderMemberGrid(containerId, hrefPrefix, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = limit ? membersData.slice(0, limit) : membersData;
  el.innerHTML = list.map(m => renderMemberCard(m, hrefPrefix)).join("");
}

function renderMemberDetail(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const m = getMemberById(id);

  if(!m){
    el.innerHTML = `
      <div class="empty-state">
        <h2>Không tìm thấy thành viên này 😭</h2>
        <p>Link có thể bị sai id. <a class="btn" href="index.html">← Về danh sách thành viên</a></p>
      </div>`;
    return;
  }

  document.title = `${m.name} — YUME∞MITA`;

  const links = m.socialLinks || {};
  let socialHtml = '';
  if (links.twitter) {
    socialHtml += `<a href="${links.twitter}" target="_blank" class="social-btn social-btn--twitter"><i class="fa-brands fa-x-twitter"></i> Twitter / X</a>`;
  }
  if (links.instagram) {
    socialHtml += `<a href="${links.instagram}" target="_blank" class="social-btn social-btn--instagram"><i class="fa-brands fa-instagram"></i> Instagram</a>`;
  }
  if (links.youtube) {
    socialHtml += `<a href="${links.youtube}" target="_blank" class="social-btn social-btn--youtube"><i class="fa-brands fa-youtube"></i> YouTube</a>`;
  }
  if (links.tiktok) {
    socialHtml += `<a href="${links.tiktok}" target="_blank" class="social-btn social-btn--tiktok"><i class="fa-brands fa-tiktok"></i> TikTok</a>`;
  }
  if (links.note) {
    socialHtml += `<a href="${links.note}" target="_blank" class="social-btn social-btn--note"><i class="fa-solid fa-note-sticky"></i> Note</a>`;
  }

  const galleryList = m.gallery || [];
  let galleryHtml = '';
  if (galleryList.length > 0) {
    galleryHtml = `
      <section class="detail-section">
        <h3><span class="section-dot" style="background:${m.color}"></span> Bộ sưu tập ảnh / Gallery</h3>
        <div class="gallery-grid">
          ${galleryList.map((imgUrl, idx) => `
            <div class="gallery-item" onclick="openLightbox('${imgUrl}')">
              <img src="${imgUrl}" alt="${m.name} Photo ${idx+1}">
              <div class="gallery-overlay">
                <i class="fa-solid fa-magnifying-glass-plus"></i> Xem ảnh
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  const avatarHtml = m.avatar 
    ? `<div class="member-hero__avatar-wrap"><img src="${m.avatar}" alt="${m.name}" class="member-hero__img"></div>`
    : `<div class="member-hero__avatar">${initial(m.shortName)}</div>`;

  const creditsHtml = (m.credits && m.credits.length)
    ? `<section class="detail-section">
         <h3><span class="section-dot" style="background:${m.color}"></span> Đóng góp sáng tác</h3>
         <div>${m.credits.map(c => `<span class="credit-chip">${c}</span>`).join("")}</div>
       </section>`
    : "";

  el.innerHTML = `
    <div class="member-hero" style="--accent:${m.color}">
      ${avatarHtml}
      <div class="member-hero__info">
        <div class="hero-badges">
          <span class="eyebrow member-role-tag">${m.roleTag}</span>
          ${m.nickname ? `<span class="hero-nickname">🏷️ ${m.nickname}</span>` : ''}
        </div>
        <h1 class="hero-title">${m.name}</h1>
        <p class="hero-sub">${m.nameJp} · <strong>${m.role}</strong></p>
        
        ${socialHtml ? `<div class="social-bar">${socialHtml}</div>` : ''}
      </div>
    </div>

    <div class="stat-panel">
      <div class="stat-panel__item"><p class="eyebrow">Sinh nhật</p><strong>${m.birthday}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Cung hoàng đạo</p><strong>${m.zodiac}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Chiều cao</p><strong>${m.height}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Trường</p><strong>${m.school}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Sở thích</p><strong>${m.likes}</strong></div>
    </div>

    <section class="detail-section">
      <h3><span class="section-dot" style="background:${m.color}"></span> Giới thiệu</h3>
      <p class="bio-text">${m.bio}</p>
    </section>

    ${galleryHtml}

    ${creditsHtml}
  `;
}

function initLightbox(){
  if(!document.getElementById('lightbox-modal')){
    const modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.onclick = closeLightbox;
    modal.innerHTML = `
      <div class="lightbox-content" onclick="event.stopPropagation()">
        <img id="lightbox-img" src="" alt="Full View">
        <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
}

function openLightbox(imgUrl){
  initLightbox();
  document.getElementById('lightbox-img').src = imgUrl;
  document.getElementById('lightbox-modal').classList.add('is-open');
}

function closeLightbox(){
  const modal = document.getElementById('lightbox-modal');
  if(modal) modal.classList.remove('is-open');
}

function renderSongCard(s, hrefPrefix){
  const dots = s.credits.map(id => {
    const m = getMemberById(id);
    return m ? `<span class="dot" style="background:${m.color}"></span>${m.shortName}` : "";
  }).join(" &nbsp; ");

  return `
    <a class="song-card" href="${hrefPrefix}detail.html?id=${s.id}">
      <p class="eyebrow">${s.type}</p>
      <div class="song-card__title">${s.title}</div>
      ${dots ? `<div class="song-card__credits text-muted" style="font-size:.85rem">${dots}</div>` : ""}
    </a>`;
}

function renderSongGrid(containerId, hrefPrefix, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = limit ? songsData.slice(0, limit) : songsData;
  el.innerHTML = list.map(s => renderSongCard(s, hrefPrefix)).join("");
}

function renderSongDetail(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const s = songsData.find(x => x.id === id);

  if(!s){
    el.innerHTML = `
      <div class="empty-state">
        <h2>Không tìm thấy bài hát này 😭</h2>
        <p>Link có thể bị sai id. <a class="btn" href="index.html">← Về danh sách bài hát</a></p>
      </div>`;
    return;
  }

  document.title = `${s.title} — YUME∞MITA`;

  const creditsHtml = s.credits.map(id => {
    const m = getMemberById(id);
    return m ? `<span class="credit-chip" style="border-color:${m.color}; color:${m.color}">${m.name}</span>` : "";
  }).join("");

  const orig = s.lyricsOriginal || LYRICS_PLACEHOLDER_ORIGINAL;
  const trans = s.lyricsTranslation || LYRICS_PLACEHOLDER_TRANSLATION;

  el.innerHTML = `
    <p class="eyebrow">${s.type}</p>
    <h1>${s.title}</h1>
    ${s.note ? `<p class="text-muted">${s.note}</p>` : ""}
    ${creditsHtml ? `<div style="margin-bottom:var(--space-4)">${creditsHtml}</div>` : ""}

    <div class="lyrics-grid">
      <div class="lyrics-box"><strong>Lời gốc</strong>${orig}</div>
      <div class="lyrics-box"><strong>Bản dịch tiếng Việt</strong>${trans}</div>
    </div>
    <div class="note-box">
      <strong style="display:block;color:var(--text);margin-bottom:.4em;font-family:var(--font-mono);font-size:.85rem;text-transform:uppercase;letter-spacing:.08em">Ghi chú của người dịch</strong>
      ${s.translatorNote || "[Bồ ghi chú thêm về ngữ cảnh, chơi chữ, hoặc lý do chọn cách dịch ở đây]"}
    </div>
  `;
}
