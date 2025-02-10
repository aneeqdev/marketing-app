import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "@/types";
import ProductDetails from "@/components/ProductDetails";

export async function getStaticPaths() {
  const products = require("../../mockData/products.json");
  const paths = products.map((product: Product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const products = require("../../mockData/products.json");
  const product = products.find((p: Product) => p.id.toString() === params.id);
  return { props: { product } };
}

export default function ProductPage({ product }: { product: Product }) {
  return <ProductDetails product={product} />;
}
