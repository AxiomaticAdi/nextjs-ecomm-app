import Link from "next/link";
import GithubLinkWhite from "./GithubLinkWhite";

export default function Footer() {
    return (
        <footer className="self-end bg-inherit p-5">
            <div className="footer m-auto flex max-w-7xl justify-between">
                <div className="flex flex-col">
                    <span className="footer-title text-primary">Company</span>
                    <div className="flex flex-wrap gap-6 text-gray-500">
                        <a className="link-hover link">About us</a>
                        <a className="link-hover link">Contact</a>
                        <a className="link-hover link">Jobs</a>
                        <a className="link-hover link">Press kit</a>
                    </div>
                </div>
                <Link
                    className="btn btn-ghost"
                    href="https://github.com/AxiomaticAdi/spooky-paws-ecomm"
                >
                    <div className="py-1">
                        <GithubLinkWhite />
                    </div>
                </Link>
                <div className="flex flex-col">
                    <span className="footer-title self-end text-primary">
                        Legal
                    </span>
                    <div className="flex flex-wrap gap-6 text-gray-500">
                        <a className="link-hover link">Terms of use</a>
                        <a className="link-hover link">Privacy policy</a>
                        <a className="link-hover link">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
