import Banner from "../../Components/Banner/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <section className="min-h-screen bg-slate-900 flex items-center justify-center">
        <h1 className="text-6xl text-white font-bold">Next Section</h1>
      </section>
    </div>
  );
};

export default HomePage;
