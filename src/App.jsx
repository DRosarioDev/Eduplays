import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { NotificationProvider } from "./components/NotificationContext";
import { SoundProvider } from "./components/SoundProvider";
import Color from "./pages/Color";
import MathOperations from "./pages/MathOperations";
import Help from "./pages/Help";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Multiplication from "./pages/Multiplication";
import Flag from "./pages/Flag";
import MemoryColor from "./pages/MemoryColor";
import MemoryFlag from "./pages/MemoryFlag";
import GreaterOrLesser from "./pages/GreaterOrLesser";
import CapitalWorld from "./pages/CapitalWorld";
import Synonym from "./pages/Synonym";
import Antonym from "./pages/Antonym";
import Anagram from "./pages/Anagram";
import MathSequences from "./pages/MathSequences";
import MathDoubleHalf from "./pages/MathDoubleHalf";
import ItalianMissingLetter from "./pages/ItalianMissingLetter";
import ItalianSyllables from "./pages/ItalianSyllables";
import ItalianVerbTenses from "./pages/ItalianVerbTenses";
import ItalianHSound from "./pages/ItalianHSound";
import ItalianDoubleConsonants from "./pages/ItalianDoubleConsonants";
import ItalianGlSound from "./pages/ItalianGlSound";
import EnglishQuiz from "./pages/EnglishQuiz";
import {
  RegionAreas,
  RegionCapitals,
  RegionFromCapital,
} from "./pages/ItalianRegions";
import ColorMixing from "./pages/ColorMixing";
import LogicOddOneOut from "./pages/LogicOddOneOut";
import LogicPatterns from "./pages/LogicPatterns";
import MemoryAnimals from "./pages/MemoryAnimals";
import Didattica from "./pages/Didattica";
import NotFound from "./pages/NotFound";
import { GAMES } from "./data/games";

const PAGE_TITLES = {
  "/": `Eduplays — ${GAMES.length} mini-giochi educativi gratuiti`,
  "/aiuto": "Aiuto e regole · Eduplays",
  "/didattica": "Materiali didattici da scaricare · Eduplays",
};

function AppShell() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    const game = GAMES.find((item) => item.link === location.pathname);
    document.title =
      (game && `${game.title} · Eduplays`) ||
      PAGE_TITLES[location.pathname] ||
      "Pagina non trovata · Eduplays";

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Vai ai contenuti
      </a>
      <Header />
      <main id="main" className="site-main" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
          <Route path="/math/operations" element={<MathOperations />} />
          <Route
            path="/math/greater-or-lesser"
            element={<GreaterOrLesser />}
          />
          <Route path="/math/multiplication" element={<Multiplication />} />
          <Route path="/memory/color" element={<MemoryColor />} />
          <Route path="/memory/flag" element={<MemoryFlag />} />
          <Route
            path="/geography/world-capital"
            element={<CapitalWorld />}
          />
          <Route path="/geography/flag" element={<Flag />} />
          <Route path="/italian/synonym" element={<Synonym />} />
          <Route path="/italian/antonym" element={<Antonym />} />
          <Route path="/italian/anagram" element={<Anagram />} />
          <Route path="/math/sequences" element={<MathSequences />} />
          <Route path="/math/double-half" element={<MathDoubleHalf />} />
          <Route
            path="/italian/missing-letter"
            element={<ItalianMissingLetter />}
          />
          <Route path="/italian/syllables" element={<ItalianSyllables />} />
          <Route
            path="/italian/verb-tenses"
            element={<ItalianVerbTenses />}
          />
          <Route path="/italian/h-sound" element={<ItalianHSound />} />
          <Route
            path="/italian/double-consonants"
            element={<ItalianDoubleConsonants />}
          />
          <Route path="/italian/gl-sound" element={<ItalianGlSound />} />
          <Route
            path="/english/animals"
            element={<EnglishQuiz mode="animals" />}
          />
          <Route
            path="/english/colors"
            element={<EnglishQuiz mode="colors" />}
          />
          <Route
            path="/english/numbers"
            element={<EnglishQuiz mode="numbers" />}
          />
          <Route
            path="/english/school"
            element={<EnglishQuiz mode="school" />}
          />
          <Route
            path="/geography/regions/capitals"
            element={<RegionCapitals />}
          />
          <Route
            path="/geography/regions/from-capital"
            element={<RegionFromCapital />}
          />
          <Route
            path="/geography/regions/areas"
            element={<RegionAreas />}
          />
          <Route
            path="/geography/regions"
            element={
              <Navigate to="/geography/regions/capitals" replace />
            }
          />
          <Route path="/colors/mixing" element={<ColorMixing />} />
          <Route
            path="/logic/odd-one-out"
            element={<LogicOddOneOut />}
          />
          <Route path="/logic/patterns" element={<LogicPatterns />} />
          <Route path="/memory/animals" element={<MemoryAnimals />} />
          <Route path="/didattica" element={<Didattica />} />
          <Route path="/aiuto" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SoundProvider>
        <NotificationProvider>
          <AppShell />
        </NotificationProvider>
      </SoundProvider>
    </BrowserRouter>
  );
}

export default App;
