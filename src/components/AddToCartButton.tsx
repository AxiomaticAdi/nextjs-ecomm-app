"use client";

import CartIcon from "./CartIcon";
import { useState, useTransition } from "react";

interface AddToCartButtonProps {
    productId: string;
    price: number;
    isPrimaryColor?: boolean;
    incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({
    productId,
    price = 0,
    isPrimaryColor = true,
    incrementProductQuantity,
}: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return (
        <>
            <button
                className={`btn ${
                    isPrimaryColor ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => {
                    setSuccess(false);
                    startTransition(async () => {
                        await incrementProductQuantity(productId);
                        setSuccess(true);
                    });
                }}
            >
                {`$ ${price}`} <CartIcon />{" "}
                {isPending && (
                    <span className="loading loading-spinner loading-md" />
                )}
                {!isPending && success && (
                    <span className="text-success">Added to cart!</span>
                )}
            </button>
        </>
    );
}
