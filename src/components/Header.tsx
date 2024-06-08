"use client";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About Us",
    path: "/about",
  },

  {
    name: "Features",
    path: "/features",
  },

  {
    name: "Contact",
    path: "/contact",
  },

  {
    name: "Connect Wallet",
    path: "/connect-wallet",
  },
];

const Header = () => {
  const user = useAppSelector((state) => state?.auth?.user);
  return (
    <header className="flex justify-between items-center px-20 py-5 bg-white">
      <Link href="/" className="font-bold text-lg">
        Eco Learning
      </Link>

      <nav className="flex gap-8 text-sm font-bold">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            {route.name}
          </Link>
        ))}
      </nav>

      <div className="text-sm font-bold">
        {user && user?.email ? (
          <Link href="/dashboard" className="bg-custom-lime p-3  rounded text-white">
            Dashboard
          </Link>
        ) : (
          <>
            <Link href="/login" className="p-3 text-custom-lime ">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-custom-lime p-3  rounded text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
