// ============================================================
//  ENGINES — Flashcard, Quiz, Practice, Score Screen
// ============================================================

/* =========================================
   FLASHCARD ENGINE
========================================= */
function startFC(reviewMissed = false) {
  let pool = PDF_TOPIC_DATA[currentTopic].flashcards;
  if (reviewMissed) { STATE.fc.q = [...STATE.fc.missed]; STATE.fc.missed = []; }
  else { STATE.fc.q = shuffle(pool).slice(0, 30); STATE.fc.missed = []; }
  STATE.fc.i = 0;
  saveProgress(); renderFC();
}
function renderFC() {
  if (STATE.fc.i >= STATE.fc.q.length) return endFC();
  document.getElementById('fc-count').innerText = `Card ${STATE.fc.i + 1} of ${STATE.fc.q.length}`;
  document.getElementById('fcq').innerText = STATE.fc.q[STATE.fc.i].q;
  document.getElementById('fca').innerText = STATE.fc.q[STATE.fc.i].a;
  document.getElementById('fccard').classList.remove('flipped');
  // Reset button visibility for new card
  document.querySelector('.btn-tap').style.display = '';
  document.querySelector('.btn-missed').style.display = 'none';
  document.querySelector('.btn-gotit').style.display = 'none';
}
function flipFC() {
  let card = document.getElementById('fccard');
  if (card.classList.contains('flipped')) return;
  card.classList.add('flipped');
  // Show score buttons, hide tap prompt
  document.querySelector('.btn-tap').style.display = 'none';
  document.querySelector('.btn-missed').style.display = 'block';
  document.querySelector('.btn-gotit').style.display = 'block';
}
function scoreFC(knewIt) {
  if (!knewIt) STATE.fc.missed.push(STATE.fc.q[STATE.fc.i]);
  logStat(currentTopic, 'flashcard', knewIt ? 1 : 0, 1);
  updateGoalProgress('flashcard');
  STATE.fc.i++; saveProgress(); renderFC();
}
function endFC() {
  document.getElementById('qsec-flash').style.display = 'none';
  let pct = Math.round(((STATE.fc.q.length - STATE.fc.missed.length) / STATE.fc.q.length) * 100) || 0;
  showScoreScreen(pct, STATE.fc.missed.length, 'fc');
}

/* =========================================
   QUIZ ENGINE (per-option rationales)
========================================= */
function startQuiz(reviewMissed = false) {
  let pool = PDF_TOPIC_DATA[currentTopic].quizQuestions;
  if (reviewMissed) { STATE.quiz.q = [...STATE.quiz.missed]; STATE.quiz.missed = []; }
  else { STATE.quiz.q = shuffle(pool).slice(0, 20); STATE.quiz.missed = []; }
  STATE.quiz.i = 0; STATE.quiz.qs = 0;
  saveProgress(); renderQuiz();
}
function renderQuiz() {
  if (STATE.quiz.i >= STATE.quiz.q.length) return endQuiz();
  STATE.quiz.answered = false;
  let q = STATE.quiz.q[STATE.quiz.i];

  document.getElementById('quiz-count').innerText = `Question ${STATE.quiz.i + 1} of ${STATE.quiz.q.length}`;
  document.getElementById('quiz-q').innerText = q.q;
  document.getElementById('quiz-nxt').style.display = 'none';

  let od = document.getElementById('quiz-opts'); od.innerHTML = '';
  q.o.forEach((opt, idx) => {
    let wrap = document.createElement('div');
    wrap.className = 'opt-wrap';

    let b = document.createElement('button');
    b.className = 'opt';
    b.innerText = opt;
    b.onclick = () => evalQuiz(idx, q);
    wrap.appendChild(b);

    // Per-option rationale (hidden until answered)
    let ratDiv = document.createElement('div');
    ratDiv.className = 'opt-rat';
    ratDiv.style.display = 'none';
    // Support both array and string rationale formats
    if (Array.isArray(q.r)) {
      ratDiv.innerHTML = q.r[idx] || '';
    } else {
      // Fallback for old single-string format: show on correct option only
      if (idx === q.c) ratDiv.innerHTML = q.r;
    }
    wrap.appendChild(ratDiv);

    od.appendChild(wrap);
  });
}
function evalQuiz(sel, q) {
  if (STATE.quiz.answered) return;
  STATE.quiz.answered = true;
  let wraps = document.querySelectorAll('#quiz-opts .opt-wrap');
  wraps.forEach((wrap, idx) => {
    let b = wrap.querySelector('.opt');
    let rat = wrap.querySelector('.opt-rat');
    b.style.pointerEvents = 'none';
    if (idx === q.c) b.classList.add('ok');
    else if (idx === sel) b.classList.add('no');
    // Reveal all rationales
    if (rat && rat.innerHTML) rat.style.display = 'block';
  });
  if (sel === q.c) STATE.quiz.qs++;
  else STATE.quiz.missed.push(q);
  logStat(currentTopic, 'quiz', sel === q.c ? 1 : 0, 1);

  document.getElementById('quiz-nxt').style.display = 'block';
  saveProgress();
}
function nextQuiz() { STATE.quiz.i++; renderQuiz(); }
function endQuiz() {
  document.getElementById('qsec-quiz').style.display = 'none';
  let pct = Math.round((STATE.quiz.qs / STATE.quiz.q.length) * 100) || 0;
  showScoreScreen(pct, STATE.quiz.missed.length, 'quiz');
}

