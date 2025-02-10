import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Success from './pages/Success';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='payment' element={<Payment />} />
      <Route path='success' element={<Success />} />
    </Routes>
  );
}

export default App;
