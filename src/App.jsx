import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import WebComponent from './components/WebComponent';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<WebComponent />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
