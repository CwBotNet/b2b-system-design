import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNav from "@/components/Nav/HomeNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indian export web mart",
  description: "A B2B service agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNav />
        {children}
        <Footer />
      </body>

    </html>
  );
}
