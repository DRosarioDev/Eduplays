# 🤝 Contributing to Eduplays

First of all, thanks for taking the time to contribute! Every bit of help is appreciated, whether it's a bug fix, a new game, or a UI improvement.

---

## 📜 Code of Conduct

Be respectful and constructive. This is an open and welcoming project — feedback should be kind, and disagreements should be resolved through discussion.

---

## 📝 Contributor License Agreement (CLA)

Before your Pull Request can be merged, you must sign the **Contributor License Agreement**.

When you open a PR, the CLA bot will post a comment with a link to sign. Simply click it, read the agreement, and accept. You only need to do this **once** for the entire project.

> ⚠️ PRs from contributors who have not signed the CLA will not be reviewed or merged until the agreement is accepted.

---

## 🛠️ How to Contribute

### 1. Fork & clone

Fork the repository on GitHub, then clone your fork:

```bash
git clone https://github.com/<your-username>/Eduplays.git
cd Eduplays
git remote add upstream https://github.com/DRosarioDev/Eduplays.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a branch

Use a descriptive name for your branch:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-bug
```

Branch naming conventions:

- `feature/` — new functionality
- `fix/` — bug fixes
- `refactor/` — code improvements without behaviour change
- `docs/` — documentation only

### 4. Make your changes

- Keep changes focused. One feature or fix per PR.
- Keep the user interface in **Italian**. Code comments and documentation can be in English or Italian, but new user-facing strings and game content should match the existing Italian style.
- Make sure the app builds without errors:

```bash
npm run build
npm run preview
```

### 5. Commit

Write clear, concise commit messages:

```bash
git commit -m "Add: memory game with card flip logic"
git commit -m "Fix: timer not resetting on Play Again"
git commit -m "Refactor: extract game logic into custom hook"
```

### 6. Push & open a Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request against the `main` branch on GitHub. Include:

- a short description of what you changed and why;
- screenshots or a screen recording if the change affects the UI;
- the commands you ran to verify the change.

---

## 💻 Development Setup

### Prerequisites

- **Node.js** `^20.19.0 || >=22.12.0`
- **npm** ≥ 10

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server on port 5173. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run deploy` | Build and deploy to Cloudflare with Wrangler. |
| `node scripts/validate-question-banks.mjs` | Validate question-bank coverage per difficulty level. |

The validation script exits with a non-zero status when an included bank has fewer than 100 items at any level. Entries marked `ESCLUSO` are intentionally excluded from that rule.

---

## 🏗️ Architecture at a Glance

Eduplays is a fully client-side React SPA. There is no backend, database, or authentication; records and the sound preference live in `localStorage`.

| Area | Responsibility |
|---|---|
| `src/data/games.js` | **Single source of truth** for titles, descriptions, rules, routes, categories, record keys, and difficulty limits. Home, Help, the start screen, score screen, and document titles read from here. |
| `src/pages/` | One page per game. Most pages are thin configurations; a few build a custom round UI. |
| `src/components/` | Shared engines and UI. The main engines are `ChoiceQuiz`, `MathQuiz`, `WordQuiz`, `FlagQuiz`, and `MemoryGameEngine`, all wrapped by `GameScreen`. |
| `src/assets/` | Game content: word lists, vocabulary, flags, maths sequences, memory items, and colour data. |
| `src/hooks/` | Shared game state (`useGameEngine`), sound, sound settings, and image preloading. |
| `src/utils/` | Storage, weighted question decks, memory decks, answer state, labels, and board tones. |
| `src/styles/` | Global CSS split by section. `src/index.css` only imports these files. |
| `public/` | Static assets: sounds, favicon, robots/sitemap, and downloadable teaching PDFs. |

### Key conventions

- **A quiz round is normalised** as `{ answer, options, key }`. Extra fields such as `prompt`, `tone`, `mode`, or `word` are free-form and consumed by the page renderers.
- **Question banks have three levels**: index `0` = Base, `1` = Facile, `2` = Medio. `createWeightedDeck` mixes them according to the selected difficulty.
- **Records are local**: `readRecord` / `saveIfBetter` in `src/utils/storage.js`. `recordType: "points"` keeps the highest score; `recordType: "moves"` keeps the lowest number of moves.
- **No global state library**: providers are limited to sound and snackbar notifications.

---

## 🎮 Adding a New Game

The catalog is the starting point: a game that is not registered in `src/data/games.js` will not appear on the Home or Help pages and the shared engines will not find its metadata.

### 1. Register the game in the catalog

Add an object to `GAMES` in `src/data/games.js`:

```js
{
  id: "logic-new-game",
  title: "Nuovo gioco",
  description: "Short description shown on the game card.",
  instructions: "What the player sees on the start screen.",
  rules: "Full rule text shown on the Help page.",
  category: "logic",
  link: "/logic/new-game",
  emoji: "🧠",
  icon: "fa-solid fa-brain",
  kind: "quiz",
  timer: true,
  maxDifficulty: 2,
  storageKey: "eduplays:record:logic-new-game",
  recordType: "points",
  art: "shapes",
}
```

Notes:

- `category` must be one of the ids in `CATEGORIES`.
- `link` must match the route in `src/App.jsx`.
- `maxDifficulty: 2` shows 3 levels (Base, Facile, Medio); `4` shows 5 levels; `null` hides the difficulty selector.
- `timer: true` enables the optional 30-second challenge. Memory games use `timer: false`.
- `storageKey` must be unique. If two games share it, they share the same record.
- `recordType` is `"points"` for quizzes and `"moves"` for memory games.
- `art` selects the illustration in `GameArt.jsx`. Add a new `case` there if you introduce a new art key.

### 2. Choose the right architecture

#### A) Multiple-choice game — `ChoiceQuiz` (preferred)

Most games use this engine: the page only builds a round and renders the prompt and options.

```jsx
import ChoiceQuiz from "../components/ChoiceQuiz";

