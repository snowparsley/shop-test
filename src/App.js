import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ShopLayout from './layout/ShopLayout';

function App() {
  return (
    <BrowserRouter>
      <ShopLayout />
    </BrowserRouter>
  );
}

export default App;
