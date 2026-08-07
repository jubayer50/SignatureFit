import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="md:px-10 px-4 mt-12 md:mt-20">
      <h2 className="text-3xl md:text-[40px] font-bold fair text-center">
        Categories
      </h2>

      <div className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://plus.unsplash.com/premium_photo-1711051513016-72baa1035293"
            alt="Footwear"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Footwear</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908"
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

        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1781624294147-c01abc3f989c"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">New Arrivals</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Dresses</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050"
            alt="Accessories"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Jewellery</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6"
            alt="Cosmetics & Makeup"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Cosmetics & Makeup</h2>

            <div className="flex items-center gap-3">
              <p className="mt-1 text-white">Explore</p>
              <FaArrowRight className="text-white mt-1.5" />
            </div>
          </div>
        </div>

        <div className="h-80 flex-1 group transition-all duration-300 relative overflow-hidden cursor-pointer rounded-md">
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6"
            alt="Cosmetics & Makeup"
            className="w-full h-full rounded-md object-cover object-center group-hover:scale-103 transition-transform duration-300"
          />

          {/* overly */}
          <div className="bg-linear-to-t from-black/70 to-black/10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 p-4 rounded-md"></div>

          {/* content */}
          <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 absolute bottom-[8%] left-[5%] transition-all duration-300">
            <h2 className="text-xl font-bold text-white">Cosmetics & Makeup</h2>

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