export default function NewGame() {
  return (
    <ChoiceQuiz
      gameId="logic-new-game"
      buildRound={(difficulty) => buildRound(difficulty)}
      renderPrompt={(round) => <p>{round.prompt}</p>}
      renderOption={(option) => <span>{option}</span>}
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
    />
  );
}
```

`buildRound(difficulty)` must return `{ answer, options, key }`. If your options are objects, provide `getOptionValue` and `getOptionKey` so the engine can compare and animate them correctly.

Good reference pages: `MathSequences.jsx`, `ItalianSyllables.jsx`, `EnglishQuiz.jsx`, `LogicPatterns.jsx`.

#### B) Specialised shared engine

Use an existing engine when the game fits its shape:

- `MathQuiz` — random arithmetic drills (`MathOperations.jsx`, `Multiplication.jsx`);
- `WordQuiz` — synonym/antonym pairs (`Synonym.jsx`, `Antonym.jsx`);
- `FlagQuiz` — flags, country names, and capitals (`Flag.jsx`, `CapitalWorld.jsx`).

#### C) Custom game — `useGameEngine` + `GameScreen`

When the interaction is not a simple answer grid, use the shared hook and shell directly. Good references are `Color.jsx`, `GreaterOrLesser.jsx`, and `Anagram.jsx`.

#### D) Memory game — `MemoryGameEngine`

Create a page that passes a list of unique items to the engine. The engine duplicates and shuffles them into pairs.

```jsx
import MemoryGameEngine from "../components/MemoryGameEngine";
import { animalMemoryItems } from "../assets/animalMemory";

