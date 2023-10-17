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
                <div className="flex h-screen flex-col">
                    <SessionProvider>
                        <NavBar />
                        <main className="max-w-7xl self-center p-4">
                            {children}
                        </main>
                        <div className="flex-grow"></div>
                        <Footer />
                    </SessionProvider>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
