import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export const dynamic = "force-static"; // This will ensure the page is statically generated at build time
export const revalidate = 600; // Revalidate every 600 seconds
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
