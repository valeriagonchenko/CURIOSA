"use strict";

/*
 * CURIOSA — a deliberately framework-free interactive prototype.
 * GitHub Pages needs only index.html, styles.css, app.js, and image1–image18.
 * Everything is stored on this device; there is no server or real sign-in.
 */

const STORAGE_KEY = "curiosa-prototype-v1";
const categories = [
  { name: "Искусство", image: 11 },
  { name: "История", image: 12 },
  { name: "Мифология", image: 13 },
  { name: "Философия", image: 14 },
  { name: "Литература", image: 15 },
  { name: "Психология", image: 16 },
  { name: "Наука", image: 17 },
  { name: "Культура", image: 18 },
];

const stories = [
  {
    id: "medusa", category: "Мифология", image: 13, minutes: 3,
    title: "Почему Медуза не была чудовищем",
    teaser: "Прежде чем стать чудовищем, она была жрицей. Всё остальное зависит от того, кому позволили рассказать эту историю.",
    intro: "Под поверхностью каждого знакомого мифа скрывается его незнакомая версия.",
    paragraphs: ["В одном из самых известных римских пересказов Медуза предстаёт не чудовищем, а юной женщиной, служившей Афине. После насилия в храме богини наказание постигает не нападавшего, а саму Медузу.","Её волосы превращаются в клубок змей, а взгляд обращает людей в камень. Женщину, чьи границы были нарушены, веками помнят как опасность, от которой должны спасаться остальные.","Это превращение заставило художников и писателей задать другой вопрос: что, если чудовищный облик был не признанием вины, а предупреждением, написанным теми, в чьих руках находилась власть?"],
    source: "Овидий, «Метаморфозы»; Метрополитен-музей",
  },
  {
    id: "painted-statues", category: "История", image: 12, minutes: 3,
    title: "Тайные цвета античных статуй",
    teaser: "Безмятежные фигуры из белого мрамора? Их создатели едва ли узнали бы собственные работы.",
    intro: "Столетиями мы представляли древнегреческие и римские статуи белоснежными. На самом деле прошлое было гораздо ярче.",
    paragraphs: ["Следы красных, синих, зелёных и золотых пигментов доказывают, что многие скульптуры были богато раскрашены. Цветом подчёркивали волосы, губы, глаза, одежду и украшения.","Время, погода и жёсткая очистка уничтожили большую часть красочного слоя. Позднейшие поколения ошибочно приняли уцелевший светлый камень за изначальный художественный идеал.","Современные методы визуализации и анализа пигментов позволяют восстановить утраченный облик некоторых скульптур. Результат кажется непривычным, выразительным и неожиданно живым."],
    source: "Метрополитен-музей; Исследовательский институт Гетти",
  },
  {
    id: "fallen-angel", category: "Искусство", image: 11, minutes: 2,
    title: "Слеза, которая сделала падшего ангела незабываемым",
    teaser: "Эту картину помнят не из-за крыльев, а из-за одной невероятно яростной слезы.",
    intro: "Иногда весь смысл картины заключён в детали, которую легко не заметить.",
    paragraphs: ["На картине Александра Кабанеля «Падший ангел» Люцифер изображён после изгнания с небес. Его крылья по-прежнему великолепны, но взгляд зрителя удерживает выражение лица: в нём одновременно читаются стыд, ярость, горе и непокорность.","Под глазом блестит единственная слеза. Это не сентиментальная капитуляция, а унижение, заострившееся до чего-то опасного.","Благодаря этому противоречию религиозный сюжет превратился в глубокий психологический образ: существо потеряло всё, но отказывается позволить другим увидеть свою слабость."],
    source: "Музей Фабра, Монпелье",
  },
  {
    id: "ship-theseus", category: "Философия", image: 14, minutes: 2,
    title: "Если в тебе всё изменится, останешься ли ты собой?",
    teaser: "Древний корабль, современный кризис идентичности и вопрос, на который философы так и не нашли ответа.",
    intro: "Представьте, что корабль чинят доска за доской, пока в нём не остаётся ни одной первоначальной детали.",
    paragraphs: ["Парадокс корабля Тесея спрашивает: остаётся ли предмет собой, если заменить каждую его часть? Если тождество заключено в материале — нет. Если в непрерывности существования — возможно, оно сохранится.","Этот вопрос становится тревожнее, когда мы применяем его к людям. Наши тела меняются, воспоминания тускнеют, а убеждения, отношения и стремления многократно переписываются.","Возможно, личность — вовсе не неизменный набор деталей. Возможно, это история, которая продолжает удерживать их вместе."],
    source: "Плутарх, «Жизнь Тесея»",
  },
  {
    id: "library-ghost", category: "Литература", image: 15, minutes: 3,
    title: "Почему старые библиотеки словно помнят тебя",
    teaser: "Комната, полная незавершённых мыслей, порой кажется уютнее комнаты, полной людей.",
    intro: "Библиотека — одно из немногих мест, где незнакомцы могут оставить частицы своей внутренней жизни.",
    paragraphs: ["Заметки на полях, затёртые страницы, забытые закладки и дарственные надписи превращают книгу в свидетельство о прежних читателях. Старинный том — это не только текст, но и маленькая история чужого внимания.","Писатели давно представляли библиотеки живыми пространствами, где истории накапливаются вокруг вещей. Полки кажутся безмолвными, но за каждым названием стоит чей-то разум, преодолевающий расстояние и время.","Возможно, поэтому вход в старый читальный зал похож не на прибытие в незнакомое место, а на возвращение к разговору, который уже давно продолжается."],
    source: "Британская библиотека; открытые литературные архивы",
  },
  {
    id: "zeigarnik", category: "Психология", image: 16, minutes: 2,
    title: "Почему незаконченные истории не выходят из головы",
    teaser: "У нашего мозга есть особая слабость: финал, которого он так и не получил.",
    intro: "Мысль, оборванная на полпути, нередко звучит громче успешно завершённого дела.",
    paragraphs: ["Эффект Зейгарник описывает явление, при котором прерванные или незавершённые задачи особенно долго остаются в памяти. Незамкнутый круг ощущается как вопрос, на который разум стремится найти ответ.","Это объясняет силу открытых финалов, навязчивость неотправленных сообщений и то, почему неудачно завершившийся разговор может прокручиваться в голове целыми днями.","Напряжение не всегда враг. Иногда любопытство рождается именно там, где исчезает определённость."],
    source: "Блюма Зейгарник; исследования незавершённых задач и памяти",
  },
  {
    id: "stars", category: "Наука", image: 17, minutes: 3,
    title: "Звёзды, которые мы видим, — послания из прошлого",
    teaser: "Глядя в ночное небо, мы смотрим назад во времени.",
    intro: "Свет не приходит мгновенно. Каждый далёкий объект показывает нам свою более раннюю версию.",
    paragraphs: ["Солнечному свету требуется чуть больше восьми минут, чтобы достичь Земли. Свет других звёзд может идти к нам годы, столетия или гораздо дольше. Когда он наконец прибывает, то несёт свидетельство мгновения, которое уже прошло.","Астрономы используют эту задержку, чтобы изучать историю Вселенной. Телескоп работает как архив, собирая древние сигналы, преодолевшие невероятные расстояния.","Небо находится не просто над нами. Оно состоит из множества временных слоёв, которые мы видим одновременно."],
    source: "НАСА; образовательные материалы Европейского космического агентства",
  },
  {
    id: "persephone", category: "Мифология", image: 13, minutes: 3,
    title: "Персефона и цена гранатовых зёрен",
    teaser: "Шесть зёрен, два мира и миф, превративший скорбь в часть смены времён года.",
    intro: "Одни мифы объясняют устройство природы. Другие — почему потеря близкого человека способна изменить весь мир.",
    paragraphs: ["В древнем мифе Персефону похищают в подземный мир, и её мать Деметра лишает землю своего благословения. Урожай гибнет, а мир становится бесплодным.","Соглашение позволяет Персефоне вернуться, однако пища, которую она попробовала внизу, обязывает её проводить часть каждого года в подземном царстве.","Её уход становится зимой, а возвращение — весной. Так череда разлук и воссоединений превращается в эмоциональную основу годового цикла."],
    source: "Гомеровский гимн Деметре",
  },
  {
    id: "vanitas", category: "Искусство", image: 11, minutes: 2,
    title: "Тайные предупреждения в старинных натюрмортах",
    teaser: "Цветы, фрукты, свечи и черепа: старые мастера оставляли зрителю послание.",
    intro: "Роскошное изображение обычных предметов может тихо спросить: долго ли всё это просуществует?",
    paragraphs: ["В натюрмортах vanitas увядающие цветы, погасшие свечи, часы и хрупкое стекло напоминают зрителю, что красота и богатство временны.","Эти образы не просто отвергают удовольствие. Их напряжение рождается из того, насколько прекрасной художники показывают мимолётность.","В них скрыто тонкое приглашение: замечать мир особенно внимательно именно потому, что он не может оставаться неизменным."],
    source: "Рейксмюсеум; Национальная галерея",
  },
  {
    id: "lost-cities", category: "История", image: 12, minutes: 4,
    title: "Древние города, скрытые под современными улицами",
    teaser: "История часто ближе, чем кажется. Иногда она находится прямо под нашими ногами.",
    intro: "Города редко исчезают бесследно. Они становятся фундаментом для всего, что приходит им на смену.",
    paragraphs: ["По всей Европе и Средиземноморью современные улицы скрывают дороги, фундаменты, мастерские и дома гораздо более древних поселений.","Во время строительных работ порой обнаруживаются фрагменты этих погребённых миров: мозаичные полы под жилыми домами, стены под вокзалами и целые кварталы под городскими площадями.","Прошлое не всегда находится далеко. Иногда оно просто скрыто под более новыми слоями повседневной жизни."],
    source: "Археологические коллекции музеев и городские архивы раскопок",
  },
  {
    id: "sonder", category: "Психология", image: 16, minutes: 2,
    title: "Осознание того, что у каждого своя целая вселенная",
    teaser: "Каждый встречный несёт в себе целую невидимую вселенную.",
    intro: "Вы — главный герой своей истории. Как и любой другой человек.",
    paragraphs: ["Слово «сондер» описывает внезапное осознание того, что жизнь незнакомцев столь же многослойна и эмоционально сложна, как ваша собственная.","Человек, мелькнувший за окном поезда, может влюбляться, горевать, планировать переезд или вспоминать разговор десятилетней давности.","Это чувство может ошеломлять, но вместе с тем приносить странное утешение: мир полон скрытых историй, даже когда выглядит совершенно обыденно."],
    source: "Джон Кёниг, «Словарь неясных печалей»",
  },
  {
    id: "museum-night", category: "Культура", image: 18, minutes: 3,
    title: "Почему ночью музеи ощущаются совершенно иначе",
    teaser: "Когда толпа исчезает, выставка становится похожей на тайну.",
    intro: "Тишина в музее меняет отношения между зрителем и экспонатом.",
    paragraphs: ["В часы наплыва посетителей мы часто движемся по залам в темпе окружающих. После наступления темноты само здание становится частью впечатления.","Тени, тишина, архитектура и неторопливое внимание заставляют знакомые предметы ощущаться по-новому. Портрет вновь становится человеком, а скульптура занимает пространство зала, а не место рядом с табличкой.","Возможно, лучший способ понять музей — на мгновение позволить себе почувствовать, будто всё внутри ожидало именно вас."],
    source: "Архивы вечерних программ и мероприятий музеев",
  },
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && typeof saved === "object") {
      const interestNames = { Art: "Искусство", History: "История", Mythology: "Мифология", Philosophy: "Философия", Literature: "Литература", Psychology: "Психология", Science: "Наука", Culture: "Культура" };
      saved.interests = (saved.interests || []).map((interest) => interestNames[interest] || interest);
      return saved;
    }
  } catch (_) {}
  return { username: "", avatar: 2, interests: ["Искусство", "Мифология"], saved: [], guest: false, onboarded: false, discovered: [] };
}

