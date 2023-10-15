"use client";

import { CartItemWithProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import IncrementButton from "./IncrementItemButton";
import DecrementButton from "./DecrementItemButton";

interface CartCheckoutEntryProps {
    cartItem: CartItemWithProduct;
}

export default function CartCheckoutEntry({
    cartItem: { product, quantity },
}: CartCheckoutEntryProps) {
    return (
        <div>
            <div className="flex flex-wrap items-center gap-6">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mask mask-squircle"
                />
                <div className="flex flex-col gap-2">
                    <Link
                        href={"/products/" + product.id}
                        className="card-title"
                    >
                        {product.name}
                    </Link>
                    <div>Unit price: $ {product.price}</div>
                    <div className="flex flex-col justify-center gap-2 align-middle">
                        <div>Quantity:</div>
                        <div className="flex justify-center align-middle">
                            <DecrementButton productId={product.id} />
                            <div className="badge text-xl">{quantity}</div>
                            <IncrementButton productId={product.id} />
                        </div>
                    </div>
                    <div>Subtotal: $ {product.price * quantity}</div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
}
