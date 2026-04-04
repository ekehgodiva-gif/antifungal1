// ============================================================
//  APP CORE — State, navigation, topics, bookmarks, theme
// ============================================================

let currentTopic = null;
let activeEngine = null; // 'fc', 'quiz', 'practice'

// Engines State
const STATE = {
  fc: { q: [], missed: [], i: 0 },
  quiz: { q: [], missed: [], i: 0, qs: 0, answered: false },
  prac: { type: '', q: [], i: 0, qs: 0, answered: false, sata: new Set(), missed: [] }
};

// --- INIT & THEME ---
window.onload = () => {
  if (safeGetItem('theme') === 'dark') document.body.classList.add('dark');
  updateThemeIcon();
  checkPrayer();
  renderTopics();
  restoreSession();
  // Init features
  initStats();
  initGoal();
  buildLookupIndex();
  initPomodoro();
};

function toggleTheme() {
  document.body.classList.toggle('dark');
  safeSetItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcon();
}
function updateThemeIcon() { document.getElementById('theme-btn').innerText = document.body.classList.contains('dark') ? '☀️' : '🌙'; }

// --- PRAYER/MESSAGE SYSTEM ---
function checkPrayer() {
  if (!window.APP_CONFIG) return;
  if (safeGetItem('last_prayer_id') !== APP_CONFIG.prayer.id) {
    document.getElementById('prayer-badge').style.display = 'block';
    document.getElementById('prayer-txt').style.display = 'block';
  }
}
function openPrayer() {
  if (!window.APP_CONFIG) return;
  document.getElementById('prayer-badge').style.display = 'none';
  document.getElementById('prayer-txt').style.display = 'none';
  safeSetItem('last_prayer_id', APP_CONFIG.prayer.id);
  document.getElementById('prayer-content').innerHTML = APP_CONFIG.prayer.message;
  document.getElementById('prayer-modal').style.display = 'flex';

  // Heart Animation
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      let h = document.createElement('div');
      h.className = 'heart-particle';
      h.innerText = '💖';
      h.style.left = Math.random() * 80 + 10 + '%';
      h.style.top = '60%';
      document.getElementById('prayer-modal').appendChild(h);
      setTimeout(() => h.remove(), 2000);
    }, i * 100);
  }
}
function closePrayer() { document.getElementById('prayer-modal').style.display = 'none'; }

// --- NAVIGATION & VIEWS ---
function navTo(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo(0, 0);
  saveSession(viewId);
}

// --- MAIN PAGE: RENDER TOPICS ---
function renderTopics() {
  if (!window.PDF_TOPIC_DATA) return;
  const list = document.getElementById('topic-list');
  const term = document.getElementById('search-input').value.toLowerCase();
  let bookmarks = JSON.parse(safeGetItem('bookmarks') || '[]');

  const allKeys = Object.keys(PDF_TOPIC_DATA);
  const favouriteKeys = allKeys.filter(k => bookmarks.includes(k) && PDF_TOPIC_DATA[k].title.toLowerCase().includes(term));
  const otherKeys = allKeys.filter(k => !bookmarks.includes(k) && PDF_TOPIC_DATA[k].title.toLowerCase().includes(term));

  function buildCard(key, isBookmarked) {
    return `<div class="topic-card" onclick="openTopic('${key}')">
      <div class="topic-info">
        <h3>${PDF_TOPIC_DATA[key].title}</h3>
        <p>${PDF_TOPIC_DATA[key].desc}</p>
      </div>
      <div class="bookmark-btn" onclick="toggleBookmark(event, '${key}')">
        ${isBookmarked ? '🩷' : '🤍'}
      </div>
    </div>`;
  }

  list.innerHTML = '';

  if (favouriteKeys.length > 0) {
    list.innerHTML += `<div style="font-size:12px; font-weight:700; color:var(--primary); text-transform:uppercase; letter-spacing:0.08em; margin: 8px 4px 10px;">🩷 Favourites</div>`;
    favouriteKeys.forEach(key => { list.innerHTML += buildCard(key, true); });
    list.innerHTML += `<div style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.08em; margin: 16px 4px 10px;">All Topics</div>`;
  }

  otherKeys.forEach(key => { list.innerHTML += buildCard(key, false); });

  if (favouriteKeys.length === 0 && otherKeys.length === 0) {
    list.innerHTML = `<div style="text-align:center; color:var(--text-muted); margin-top:40px; font-size:14px;">No topics found for "<b>${term}</b>"</div>`;
  }
}

