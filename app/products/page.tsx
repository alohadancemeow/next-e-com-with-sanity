import { simplifiedProduct } from "@/types/interface";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";
import ProductCard from "@/components/ProductCard";

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);
  revalidatePath("/products", "page");

  return data;
}

export default async function ProductsPage() {
  const data: simplifiedProduct[] = await getData();

  if (!data) return null;

  return (
    <div className="bg-white mt-10 mb-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All Books
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
