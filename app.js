"use strict";

/*
 * CURIOSA — a deliberately framework-free interactive prototype.
 * GitHub Pages needs only index.html, styles.css, app.js, and image1–image18.
 * Everything is stored on this device; there is no server or real sign-in.
 */

const STORAGE_KEY = "curiosa-prototype-v1";
const categories = [
  { name: "Art", image: 11 },
  { name: "History", image: 12 },
  { name: "Mythology", image: 13 },
  { name: "Philosophy", image: 14 },
  { name: "Literature", image: 15 },
  { name: "Psychology", image: 16 },
  { name: "Science", image: 17 },
  { name: "Culture", image: 18 },
];

const stories = [
  {
    id: "medusa", category: "Mythology", image: 13, minutes: 3,
    title: "Why Medusa was never the monster they made her",
    teaser: "Before she became a monster, she was a priestess. The rest depends on who was allowed to tell the story.",
    intro: "Every familiar myth has an unfamiliar version hiding just beneath its surface.",
    paragraphs: ["In one of the best-known Roman retellings, Medusa begins not as a creature but as a young woman devoted to Athena. After violence inside the goddess’s temple, the punishment falls not on her attacker but on Medusa herself.","Her hair becomes a nest of serpents. Her gaze turns people to stone. And the woman whose boundaries were violated is remembered, for centuries, as the danger everyone else must survive.","The transformation has inspired artists and writers to ask a different question: what if the monstrous face was never a confession of guilt, but a warning written by the people with power?"],
    source: "Ovid, Metamorphoses; The Metropolitan Museum of Art",
  },
  {
    id: "painted-statues", category: "History", image: 12, minutes: 3,
    title: "The secret colors of ancient statues",
    teaser: "Those serene white marble figures? Their original creators would barely recognize them.",
    intro: "For centuries, we imagined ancient Greek and Roman statues as plain white marble. The past was considerably more colorful.",
    paragraphs: ["Traces of red, blue, green, and gold pigments reveal that many sculptures were once vividly painted. Hair, lips, eyes, clothing, and jewelry all carried deliberate color.","Time, weather, and aggressive cleaning erased much of that surface. Later generations mistook the surviving pale stone for an original artistic ideal.","Modern imaging and pigment analysis now make it possible to reconstruct some of these lost surfaces. The result is unfamiliar, exuberant, and unexpectedly human."],
    source: "The Metropolitan Museum of Art; The Getty Research Institute",
  },
  {
    id: "fallen-angel", category: "Art", image: 11, minutes: 2,
    title: "The single tear that made a fallen angel unforgettable",
    teaser: "A painting remembered not for its wings, but for one impossibly furious tear.",
    intro: "Sometimes the entire meaning of a painting lives in a detail small enough to miss.",
    paragraphs: ["Alexandre Cabanel’s Fallen Angel depicts Lucifer after his expulsion from heaven. His wings remain magnificent, but his expression is what holds the viewer: shame, rage, grief, and defiance all at once.","One tear catches the light beneath his eye. It is not sentimental surrender. It feels like humiliation sharpened into something dangerous.","That contradiction transformed a religious subject into a deeply psychological image: a being who has lost everything and refuses to be seen breaking."],
    source: "Musée Fabre, Montpellier",
  },
  {
    id: "ship-theseus", category: "Philosophy", image: 14, minutes: 2,
    title: "If every piece of you changes, are you still you?",
    teaser: "An ancient ship, a modern identity crisis, and the question philosophers refuse to settle.",
    intro: "Imagine repairing a ship one plank at a time until none of its original pieces remain.",
    paragraphs: ["The Ship of Theseus asks whether an object remains itself when every part has been replaced. If identity belongs to material, the answer is no. If identity belongs to continuity, perhaps it survives.","The puzzle becomes more unsettling when applied to people. Our bodies change. Memories blur. Beliefs, relationships, and ambitions are rewritten repeatedly.","Perhaps identity is not a fixed collection of pieces at all. Perhaps it is the story that keeps holding them together."],
    source: "Plutarch, Life of Theseus",
  },
  {
    id: "library-ghost", category: "Literature", image: 15, minutes: 3,
    title: "Why old libraries feel like they remember you",
    teaser: "A room full of unfinished thoughts can feel more intimate than a room full of people.",
    intro: "A library is one of the few places where strangers can leave pieces of their inner lives behind.",
    paragraphs: ["Marginal notes, softened pages, forgotten bookmarks, and inscriptions all turn a book into evidence of previous readers. An old volume is rarely only a text; it is a small history of attention.","Writers have long imagined libraries as living spaces where stories accumulate around objects. The shelves seem silent, but every title represents a mind reaching across distance and time.","Perhaps that is why entering an old reading room can feel less like arriving somewhere unfamiliar and more like returning to a conversation already in progress."],
    source: "The British Library; public literary archives",
  },
  {
    id: "zeigarnik", category: "Psychology", image: 16, minutes: 2,
    title: "Why unfinished stories refuse to leave your mind",
    teaser: "Your brain has a particular weakness: an ending it never received.",
    intro: "A thought interrupted halfway often stays louder than a task completed successfully.",
    paragraphs: ["The Zeigarnik effect describes the observation that interrupted or unfinished tasks can remain unusually present in memory. An open loop feels like a question the mind wants to close.","This helps explain why cliffhangers work, why unsent messages linger, and why a conversation that ended badly can replay itself for days.","The tension is not always an enemy. Sometimes curiosity begins exactly where certainty disappears."],
    source: "Bluma Zeigarnik; research on interrupted tasks and memory",
  },
  {
    id: "stars", category: "Science", image: 17, minutes: 3,
    title: "The stars you see are messages from the past",
    teaser: "Looking into the night sky means looking backward through time.",
    intro: "Light does not arrive instantly. Every distant object sends us an earlier version of itself.",
    paragraphs: ["Sunlight takes a little over eight minutes to reach Earth. Light from other stars may take years, centuries, or far longer. When it finally arrives, it carries evidence of a moment already gone.","Astronomers use this delay to study the history of the universe. A telescope can work like an archive, collecting old signals that have traveled across extraordinary distances.","The sky is not simply above us. It is layered with different moments in time, all visible at once."],
    source: "NASA; European Space Agency educational resources",
  },
  {
    id: "persephone", category: "Mythology", image: 13, minutes: 3,
    title: "Persephone and the price of a pomegranate",
    teaser: "Six seeds, two worlds, and a myth that made grief part of the seasons.",
    intro: "Some myths explain the natural world. Others explain why losing someone can rearrange it.",
    paragraphs: ["In the ancient story, Persephone is taken to the underworld, and her mother Demeter withdraws her blessing from the earth. Crops fail. The world becomes barren.","A compromise allows Persephone to return, but the food she tasted below binds her to spend part of each year in the underworld.","Her departure becomes winter; her return becomes spring. The story turns a cycle of absence and reunion into the emotional architecture of the year."],
    source: "Homeric Hymn to Demeter",
  },
  {
    id: "vanitas", category: "Art", image: 11, minutes: 2,
    title: "The hidden warnings inside beautiful still-life paintings",
    teaser: "Flowers, fruit, candles, and skulls: the old masters were leaving you a message.",
    intro: "A lavish painting of ordinary objects can quietly ask how long any of them will last.",
    paragraphs: ["In vanitas paintings, wilting flowers, extinguished candles, clocks, and fragile glass remind viewers that beauty and wealth are temporary.","The imagery does not simply reject pleasure. Its tension comes from making transience look astonishingly beautiful.","The invitation is subtle: notice the world intensely, precisely because it cannot remain unchanged."],
    source: "Rijksmuseum; The National Gallery",
  },
  {
    id: "lost-cities", category: "History", image: 12, minutes: 4,
    title: "The ancient cities still sleeping beneath modern streets",
    teaser: "History is often closer than it appears. Sometimes it is directly under your feet.",
    intro: "Cities rarely disappear cleanly. They become the foundations of whatever comes next.",
    paragraphs: ["Across Europe and the Mediterranean, present-day streets cover roads, foundations, workshops, and homes from much older settlements.","Construction work occasionally exposes fragments of these buried worlds: mosaic floors beneath apartment buildings, walls below train stations, entire neighborhoods beneath public squares.","The past is not always far away. Sometimes it is simply hidden under newer layers of ordinary life."],
    source: "Museum archaeological collections and municipal excavation archives",
  },
  {
    id: "sonder", category: "Psychology", image: 16, minutes: 2,
    title: "The strange realization that everyone has a life as vivid as yours",
    teaser: "Every stranger you pass is carrying an entire invisible universe.",
    intro: "You are the central character in your own story. So is everyone else.",
    paragraphs: ["The word sonder describes the sudden awareness that strangers live lives as layered and emotionally complicated as your own.","Someone glimpsed through a train window may be falling in love, grieving, planning a move, or remembering a conversation from ten years ago.","The feeling can be overwhelming, but also strangely comforting: the world is full of hidden stories, even when it appears perfectly ordinary."],
    source: "The Dictionary of Obscure Sorrows, John Koenig",
  },
  {
    id: "museum-night", category: "Culture", image: 18, minutes: 3,
    title: "Why museums feel completely different after dark",
    teaser: "When the crowds disappear, an exhibition becomes something closer to a secret.",
    intro: "A quiet museum changes the relationship between viewer and object.",
    paragraphs: ["During crowded hours, we often move through collections at the pace of everyone around us. After dark, the building itself becomes part of the experience.","Shadows, silence, architecture, and slower attention make familiar objects feel newly present. A portrait becomes a person again; a sculpture occupies the room rather than the label beside it.","Perhaps the best way to understand a museum is to let yourself feel, briefly, that everything inside has been waiting for you."],
    source: "Museum late-opening and public-program archives",
  },
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && typeof saved === "object") return saved;
  } catch (_) {}
  return { username: "", avatar: 2, interests: ["Art", "Mythology"], saved: [], guest: false, onboarded: false, discovered: [] };
}

