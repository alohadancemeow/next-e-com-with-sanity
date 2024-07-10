import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { Product } from "use-shopping-cart/core";
import { validateCartItems } from "use-shopping-cart/utilities";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const arrayFromData = Object.values(body) as Product[];
    const productData = validateCartItems(arrayFromData, body);

    const line_items = productData.map((item) => {
      return {
        ...item,
        price_data: {
          ...item.price_data,
          unit_amount: Math.round(item.price_data.unit_amount * 100),
        },
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      mode: "payment",
      success_url: `${process.env.BASE_URL}/stripe/success`,
      cancel_url: `${process.env.BASE_URL}/stripe/error`,
      currency: "USD",
      line_items,
    });

    return NextResponse.json(session);
  } catch (error) {
    console.log("[CHECKOUT_CREATE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
