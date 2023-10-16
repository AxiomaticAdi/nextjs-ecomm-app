import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spooky Paws",
    description: "Halloween Pet Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col">
                    <NavBar />
                    <main className="m-auto max-w-7xl p-4">{children}</main>
                    <div className="flex-grow"></div>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
