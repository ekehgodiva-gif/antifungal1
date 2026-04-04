// ============================================================
//  FEATURES — Pomodoro, Stats, Missed Bank, Celebrations,
//             Drug Lookup, Daily Goal, Mixed Quiz
// ============================================================

/* =========================================
   FEATURE 1: POMODORO TIMER
========================================= */
const POMO_STUDY = 1500; // 25 min study
const POMO_BREAK = 300;  // 5 min break
const POMO_SESSIONS = 4;
let pomoState = { running: false, seconds: POMO_STUDY, session: 1, isBreak: false, interval: null, totalToday: 0 };

function initPomodoro() {
  let saved = safeGetItem('pomo_today');
  if (saved) {
    let d = JSON.parse(saved);
    if (d.date === getTodayStr()) pomoState.totalToday = d.total || 0;
  }
  updatePomoDisplay();
}

function togglePomoPanel() {
  let p = document.getElementById('pomodoro-panel');
  p.style.display = p.style.display === 'block' ? 'none' : 'block';
}

function startPomodoro() {
  if (pomoState.running) {
    clearInterval(pomoState.interval);
    pomoState.running = false;
    document.getElementById('pomo-start-btn').innerText = 'Resume';
    document.getElementById('pomodoro-fab').classList.remove('running');
    return;
  }
  pomoState.running = true;
  document.getElementById('pomo-start-btn').innerText = 'Pause';
  document.getElementById('pomodoro-fab').classList.add('running');
  pomoState.interval = setInterval(() => {
    pomoState.seconds--;
    if (!pomoState.isBreak) {
      pomoState.totalToday++;
      savePomodoroTotal();
    }
    if (pomoState.seconds <= 0) {
      clearInterval(pomoState.interval);
      pomoState.running = false;
      if (!pomoState.isBreak) {
        startBreak();
      } else {
        endBreak();
      }
    }
    updatePomoDisplay();
  }, 1000);
}

function startBreak() {
  pomoState.isBreak = true;
  pomoState.seconds = POMO_BREAK;
  playChime();
  document.getElementById('break-overlay').style.display = 'flex';
  document.getElementById('pomo-phase').innerText = 'BREAK TIME';
  document.getElementById('pomo-start-btn').innerText = 'Start';
  document.getElementById('pomodoro-fab').classList.remove('running');
  updatePomoDisplay();
  pomoState.running = true;
  pomoState.interval = setInterval(() => {
    pomoState.seconds--;
    if (pomoState.seconds <= 0) {
      clearInterval(pomoState.interval);
      pomoState.running = false;
      endBreak();
    }
    updatePomoDisplay();
    document.getElementById('break-display').innerText = formatTime(pomoState.seconds);
  }, 1000);
}

function endBreak() {
  clearInterval(pomoState.interval);
  document.getElementById('break-overlay').style.display = 'none';
  pomoState.isBreak = false;
  pomoState.running = false;
  pomoState.session++;
  if (pomoState.session > POMO_SESSIONS) pomoState.session = 1;
  pomoState.seconds = POMO_STUDY;
  document.getElementById('pomo-phase').innerText = 'STUDY TIME';
  document.getElementById('pomo-start-btn').innerText = 'Start';
  document.getElementById('pomodoro-fab').classList.remove('running');
  updatePomoDisplay();
}

function skipBreak() { endBreak(); }

function resetPomodoro() {
  clearInterval(pomoState.interval);
  pomoState.running = false;
  pomoState.isBreak = false;
  pomoState.seconds = POMO_STUDY;
  pomoState.session = 1;
  document.getElementById('pomo-phase').innerText = 'STUDY TIME';
  document.getElementById('pomo-start-btn').innerText = 'Start';
  document.getElementById('pomodoro-fab').classList.remove('running');
  document.getElementById('break-overlay').style.display = 'none';
  updatePomoDisplay();
}