let state = loadState();
let currentScreen = "welcome";
let currentStory = null;
let activeFilter = "All";
let feedMode = "for-you";
let toastTimeout;

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
}

function image(number) { return `image${number}.png`; }
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
    return `<button class="avatar-card ${state.avatar === number ? "is-selected" : ""}" data-avatar="${number}" aria-label="Choose portrait ${index + 1}"><span class="avatar-image" style="background-image:url('${image(number)}')"><span class="avatar-fallback">${String.fromCharCode(65 + index)}</span></span></button>`;
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
  viewport.innerHTML = orderedStories().map((story, index) => `<article class="discovery-card" data-story-id="${story.id}"><div class="discovery-art" style="background-image:url('${image(story.image)}')"></div><span class="discovery-number">${String(index + 1).padStart(2, "0")} / ${String(stories.length).padStart(2, "0")}</span><div class="discovery-copy"><span class="category-label">${story.category.toUpperCase()}</span><h2>${story.title}</h2><p>${story.teaser}</p><div class="card-actions"><span class="read-time">${story.minutes} min read</span><div class="card-action-buttons"><button class="action-small article-open" data-open-story="${story.id}">Read story</button><button class="action-small ${state.saved.includes(story.id) ? "is-saved" : ""}" data-save-story="${story.id}" aria-label="Save discovery">♧</button><button class="action-small" data-share-story="${story.id}" aria-label="Share discovery">↗</button></div></div></div></article>`).join("");
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
  document.getElementById("article-content").innerHTML = `<div class="article-hero" style="background-image:url('${image(story.image)}')"><div class="article-toolbar"><button class="icon-button" data-action="feed" aria-label="Back to discoveries">←</button><button class="icon-button ${state.saved.includes(story.id) ? "is-saved" : ""}" data-save-story="${story.id}" aria-label="Save this story">♧</button></div></div><div class="article-inner"><span class="category-label">${story.category.toUpperCase()} · ${story.minutes} MIN READ</span><h2>${story.title}</h2><div class="article-divider"></div><p class="article-intro">${story.intro}</p><div class="article-body">${story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div><p class="article-source">Source: ${story.source}</p><h3 class="related-title">Related discoveries</h3><button class="related-card" data-open-story="${related.id}"><span class="related-image" style="background-image:url('${image(related.image)}')"></span><span><strong>${related.title}</strong><small>${related.category.toUpperCase()} · ${related.minutes} MIN READ</small></span></button></div>`;
  document.getElementById("article-content").scrollTop = 0;
  showScreen("article");
}

