import AdminNav from "@/components/Nav/AdminNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Indian Export Web Mart",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* nav */}
                <AdminNav />
                {children}
                {/* footer */}
            </body>
        </html>
    );
}
