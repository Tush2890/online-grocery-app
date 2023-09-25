import React, { createContext } from 'react';
import './App.css';
import { Footer } from './features/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './features/Home';
import { OrderOnline } from './features/OrderOnline';
import { MyProduct } from './features/Product';

function App() {
  return (
    <div className="App">
      <div className='header-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order-food-online' element={<OrderOnline />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
