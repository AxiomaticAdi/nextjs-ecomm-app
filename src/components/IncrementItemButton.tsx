import { incrementProductQuantity } from "@/services/serverActions";
import { PlusCircle } from "@phosphor-icons/react";
import React, { useTransition } from "react";

interface IncrementButtonProps {
    productId: string;
}

export default function IncrementButton({ productId }: IncrementButtonProps) {
    const [isPending, startTransition] = useTransition();

    function handleIncrement() {
        startTransition(async () => {
            await incrementProductQuantity(productId, "/cart");
        });
    }

    return (
        <div className="flex justify-center align-middle">
            <button onClick={handleIncrement}>
                <PlusCircle size={25} />
            </button>
            {isPending && (
                <span className="loading loading-spinner text-primary" />
            )}
        </div>
    );
}