let state = loadState();
let currentScreen = "welcome";
let currentStory = null;
let activeFilter = "Все";
let feedMode = "for-you";
let toastTimeout;

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
}

function image(number) { return `image${number}.${number >= 13 ? "jpg" : "png"}`; }
function escapeText(text) {
  return String(text).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function showScreen(screen) {
  const next = document.querySelector(`[data-screen="${screen}"]`);
  if (!next) return;
  document.querySelector(".screen.is-active")?.classList.remove("is-active");
  next.classList.add("is-active");
  currentScreen = screen;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", screen === "article" ? "#f1eadc" : "#181312");
}

function toast(message) {
  const element = document.getElementById("toast");
  element.textContent = message;
  element.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => element.classList.remove("is-visible"), 2200);
}

function renderAvatars() {
  document.getElementById("avatar-grid").innerHTML = Array.from({ length: 9 }, (_, index) => {
    const number = index + 2;
    return `<button class="avatar-card ${state.avatar === number ? "is-selected" : ""}" data-avatar="${number}" aria-label="Выбрать портрет ${index + 1}"><span class="avatar-image" style="background-image:url('${image(number)}')"><span class="avatar-fallback">${String.fromCharCode(65 + index)}</span></span></button>`;
  }).join("");
  document.getElementById("username").value = state.username || "";
}