/* =========================================
   PRACTICE ENGINE (SATA, NCLEX, HARD)
   — per-option rationales + review missed
========================================= */
function startPractice(type, reviewMissed = false) {
  STATE.prac.type = type;
  let pool = type === 'sata' ? PDF_TOPIC_DATA[currentTopic].practiceSata : (type === 'nclex' ? PDF_TOPIC_DATA[currentTopic].practiceNclex : PDF_TOPIC_DATA[currentTopic].practiceHard);
  if (reviewMissed) { STATE.prac.q = [...STATE.prac.missed]; STATE.prac.missed = []; }
  else {
    let shuffled = shuffle(pool);
    // Cap limits: NCLEX=15, Hard=20, SATA=uncapped
    if (type === 'nclex') shuffled = shuffled.slice(0, 15);
    else if (type === 'hard') shuffled = shuffled.slice(0, 20);
    STATE.prac.q = shuffled; STATE.prac.missed = [];
  }
  STATE.prac.i = 0; STATE.prac.qs = 0;
  document.getElementById('qsec-practice-menu').style.display = 'none';
  document.getElementById('qsec-practice-active').style.display = 'block';
  saveProgress(); renderPrac();
}
function renderPrac() {
  if (STATE.prac.i >= STATE.prac.q.length) return endPrac();
  STATE.prac.answered = false; STATE.prac.sata.clear();
  let q = STATE.prac.q[STATE.prac.i];
  let isSATA = q.type === 'sata';

  document.getElementById('prac-count').innerText = `${STATE.prac.type.toUpperCase()} - Q${STATE.prac.i + 1}/${STATE.prac.q.length}`;
  document.getElementById('prac-q').innerHTML = (isSATA ? '<span class="hl">SATA</span> ' : '') + q.q;
  document.getElementById('prac-nxt').style.display = 'none';
  document.getElementById('prac-submit').style.display = isSATA ? 'block' : 'none';

  let od = document.getElementById('prac-opts'); od.innerHTML = '';
  q.o.forEach((opt, idx) => {
    let wrap = document.createElement('div');
    wrap.className = 'opt-wrap';

    let b = document.createElement('button');
    b.className = 'opt';
    b.innerText = opt;
    b.onclick = () => handlePracOpt(b, idx, isSATA, q);
    wrap.appendChild(b);

    // Per-option rationale (hidden until answered)
    let ratDiv = document.createElement('div');
    ratDiv.className = 'opt-rat';
    ratDiv.style.display = 'none';
    if (Array.isArray(q.r)) {
      ratDiv.innerHTML = q.r[idx] || '';
    } else {
      // Fallback for old single-string format: show on correct option only
      let correctIdx = Array.isArray(q.c) ? q.c[0] : q.c;
      if (idx === correctIdx) ratDiv.innerHTML = q.r;
    }
    wrap.appendChild(ratDiv);

    od.appendChild(wrap);
  });
}
function handlePracOpt(btn, idx, isSATA, q) {
  if (STATE.prac.answered) return;
  if (isSATA) {
    if (STATE.prac.sata.has(idx)) { STATE.prac.sata.delete(idx); btn.classList.remove('selected'); }
    else { STATE.prac.sata.add(idx); btn.classList.add('selected'); }
  } else {
    STATE.prac.answered = true; evalPracMCQ(idx, q);
  }
}
function evalPracMCQ(sel, q) {
  let wraps = document.querySelectorAll('#prac-opts .opt-wrap');
  wraps.forEach((wrap, i) => {
    let b = wrap.querySelector('.opt');
    let rat = wrap.querySelector('.opt-rat');
    b.style.pointerEvents = 'none';
    if (i === q.c) b.classList.add('ok'); else if (i === sel) b.classList.add('no');
    if (rat && rat.innerHTML) rat.style.display = 'block';
  });
  if (sel === q.c) STATE.prac.qs++;
  else STATE.prac.missed.push(q);
  logStat(currentTopic, 'practice', sel === q.c ? 1 : 0, 1);
  finishPracQ();
}
function submitPrac() {
  if (STATE.prac.answered) return;
  STATE.prac.answered = true; document.getElementById('prac-submit').style.display = 'none';
  let q = STATE.prac.q[STATE.prac.i]; let corr = q.c;
  let wraps = document.querySelectorAll('#prac-opts .opt-wrap');

  let perf = STATE.prac.sata.size === corr.length && corr.every(v => STATE.prac.sata.has(v));
  if (perf) STATE.prac.qs++;
  else STATE.prac.missed.push(q);
  logStat(currentTopic, 'practice', perf ? 1 : 0, 1);

  wraps.forEach((wrap, i) => {
    let b = wrap.querySelector('.opt');
    let rat = wrap.querySelector('.opt-rat');
    b.style.pointerEvents = 'none';
    if (corr.includes(i)) b.classList.add('ok');
    if (STATE.prac.sata.has(i) && !corr.includes(i)) b.classList.add('no');
    if (rat && rat.innerHTML) rat.style.display = 'block';
  });
  finishPracQ();
}
function finishPracQ() {
  document.getElementById('prac-nxt').style.display = 'block';
  saveProgress();
}
function nextPrac() { STATE.prac.i++; renderPrac(); }
function endPrac() {
  document.getElementById('qsec-practice-active').style.display = 'none';
  let pct = Math.round((STATE.prac.qs / STATE.prac.q.length) * 100) || 0;
  showScoreScreen(pct, STATE.prac.missed.length, 'prac');
}

