import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Team",
    path: "/team",
  },

  {
    name: "About Us",
    path: "/about",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center p-7">
      <Image
        src="/logo.png"
        alt="logo"
        className="w-32"
        width={100}
        height={100}
      />

      <nav className="flex gap-8">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            {route.name}
          </Link>
        ))}
      </nav>

      <button className="bg-green-500 p-3 rounded text-white">Register</button>
    </header>
  );
};
export default Header;
