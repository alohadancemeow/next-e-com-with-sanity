import { simplifiedProduct } from "@/types/interface";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";
import ProductCard from "@/components/ProductCard";

async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);
  revalidatePath("/[category]", "page");

  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white mt-10 mb-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Books for {params.category}
          </h2>
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
