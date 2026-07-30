import { Button } from "@heroui/react";

const BannerThree = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium uppercase text-white backdrop-blur-md">
            Luxury Essentials
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Timeless Pieces, Endless Elegance
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-200 mt-3">
            Complete your signature look with premium accessories crafted to
            elevate every outfit. Discover refined details, timeless quality,
            and effortless sophistication.
          </p>

          <Button className="font-semibold mt-5">Shop Accessories</Button>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
