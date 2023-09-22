import React, { createContext } from 'react';
import './App.css';
import { Header } from './features/Header/Header';
import { Footer } from './features/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './features/Cart/cart';
import { MainBody } from './features/MainBody/MainBody';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainBody />} />
        <Route path='/checkout' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
