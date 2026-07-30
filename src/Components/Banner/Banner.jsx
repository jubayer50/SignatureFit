import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import BannerFour from "./BannerFour";
import BannerOne from "./BannerOne";
import BannerThree from "./BannerThree";
import BannerTwo from "./BannerTwo";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [direction, setDirection] = useState(1);

  const heroRef = useRef(null);
  const isAnimating = useRef(false);

  const banners = [
    <BannerOne key={0} />,
    <BannerTwo key={1} />,
    <BannerThree key={2} />,
    <BannerFour key={3} />,
  ];

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),

    center: {
      y: "0%",
      opacity: 1,
    },

    exit: (direction) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const changeBanner = (newIndex) => {
    if (newIndex === activeBanner) return;
    if (newIndex < 0 || newIndex >= banners.length) return;

    setDirection(newIndex > activeBanner ? 1 : -1);
    setActiveBanner(newIndex);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      // Banner 1-3 পর্যন্ত page scroll lock থাকবে
      // Banner 4 এ নিচে scroll করলে page unlock হবে
      if (activeBanner !== banners.length - 1 || e.deltaY < 0) {
        e.preventDefault();
      }

      if (isAnimating.current) return;

      // Scroll Down
      if (e.deltaY > 0) {
        if (activeBanner < banners.length - 1) {
          isAnimating.current = true;

          changeBanner(activeBanner + 1);

          setTimeout(() => {
            isAnimating.current = false;
          }, 1200);
        }

        return;
      }

      // Scroll Up
      if (e.deltaY < 0) {
        if (activeBanner > 0) {
          isAnimating.current = true;

          changeBanner(activeBanner - 1);

          setTimeout(() => {
            isAnimating.current = false;
          }, 1200);
        }

        return;
      }
    };

    const hero = heroRef.current;

    hero?.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      hero?.removeEventListener("wheel", handleWheel);
    };
  }, [activeBanner]);

  return (
    <section ref={heroRef} className="relative h-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeBanner}
          variants={variants}
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

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => changeBanner(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeBanner === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
