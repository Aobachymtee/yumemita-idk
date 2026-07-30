/* ============================================================
   main.js — logic HIỂN THỊ dùng chung cho mọi trang.
   File này đọc dữ liệu từ data.js rồi "vẽ" ra HTML — bồ thường
   sẽ không cần sửa file này, chỉ cần sửa data.js thôi.
   ============================================================ */

function getMemberById(id){
  return membersData.find(m => m.id === id);
}

function initial(name){
  return name.trim().charAt(0).toUpperCase();
}

/* ---- thẻ thành viên (dùng ở trang chủ + trang danh sách thành viên) ---- */
function renderMemberCard(m, hrefPrefix){
  return `
    <a class="member-card" style="--accent:${m.color}" href="${hrefPrefix}detail.html?id=${m.id}">
      <div class="member-card__avatar">${initial(m.shortName)}</div>
      <p class="eyebrow">${m.roleTag}</p>
      <h3>${m.name}</h3>
      <p class="member-card__tagline">${m.tagline}</p>
    </a>`;
}

function renderMemberGrid(containerId, hrefPrefix, limit){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = limit ? membersData.slice(0, limit) : membersData;
  el.innerHTML = list.map(m => renderMemberCard(m, hrefPrefix)).join("");
}

/* ---- trang chi tiết thành viên ---- */
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

  const creditsHtml = m.credits.length
    ? `<h3>Đóng góp sáng tác</h3><div>${m.credits.map(c => `<span class="credit-chip">${c}</span>`).join("")}</div>`
    : "";

  el.innerHTML = `
    <div class="member-hero" style="--accent:${m.color}">
      <div class="member-hero__avatar">${initial(m.shortName)}</div>
      <div>
        <p class="eyebrow">${m.roleTag}</p>
        <h1 style="margin-bottom:.1em">${m.name}</h1>
        <p class="text-muted" style="margin:0">${m.nameJp} · ${m.role}</p>
      </div>
    </div>

    <div class="stat-panel">
      <div class="stat-panel__item"><p class="eyebrow">Sinh nhật</p><strong>${m.birthday}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Cung hoàng đạo</p><strong>${m.zodiac}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Chiều cao</p><strong>${m.height}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Trường</p><strong>${m.school}</strong></div>
      <div class="stat-panel__item"><p class="eyebrow">Sở thích</p><strong>${m.likes}</strong></div>
    </div>

    <h3>Giới thiệu</h3>
    <p>${m.bio}</p>
    ${creditsHtml}
  `;
}

/* ---- thẻ bài hát (trang danh sách bài hát) ---- */
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

/* ---- trang chi tiết bài hát ---- */
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
