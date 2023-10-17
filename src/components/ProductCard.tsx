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
        <div className="card w-96 bg-inherit text-primary-content hover:scale-105 hover:bg-base-300 hover:drop-shadow-lg">
            <Link href={"/products/" + product.id} className="">
                <figure className="rounded-t-lg" style={{ maxHeight: "400px" }}>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={800}
                        height={400}
                        className="rounded object-cover"
                    />
                </figure>
                <div className="card-body flex flex-col justify-evenly align-middle">
                    <h2 className="card-title self-center text-primary">
                        {product.name}
                    </h2>
                </div>
            </Link>
            <AddToCartButton
                productId={product.id}
                price={product.price}
                additional_classNames="btn-outline btn-primary"
                incrementProductQuantity={incrementProductQuantity}
            />
        </div>
    );
}
