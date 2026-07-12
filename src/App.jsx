import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NotificationProvider } from "./components/NotificationContext";
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
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
          <Route path="/math/operations" element={<MathOperations />} />
          <Route path="/math/greater-or-lesser" element={<GreaterOrLesser />} />
          <Route path="/math/multiplication" element={<Multiplication />} />
          <Route path="/memory/color" element={<MemoryColor />} />
          <Route path="/memory/flag" element={<MemoryFlag />} />
          <Route path="/geography/world-capital" element={<CapitalWorld />} />
          <Route path="/geography/flag" element={<Flag />} />
          <Route path="/italian/synonym" element={<Synonym />} />
          <Route path="/italian/antonym" element={<Antonym />} />
          <Route path="/italian/anagram" element={<Anagram />} />
          <Route path="/aiuto" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