function updatePomoDisplay() {
  document.getElementById('pomo-display').innerText = formatTime(pomoState.seconds);
  document.getElementById('pomo-session-label').innerText = `Session ${pomoState.session} of ${POMO_SESSIONS}`;
  document.getElementById('pomo-total').innerText = `Total today: ${Math.floor(pomoState.totalToday / 60)} min`;
  if (pomoState.isBreak) document.getElementById('break-display').innerText = formatTime(pomoState.seconds);
}

function formatTime(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }

function savePomodoroTotal() {
  safeSetItem('pomo_today', JSON.stringify({ date: getTodayStr(), total: pomoState.totalToday }));
}

function playChime() {
  try {
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      let o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = freq;
      g.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.2);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.2 + 0.5);
      o.connect(g); g.connect(ctx.destination);
      o.start(ctx.currentTime + i * 0.2);
      o.stop(ctx.currentTime + i * 0.2 + 0.5);
    });
  } catch (e) { /* AudioContext not supported */ }
}

/* =========================================
   FEATURE 2: STUDY STATS TRACKER
========================================= */
function getTodayStr() {
  let d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function getStats() { return JSON.parse(safeGetItem('study_stats') || '[]'); }
function saveStats(stats) { safeSetItem('study_stats', JSON.stringify(stats)); }

function logStat(topic, type, correct, total) {
  let stats = getStats();
  stats.push({ date: getTodayStr(), topic, type, correct, total, ts: Date.now() });
  saveStats(stats);
  renderStatsCard();
}

function initStats() {
  renderStatsCard();
  renderWeeklyChart();
  updateStreak();
}

function renderStatsCard() {
  let stats = getStats();
  let today = getTodayStr();
  let todayStats = stats.filter(s => s.date === today);
  let totalQ = todayStats.reduce((a, s) => a + s.total, 0);
  let totalC = todayStats.reduce((a, s) => a + s.correct, 0);
  let acc = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

  document.getElementById('stat-questions').innerText = totalQ;
  document.getElementById('stat-accuracy').innerText = totalQ > 0 ? acc + '%' : '—';
  renderWeeklyChart();
}

function updateStreak() {
  let stats = getStats();
  let dates = [...new Set(stats.map(s => s.date))].sort().reverse();
  let streak = 0;
  let check = new Date();
  for (let i = 0; i < 365; i++) {
    let ds = check.toISOString().slice(0, 10);
    if (dates.includes(ds)) { streak++; check.setDate(check.getDate() - 1); }
    else if (i === 0) { check.setDate(check.getDate() - 1); continue; }
    else break;
  }
  document.getElementById('stat-streak').innerText = streak;
}

function renderWeeklyChart() {
  let stats = getStats();
  let chart = document.getElementById('weekly-chart');
  let days = [];
  let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 6; i >= 0; i--) {
    let d = new Date(); d.setDate(d.getDate() - i);
    let ds = d.toISOString().slice(0, 10);
    let count = stats.filter(s => s.date === ds).reduce((a, s) => a + s.total, 0);
    days.push({ day: dayNames[d.getDay()], count });
  }
  let max = Math.max(...days.map(d => d.count), 1);
  chart.innerHTML = days.map(d => `<div class="bar-wrap"><div class="bar" style="height:${Math.max((d.count / max) * 45, 2)}px"></div><div class="bar-day">${d.day}</div></div>`).join('');
}

