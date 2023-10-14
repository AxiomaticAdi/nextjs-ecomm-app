import { ShoppingCart } from "@/types/types";
import prisma from "./prisma";
import { cookies } from "next/headers";

export async function createCart(): Promise<ShoppingCart> {
    const newCart = await prisma.cart.create({
        data: {},
    });

    // Note: Cookie needs encryption + secure settings if used in real app
    cookies().set("localCartId", newCart.id);

    return {
        ...newCart,
        items: [],
        size: 0,
        subtotal: 0,
    };
}

export async function getCart(): Promise<ShoppingCart | null> {
    const localCartId = cookies().get("localCartId")?.value;
    const cart = localCartId
        ? await prisma.cart.findUnique({
              where: { id: localCartId },
              include: { items: { include: { product: true } } },
          })
        : null;

    if (!cart) return null;
    return {
        ...cart,
        size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: cart.items.reduce(
            (acc, item) => acc + item.quantity * item.product.price,
            0,
        ),
    };
}
