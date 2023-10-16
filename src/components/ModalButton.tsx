"use client";

interface ModalButtonProps {
    buttonText: string;
    modalTitle: string;
    modalContent: string;
}

export default function ModalButton({
    buttonText,
    modalTitle,
    modalContent,
}: ModalButtonProps) {
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() =>
                    document.getElementById("modal_name")!.showModal()
                }
            >
                {buttonText}
            </button>
            <dialog id="modal_name" className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">{modalTitle}</h3>
                    <p className="py-4">{modalContent}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
