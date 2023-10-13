import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductPage({
    params: { id },
}: ProductPageProps) {
    const product = await prisma.product.findUnique({ where: { id } });

    // Redirect to not found page if product not found
    if (!product) notFound();

    return (
        <div className="flex max-w-6xl flex-col gap-10 lg:flex-row">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded"
                priority
            />

            <div className="flex flex-col">
                <h1 className="my-6 self-center text-5xl font-bold">
                    {product.name}
                </h1>
                <button className="btn btn-secondary my-6">{`$ ${product.price}`}</button>
                <p className="my-6">{product.description}</p>
            </div>
        </div>
    );
}
