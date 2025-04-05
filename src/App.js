import logo from './logo.svg';
import { BrowserRouter as Router, } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ShopLayout from './layout/ShopLayout';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <ShopLayout />
    </Router>
  );
}

export default App;
