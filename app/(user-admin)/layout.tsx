import SidebarUser from "@/components/SideBar/UserAdminSidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "User Dashboard",
    description: "User Company Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SidebarUser companyname="name">

                    {children}
                </SidebarUser>
                {/* footer */}
            </body>
        </html>
    );
}
