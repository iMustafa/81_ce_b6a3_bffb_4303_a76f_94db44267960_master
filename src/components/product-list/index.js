import React from "react";
import { ProductCard } from "./product-card";
import "./index.css";

export function ProductList(props) {
    return (
        <div className="layout-row wrap justify-content-center flex-70 app-product-list">
            {props.products.map((product, i) => {
                return (
                    <ProductCard i={i} product={product} key={product.id} cartState={props.cartState} setCartState={props.setCartState} />
                )
            })}
        </div>
    );
}

