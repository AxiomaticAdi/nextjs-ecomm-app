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
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <SessionProvider>
                <body className={inter.className}>
                    <div className="flex min-h-screen flex-col bg-base-100">
                        <div className="mb-4">
                            <NavBar />
                        </div>
                        <main className="box-border self-center">
                            {children}
                        </main>
                        <div className="flex-grow"></div>
                        <div className="divider"></div>
                        <Footer />
                    </div>
                    <Analytics />
                </body>
            </SessionProvider>
        </html>
    );
}
