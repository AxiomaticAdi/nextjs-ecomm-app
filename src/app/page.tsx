import MainHero from "@/components/MainHero";
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

export default async function Home() {
    const products = await prisma.product.findMany({ orderBy: { id: "desc" } });
    const heroIndex = products.length - 1;

    return (
        <div>
            <MainHero />
            <div className="flex flex-wrap justify-evenly gap-8 align-middle">
                {products.slice(0, heroIndex).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
