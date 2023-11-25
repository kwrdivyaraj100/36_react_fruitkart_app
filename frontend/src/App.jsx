import './App.css';
import React, { useState } from 'react';
import Products from './components/products/Products.jsx';
import Signup from './components/signup/Signup.jsx';
import Cart from './components/cart/Cart.jsx';
import Header from './components/header/Header.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
    const [cartItems, setCartItems] = useState([]);
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path = '/' element = {<Products/>}/>
            <Route exact path = '/signup' element = {<Signup/>}/>
            <Route exact path = '/cart' element = {<Cart/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;



