import { decrementProductQuantity } from "@/services/serverActions";
import { MinusCircle } from "@phosphor-icons/react";
import React, { useTransition } from "react";

interface DecrementButtonProps {
    productId: string;
}

export default function DecrementButton({ productId }: DecrementButtonProps) {
    const [isPending, startTransition] = useTransition();

    function handleDecrement() {
        startTransition(async () => {
            await decrementProductQuantity(productId, "/cart");
        });
    }

    return (
        <div className="flex justify-center align-middle">
            {isPending && (
                <span className="loading loading-spinner text-primary" />
            )}
            <button onClick={handleDecrement}>
                <MinusCircle size={25} />
            </button>
        </div>
    );
}
