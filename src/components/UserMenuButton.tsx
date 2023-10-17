"use client";

import { DotsThreeCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { Session } from "next-auth";
import profilePicPlaceholder from "@/assets/prof-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
    session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
    const user = session?.user;

    return (
        <div className="dropdown dropdown-end">
            <button className="btn btn-circle btn-primary">
                {user ? (
                    <Image
                        src={user?.image || profilePicPlaceholder}
                        alt="Profile picture"
                        width={40}
                        height={40}
                        className="w-10 rounded-full"
                    />
                ) : (
                    <DotsThreeCircle size={32} color="white" />
                )}
            </button>
            <ul className="menu dropdown-content rounded-box z-30 bg-primary-focus">
                {user ? (
                    <button onClick={() => signOut({ callbackUrl: "/" })}>
                        Log out
                    </button>
                ) : (
                    <button onClick={() => signIn()}>Log in</button>
                )}
            </ul>
        </div>
    );
}
