# CURIOSA — Feed your curiosity

A polished, mobile-first, interactive discovery-app prototype. It works as a plain static website: there is no build step, framework requirement, backend, or real sign-in.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and this `README.md` to the repository root.
3. Add your artwork files `image1.png` through `image18.png` to the same repository root.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose the `main` branch and the `/ (root)` folder, then select **Save**.
7. Open the published GitHub Pages address after GitHub finishes deployment.

Images are optional: the entire prototype remains functional without them and uses deliberately muted placeholder backgrounds. File names are case-sensitive.

## Image guide

| Filename | Where it appears | Recommended subject |
| --- | --- | --- |
| `image1.png` | Welcome screen background | Vertical classical statue, antique library, or a woman reading in dark-academia style; approximately 1200 × 1800 px |
| `image2.png` | Avatar 1 and default profile portrait | Young male classical portrait |
| `image3.png` | Avatar 2 | Young female classical portrait |
| `image4.png` | Avatar 3 | Antique marble bust or sculpture portrait |
| `image5.png` | Avatar 4 | Historical philosopher or writer |
| `image6.png` | Avatar 5 | Young woman in historical clothing |
| `image7.png` | Avatar 6 | Young man in dark-academia clothing |
| `image8.png` | Avatar 7 | Archival scholar or historian |
| `image9.png` | Avatar 8 | Romantic classical female portrait |
| `image10.png` | Avatar 9 | Elegant museum curator, reader, or artist |
| `image11.png` | Art category and art stories | Classical painting; Cabanel's Fallen Angel or an atmospheric floral still life |
| `image12.png` | History category and history stories | Colorful ancient statue, Roman architecture, or archaeological scene |
| `image13.png` | Mythology category and mythology stories | Medusa painting or another dramatic Greek mythological artwork |
| `image14.png` | Philosophy category and philosophical stories | Antique philosopher bust, old manuscript, or classical ship |
| `image15.png` | Literature category and literary stories | Antique books, historical library, or literary heroine reading |
| `image16.png` | Psychology category and psychology stories | Expressive classical portrait or atmospheric human study |
| `image17.png` | Science category and science stories | Vintage astronomy illustration, star chart, or botanical engraving |
| `image18.png` | Culture category and cultural stories | Old museum interior, historic reading room, or candlelit library |

Portrait images work best around 600 × 800 px. Category/story images work best around 1200 × 1600 px because the same artwork also fills vertical feed cards.

## What works

- Demo account creation with a custom name and portrait.
- Guest mode with a registration prompt when attempting to save.
- Eight selectable interests and interest-aware story ordering.
- Twelve complete editorial discoveries across eight categories.
- Vertical snap-scrolling discovery feed and keyboard arrow navigation.
- Expanded articles, related discoveries, and sharing.
- Personal saved collection, category filters, and empty states.
- Profile archetype, discovery counters, selected interests, and recent saves.
- Device-local persistence through `localStorage`.
- Desktop presentation and full-screen mobile layout.
- A profile reset button for presenting the onboarding flow again.

This is a concept prototype: account creation is simulated and no personal information leaves the browser.
