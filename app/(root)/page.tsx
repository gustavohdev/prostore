import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const metadata = {
  title: "Home ",
};

const Homepage = async () => {
  await delay(1000);
  const latestProducts = await getLatestProducts();
  console.log("Latest Products:", latestProducts);
  return (
    <>
      ProStore
      <ProductList data={latestProducts} title="Featured Products" limit={4} />
    </>
  );
};

export default Homepage;
