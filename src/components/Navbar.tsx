import Link from "next/link";
import Image from "next/image";
import ShoppingCartButton from "./ShoppingCartButton";
import logo from "../assets/spooky_paws.png";
import { getCart } from "@/lib/db/cart";

export default async function NavBar() {
    const currentCart = await getCart();

    return (
        <div className="h-28 bg-primary">
            <div className="navbar m-auto flex max-w-7xl flex-col gap-5 sm:flex-row">
                <div className="flex-1 justify-between">
                    <Image src={logo} alt={"Spooky Paws Logo"} height={100} />
                    <Link href={"/"} className="btn btn-ghost h-24">
                        <h1 className="text-5xl normal-case text-black">
                            Spooky Paws
                        </h1>
                    </Link>
                    <ShoppingCartButton cart={currentCart} />
                </div>
            </div>
        </div>
    );
}
