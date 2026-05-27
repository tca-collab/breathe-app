// ── STATE ──────────────────────────────────────────────
const STORAGE_KEY = 'diaphragm_checked';
let state = {
  weekIdx: 0,
  dayIdx: 0,
  openBlock: null,
  checked: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
};

// ── HELPERS ────────────────────────────────────────────
function ck(w, d, b) { return `${w}-${d}-${b}`; }
function isDone(w, d, b) { return !!state.checked[ck(w, d, b)]; }
function isBlockDone(blockIdx) { return isDone(state.weekIdx, state.dayIdx, blockIdx); }
function isDayDone(wIdx, dIdx) {
  return PLAN[wIdx].days[dIdx].blocks.every((_, b) => isDone(wIdx, dIdx, b));
}
function totalBlocks() { return PLAN.reduce((a, w) => a + w.days.reduce((b, d) => b + d.blocks.length, 0), 0); }
function doneCount() { return Object.values(state.checked).filter(Boolean).length; }
function currentWeek() { return PLAN[state.weekIdx]; }
function currentDay() { return currentWeek().days[state.dayIdx]; }
function colorClass() { return currentWeek().colorClass; }

function saveChecked() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.checked));
}

// ── RENDER ─────────────────────────────────────────────
function render() {
  const W = currentWeek();
  const d = currentDay();
  const cc = colorClass();

  // Header class
  document.getElementById('header').className = `header ${cc}`;

  // Progress
  const done = doneCount();
  const total = totalBlocks();
  document.getElementById('progressCount').textContent = `${done} / ${total} blocks`;
  document.getElementById('progressFill').style.width = `${(done / total) * 100}%`;

  renderWeekTabs();
  renderDayDots();
  renderContent();
  renderNav();
}

function renderWeekTabs() {
  const container = document.getElementById('weekTabs');
  container.innerHTML = '';
  PLAN.forEach((w, i) => {
    const active = i === state.weekIdx;
    const div = document.createElement('div');
    div.className = `week-tab ${active ? 'active-' + w.colorClass : ''}`;
    div.innerHTML = `<div class="week-tab-label">${w.label}</div><div class="week-tab-sub">${w.subtitle}</div>`;
    div.onclick = () => { state.weekIdx = i; state.dayIdx = 0; state.openBlock = null; render(); };
    container.appendChild(div);
  });
}

