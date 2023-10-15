"use server";

import { createCart, getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(
    productId: string,
    pathToRevalidate: string = "/products/[id]",
) {
    const cart = (await getCart()) ?? (await createCart());

    const itemInCart = cart.items.find(
        (items) => items.productId === productId,
    );

    if (itemInCart) {
        await prisma.cartItem.update({
            where: { id: itemInCart.id },
            data: { quantity: { increment: 1 } },
        });
    } else {
        await prisma.cartItem.create({
            data: { cartId: cart.id, productId, quantity: 1 },
        });
    }

    revalidatePath(pathToRevalidate);
}

export async function decrementProductQuantity(
    productId: string,
    pathToRevalidate: string = "/products/[id]",
) {
    const cart = (await getCart()) ?? (await createCart());

    const itemInCart = cart.items.find(
        (items) => items.productId === productId,
    );

    if (itemInCart) {
        if (itemInCart.quantity === 1) {
            await prisma.cartItem.delete({
                where: { id: itemInCart.id },
            });
        } else {
            await prisma.cartItem.update({
                where: { id: itemInCart.id },
                data: { quantity: { decrement: 1 } },
            });
        }
    }

    revalidatePath(pathToRevalidate);
}
