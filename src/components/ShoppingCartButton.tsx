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
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-primary">
                <div className="indicator">
                    <CartIcon size="h-8 w-8" />
                    <span className="badge indicator-item badge-md">
                        {cart?.size || 0}
                    </span>
                </div>
            </label>
            <div
                tabIndex={0}
                className="card dropdown-content card-compact z-30 mt-3 w-52 bg-primary shadow"
            >
                <div className="body card">
                    <span className="text-lg font-bold">{cart?.size || 0}</span>
                    <span className="font-bold text-info">
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
