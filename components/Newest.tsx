import Link from "next/link";
import { simplifiedProduct } from "@/types/interface";
import { client } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import { revalidatePath } from "next/cache";
import ProductCard from "./ProductCard";

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);
  revalidatePath("/");

  return data;
}

type PropsType = "new";

export default async function Newest({ type }: { type?: PropsType }) {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight uppercase text-gray-900">
            {type === "new" ? "Our Newest Books" : "Related Books"}
          </h2>

          <Link
            className="text-primary font-semibold flex items-center gap-x-1"
            href="/products"
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
