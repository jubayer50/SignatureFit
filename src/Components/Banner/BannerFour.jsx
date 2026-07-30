import { Button } from "@heroui/react";

const BannerFour = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium uppercase text-white backdrop-blur-md">
            Limited Time Offer
          </span>

          <h1 className="text-4xl max-w-125 mx-auto font-bold leading-tight text-white md:text-6xl mt-3">
            Summer Sale Up To 50% Off
          </h1>

          <p className="mx-auto max-w-2xl text-lg  text-gray-200">
            Refresh your wardrobe with this season's most-loved styles. Shop
            exclusive deals on clothing, footwear, and accessories before the
            offer ends.
          </p>

          <Button className="font-semibold mt-5">Shop The Sale</Button>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
