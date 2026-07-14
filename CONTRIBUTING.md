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

### 1. Fork & Clone

```bash
git clone https://github.com/DRosarioDev/Eduplays.git
cd Eduplays
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

Use a descriptive name for your branch:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-bug
```

Branch naming conventions:
- `feature/` — new functionality
- `fix/` — bug fixes
- `refactor/` — code improvements without behavior change
- `docs/` — documentation only

### 4. Make Your Changes

- Keep changes focused. One feature or fix per PR.
- Make sure the app builds and lints without errors:

```bash
npm run build
npm run preview
npm run lint
```

### 5. Commit

Write clear, concise commit messages:

```bash
git commit -m "Add: memory game with card flip logic"
git commit -m "Fix: timer not resetting on Play Again"
git commit -m "Refactor: extract game logic into custom hook"
```

### 6. Push & Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request against the `main` branch on GitHub. Include:
- A short description of what you changed and why
- Screenshots or a screen recording if the change affects the UI

---

## 💻 Development Setup

### Prerequisites

- **Node.js** `^20.19.0 || >=22.12.0`
- **npm** ≥ 10

### Available Scripts

| Command           | Description                            |
|-------------------|-----------------------------------------|
| `npm run dev`     | Start local dev server (port 5173)      |
| `npm run build`   | Production build                        |
| `npm run preview` | Preview the production build            |
| `npm run lint`    | Run ESLint                              |
| `npm run deploy`  | Build and deploy to Cloudflare Pages via Wrangler |

---

## 📁 Project Structure

```
src/
├── pages/                     # One page per game, plus Home/Help/404
│   ├── Home.jsx
│   ├── MathOperations.jsx
│   ├── Multiplication.jsx
│   ├── GreaterOrLesser.jsx
│   ├── Synonym.jsx
│   ├── Antonym.jsx
│   ├── Anagram.jsx
│   ├── Flag.jsx
│   ├── CapitalWorld.jsx
│   ├── MemoryColor.jsx
│   ├── MemoryFlag.jsx
│   ├── Help.jsx
│   └── NotFound.jsx
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── CardGame.jsx           # Reusable game card for Home
│   ├── CardMemoryGame.jsx     # Single card for Memory games
│   ├── GameScreen.jsx         # Shared shell for "quiz-style" games
│   ├── MemoryGameEngine.jsx   # Shared shell for Memory games
│   ├── StartComponent.jsx     # Start screen (timer/difficulty toggle)
│   ├── Difficulty.jsx         # 5-level difficulty selector
│   ├── Timer.jsx
│   ├── Score.jsx
│   └── NotificationContext.jsx
├── hooks/
│   ├── useGameEngine.js
│   ├── useSound.js
│   └── usePreloadImages.js
├── utils/
│   └── memoryDeck.js
├── assets/
│   ├── flags/country-flag.json
│   ├── words_it.json
│   ├── memoryColor.js
│   └── thumbnails/
├── styles/                    # Global CSS, split by section — see index.css
└── index.css

public/
└── sounds/                    # .mp3 sound effects
```

---

## 🎮 Adding a New Game

Eduplays has **two reusable architectures** — pick whichever matches the game you're adding, and you'll rarely need to touch shared infrastructure files.

### A) Quiz-style game (question + buttons + timer + score)

Used by Operazioni Matematiche, Tabelline, Maggiore o Minore, Sinonimi, Contrari, Anagrammi, Bandiere, Capitali.

1. Create `src/pages/YourGame.jsx`.
2. Use the `useGameEngine` hook for state (points, start/first, timer toggle, difficulty) and wrap your UI in `<GameScreen>`.
3. You only need to implement:
   - a `newRound(diff)` function that picks the next question,
   - the JSX for the question and answer buttons.
4. Reference `Multiplication.jsx` or `GreaterOrLesser.jsx` as a minimal example.

### B) Memory-style game (flip cards, find pairs)

Used by Memory Colori and Memory Bandiere.

1. Create `src/pages/YourMemoryGame.jsx`.
2. Build an `items` array (id, type, value) and pass it to `<MemoryGameEngine>`.
3. Customize the card face and background via the `renderFace` / `bgColor` render props — no need to modify `MemoryGameEngine.jsx` or `CardMemoryGame.jsx`.
4. Reference `MemoryColor.jsx` or `MemoryFlag.jsx` as a minimal example.

### Wiring it up

1. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="/category/your-game" element={<YourGame />} />
   ```
2. Add a `<CardGame>` entry for it in `src/pages/Home.jsx`.
3. Add a matching rule card in `src/pages/Help.jsx`.
4. If your game uses a JSON dataset, put it in `src/data/` or `src/assets/` following the existing `id` / `difficulty` (0–2) field conventions.

---

## 📋 Contribution Guidelines

- **Style**: follow the existing code style; ESLint is configured and enforced.
- **Components**: keep components small and focused on a single responsibility.
- **No new dependencies** without discussing it first in an issue. The project intentionally stays lightweight.
- **Accessibility**: new UI elements should be keyboard-navigable and have appropriate labels.
- **Responsive**: test your changes on mobile viewport sizes too. The CSS already has breakpoints at 768px and 480px — check `src/styles/responsive.css`.
- **CSS**: add new rules to the relevant file in `src/styles/` (not directly to `index.css`, which only aggregates imports). Use the existing CSS custom properties (`--primary-color`, `--comic-border-*`, etc.) instead of hardcoding values where possible.

---

## 💡 Ideas & Roadmap

Looking for something to work on? Here are some open ideas:

| Area | Idea |
|------|------|
| 🆕 New game | Geometry and shapes |
| 🆕 New game | Additional Italian vocabulary games |
| 🆕 New game | Emoji meaning quiz |
| 🆕 New game | Sequence memory |
| 🌍 Feature | Internationalization (i18n) — Italian & English |
| ♿ Feature | Adaptive difficulty (auto-adjust based on performance) |
| 🎨 UI | Animated transitions between game states |

Already shipped (no longer needed, listed here just so it's clear they're done): flag guessing game, greater/less-than game, word scramble/anagram game, difficulty levels, optional no-timer toggle, and audio feedback on answers.

Feel free to open an issue to discuss any of these (or your own idea) before starting work on it.

---

## License

By contributing, you agree that your contributions will be licensed under the [GNU Affero General Public License v3.0 (AGPL v3.0)](https://github.com/DRosarioDev/Eduplays/blob/main/LICENSE).

---

## Final Notes

Remember that maintaining this project requires significant effort. The maintainer appreciates your contributions but must prioritize long-term project stability. Not all contributions will be accepted.

Thank you for helping!