function renderInterests() {
  document.getElementById("interest-grid").innerHTML = categories.map((category) => `<button class="interest-card ${state.interests.includes(category.name) ? "is-selected" : ""}" data-interest="${category.name}" aria-pressed="${state.interests.includes(category.name)}"><span class="interest-image" style="background-image:url('${image(category.image)}')"></span><span class="interest-check">✓</span><strong>${category.name}</strong></button>`).join("");
}

function orderedStories() {
  if (feedMode === "explore") return [...stories].sort((a, b) => a.category.localeCompare(b.category));
  return [...stories].sort((a, b) => Number(state.interests.includes(b.category)) - Number(state.interests.includes(a.category)));
}

function renderFeed() {
  const viewport = document.getElementById("feed-viewport");
  viewport.innerHTML = orderedStories().map((story, index) => `<article class="discovery-card" data-story-id="${story.id}"><div class="discovery-art" style="background-image:url('${image(story.image)}')"></div><span class="discovery-number">${String(index + 1).padStart(2, "0")} / ${String(stories.length).padStart(2, "0")}</span><div class="discovery-copy"><span class="category-label">${story.category.toUpperCase()}</span><h2>${story.title}</h2><p>${story.teaser}</p><div class="card-actions"><span class="read-time">${story.minutes} мин чтения</span><div class="card-action-buttons"><button class="action-small article-open" data-open-story="${story.id}">Читать</button><button class="action-small ${state.saved.includes(story.id) ? "is-saved" : ""}" data-save-story="${story.id}" aria-label="Сохранить материал">♧</button><button class="action-small" data-share-story="${story.id}" aria-label="Поделиться материалом">↗</button></div></div></div></article>`).join("");
  viewport.scrollTop = 0;
  trackDiscovered(orderedStories()[0]?.id);
}

