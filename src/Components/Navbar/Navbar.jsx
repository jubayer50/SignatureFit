import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import MyNavLink from "./MyNavLink";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <MyNavLink to={"/"}>Home</MyNavLink>
      <MyNavLink to={"/shop"}>Shop</MyNavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className=" flex py-3.5 items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div>
            <Link to={"/"}>
              <h2 className="fair font-bold text-[34px]">Signature Fit</h2>
            </Link>
          </div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        <div className="flex items-center gap-4">
          <IoSearch className="w-5 h-5" />

          <div className="relative">
            <FiShoppingBag className="w-5 h-5" />

            <div className="absolute -top-2 -right-2.5 w-4.5 h-4.5 rounded-full bg-red-600 p-1 flex items-center justify-center">
              <p className="text-white text-[13px]">0</p>
            </div>
          </div>

          <FaRegUser className="w-5 h-5" />
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
