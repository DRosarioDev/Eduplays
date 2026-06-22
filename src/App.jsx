import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NotificationProvider } from './components/NotificationContext';
import Color from './pages/Color';
import Maths from './pages/Maths';
import Help from './pages/Help';
import Header from './components/Header';
import Footer from './components/Footer';
import MemoryGame from './pages/MemoryGame';
import Multiplication from './pages/Multiplication';

function App() {

  return (
    <BrowserRouter>
      <NotificationProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color" element={<Color />} />
            <Route path="/math" element={<Maths />} />
            <Route path="/math/multiplication" element={<Multiplication />} />
            <Route path="/aiuto" element={<Help />} />
            <Route path="/memory" element={<MemoryGame />} />
          </Routes>
          <Footer />
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