function openStatsModal() {
  let stats = getStats();
  let content = document.getElementById('stats-modal-content');
  let topics = {};
  stats.forEach(s => {
    if (!topics[s.topic]) topics[s.topic] = { correct: 0, total: 0 };
    topics[s.topic].correct += s.correct;
    topics[s.topic].total += s.total;
  });
  let html = '<h4 style="font-size:14px; color:var(--text-muted); margin-bottom:12px;">All-Time by Topic</h4>';
  let keys = Object.keys(topics);
  if (keys.length === 0) html += '<p style="color:var(--text-muted); font-size:13px;">No stats yet — start studying!</p>';
  else keys.forEach(k => {
    let t = topics[k];
    let acc = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
    let name = (window.PDF_TOPIC_DATA && PDF_TOPIC_DATA[k]) ? PDF_TOPIC_DATA[k].title : k;
    html += `<div class="stats-topic-row"><span class="stats-topic-name">${name}</span><span class="stats-topic-acc">${acc}% (${t.total} Q)</span></div>`;
  });
  content.innerHTML = html;
  document.getElementById('stats-modal').style.display = 'flex';
}
function closeStatsModal() { document.getElementById('stats-modal').style.display = 'none'; }


/* =========================================
   FEATURE 4: SCORE CELEBRATIONS
========================================= */
function celebrate(pct) {
  let overlay = document.getElementById('celebration-overlay');
  overlay.innerHTML = '';

  let emoji, msg;
  if (pct === 100) { emoji = '👑🎉'; msg = 'PERFECT! You\'re a genius, My Princess!'; }
  else if (pct >= 90) { emoji = '🌟✨'; msg = 'ONCHO! You almost got all mommy'; }
  else if (pct >= 70) { emoji = '💖'; msg = 'Great effort! You\'re on your way to become my own nurse!'; }
  else if (pct >= 50) { emoji = '💪'; msg = 'Keep going My princess, you\'re getting closer!'; }
  else { emoji = '🤗'; msg = 'Every attempt makes you stronger! Don\'t give up!'; }

  if (pct >= 70) {
    let colors = ['#db2777', '#9333ea', '#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#f87171'];
    for (let i = 0; i < 40; i++) {
      let piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 0.8 + 's';
      piece.style.animationDuration = (2 + Math.random() * 2) + 's';
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = (6 + Math.random() * 8) + 'px';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      overlay.appendChild(piece);
    }
  }

  let msgDiv = document.createElement('div');
  msgDiv.className = 'celebration-msg';
  msgDiv.innerHTML = `<div class="celeb-emoji">${emoji}</div><div class="celeb-text">${msg}</div><button class="btn btn-primary" onclick="dismissCelebration()" style="min-width:120px;">Thanks! 💖</button>`;
  overlay.appendChild(msgDiv);

  setTimeout(() => {
    overlay.querySelectorAll('.confetti-piece').forEach(p => p.remove());
  }, 4000);
}

function dismissCelebration() {
  document.getElementById('celebration-overlay').innerHTML = '';
}

/* =========================================
   FEATURE 5: QUICK DRUG LOOKUP
========================================= */
let lookupIndex = [];

function buildLookupIndex() {
  lookupIndex = [];
  if (!window.PDF_TOPIC_DATA) return;
  Object.keys(PDF_TOPIC_DATA).forEach(key => {
    let topic = PDF_TOPIC_DATA[key];
    let ref = topic.refHtml || '';
    let topicTitle = topic.title;
    let trowRegex = /<div class="trow">(.*?)<\/div>/gs;
    let match;
    while ((match = trowRegex.exec(ref)) !== null) {
      let raw = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      let drugMatch = raw.match(/^([^→—]+)[→—]/);
      let drug = drugMatch ? drugMatch[1].replace(/[✦•]/g, '').trim() : '';
      let fact = drugMatch ? raw.substring(drugMatch[0].length).trim() : raw;
      lookupIndex.push({ drug: drug || 'General', fact, topic: topicTitle, topicKey: key, raw });
    }
    (topic.flashcards || []).forEach(fc => {
      lookupIndex.push({ drug: 'Flashcard', fact: fc.q + ' → ' + fc.a, topic: topicTitle, topicKey: key, raw: fc.q + ' ' + fc.a });
    });
  });
}

