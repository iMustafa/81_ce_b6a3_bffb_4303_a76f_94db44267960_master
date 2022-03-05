import React, { useState } from 'react';
import './App.css';
import { ProductList } from "./components/product-list";
import { Cart } from "./components/cart";
import 'h8k-components';

const title = "HackerShop";

export const PRODUCTS = [
    {
        id: 1,
        heading: "Cap - $10",
        name: "Cap",
        image: `/images/items/cap.png`,
        price: 10
    },
    {
        id: 2,
        heading: "Hand Bag - $30",
        name: "HandBag",
        image: `/images/items/handbag.png`,
        price: 30
    },
    {
        id: 3,
        heading: "Shirt - $30",
        name: "Shirt",
        image: `/images/items/shirt.png`,
        price: 30
    },
    {
        id: 4,
        heading: "Shoes - $50",
        name: "Shoe",
        image: `/images/items/shoe.png`,
        price: 50
    },
    {
        id: 5,
        heading: "Pant - $40",
        name: "Pant",
        image: `/images/items/pant.png`,
        price: 40
    },
    {
        id: 6,
        heading: "Slipper - $20",
        name: "Slipper",
        image: `/images/items/slipper.png`,
        price: 20
    }
];

function App() {
    const [cartState, setCartState] = useState({
        items: [],
        subTotal: 0,
        totalPrice: 0,
        discount: 0,
        selectedCoupon: '0'
    });

    React.useEffect(() => {
        const subTotal = cartState.items.reduce((acc, cur) => acc + cur.price, 0);
        const discount = ((cartState.selectedCoupon / 100) * subTotal);
        setCartState({
            ...cartState,
            discount,
            subTotal,
            totalPrice: subTotal - discount
        })
    }, [cartState.items]);

    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row shop-component">
                <ProductList products={PRODUCTS} cartState={cartState} setCartState={setCartState} />
                <Cart cart={cartState} setCartState={setCartState} />
            </div>
        </div>
    );
}


export default App;
