import React, { createContext } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { MainBody } from './components/MainBody/MainBody';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
