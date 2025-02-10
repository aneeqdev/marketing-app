import { Product } from "@/types";
import Image from "next/image";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        className="object-cover"
      />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
