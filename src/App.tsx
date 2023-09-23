import React, { createContext } from 'react';
import './App.css';
import { Footer } from './features/Footer';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './features/Cart';
import { Home } from './features/Home';
import { OrderOnline } from './features/OrderOnline';

function App() {
  return (
    <div className="App">
      <div className='header-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order-food-online' element={<OrderOnline />} />
          <Route path='/checkout' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
