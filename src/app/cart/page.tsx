import CartCheckoutEntry from "@/components/CartCheckoutEntry";
import { getCart } from "@/lib/db/cart";

export default async function CartPage() {
    const cart = await getCart();

    return (
        <div>
            <div>
                <h1 className="mb-6 text-center text-3xl font-bold">
                    Shopping Cart
                </h1>
            </div>
            <div>
                {cart?.items.map((cartItem) => (
                    <CartCheckoutEntry cartItem={cartItem} key={cartItem.id} />
                ))}
            </div>
        </div>
    );
}