function toggleBookmark(e, key) {
  e.stopPropagation();
  let b = JSON.parse(safeGetItem('bookmarks') || '[]');
  if (b.includes(key)) b = b.filter(i => i !== key);
  else b.push(key);
  safeSetItem('bookmarks', JSON.stringify(b));
  renderTopics();
}

// --- OPEN TOPIC ---
function openTopic(key) {
  currentTopic = key;
  document.getElementById('split-title').innerText = PDF_TOPIC_DATA[key].title;
  navTo('view-split');

  // Reset Engines
  STATE.fc.missed = JSON.parse(safeGetItem(`fc_missed_${key}`) || '[]');
  STATE.quiz.missed = JSON.parse(safeGetItem(`quiz_missed_${key}`) || '[]');
  startFC();
  startQuiz();
}

// --- NOTES SECTION ---
function openNotes() {
  navTo('view-notes');
  // Reset active pill to Summary and load content immediately
  let pills = document.querySelectorAll('#view-notes .nav-pill');
  pills.forEach(p => p.classList.remove('active'));
  pills[0].classList.add('active');
  let data = PDF_TOPIC_DATA[currentTopic];
  document.getElementById('notes-content').innerHTML = data.summaryHtml;
}

function switchNotes(type, el) {
  document.querySelectorAll('#view-notes .nav-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  let data = PDF_TOPIC_DATA[currentTopic];
  let html = '';
  if (type === 'summary') html = data.summaryHtml;
  if (type === 'ref') html = data.refHtml;
  if (type === 'detailed') html = data.detailedNotesHtml;
  document.getElementById('notes-content').innerHTML = html;
}

// --- QUESTIONS SECTION (TABS) ---
function switchQuestions(tab, el) {
  document.querySelectorAll('#view-questions .nav-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  ['flash', 'quiz', 'practice-menu', 'practice-active', 'score'].forEach(id => {
    document.getElementById(`qsec-${id}`).style.display = 'none';
  });

  if (tab === 'practice-menu') document.getElementById('qsec-practice-menu').style.display = 'block';
  else {
    document.getElementById(`qsec-${tab}`).style.display = 'block';
    if (tab === 'flash') renderFC();
    if (tab === 'quiz') renderQuiz();
  }
}

// --- UTILITY ---
function shuffle(arr) { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

// Session Saving (for refresh)
function saveSession(viewId) { sessionStorage.setItem('active_view', viewId); }
function saveProgress() {
  if (!currentTopic) return;
  safeSetItem(`fc_missed_${currentTopic}`, JSON.stringify(STATE.fc.missed));
  safeSetItem(`quiz_missed_${currentTopic}`, JSON.stringify(STATE.quiz.missed));
  sessionStorage.setItem('state_fc', JSON.stringify(STATE.fc));
  sessionStorage.setItem('state_quiz', JSON.stringify(STATE.quiz));
  sessionStorage.setItem('state_prac', JSON.stringify(STATE.prac));
  sessionStorage.setItem('current_topic', currentTopic);
}
function restoreSession() {
  let v = sessionStorage.getItem('active_view');
  let t = sessionStorage.getItem('current_topic');
  if (v && v !== 'view-main' && t) {
    currentTopic = t;
    document.getElementById('split-title').innerText = PDF_TOPIC_DATA[t].title;

    // Restore states
    if (sessionStorage.getItem('state_fc')) STATE.fc = JSON.parse(sessionStorage.getItem('state_fc'));
    if (sessionStorage.getItem('state_quiz')) STATE.quiz = JSON.parse(sessionStorage.getItem('state_quiz'));
    if (sessionStorage.getItem('state_prac')) {
      STATE.prac = JSON.parse(sessionStorage.getItem('state_prac'));
      STATE.prac.sata = new Set();
    }

    navTo(v);

    if (v === 'view-notes') switchNotes('summary', document.querySelectorAll('#view-notes .nav-pill')[0]);
    if (v === 'view-questions') {
      let activeQ = document.querySelector('#view-questions .nav-pill.active');
      if (activeQ) activeQ.click(); else switchQuestions('flash', document.querySelectorAll('#view-questions .nav-pill')[0]);
    }
  }
}
