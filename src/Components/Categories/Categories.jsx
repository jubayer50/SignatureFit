import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="md:px-10 px-4 mt-12 md:mt-20">
      <h2 className="text-2xl md:text-3xl font-bold fair">Categories</h2>

      <div className="mt-5 md:mt-8 flex gap-5">
        <div className="h-100 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Accessories</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-100 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Accessories</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-100 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Accessories</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-100 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Accessories</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
