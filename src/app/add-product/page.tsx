import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Add product - Spooky Paws",
};

async function addProduct(formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    console.log("Did we get here?");

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString() as string;
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
        throw Error("Missing required fields");
    } else {
        const newProduct: {
            name: string;
            description: string;
            imageUrl: string;
            price: number;
        } = { name, description, imageUrl, price };

        console.log(newProduct);

        await prisma.product.create({
            data: newProduct,
        });
    }
}

export default async function AddProductPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    return (
        <div className="flex max-w-2xl flex-initial flex-col justify-center align-top">
            <h1 className="m-4 text-center align-middle text-2xl font-bold">
                Add product
            </h1>
            <form action={addProduct} className="form-control">
                <input
                    required
                    name="name"
                    placeholder="Product name"
                    className="input mb-4"
                ></input>
                <textarea
                    required
                    name="description"
                    placeholder="Product description"
                    className="textarea mb-4 text-base"
                />
                <input
                    required
                    name="imageUrl"
                    placeholder="Image URL"
                    className="input mb-4"
                    type="url"
                ></input>
                <input
                    required
                    name="price"
                    placeholder="Price"
                    className="input mb-4"
                    type="number"
                ></input>
                <button type="submit" className="btn btn-primary">
                    Add product
                </button>
            </form>
        </div>
    );
}
