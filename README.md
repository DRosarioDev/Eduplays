# 🧠 Eduplays

A fast-paced browser game collection built with **React**, **Vite**, and **React Router**. These mini-games are designed for children, people with cognitive difficulties of any kind, or those with other types of difficulties

---

## 🎮 Games

### ➕ Math Game
Solve arithmetic operations as fast as possible. Each round presents a calculation (+, −, ×, ÷) and two possible answers. Pick the correct one before time runs out!

### 🎨 Color Game
A color name appears on screen. Two colored buttons are shown. Click the one that matches the displayed color name. Quick reflexes and color recognition are key.

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

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Game selection menu
│   ├── Maths.jsx             # Math game
│   ├── Color.jsx             # Color game
│   └── Help.jsx              # Help & rules page
├── components/
│   ├── Header.jsx            # Site header with navigation
│   ├── Footer.jsx            # Site footer
│   ├── CardGame.jsx          # Reusable game card for Home
│   ├── StartComponent.jsx    # Reusable start screen
│   ├── Timer.jsx             # Countdown timer
│   ├── Score.jsx             # End-of-game score screen
│   └── NotificationContext.jsx
└── index.css
```

---

## 🌐 Deployment

The project is configured for deployment on **Vercel**. The `vercel.json` file handles SPA routing so all paths correctly resolve to `index.html`.

Website: [Eduplays](https://eduplays.vercel.app/)

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

- 🆕 New game modes (e.g. memory, typing speed, word puzzles)
- 🌍 Internationalization (i18n) support
- ♿ Accessibility improvements
- 🧪 Unit and integration tests
- 🎨 UI/UX enhancements

For more infos, read [Contributing.md](https://github.com/DRosarioDev/Eduplays/blob/main/CONTRIBUTING.md)

Please keep PRs focused and make sure the app builds without errors before submitting (`npm run build` and `npm run preview`).
