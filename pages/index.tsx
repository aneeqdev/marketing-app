import { GetStaticProps } from "next";
import ProductList from "@/components/ProductList";
import { Product } from "@/types";
import "@/styles/globals.css";

export async function getStaticProps(): GetStaticProps {
  const products = require("../mockData/products.json");
  return {
    props: { products },
  };
}

export default function Home({ products }: { products: Product[] }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
      <ProductList products={products} />
    </div>
  );
}
