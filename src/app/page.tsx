import MainHero from "@/components/MainHero";
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

export default async function Home() {
    const products = await prisma.product.findMany({ orderBy: { id: "desc" } });
    const heroIndex = products.length - 1;

    return (
        <div>
            <div className="hidden md:flex md:flex-col md:items-center">
                <MainHero
                    loaded_products={products}
                    loaded_heroIndex={heroIndex}
                />
            </div>
            <div className="py-8 text-center text-4xl font-extrabold">
                All products
            </div>
            <div className="flex flex-wrap justify-evenly gap-8 align-middle">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
