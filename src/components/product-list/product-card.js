import React from "react";

export function ProductCard(props) {
    const isProductIncluded = React.useMemo(() =>
        !!props.cartState.items
            .filter(product => product.id === props.product.id).length,
        [props.product.id, props.cartState.items]
    )

    const addToCart = (product) => {
        const cartItem = {
            ...product,
            quantity: 1
        }
        const cart = {
            ...props.cartState,
            items: props.cartState.items.concat([cartItem])
        }

        props.setCartState(cart)
    }

    const removeFromCart = (product) => {
        const cart = {
            ...props.cartState,
            items: props.cartState.items.filter(cartItem => cartItem.id !== product.id)
        }

        props.setCartState(cart)
    }

    return (
        <section className="w-30"
            data-testid={'product-item-' + props.i}
        >
            <div className="card ma-16">
                <img alt="Your Cart" src={props.product.image}
                    className="d-inline-block align-top product-image" />
                <div className="card-text pa-4">
                    <h5 className="ma-0 text-center">{props.product.name}</h5>
                    <p className="ma-0 mt-8 text-center">${props.product.price}</p>
                </div>
                <div className="card-actions justify-content-center pa-4">
                    {
                        isProductIncluded ? (
                            <button onClick={() => { removeFromCart(props.product) }} className="x-small danger" data-testid="btn-item-remove">
                                Remove
                            </button>
                        ) : (
                            <button onClick={() => { addToCart(props.product) }} className="x-small outlined" data-testid="btn-item-add">
                                Add To Cart
                            </button>
                        )
                    }
                </div>
            </div>
        </section>
    )
}