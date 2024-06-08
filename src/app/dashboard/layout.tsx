import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import TopBar from "@/components/dashboard/TopBar";
import SideNav from "@/components/dashboard/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Eco Learn App",
  description: "Learn about the environment and how you can help",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 relative p-0 m-0 min-h-screen `}>
      <TopBar />
      <SideNav />
      <div className="ml-[18%] min-h-screen px-6 pt-[6%] bg-gray-50 relative">
        {children}
      </div>
      </body>
    </html>
  );
}
