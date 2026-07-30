import Banner from "../../Components/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <section className="h-[70vh]">
        <Banner />
      </section>

      <section className="min-h-screen bg-gray-500">About Section</section>
    </>
  );
};

export default HomePage;