function renderDayDots() {
  const W = currentWeek();
  const container = document.getElementById('dayDots');
  container.innerHTML = '';
  W.days.forEach((d, i) => {
    const active = i === state.dayIdx;
    const done = isDayDone(state.weekIdx, i);
    const div = document.createElement('div');
    let cls = 'day-dot';
    if (active) cls += ` active-${W.colorClass}`;
    else if (done) cls += ` done-${W.colorClass}`;
    div.className = cls;
    div.innerHTML = `<div class="dot-num">D${d.day}</div><div class="dot-check">${done ? '✓' : ''}</div>`;
    div.onclick = () => { state.dayIdx = i; state.openBlock = null; render(); };
    container.appendChild(div);
  });
  // Scroll active dot into view
  const dots = container.querySelectorAll('.day-dot');
  if (dots[state.dayIdx]) dots[state.dayIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function renderContent() {
  const W = currentWeek();
  const d = currentDay();
  const cc = W.colorClass;
  const dayAllDone = isDayDone(state.weekIdx, state.dayIdx);
  const blockColors = ['bc1', 'bc2', 'bc3'];

  let blocksHTML = d.blocks.map((b, i) => {
    const done = isBlockDone(i);
    const open = state.openBlock === i;
    const bc = blockColors[i];
    const stepsHTML = b.steps.map(s => `
      <div class="step">
        <span class="step-dot ${bc}">·</span>
        <span>${s}</span>
      </div>`).join('');
    return `
      <div class="block ${open ? 'open' : ''} ${done ? 'checked' : ''} ${bc}" id="block-${i}">
        <div class="block-row" onclick="toggleBlock(${i})">
          <button class="block-check ${bc} ${done ? 'done' : ''}" onclick="checkBlock(event, ${i})">
            ${done ? '✓' : ''}
          </button>
          <span class="block-icon">${b.icon}</span>
          <div class="block-info">
            <div class="block-name ${done ? 'done' : ''}">${b.name}</div>
            <div class="block-dur ${bc}">${b.dur}</div>
          </div>
          <div class="block-arrow ${open ? 'open' : ''}">›</div>
        </div>
        <div class="block-steps ${open ? 'open' : ''}">${stepsHTML}</div>
      </div>`;
  }).join('');

  const videoHTML = d.video ? `
    <div class="video-card">
      <div class="video-icon">▶</div>
      <div>
        <div class="video-label">Today's Video</div>
        <a class="video-link" href="${d.video.url}" target="_blank" rel="noopener">${d.video.label} →</a>
      </div>
    </div>` : '';

  document.getElementById('content').innerHTML = `
    <div class="day-card">
      <div class="day-card-header">
        <div class="day-header-row">
          <div>
            <div class="day-meta" style="color: var(--${cc === 'w1' ? 'w1' : 'w2'})">Day ${d.day} · 15 min</div>
            <div class="day-title">${d.title}</div>
          </div>
          <div class="day-done-badge ${dayAllDone ? 'show' : ''}">✓ Done</div>
        </div>
        <div class="day-goal">🎯 ${d.goal}</div>
        <div class="day-why">${d.why}</div>
      </div>
      <div class="blocks">${blocksHTML}</div>
      ${videoHTML}
      <div class="tip-card ${cc}">
        <div class="tip-label">Coach's Tip</div>
        <div class="tip-text">"${d.tip}"</div>
      </div>
    </div>`;
}

function renderNav() {
  const W = currentWeek();
  const cc = colorClass();
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const isFirst = state.weekIdx === 0 && state.dayIdx === 0;
  const isLast = state.weekIdx === PLAN.length - 1 && state.dayIdx === W.days.length - 1;

  prevBtn.disabled = isFirst;
  nextBtn.disabled = isLast;
  nextBtn.className = `nav-btn nav-btn-next ${cc}`;
}

// ── INTERACTIONS ───────────────────────────────────────
function toggleBlock(idx) {
  state.openBlock = state.openBlock === idx ? null : idx;
  render();
}

function checkBlock(event, idx) {
  event.stopPropagation();
  const key = ck(state.weekIdx, state.dayIdx, idx);
  state.checked[key] = !state.checked[key];
  saveChecked();

  // Check if day just completed
  const nowDone = isDayDone(state.weekIdx, state.dayIdx);
  render();
  if (nowDone) {
    setTimeout(() => showDayComplete(), 300);
  }
}

function navigate(dir) {
  const W = currentWeek();
  if (dir === 1) {
    if (state.dayIdx < W.days.length - 1) { state.dayIdx++; }
    else if (state.weekIdx < PLAN.length - 1) { state.weekIdx++; state.dayIdx = 0; }
  } else {
    if (state.dayIdx > 0) { state.dayIdx--; }
    else if (state.weekIdx > 0) { state.weekIdx--; state.dayIdx = PLAN[state.weekIdx].days.length - 1; }
  }
  state.openBlock = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── MODAL ──────────────────────────────────────────────
function showDayComplete() {
  const d = currentDay();
  const rewardIdx = Math.min(d.day - 1, REWARDS.length - 1);
  const r = REWARDS[rewardIdx];
  const isLast = state.weekIdx === PLAN.length - 1 && state.dayIdx === currentWeek().days.length - 1;

  document.getElementById('modalEmoji').textContent = r.emoji;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalMsg').textContent = r.msg;
  document.getElementById('modalBtn').textContent = isLast ? '🏅 Finish Program' : 'Keep Going →';
  document.getElementById('modalOverlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
}

// ── INSTALL BANNER ─────────────────────────────────────
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBanner').classList.remove('hidden');
});
document.getElementById('installBanner').addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') document.getElementById('installBanner').classList.add('hidden');
    deferredPrompt = null;
  }
});
document.getElementById('installClose').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('installBanner').classList.add('hidden');
});

// Show banner after 3s on mobile if not standalone
setTimeout(() => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  if (isMobile && !isStandalone && !deferredPrompt) {
    document.getElementById('installBanner').classList.remove('hidden');
  }
}, 3000);

// ── PWA SERVICE WORKER ─────────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ── INIT ───────────────────────────────────────────────
render();
