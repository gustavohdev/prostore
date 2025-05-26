import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const metadata = {
  title: "Home ",
};

const Homepage = async () => {
  await delay(1000);
  console.log(sampleData);
  return (
    <>
      ProStore
      <ProductList
        data={sampleData.products}
        title="Featured Products"
        limit={4}
      />
    </>
  );
};

export default Homepage;