function toggleSave(id) {
  if (state.guest) { toast("Create an account to start your collection."); return; }
  const savedIndex = state.saved.indexOf(id);
  if (savedIndex === -1) { state.saved.push(id); toast("Saved to your collection."); }
  else { state.saved.splice(savedIndex, 1); toast("Removed from your collection."); }
  persist();
  document.querySelectorAll(`[data-save-story="${id}"]`).forEach((button) => button.classList.toggle("is-saved", state.saved.includes(id)));
  if (currentScreen === "collection") renderCollection();
}

function renderCollection() {
  const savedStories = stories.filter((story) => state.saved.includes(story.id));
  const filters = ["All", ...new Set(savedStories.map((story) => story.category))];
  if (!filters.includes(activeFilter)) activeFilter = "All";
  document.getElementById("collection-count").textContent = savedStories.length ? `${savedStories.length} ${savedStories.length === 1 ? "discovery" : "discoveries"} carefully preserved` : "A place for everything worth remembering.";
  document.getElementById("collection-filters").innerHTML = filters.map((filter) => `<button class="filter-button ${activeFilter === filter ? "is-active" : ""}" data-filter="${filter}">${filter}</button>`).join("");
  const visible = savedStories.filter((story) => activeFilter === "All" || story.category === activeFilter);
  document.getElementById("collection-grid").innerHTML = visible.length ? visible.map((story) => `<button class="saved-card" data-open-story="${story.id}"><span class="saved-image" style="background-image:url('${image(story.image)}');display:block"></span><span class="saved-copy"><strong>${story.title}</strong><small>${story.category.toUpperCase()} · ${story.minutes} MIN READ</small></span></button>`).join("") : `<div class="empty-state"><span>♧</span><h3>Your archive awaits</h3><p>${state.guest ? "Create an account to keep the stories that stay with you." : "Save a discovery, and you will find it here whenever curiosity calls."}</p>${state.guest ? '<button class="button button-gold" data-action="create">Create account</button>' : ""}</div>`;
}

