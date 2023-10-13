"use client";

import CartIcon from "./CartIcon";

interface AddToCartButtonProps {
    productId: string;
    price: number;
    isPrimaryColor?: boolean;
}

export default function AddToCartButton({
    productId,
    price = 0,
    isPrimaryColor = true,
}: AddToCartButtonProps) {
    return (
        <>
            <button
                className={`btn ${
                    isPrimaryColor ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => {}}
            >
                {`$ ${price}`} <CartIcon />
            </button>
        </>
    );
}
