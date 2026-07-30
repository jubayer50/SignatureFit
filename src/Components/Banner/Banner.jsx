import { useEffect, useRef, useState } from "react";
import BannerFour from "./BannerFour";
import BannerOne from "./BannerOne";
import BannerThree from "./BannerThree";
import BannerTwo from "./BannerTwo";
import { AnimatePresence, motion } from "motion/react";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [direction, setDirection] = useState(1);
  const isAnimating = useRef(false);
  const heroRef = useRef(null);
  const activeBannerRef = useRef(0);

  const banners = [
    <BannerOne key={0} />,
    <BannerTwo key={1} />,
    <BannerThree key={2} />,
    <BannerFour key={3} />,
  ];

  const totalBanners = banners.length;

  useEffect(() => {
    activeBannerRef.current = activeBanner;
  }, [activeBanner]);

  useEffect(() => {
    const handleWheel = (event) => {
      const rect = heroRef.current.getBoundingClientRect();

      const isHeroVisible =
        rect.top <= 80 && rect.bottom >= window.innerHeight * 0.4;

      if (!isHeroVisible) return;
      if (isAnimating.current) return;

      const current = activeBannerRef.current;
      const isLast = current === totalBanners - 1;
      const isFirst = current === 0;

      if ((isLast && event.deltaY > 0) || (isFirst && event.deltaY < 0)) return;

      event.preventDefault();
      isAnimating.current = true;

      if (event.deltaY > 0) {
        setDirection(1);
        setActiveBanner((pre) => Math.min(pre + 1, totalBanners - 1));
      } else {
        setDirection(-1);
        setActiveBanner((pre) => Math.max(pre - 1, 0));
      }

      setTimeout(() => {
        isAnimating.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeBanner}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 w-full h-full"
        >
          {banners[activeBanner]}
        </motion.div>
      </AnimatePresence>

      {/* Indicator UI */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {Array.from({ length: totalBanners }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveBanner(index)}
            className={`transition-all duration-500 rounded-full ${
              activeBanner === index
                ? "w-2 h-3.5 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
