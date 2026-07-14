# 🧠 Eduplays

A fast-paced browser game collection built with **React**, **Vite**, and **React Router**. These mini-games are designed for children, people with cognitive difficulties of any kind, or those with other types of difficulties.

---

## 🎮 Games

### ➕ Math
- **Operazioni Matematiche** — Solve arithmetic operations as fast as possible. Each round presents a calculation (+, −, ×, ÷) and two possible answers. Pick the correct one before time runs out!
- **Tabelline** — Practice your multiplication tables in a fast, engaging quiz format.
- **Maggiore o Minore** — Compare two numbers and pick the correct symbol: `>`, `<`, or `=`.

### 🇮🇹 Italian
- **Sinonimi Italiani** — Pick the correct synonym for the given Italian word.
- **Contrari Italiani** — Pick the correct antonym for the given Italian word.
- **Anagrammi** — Rearrange the shuffled letters to rebuild the hidden word, with an optional hint based on its synonym.

### 🌍 Geography
- **Indovina le Bandiere** — A country flag appears on screen. Pick the matching country name before time runs out.
- **Capitali del Mondo** — Guess the correct capital city for the country shown.
- **Memory Bandiere** — A grid of face-down flag cards. Flip two at a time — find all matching pairs to win!

### 🎨 Colors
- **Indovina il Colore** — A color name appears on screen. Two colored buttons are shown. Click the one that matches the displayed color name. Quick reflexes and color recognition are key.
- **Memory Colori** — A grid of face-down color cards. Flip two at a time — find all matching pairs to win!

Every game supports an optional countdown timer, and most support a 5-level difficulty selector.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.19.0
- **npm** ≥ 10

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DRosarioDev/eduplays.git
   cd Eduplays
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Built With

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

---

## 📁 Project Structure

```
src/
├── pages/                     # One page per game, plus Home/Help/404
│   ├── Home.jsx               # Game selection menu
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
│   ├── Help.jsx                # Help & rules page
│   └── NotFound.jsx            # 404 page
├── components/
│   ├── Header.jsx              # Site header with navigation
│   ├── Footer.jsx               # Site footer
│   ├── CardGame.jsx             # Reusable game card for Home
│   ├── CardMemoryGame.jsx       # Single card for Memory games
│   ├── GameScreen.jsx           # Shared shell for quiz-style games
│   ├── MemoryGameEngine.jsx     # Shared shell for Memory games
│   ├── StartComponent.jsx       # Reusable start screen (timer/difficulty)
│   ├── Difficulty.jsx           # 5-level difficulty selector
│   ├── Timer.jsx                # Countdown timer
│   ├── Score.jsx                # End-of-game score screen
│   └── NotificationContext.jsx
├── hooks/
│   ├── useGameEngine.js         # Shared state for quiz-style games
│   ├── useSound.js              # Sound effects (Web Audio API + mp3)
│   └── usePreloadImages.js
├── utils/
│   └── memoryDeck.js            # Deck builder for Memory games
├── assets/
│   ├── flags/country-flag.json
│   ├── words_it.json
│   ├── memoryColor.js
│   └── thumbnails/
├── styles/                      # Global CSS, split by section
│   ├── variables.css
│   ├── layout.css
│   ├── header.css
│   ├── home.css
│   ├── start-component.css
│   ├── game.css
│   ├── color-game.css
│   ├── memory-game.css
│   ├── score.css
│   ├── footer.css
│   ├── anagram.css
│   └── responsive.css
└── index.css                    # Imports everything from ./styles

public/
└── sounds/                      # .mp3 sound effects
```

---

## 🌐 Deployment


```bash
npm run deploy  
```

---

## 📜 License

Licensed under the **[GNU AGPL v3.0](./LICENSE)**. Any modified version run on a public server must make its source code available to users.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with a descriptive message:
   ```bash
   git commit -m "Add: brief description of your change"
   ```
4. **Push** the branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch

### Ideas for contributions

- 🆕 New games (e.g. geometry/shapes, more Italian vocabulary games, emoji quiz)
- ♿ High contrast mode, larger text, adaptive difficulty
- 🌍 Internationalization (i18n) support
- 🧪 Unit and integration tests
- 🎨 UI/UX enhancements and animated transitions

For more info, read [CONTRIBUTING.md](https://github.com/DRosarioDev/Eduplays/blob/main/CONTRIBUTING.md)

Please keep PRs focused and make sure the app builds without errors before submitting (`npm run build` and `npm run preview`).