function archetype() {
  if (state.interests.includes("Mythology") || state.interests.includes("Literature")) return "The Dreamer";
  if (state.interests.includes("Psychology") || state.interests.includes("Philosophy")) return "The Observer";
  if (state.interests.includes("Science")) return "The Explorer";
  return "The Archivist";
}

function renderProfile() {
  const savedStories = stories.filter((story) => state.saved.includes(story.id));
  const username = state.guest ? "Curious Guest" : escapeText(state.username || "CuriousMind");
  document.getElementById("profile-content").innerHTML = `<div class="profile-avatar"><div class="profile-avatar-inner" style="background-image:url('${image(state.avatar)}')"></div></div><h2>${username}</h2><p class="profile-title">${archetype()}</p><div class="profile-stats"><div><strong>${state.discovered.length}</strong><small>Discovered</small></div><div><strong>${state.saved.length}</strong><small>Collected</small></div><div><strong>${state.interests.length}</strong><small>Interests</small></div></div><section class="profile-section"><h3>Your curiosities</h3><div class="interest-pills">${state.interests.map((interest) => `<span class="interest-pill">${interest}</span>`).join("")}</div></section><section class="profile-section"><h3>Recently collected</h3>${savedStories.length ? `<div class="profile-preview-grid">${savedStories.slice(-3).map((story) => `<button class="profile-preview-image" data-open-story="${story.id}" aria-label="${escapeText(story.title)}" style="background-image:url('${image(story.image)}')"></button>`).join("")}</div>` : `<p class="screen-note" style="margin:0">${state.guest ? "Create an account to begin your personal collection." : "Your first saved discovery will appear here."}</p>`}${state.guest ? '<button class="button button-gold" style="margin-top:17px" data-action="create">Create account</button>' : ""}</section>`;
}

async function shareStory(id) {
  const story = stories.find((item) => item.id === id);
  if (!story) return;
  if (navigator.share) {
    try { await navigator.share({ title: story.title, text: `${story.title} — discovered on CURIOSA`, url: location.href }); return; } catch (_) {}
  }
  try { await navigator.clipboard.writeText(`${story.title} — ${location.href}`); toast("Discovery link copied."); }
  catch (_) { toast("A discovery worth sharing."); }
}

function handleAction(action) {
  switch (action) {
    case "create": case "login": state.guest = false; renderAvatars(); showScreen("profile-setup"); break;
    case "guest": state.guest = true; state.username = ""; renderInterests(); showScreen("interests"); break;
    case "welcome": showScreen("welcome"); break;
    case "back-profile": showScreen(state.guest ? "welcome" : "profile-setup"); break;
    case "save-profile": state.username = document.getElementById("username").value.trim() || "CuriousMind"; state.guest = false; persist(); renderInterests(); showScreen("interests"); break;
    case "enter": if (!state.interests.length) { toast("Choose at least one curiosity."); break; } state.onboarded = true; persist(); renderFeed(); showScreen("feed"); break;
    case "feed": if (!document.getElementById("feed-viewport").children.length) renderFeed(); showScreen("feed"); break;
    case "collection": renderCollection(); showScreen("collection"); break;
    case "open-profile": renderProfile(); showScreen("profile"); break;
    case "reset": localStorage.removeItem(STORAGE_KEY); state = loadState(); activeFilter = "All"; feedMode = "for-you"; document.getElementById("feed-viewport").innerHTML = ""; showScreen("welcome"); toast("The archive has been reset."); break;
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
