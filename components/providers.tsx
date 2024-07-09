"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      currency="USD"
      shouldPersist={false}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
