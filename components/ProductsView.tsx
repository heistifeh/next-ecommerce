import { Category, Product } from "@/sanity.types";
import React from "react";
import ProductsGrid from "./ProductsGrid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      {/* categories */}
      <div className="w-full sm:w-[200px]">
        {/* <CategoriesSelector categories={categories} /> */}
      </div>

      {/* products */}
      <div className="flex-1">
        <div>
          <ProductsGrid products={products} />

          <hr className="w-1/2 sm:w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
