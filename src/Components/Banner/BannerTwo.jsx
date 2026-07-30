import { Button } from "@heroui/react";

const BannerTwo = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium uppercase text-white backdrop-blur-md">
            Streetwear Edition
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Own The Streets With Confidence
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-200 mt-3">
            From oversized essentials to bold statement pieces, discover the
            latest streetwear collection designed for those who define their own
            style.
          </p>

          <Button className="font-semibold mt-5">Explore Streetwear</Button>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
