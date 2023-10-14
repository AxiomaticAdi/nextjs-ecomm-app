import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const products = await prisma.product.findMany({ orderBy: { id: "desc" } });
    const heroIndex = products.length - 1;

    return (
        <div>
            <div className="hero rounded bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src={products[heroIndex].imageUrl}
                        alt={products[heroIndex].name}
                        width={400}
                        height={800}
                        className="w-full max-w-sm rounded shadow-2xl hover:brightness-110"
                        priority
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            {products[heroIndex].name}
                        </h1>
                        <p className="py-6">
                            {products[heroIndex].description}
                        </p>
                        <Link
                            href={"/products/" + products[heroIndex].id}
                            className="btn btn-primary"
                        >
                            Explore!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-evenly gap-8 align-middle">
                {products.slice(0, heroIndex).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
