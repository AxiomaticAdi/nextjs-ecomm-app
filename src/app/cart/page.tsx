import CartCheckoutEntry from "@/components/CartCheckoutEntry";
import GithubLink from "@/components/GithubLink";
import ModalButton from "@/components/ModalButton";
import { getCart } from "@/lib/db/cart";

export default async function CartPage() {
    const cart = await getCart();

    const checkoutText =
        "We hope you enjoyed browsing our spook-tacular pet costumes. This site was created as a project to further study web development. Checkout functionality has been disabled, so no real transactions will occur. Thanks for your support!";

    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="my-6 text-center text-3xl font-bold">
                    Shopping Cart
                </h1>
            </div>
            <div>
                {cart?.items.map((cartItem) => (
                    <CartCheckoutEntry cartItem={cartItem} key={cartItem.id} />
                ))}
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="my-3 font-bold">{`Total: $ ${
                    cart?.subtotal ? cart?.subtotal : 0
                }`}</p>
                <ModalButton
                    buttonText={"Checkout"}
                    modalTitle={"Hello!"}
                    modalContent={checkoutText}
                />
            </div>
        </div>
    );
}
