import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  console.log(products, categories, "finally here");

  return (
    <>
      <BlackFridayBanner />

      <div className="mx-auto px-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </>
  );
}