function trackDiscovered(id) {
  if (!id || state.discovered.includes(id)) return;
  state.discovered.push(id);
  persist();
}

function openStory(id) {
  const story = stories.find((item) => item.id === id);
  if (!story) return;
  currentStory = story;
  trackDiscovered(id);
  const related = stories.find((item) => item.id !== id && item.category === story.category) || stories.find((item) => item.id !== id);
  document.getElementById("article-content").innerHTML = `<div class="article-hero" style="background-image:url('${image(story.image)}')"><div class="article-toolbar"><button class="icon-button" data-action="feed" aria-label="Вернуться к открытиям">←</button><button class="icon-button ${state.saved.includes(story.id) ? "is-saved" : ""}" data-save-story="${story.id}" aria-label="Сохранить материал">♧</button></div></div><div class="article-inner"><span class="category-label">${story.category.toUpperCase()} · ${story.minutes} МИН ЧТЕНИЯ</span><h2>${story.title}</h2><div class="article-divider"></div><p class="article-intro">${story.intro}</p><div class="article-body">${story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div><p class="article-source">Источник: ${story.source}</p><h3 class="related-title">Похожие материалы</h3><button class="related-card" data-open-story="${related.id}"><span class="related-image" style="background-image:url('${image(related.image)}')"></span><span><strong>${related.title}</strong><small>${related.category.toUpperCase()} · ${related.minutes} МИН ЧТЕНИЯ</small></span></button></div>`;
  document.getElementById("article-content").scrollTop = 0;
  showScreen("article");
}