function openLookup() {
  document.getElementById('lookup-modal').style.display = 'flex';
  document.getElementById('lookup-input').value = '';
  document.getElementById('lookup-results').innerHTML = '<div class="lookup-empty">Start typing to search across all topics</div>';
  setTimeout(() => document.getElementById('lookup-input').focus(), 100);
}
function closeLookup() { document.getElementById('lookup-modal').style.display = 'none'; }

let lookupTimer = null;
function searchLookup() {
  clearTimeout(lookupTimer);
  lookupTimer = setTimeout(() => {
    let term = document.getElementById('lookup-input').value.trim().toLowerCase();
    let res = document.getElementById('lookup-results');
    if (term.length < 2) { res.innerHTML = '<div class="lookup-empty">Type at least 2 characters</div>'; return; }
    let matches = lookupIndex.filter(item => item.raw.toLowerCase().includes(term)).slice(0, 20);
    if (matches.length === 0) { res.innerHTML = '<div class="lookup-empty">No results found for "' + term + '"</div>'; return; }
    res.innerHTML = matches.map(m => {
      let hl = m.fact.replace(new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<span class="lookup-match">$1</span>');
      return `<div class="lookup-item"><div class="lookup-drug">${m.drug}</div><div class="lookup-fact">${hl}</div><div class="lookup-topic">${m.topic}</div></div>`;
    }).join('');
  }, 150);
}

/* =========================================
   FEATURE 6: DAILY STUDY GOAL
========================================= */
function getGoal() { return JSON.parse(safeGetItem('daily_goal') || '{"flashcards":20,"quizzes":1}'); }
function getGoalProgress() {
  let p = JSON.parse(safeGetItem('daily_goal_progress') || '{"date":"","flashcards":0,"quizzes":0}');
  if (p.date !== getTodayStr()) p = { date: getTodayStr(), flashcards: 0, quizzes: 0 };
  return p;
}
function saveGoalProgress(p) { safeSetItem('daily_goal_progress', JSON.stringify(p)); }

function initGoal() { renderGoalBar(); }

function renderGoalBar() {
  let goal = getGoal();
  let prog = getGoalProgress();
  let fcPct = goal.flashcards > 0 ? Math.min(prog.flashcards / goal.flashcards, 1) : 1;
  let qzPct = goal.quizzes > 0 ? Math.min(prog.quizzes / goal.quizzes, 1) : 1;
  let totalPct = Math.round(((fcPct + qzPct) / 2) * 100);

  document.getElementById('goal-pct-text').innerText = totalPct + '%';
  document.getElementById('goal-fill').style.width = totalPct + '%';

  let detail = `${prog.flashcards}/${goal.flashcards} flashcards · ${prog.quizzes}/${goal.quizzes} quizzes`;
  document.getElementById('goal-detail').innerText = detail;

  let bar = document.getElementById('goal-bar');
  if (totalPct >= 100) bar.classList.add('goal-complete-glow');
  else bar.classList.remove('goal-complete-glow');
}

function updateGoalProgress(type) {
  let prog = getGoalProgress();
  if (type === 'flashcard') prog.flashcards++;
  if (type === 'quiz') prog.quizzes++;
  prog.date = getTodayStr();
  saveGoalProgress(prog);
  renderGoalBar();
}

function openGoalModal() {
  let goal = getGoal();
  document.getElementById('goal-fc-input').value = goal.flashcards;
  document.getElementById('goal-quiz-input').value = goal.quizzes;
  document.getElementById('goal-modal').style.display = 'flex';
}
function closeGoalModal() { document.getElementById('goal-modal').style.display = 'none'; }

function saveGoal() {
  let fc = parseInt(document.getElementById('goal-fc-input').value) || 0;
  let qz = parseInt(document.getElementById('goal-quiz-input').value) || 0;
  safeSetItem('daily_goal', JSON.stringify({ flashcards: fc, quizzes: qz }));
  closeGoalModal();
  renderGoalBar();
}
