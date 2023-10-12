import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

export default async function Home() {
    const products = await prisma.product.findMany({ orderBy: { id: "desc" } });

    return (
        <div className="flex flex-row justify-evenly">
            <ProductCard product={products[0]} />
            <ProductCard product={products[1]} />
        </div>
    );
}