function toggleSave(id) {
  if (state.guest) { toast("Создайте аккаунт, чтобы сохранять материалы."); return; }
  const savedIndex = state.saved.indexOf(id);
  if (savedIndex === -1) { state.saved.push(id); toast("Добавлено в коллекцию."); }
  else { state.saved.splice(savedIndex, 1); toast("Удалено из коллекции."); }
  persist();
  document.querySelectorAll(`[data-save-story="${id}"]`).forEach((button) => button.classList.toggle("is-saved", state.saved.includes(id)));
  if (currentScreen === "collection") renderCollection();
}

function renderCollection() {
  const savedStories = stories.filter((story) => state.saved.includes(story.id));
  const filters = ["Все", ...new Set(savedStories.map((story) => story.category))];
  if (!filters.includes(activeFilter)) activeFilter = "Все";
  document.getElementById("collection-count").textContent = savedStories.length ? `${savedStories.length} сохранённых материалов` : "Здесь хранится всё, что хочется запомнить.";
  document.getElementById("collection-filters").innerHTML = filters.map((filter) => `<button class="filter-button ${activeFilter === filter ? "is-active" : ""}" data-filter="${filter}">${filter}</button>`).join("");
  const visible = savedStories.filter((story) => activeFilter === "Все" || story.category === activeFilter);
  document.getElementById("collection-grid").innerHTML = visible.length ? visible.map((story) => `<button class="saved-card" data-open-story="${story.id}"><span class="saved-image" style="background-image:url('${image(story.image)}');display:block"></span><span class="saved-copy"><strong>${story.title}</strong><small>${story.category.toUpperCase()} · ${story.minutes} МИН ЧТЕНИЯ</small></span></button>`).join("") : `<div class="empty-state"><span>♧</span><h3>Ваш архив ждёт</h3><p>${state.guest ? "Создайте аккаунт, чтобы сохранять понравившиеся истории." : "Сохраняйте интересные материалы, чтобы возвращаться к ним в любое время."}</p>${state.guest ? '<button class="button button-gold" data-action="create">Создать аккаунт</button>' : ""}</div>`;
}

function archetype() {
  if (state.interests.includes("Мифология") || state.interests.includes("Литература")) return "Мечтатель";
  if (state.interests.includes("Психология") || state.interests.includes("Философия")) return "Наблюдатель";
  if (state.interests.includes("Наука")) return "Исследователь";
  return "Архивариус";
}

function renderProfile() {
  const savedStories = stories.filter((story) => state.saved.includes(story.id));
  const username = state.guest ? "Любознательный гость" : escapeText(state.username || "Любознательный");
  document.getElementById("profile-content").innerHTML = `<div class="profile-avatar"><div class="profile-avatar-inner" style="background-image:url('${image(state.avatar)}')"></div></div><h2>${username}</h2><p class="profile-title">${archetype()}</p><div class="profile-stats"><div><strong>${state.discovered.length}</strong><small>Открыто</small></div><div><strong>${state.saved.length}</strong><small>Сохранено</small></div><div><strong>${state.interests.length}</strong><small>Интересы</small></div></div><section class="profile-section"><h3>Ваши интересы</h3><div class="interest-pills">${state.interests.map((interest) => `<span class="interest-pill">${interest}</span>`).join("")}</div></section><section class="profile-section"><h3>Недавно сохранённые</h3>${savedStories.length ? `<div class="profile-preview-grid">${savedStories.slice(-3).map((story) => `<button class="profile-preview-image" data-open-story="${story.id}" aria-label="${escapeText(story.title)}" style="background-image:url('${image(story.image)}')"></button>`).join("")}</div>` : `<p class="screen-note" style="margin:0">${state.guest ? "Создайте аккаунт, чтобы собрать собственную коллекцию." : "Здесь появится ваш первый сохранённый материал."}</p>`}${state.guest ? '<button class="button button-gold" style="margin-top:17px" data-action="create">Создать аккаунт</button>' : ""}</section>`;
}

