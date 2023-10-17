import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProviderClient";

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
                <div className="flex flex-col bg-base-100">
                    <SessionProvider>
                        <NavBar />
                        <main className="box-border self-center bg-base-100">
                            {children}
                        </main>
                        <div className="flex-grow bg-base-100"></div>
                        <Footer />
                    </SessionProvider>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
