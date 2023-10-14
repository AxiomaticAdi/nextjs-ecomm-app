export default function Footer() {
    return (
        <footer className="self-end bg-inherit p-5 text-neutral-content">
            <div className="footer m-auto max-w-7xl">
                <div className="flex flex-col">
                    <span className="footer-title text-primary">Company</span>
                    <div className="flex gap-6">
                        <a className="link-hover link">About us</a>
                        <a className="link-hover link">Contact</a>
                        <a className="link-hover link">Jobs</a>
                        <a className="link-hover link">Press kit</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="footer-title text-primary">Legal</span>
                    <div className="flex gap-6">
                        <a className="link-hover link">Terms of use</a>
                        <a className="link-hover link">Privacy policy</a>
                        <a className="link-hover link">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