async function shareStory(id) {
  const story = stories.find((item) => item.id === id);
  if (!story) return;
  if (navigator.share) {
    try { await navigator.share({ title: story.title, text: `${story.title} — открытие в CURIOSA`, url: location.href }); return; } catch (_) {}
  }
  try { await navigator.clipboard.writeText(`${story.title} — ${location.href}`); toast("Ссылка скопирована."); }
  catch (_) { toast("Этим открытием стоит поделиться."); }
}

function handleAction(action) {
  switch (action) {
    case "create": case "login": state.guest = false; renderAvatars(); showScreen("profile-setup"); break;
    case "guest": state.guest = true; state.username = ""; renderInterests(); showScreen("interests"); break;
    case "welcome": showScreen("welcome"); break;
    case "back-profile": showScreen(state.guest ? "welcome" : "profile-setup"); break;
    case "save-profile": state.username = document.getElementById("username").value.trim() || "Любознательный"; state.guest = false; persist(); renderInterests(); showScreen("interests"); break;
    case "enter": if (!state.interests.length) { toast("Выберите хотя бы одну тему."); break; } state.onboarded = true; persist(); renderFeed(); showScreen("feed"); break;
    case "feed": if (!document.getElementById("feed-viewport").children.length) renderFeed(); showScreen("feed"); break;
    case "collection": renderCollection(); showScreen("collection"); break;
    case "open-profile": renderProfile(); showScreen("profile"); break;
    case "reset": localStorage.removeItem(STORAGE_KEY); state = loadState(); activeFilter = "Все"; feedMode = "for-you"; document.getElementById("feed-viewport").innerHTML = ""; showScreen("welcome"); toast("Настройки архива сброшены."); break;
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.action) { handleAction(target.dataset.action); return; }
  if (target.dataset.avatar) { state.avatar = Number(target.dataset.avatar); persist(); renderAvatars(); return; }
  if (target.dataset.interest) {
    const name = target.dataset.interest;
    const index = state.interests.indexOf(name);
    if (index === -1) state.interests.push(name); else state.interests.splice(index, 1);
    persist(); renderInterests(); return;
  }
  if (target.dataset.openStory) { openStory(target.dataset.openStory); return; }
  if (target.dataset.saveStory) { toggleSave(target.dataset.saveStory); return; }
  if (target.dataset.shareStory) { shareStory(target.dataset.shareStory); return; }
  if (target.dataset.filter) { activeFilter = target.dataset.filter; renderCollection(); return; }
  if (target.dataset.feedTab) {
    feedMode = target.dataset.feedTab;
    document.querySelectorAll("[data-feed-tab]").forEach((tab) => tab.classList.toggle("is-selected", tab === target));
    renderFeed();
  }
});

document.getElementById("feed-viewport").addEventListener("scroll", (event) => {
  const viewport = event.currentTarget;
  const index = Math.round(viewport.scrollTop / viewport.clientHeight);
  trackDiscovered(orderedStories()[index]?.id);
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (currentScreen !== "feed" || !["ArrowDown", "ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  const viewport = document.getElementById("feed-viewport");
  viewport.scrollBy({ top: event.key === "ArrowDown" ? viewport.clientHeight : -viewport.clientHeight, behavior: "smooth" });
});

renderAvatars();
renderInterests();
if (state.onboarded) { renderFeed(); showScreen("feed"); }
