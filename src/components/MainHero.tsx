"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";

interface MainHeroProps {
    loaded_products: Product[];
    loaded_heroIndex: number;
}

export default function MainHero({
    loaded_products,
    loaded_heroIndex,
}: MainHeroProps) {
    const [products, setProducts] = useState<Product[]>(loaded_products);
    const [heroIndex, setHeroIndex] = useState(loaded_heroIndex);

    const prevProduct = () => {
        if (heroIndex === 0) {
            setHeroIndex(products.length - 1);
        } else {
            setHeroIndex(heroIndex - 1);
        }
    };

    const nextProduct = () => {
        if (heroIndex === products.length - 1) {
            setHeroIndex(0);
        } else {
            setHeroIndex(heroIndex + 1);
        }
    };

    if (!products[heroIndex]) return <div>Loading...</div>;

    return (
        <div className="hero rounded-3xl text-secondary-content hover:bg-base-300 hover:drop-shadow-lg">
            <div className="hero-content flex-col lg:flex-row">
                <button
                    onClick={prevProduct}
                    className="btn btn-circle btn-primary"
                >
                    ❮
                </button>
                <Image
                    src={products[heroIndex].imageUrl}
                    alt={products[heroIndex].name}
                    width={400}
                    height={800}
                    priority
                    className="rounded"
                />
                <div>
                    <h1 className="text-5xl font-bold">
                        {products[heroIndex].name}
                    </h1>
                    <p className="py-6">{products[heroIndex].description}</p>
                    <Link
                        href={"/products/" + products[heroIndex].id}
                        className="btn btn-primary"
                    >
                        Explore!
                    </Link>
                </div>
                <button
                    onClick={nextProduct}
                    className="btn btn-circle btn-primary"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}
