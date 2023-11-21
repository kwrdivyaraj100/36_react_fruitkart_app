
import './App.css';
import Cart from './components/cart/Cart.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header.jsx';
import Signup from './components/signup/Signup.jsx';
import Products from './components/products/Products.jsx';

function App() {


  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element ={<Products/>}/>
        <Route exact path='/signup' element = {<Signup/>}/>
        <Route exact path ='/cart' element ={<Cart/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
