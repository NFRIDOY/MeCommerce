import CategoriesHome from "@/components/module/Category/CategoriesHome";
import ProductsHome from "@/components/module/Products/ProductsHome";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <main className="py-0">
        <section className="py-10 bg-accent">
          <CategoriesHome />
        </section>
        <section className="py-10">
          <ProductsHome />
        </section>
      </main>
    </div>
  );
}
