import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import TrendingProducts from "../../Components/TrendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <>
      <section className="h-[80vh]">
        <Banner />
      </section>

      <Categories></Categories>

      <TrendingProducts></TrendingProducts>
    </>
  );
};

export default HomePage;