export default function MemoryNewGame() {
  return (
    <MemoryGameEngine
      gameId="memory-new-game"
      items={animalMemoryItems}
      pairCount={8}
    />
  );
}
```

Customise the card face with `renderCard` and the background with `cardBgColor`. Use `kind: "memory"`, `timer: false`, and `recordType: "moves"` in the catalog entry.

### 3. Add the route

Import the page in `src/App.jsx` and add a route that matches the catalog `link`:

```jsx
<Route path="/logic/new-game" element={<NewGame />} />
```

### 4. Add the question bank

Put content in `src/assets/` and build the three-level array expected by `createWeightedDeck`:

```js
export const newGameBanks = [
  [/* Base */],
  [/* Easy */],
  [/* Medium */],
];
```

Use at least 100 items per level where possible. Every item should include a stable `key` so the deck can avoid immediate repeats. Run the validation script after adding or changing a bank.

### 5. Update the artwork (if needed)

`GameArt.jsx` uses `game.art`. Reuse an existing illustration when it fits; otherwise add a new case and matching CSS in `src/styles/games-extra.css`.

### 6. Verify the wiring

- [ ] `id` is unique and matches the `gameId` passed to the engine.
- [ ] `link` matches the route in `App.jsx`.
- [ ] `storageKey` is unique.
- [ ] `kind`, `timer`, `maxDifficulty`, and `recordType` match the game type.
- [ ] The game appears on Home and Help without editing those pages (they read `GAMES`).
- [ ] The README game list and count are updated if the public catalog changed.
- [ ] `npm run build`, and `node scripts/validate-question-banks.mjs` pass.

---

## ❓ Adding Questions to an Existing Game

| Game | File |
|---|---|
| Sinonimi / Contrari | `src/assets/words_it.json` (`difficulty` field, 0–2) |
| Anagrammi | `src/assets/anagramWords.js` |
| Sillabe / Lettera mancante | `src/assets/italianPracticeWords.js` |
| Tempi verbali | `src/assets/italianVerbTenses.js` |
| Il suono H | `src/assets/italianHSound.js` |
| Le doppie | `src/assets/italianDoubleConsonants.js` |
| Il suono GL | `src/assets/italianGlSound.js` |
| Inglese | `src/assets/englishVocabulary.js` |
| Regioni e capoluoghi | `src/assets/italianRegions.js` |
| Mescola i colori | `src/assets/colorMixes.js` |
| Indovina i colori | `src/assets/colors.js` |
| Trova l'intruso | `src/assets/oddOneOut.js` |
| Sequenze di forme | `src/assets/logicPatterns.js` |
| Sequenze numeriche | `src/assets/mathSequences.js` |
| Doppio o metà | `src/assets/mathDoubleHalf.js` |
| Bandiere / Capitali | `src/assets/flags/country-flag.json` |
| Memory | `src/assets/animalMemory.js`, `src/assets/memoryColor.js`, `src/assets/flags/country-flag.json` |

Rule of thumb: banks consumed by `createWeightedDeck` must be **an array of three arrays** (Base, Facile, Medio). Keep the existing shape of each item and its stable `key`.

---

## 📚 Adding a Teaching Lesson

The `/didattica` page is generated from `src/data/didattica.js`:

1. Add a lesson object with `id`, `title`, `category`, `emoji`, `description`, `topics`, optional `game`, and a `files` array.
2. Put the PDFs in `public/downloads/didattica/` using the existing `NN-slug-scheda.pdf` and `NN-slug-slides.pdf` naming pattern.
3. Use the correct `href` paths (`/downloads/didattica/...`) and update the displayed sizes.
4. Check the page on desktop and mobile; the lesson count is derived automatically from the array.

---

## 📋 Contribution Guidelines

- **Style** — follow the existing code style.
- **Components** — keep components small and focused on a single responsibility.
- **No new dependencies** without discussing it first in an issue. The project intentionally stays lightweight.
- **Accessibility** — new UI elements should be keyboard-navigable and have appropriate labels. Keep existing `aria-live`, `aria-label`, `role="timer"`, `role="progressbar"`, and focus management intact.
- **Responsive** — test your changes on mobile viewport sizes too. The CSS already has breakpoints at 900px, 700px, 620px, 480px, and 380px; check `src/styles/responsive.css`.
- **CSS** — add new rules to the relevant file in `src/styles/`, not directly to `index.css` (which only aggregates imports). Use the existing custom properties (`--primary-color`, `--comic-border-*`, etc.) instead of hardcoding values where possible.
- **Content** — keep Italian spelling, accents, and typography consistent with the existing data. Avoid duplicate or near-duplicate questions inside the same bank.
- **Tests** — there is no automated test suite yet. Manually test a full round in both timer modes, the score screen, and a mobile viewport.

---

## 💡 Ideas & Roadmap

Looking for something to work on? Here are some open ideas:

| Area | Idea |
|---|---|
| 🆕 New game | Geometry and shapes |
| 🆕 New game | Fractions |
| 🆕 New game | Punctuation |
| 🆕 New game | Singular/plural, essere/avere |
| 🌍 Feature | Internationalization (i18n) — Italian and English |
| ♿ Feature | Adaptive difficulty based on performance |
| ♿ Feature | High-contrast mode and larger text |
| 🎨 UI | Animated transitions between game states |
| 🧪 Testing | Unit tests for question decks, storage, and game state |

Already shipped (listed here only to avoid duplicate suggestions): 30 mini-games across six categories, optional no-timer mode, difficulty levels, audio feedback, local records and stars, three memory games, four English games, Italian region games, colour mixing, logic patterns, and the downloadable teaching materials.

Feel free to open an issue to discuss any of these (or your own idea) before starting work on it.

---

## License

By contributing, you agree that your contributions will be licensed under the [GNU Affero General Public License v3.0 (AGPL v3.0)](./LICENSE).

---

## Final Notes

Remember that maintaining this project requires significant effort. The maintainer appreciates your contributions but must prioritize long-term project stability. Not all contributions will be accepted.

Thank you for helping!
