import Image from "next/image";
import Link from "next/link";
import { simplifiedProduct } from "@/types/interface";

type Props = {
  product: simplifiedProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div key={product._id} className="group relative">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image
            src={product.imageUrl}
            alt="Product image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
          />
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-md font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
          </div>
          <div className="flex gap-2 font-medium justify-center text-sm">
            <p className="text-gray-900">${product.price}</p>
            <span className=" text-red-500 line-through">
              ${product.price + 30}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
