import './App.css';
import React, { useState } from 'react';

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



