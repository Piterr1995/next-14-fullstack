"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  // const pathname = usePathname();
  const navlinks = [
    { href: "/", name: "home" },
    { href: "/router-test", name: "router-test" },
    { href: "/image", name: "image" },
    { href: "/pokemons", name: "pokemons" },
  ];
  return (
    <nav className="h-16 bg-emerald-400">
      {/* I am the navigation, and current path is {pathname}
      <ul>
        {navlinks.map((link) => {
          const active = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={active ? "text-blue-400" : "text-red-600"}
            >
              {link.name}
            </Link>
          );
        })}
      </ul> */}
    </nav>
  );
}
