import React, { useEffect, useState } from 'react';
import './Products.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Products(props) {

    const [products, setProducts] = useState({ flag: false, productList: null });

    async function getData() {
        let backend_url = 'http://localhost:3300/products';
        let response = await fetch(backend_url);
        let responseData = await response.json();
        setProducts({ flag: true, productList: responseData['productItems'] });
    }

    useEffect(() => { getData() }, []);

    function sortAlphebetAscending() {
        let productsCopy = [...products];
        let sorted = productsCopy.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1;
        });
        setProducts(sorted);
    }

    function sortAlphebetDescending() {
        let productsCopy = [...products];
        let sorted = productsCopy.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1;
        });
        setProducts(sorted);
    }

    function sortPriceAscending() {
        let productsCopy = [...products];
        setProducts(productsCopy.sort((a, b) => a.price - b.price));
    }

    function sortPriceDescending() {
        let productsCopy = [...products];
        setProducts(productsCopy.sort((a, b) => b.price - a.price));
    }


    return ((products.flag) ?
        <div className='products-container'>

            <div className='products'>
                {products.productList.map(item => {
                    return (
                        <div className='card' key={item.name}>
                            <div>
                                <img className='product-image' src={item.image} alt={item.image} />
                            </div>

                            <div>
                                <h2 className='product-name'>
                                    {item.name}
                                </h2>
                            </div>

                            <div className='product-price'>
                                Rs.{item.price}
                            </div>

                            <div>
                                <button className='product-add-button'
                                    onClick={() => props.handleAddProduct(item)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> : <div><h1>Loading..!!</h1></div>
    );
}

export default Products;