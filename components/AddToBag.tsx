"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";
import { Product } from "use-shopping-cart/core";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  id,
}: ProductCart) {
  const { addItem, handleCartClick, cartDetails, incrementItem } =
    useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: id,
  } as Product;

  const handleAddToCart = (id: string) => {
    if (cartDetails && Object.keys(cartDetails).includes(id)) {
      incrementItem(id);
    } else {
      addItem(product);
    }
  };

  return (
    <Button
      onClick={() => {
        handleAddToCart(product.id), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
