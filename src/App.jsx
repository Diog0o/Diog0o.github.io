import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';

const App = () => (
  <BrowserRouter>
    <div className='navbar'>
      <Navbar />
    </div>
  </BrowserRouter>
);

export default App;