import prisma from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function MainHero() {
    const products = await prisma.product.findMany({ orderBy: { id: "desc" } });
    const heroIndex = products.length - 1;

    return (
        <div className="hero rounded text-secondary-content hover:bg-base-300 hover:drop-shadow-lg">
            <div className="hero-content flex-col lg:flex-row">
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
            </div>
        </div>
    );
}
