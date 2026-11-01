<p align="center">
  <img src="src/assets/logo/logo-eduplays.svg" alt="Eduplays" width="360" />
</p>

# 🧠 Eduplays

A fast-paced browser game collection built with **React**, **Vite**, and **React Router**. These mini-games are designed for children, people with cognitive difficulties of any kind, or those with other types of difficulties.

---

## 🎮 Games

### ➕ Math
- **Operazioni Matematiche** — Solve arithmetic operations as fast as possible. Each round presents a calculation (+, −, ×, ÷) and two possible answers. Pick the correct one before time runs out!
- **Tabelline** — Practice your multiplication tables in a fast, engaging quiz format.
- **Maggiore o Minore** — Compare two numbers and pick the correct symbol: `>`, `<`, or `=`.
- **Sequenze numeriche** — Find the number that continues the sequence.
- **Doppio o metà** — Calculate the double or the half of a number.

### 🇮🇹 Italian
- **Sinonimi Italiani** — Pick the correct synonym for the given Italian word.
- **Contrari Italiani** — Pick the correct antonym for the given Italian word.
- **Anagrammi** — Rearrange the shuffled letters to rebuild the hidden word, with an optional hint based on its synonym.
- **Lettera mancante** — Complete a word by choosing the missing letter.
- **Sillabe** — Count the syllables in a word.
- **Tempi verbali** — Complete sentences with the correct verb tense: present, past, or future.
- **Il suono H** — Choose between forms with H (ho, hai, ha, hanno) and without H (o, ai, a, anno).
- **Le doppie** — Pick the word spelled with the correct double consonant.
- **Il suono GL** — Choose the word spelled with GLI.

### 💬 English
- **Animali in inglese** — Look at the animal and choose its English name.
- **Colori in inglese** — Match each color with its English name.
- **Numeri in inglese** — Learn the numbers from 1 to 12 in English.
- **Oggetti di scuola** — Discover the English names of common school objects.

### 🌍 Geography
- **Indovina le Bandiere** — A country flag appears on screen. Pick the matching country name before time runs out.
- **Capitali del Mondo** — Guess the correct capital city for the country shown.
- **Memory Bandiere** — A grid of face-down flag cards. Flip two at a time — find all matching pairs to win!
- **Capoluoghi d'Italia** — Match each Italian region with its capital.
- **Regioni dal capoluogo** — Find the Italian region that belongs to a capital city.
- **Aree d'Italia** — Identify whether each Italian region is in the North, Centre, South, or Islands.

### 🎨 Colors
- **Indovina il Colore** — A color name appears on screen. Two colored buttons are shown. Click the one that matches the displayed color name. Quick reflexes and color recognition are key.
- **Memory Colori** — A grid of face-down color cards. Flip two at a time — find all matching pairs to win!
- **Mescola i colori** — Discover the color that comes from mixing two colors.

### 🧩 Logic
- **Trova l'intruso** — Pick the item that does not belong to the group.
- **Sequenze di forme** — Find the shape that continues the visual pattern.
- **Memory animali** — Find all eight pairs of animal cards.

The collection now includes **30 mini-games**. Every quiz game starts in **Senza tempo** (calm mode) and offers an optional 30-second challenge. Difficulty appears where it changes the content, with 3 to 5 levels. Memory games are untimed.

### 📚 Didattica

The `/didattica` page hosts **12 free downloadable lessons**. Every lesson includes a **2-page A4 worksheet** with the theory explained in simple words, 8 exercises, a fun final challenge and the solutions at the bottom, plus a **7-slide 16:9 presentation** for the classroom. Topics cover Italian, maths and colours.

### Designed to be welcoming

- **Calm by default** — no countdown unless the player chooses one.
- **Big, clear controls** — generous touch targets and a high-contrast comic style.
- **Immediate feedback** — right and wrong answers are explained with icons and text.
- **Records and stars** — progress is saved locally, with a star rating and a "new record" message.
- **Sound under control** — one button mutes every effect and remembers the choice.
- **No account required** — everything runs in the browser.

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
│   ├── MathSequences.jsx
│   ├── MathDoubleHalf.jsx
│   ├── Synonym.jsx
│   ├── Antonym.jsx
│   ├── Anagram.jsx
│   ├── ItalianMissingLetter.jsx
│   ├── ItalianSyllables.jsx
│   ├── Flag.jsx
│   ├── CapitalWorld.jsx
│   ├── ItalianRegions.jsx
│   ├── Color.jsx
│   ├── ColorMixing.jsx
│   ├── MemoryColor.jsx
│   ├── MemoryFlag.jsx
│   ├── LogicOddOneOut.jsx
│   ├── LogicPatterns.jsx
│   ├── MemoryAnimals.jsx
│   ├── Help.jsx                # Help & rules page
│   ├── Didattica.jsx           # Downloadable teaching materials
│   └── NotFound.jsx            # 404 page
├── components/
│   ├── AnswerButton.jsx         # Shared answer button
│   ├── CardGame.jsx             # Reusable game card for Home
│   ├── CardMemoryGame.jsx       # Single card for Memory games
│   ├── ChoiceQuiz.jsx           # Shared multi-choice quiz engine
│   ├── Difficulty.jsx           # Difficulty selector
│   ├── FlagQuiz.jsx             # Shared flag/capital quiz
│   ├── Footer.jsx               # Site footer
│   ├── GameArt.jsx              # Lightweight card illustrations
│   ├── GameScreen.jsx           # Shared shell for quiz-style games
│   ├── Header.jsx               # Site header with navigation and sound toggle
│   ├── MathQuiz.jsx             # Shared math quiz logic
│   ├── MemoryGameEngine.jsx     # Shared shell for Memory games
│   ├── NotificationContext.jsx  # Snackbar notifications
│   ├── Score.jsx                # End-of-game score screen
│   ├── SoundProvider.jsx        # Sound preference provider
│   ├── StartComponent.jsx       # Reusable start screen (timer/difficulty)
│   ├── Timer.jsx                # Countdown timer
│   └── WordQuiz.jsx             # Shared synonym/antonym quiz
├── context/
│   └── soundContext.js          # Sound context
├── data/
│   ├── games.js                 # Single catalog of games, rules and metadata
│   └── didattica.js             # Catalog of downloadable lessons and PDFs
├── hooks/
│   ├── useGameEngine.js         # Shared state for quiz-style games
│   ├── useSound.js              # Sound effects (Web Audio API)
│   ├── useSoundSettings.js      # Read/write the sound preference
│   └── usePreloadImages.js
├── utils/
│   ├── answerState.js           # Correct/wrong visual state helper
│   ├── formatCount.js           # Italian singular/plural helper
│   ├── memoryDeck.js            # Deck builder for Memory games
│   ├── storage.js               # Local records and storage helpers
│   └── tones.js                 # Shared pastel board colors
├── assets/
│   ├── flags/country-flag.json
│   ├── words_it.json
│   ├── italianPracticeWords.js  # Words and syllable splits
│   ├── italianRegions.js        # Italian regions and capitals
│   ├── colorMixes.js            # Color-mixing recipes
│   ├── oddOneOut.js             # Odd-one-out groups
│   ├── animalMemory.js          # Memory animal cards
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
│   ├── games-extra.css
│   ├── score.css
│   ├── footer.css
│   ├── anagram.css
│   ├── help.css
│   ├── didattica.css
│   └── responsive.css
└── index.css                    # Imports everything from ./styles

public/
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── downloads/didattica/         # 24 PDF lesson sheets and slide decks
└── sounds/                      # Sound effects
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