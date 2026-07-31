import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";

const HomePage = () => {
  return (
    <>
      <section className="h-[80vh]">
        <Banner />
      </section>

      <Categories></Categories>
    </>
  );
};

export default HomePage;
