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
      <div className="w-[100%] sm:ml-[233px] md:ml-[240px] min-h-screen px-6 mt-20px sm:mt-0 sm:pt-[63px] md:pt-[75px] lg:pt-[85px] bg-gray-50 relative">
        {children}
      </div>
      </body>
    </html>
  );
}
