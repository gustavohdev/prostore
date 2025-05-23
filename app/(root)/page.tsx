const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const metadata = {
  title: "Home ",
};

const Homepage = async () => {
  await delay(1000);
  return;
};

export default Homepage;
