import { ShoppingCart } from "@/types/types";
import CartIcon from "./CartIcon";
import Link from "next/link";

interface ShoppingCartButtonProps {
    cart: ShoppingCart | null;
}

export default async function ShoppingCartButton({
    cart,
}: ShoppingCartButtonProps) {
    return (
        <div className="dropdown dropdown-end flex">
            <button tabIndex={0} className="btn btn-primary">
                <div className="indicator">
                    <CartIcon size="h-8 w-8" />
                    <span className="badge indicator-item badge-md">
                        {cart?.size || 0}
                    </span>
                </div>
            </button>
            <div
                tabIndex={0}
                className="card dropdown-content card-compact z-30 mt-3 w-48 bg-base-200 shadow"
            >
                <div className="body card m-2">
                    <span className="text-lg">Items: {cart?.size || 0}</span>
                    <span className="text-lg">
                        Subtotal: ${cart?.subtotal || 0}
                    </span>
                    <div className="card-actions">
                        <Link
                            href="/cart"
                            className="btn btn-primary btn-block"
                        >
                            View cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
