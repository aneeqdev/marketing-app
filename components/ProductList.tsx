import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here"
        className="m-4 p-2"
      ></input>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(filteredProducts &&
          filteredProducts?.length > 0 &&
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="object-cover"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>${product.price}</p>
              <Link href={`/products/${product.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </Link>
            </div>
          ))) || (
          <div className="m-4">
            <h5 className="p-2">No Products Found!</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