/* =========================================
   SCORE SCREEN & PERSISTENCE
========================================= */
function showScoreScreen(pct, missed, type) {
  document.getElementById('qsec-score').style.display = 'block';
  document.getElementById('score-pct').innerText = pct + '%';
  let txt = document.getElementById('score-txt');
  let btns = document.getElementById('score-btns'); btns.innerHTML = '';

  txt.innerText = missed > 0 ? `You missed ${missed} questions.` : "Perfect! No mistakes.";
  if (missed > 0) {
    btns.innerHTML += `<button class="btn btn-primary" onclick="restartFromScore('${type}', true)">Review Missed (${missed})</button>`;
  }
  btns.innerHTML += `<button class="btn" onclick="restartFromScore('${type}', false)">Shuffle & Restart</button>`;

  // Feature 4: Celebrations
  celebrate(pct);
  // Feature 6: Update goal on quiz/fc completion
  if (type === 'quiz') updateGoalProgress('quiz');
}

function restartFromScore(type, reviewMissed) {
  document.getElementById('qsec-score').style.display = 'none';
  if (type === 'fc') {
    document.getElementById('qsec-flash').style.display = 'block';
    startFC(reviewMissed);
  } else if (type === 'quiz') {
    document.getElementById('qsec-quiz').style.display = 'block';
    startQuiz(reviewMissed);
  } else if (type === 'prac') {
    document.getElementById('qsec-practice-active').style.display = 'block';
    startPractice(STATE.prac.type, reviewMissed);
  }
}
