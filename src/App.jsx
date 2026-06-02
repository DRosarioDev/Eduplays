import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NotificationProvider } from './components/NotificationContext';
import Color from './pages/Color';
import Maths from './pages/Maths';

function App() {

  return (
    <BrowserRouter>
      <NotificationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color" element={<Color />} />
            <Route path="/math" element={<Maths />} />
          </Routes>
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
