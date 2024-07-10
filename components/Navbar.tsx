"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ShoppingBag, SquareLibrary } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar({ categories }: { categories: any }) {
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/" className="flex gap-1 items-center">
          <SquareLibrary className="w-10 h-10" />
          <h1 className="text-2xl md:text-4xl font-bold">Bookstore</h1>
        </Link>

        <nav className="flex  justify-center gap-12 2xl:ml-16">
          <div className="gap-12 items-center hidden lg:flex">
            <Link
              className={`md:text-md text-sm font-semibold ${
                pathname === "/products"
                  ? "text-primary"
                  : "text-gray-600 transition duration-100 hover:text-primary"
              }`}
              href={`/products`}
            >
              All Books
            </Link>
            {categories?.map((link: any, idx: any) => (
              <div key={idx}>
                <Link
                  className={`md:text-md text-sm font-semibold ${
                    pathname === `/${link?.name}`
                      ? "text-primary"
                      : "text-gray-600 transition duration-100 hover:text-primary"
                  }`}
                  href={`/${link?.name}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex relative">
            <Button
              // variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              {cartCount !== 0 && (
                <span className="absolute text-center top-5 right-6 text-xs text-white sm:block bg-red-600 rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
