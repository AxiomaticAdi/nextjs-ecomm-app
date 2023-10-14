import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "@/services/serverActions";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card w-96 bg-primary text-primary-content hover:brightness-110">
            <Link href={"/products/" + product.id}>
                <figure className="px-10 pt-10">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={800} // Represents max dimensions of picture
                        height={400}
                        className="rounded object-cover"
                    />
                </figure>
            </Link>
            <div className="card-body flex flex-col justify-evenly align-middle">
                <h2 className="card-title self-center">{product.name}</h2>
                <AddToCartButton
                    productId={product.id}
                    price={product.price}
                    isPrimaryColor={false}
                    incrementProductQuantity={incrementProductQuantity}
                />
            </div>
        </div>
    );
}
