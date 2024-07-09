"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";
import { ProductCart } from "./AddToBag";
import { createSession } from "@/lib/helpers";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  id,
}: ProductCart) {
  const { redirectToCheckout } = useShoppingCart();

  const product = {
    [id]: {
      name: name,
      description: description,
      price: price,
      currency: currency,
      image: urlFor(image).url(),
      id: id,
      quantity: 1, // Quantity is required.
    },
  };

  async function buyNow() {
    const session = await createSession(product);
    await redirectToCheckout(session?.id);
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow();
      }}
    >
      Buy Now
    </Button>
  );
}
