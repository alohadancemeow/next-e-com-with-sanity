"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar({ categories }: { categories: any }) {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Book<span className="text-primary">Store</span>
          </h1>
        </Link>

        <nav className="flex items-center justify-center gap-12 lg:flex 2xl:ml-16">
          {categories?.map((link: any, idx: any) => (
            <div key={idx}>
              {pathname === `/${link?.name}` ? (
                <Link
                  className="md:text-lg text-sm font-semibold text-primary"
                  href={`/${link?.name}`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={`/${link?.name}`}
                  className="md:text-lg text-sm font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex divide-x border-r sm:border-l">
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
