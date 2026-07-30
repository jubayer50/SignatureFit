import { Button } from "@heroui/react";

const BannerTwo = () => {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl space-y-6">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md">
            Streetwear Edition
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Own The Streets With Confidence
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            From oversized essentials to bold statement pieces, discover the
            latest streetwear collection designed for those who define their own
            style.
          </p>

          <Button
            color="primary"
            size="lg"
            radius="full"
            className="px-8 font-semibold"
          >
            Explore Streetwear
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
