import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/SpookyPaws_logo.png";

export default function NavBar() {
    return (
        <div className="bg-primary">
            <div className="navbar m-auto flex max-w-7xl flex-col gap-5 sm:flex-row">
                <div className="flex-1 justify-center align-middle">
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt="Spooky Paws logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
