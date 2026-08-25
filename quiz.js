/* ============================================================
   CURIOSA — раздел «Тесты»
   Отдельный модуль. Не изменяет app.js, просто дописывает свою
   логику поверх существующей разметки screen/is-active.
   ============================================================ */

const QUIZ_QUESTIONS_SOURCE = [
  {
    image: "Леонардо да Винчи Дама с горностаем.png",
    question: "Кто написал эту картину?",
    options: [
      "Леонардо да Винчи",
      "Рафаэль",
      "Сандро Боттичелли"
    ],
    correct: 0,
    fact:
      "«Дама с горностаем» — картина Леонардо да Винчи, написанная приблизительно в 1489–1490 годах. На ней изображена Чечилия Галлерани."
  },

  {
    image: "Ян Вермеер Девушка с жемчужной серёжкой.png",
    question: "Как называется эта картина?",
    options: [
      "Девушка с жемчужной серёжкой",
      "Девушка, читающая письмо",
      "Молочница"
    ],
    correct: 0,
    fact:
      "«Девушка с жемчужной серёжкой» — знаменитая картина нидерландского художника Яна Вермеера, созданная около 1665 года."
  },

  {
    image: "Рафаэль Сикстинская мадонна.png",
    question: "Кто автор «Сикстинской мадонны»?",
    options: [
      "Рафаэль",
      "Микеланджело",
      "Тициан"
    ],
    correct: 0,
    fact:
      "«Сикстинская мадонна» — картина Рафаэля, написанная приблизительно в 1512–1513 годах. Особенно известны два задумчивых ангела в нижней части полотна."
  },

  {
    image: "Эжен Делакруа Свобода, ведущая народ.png",
    question: "Как называется эта картина?",
    options: [
      "Свобода, ведущая народ",
      "Клятва Горациев",
      "Плот «Медузы»"
    ],
    correct: 0,
    fact:
      "«Свобода, ведущая народ» — картина Эжена Делакруа, написанная в 1830 году под впечатлением от Июльской революции во Франции."
  }
];

const QUIZ_STORAGE_KEY = "curiosa_quiz_history";

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

function quizQuestionLabel(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "вопросов";
  if (last === 1) return "вопрос";
  if (last >= 2 && last <= 4) return "вопроса";
  return "вопросов";
}

// --- Утилита перемешивания (Fisher–Yates) ---
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Перемешивает вопросы и варианты ответов внутри каждого вопроса,
// сохраняя правильный индекс актуальным после перемешивания.
function buildShuffledQuestions() {
  const shuffledQuestions = shuffle(QUIZ_QUESTIONS_SOURCE);
  return shuffledQuestions.map(q => {
    const optionsWithFlag = q.options.map((text, i) => ({
      text,
      isCorrect: i === q.correct
    }));
    const shuffledOptions = shuffle(optionsWithFlag);
    return {
      image: q.image,
      question: q.question,
      fact: q.fact,
      options: shuffledOptions.map(o => o.text),
      correct: shuffledOptions.findIndex(o => o.isCorrect)
    };
  });
}

// --- Хранение истории результатов ---
function getQuizHistory() {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveQuizResult(score, total) {
  const history = getQuizHistory();
  history.unshift({
    score,
    total,
    date: new Date().toISOString()
  });
  // храним последние 20 попыток, чтобы не раздувать localStorage
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(history.slice(0, 20)));
}

function renderQuizHistory() {
  const history = getQuizHistory();
  if (!history.length) return "";

  const rows = history.slice(0, 5).map(h => {
    const date = new Date(h.date).toLocaleDateString("ru-RU", { day: "2-digit", month: "short" });
    return `<div class="quiz-history-row"><span>${date}</span><span>${h.score} / ${h.total}</span></div>`;
  }).join("");

  return `
    <div class="quiz-history">
      <p class="quiz-history-title">Прошлые попытки</p>
      ${rows}
    </div>`;
}

// --- Экран старта ---
function renderQuizStart() {
  const root = document.getElementById("quiz-content");
  if (!root) return;
  root.innerHTML = `
    <div class="quiz-start">
      <p class="quiz-start-note">${QUIZ_QUESTIONS_SOURCE.length} ${quizQuestionLabel(QUIZ_QUESTIONS_SOURCE.length)} о картинах из архива.</p>
      <button class="button button-gold" data-action="quiz-start">Начать тест</button>
      ${renderQuizHistory()}
    </div>`;
}

// --- Экран вопроса ---
function renderQuizQuestion() {
  const root = document.getElementById("quiz-content");
  if (!root) return;

  if (quizIndex >= quizQuestions.length) {
    saveQuizResult(quizScore, quizQuestions.length);
    root.innerHTML = `
      <div class="quiz-result">
        <p class="eyebrow">ИТОГ</p>
        <h2>${quizScore} из ${quizQuestions.length}</h2>
        <button class="button button-gold" data-action="quiz-start">Пройти ещё раз</button>
        ${renderQuizHistory()}
      </div>`;
    return;
  }

  const q = quizQuestions[quizIndex];
  root.innerHTML = `
    <div class="quiz-progress">${quizIndex + 1} / ${quizQuestions.length}</div>
    <div class="quiz-art" style="background-image:url('${q.image}')"></div>
    <h2 class="quiz-question">${q.question}</h2>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">${opt}</button>
      `).join("")}
    </div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
  `;

  root.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => handleQuizAnswer(btn, q));
  });
}

function handleQuizAnswer(clickedBtn, question) {
  const buttons = document.querySelectorAll(".quiz-option");
  const chosenIndex = Number(clickedBtn.dataset.index);
  const isCorrect = chosenIndex === question.correct;

  if (isCorrect) quizScore++;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.correct) btn.classList.add("is-correct");
    else if (i === chosenIndex) btn.classList.add("is-wrong");
  });

  const feedback = document.getElementById("quiz-feedback");
  feedback.innerHTML = `
    <div class="quiz-feedback-card ${isCorrect ? "is-correct" : "is-wrong"}">
      <p class="quiz-verdict">${isCorrect ? "Верно!" : "Не угадали"}</p>
      <p class="quiz-fact">${question.fact}</p>
      <button class="button button-gold" data-action="quiz-next">Следующий вопрос →</button>
    </div>`;

  feedback.querySelector('[data-action="quiz-next"]').addEventListener("click", () => {
    quizIndex++;
    renderQuizQuestion();
  });
}

// --- Делегирование кликов ---
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "quiz") {
    const quizScreen = document.querySelector(".screen-quiz");
    if (!quizScreen) return;
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("is-active"));
    quizScreen.classList.add("is-active");
    currentScreen = "quiz";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#181312");
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("is-active"));
    document.querySelectorAll('[data-action="quiz"]').forEach(n => n.classList.add("is-active"));
    renderQuizStart();
  }

  if (action === "quiz-start") {
    quizQuestions = buildShuffledQuestions();
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
  }
});
