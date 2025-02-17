// pages/ShopNowMen.js
import React from "react";
import Navbar from "../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import Footer from "../components/Footer";
import { GoDotFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { add } from "../components/store/CartSlice";
import images from "../components/data/men";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShopNowMen() {
  const dispatch = useDispatch();
  const notify = () => toast("Item has been added");

  const addToCart = (product) => {
    dispatch(add(product));
    notify();
  };

  return (
    <div>
      <Navbar />
      <nav>
        <ul className="flex justify-center gap-[37px] h-[55px] text-white items-center text-[12px] bg-[#001F3F9E]">
          <li className="block sm:hidden text-xs font-bold">MEN</li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block">
            <NavLink to="/">Women</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block border-b-2">
            <NavLink to="/men">Men</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 hidden lg:text-sm md:text-[10px] text-[8px] sm:block">
            <NavLink to="/baby">Baby</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 hidden lg:text-sm md:text-[10px] text-[8px] sm:block">
            <NavLink>Kids</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block">
            <NavLink>Beauty</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block">
            <NavLink>Sports</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block">
            <NavLink>Sale</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block">
            <NavLink>Sustainability</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex h-[55px] text-center">
        <div className="flex-1 flex items-center justify-center text-white text-center sm:text-xs text-[8px] bg-black">
          <p>UP TO 50% OFF FRESH FINDS</p>
        </div>
        <div className="flex-1 flex items-center justify-center text-center sm:text-xs text-[#001F3FB2] text-[8px] bg-white">
          <p>FREE WORLDWIDE DELIVERY</p>
        </div>
      </div>

      <ToastContainer />
      <section>
        <div className="pb-0 sm:pb-7">
          <ul className="flex md:gap-[14px] h-[55px] text-white items-center justify-center text-[12px] bg-[#001F3F]">
            <li className="flex md:hidden flex-1 h-full items-center border-r-2 border-opacity-10 justify-center gap-2">
              SORT BY <MdOutlineKeyboardArrowDown />
            </li>
            <li className="flex gap-2 md:hidden flex-1 justify-center items-center">
              FILTER <MdOutlineKeyboardArrowDown />
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block border-b-2">
              <NavLink to="/">New Arrivals</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block">
              <NavLink to="/men">Trending Now</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block">
              <NavLink to="/baby">Shop By Occasion</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block">
              <NavLink>Shop By Product</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block">
              <NavLink>Gifting</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block">
              <NavLink>Magazine</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block">
              <NavLink>Sustainability</NavLink>
            </li>
          </ul>
        </div>
      </section>

      <div className="hidden sm:block text-center font-black pb-6 text-[#001F3F]">
        <p>UP TO 50% OFF FRESH FINDS</p>
      </div>

      <div className="pb-7">
        <ul className="flex justify-center gap-7 text-[#001F3F]">
          <li className="hidden sm:block">
            <Link className="flex gap-1 items-center">
              SORT BY
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link className="flex gap-1 items-center">
              COLOUR
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link className="flex gap-1 items-center">
              SIZE
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link className="flex gap-1 items-center">
              BRAND
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link className="flex gap-1 items-center">
              PATTERN
              <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li className="md:flex gap-1 hidden items-center">
            <CiFilter className="hidden sm:block" />
            FILTER
            <MdOutlineKeyboardArrowDown />
          </li>
        </ul>
      </div>

      <section className="grid justify-center gap-5 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 sm:gap-5">
          {images.map((image) => (
            <div
              key={image.id}
              className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative"
            >
              <Link to="/product">
                <img
                  src={image.src}
                  className="sm:h-[437px] h-[237px] w-[161px] sm:w-[232px] pb-2"
                  alt={image.title}
                />
              </Link>
              <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
                <FiHeart />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                    {image.title}
                  </p>
                  <div className="flex gap-0 w-8">
                    <GoDotFill className="text-[#e7e5e4]" />
                    <GoDotFill />
                    <GoDotFill className="text-[#ea580c]" />
                    <GoDotFill />
                  </div>
                  <p className="sm:text-[10px] text-[6.3px]">{image.price}</p>
                </div>
                <div>
                  <p className="sm:text-[10px] text-[6.3px] font-black">
                    {image.label}
                  </p>
                  <button
                    className="sm:text-[8px] text-[4.3px] font-black bg-[#001F3F] p-1 text-white"
                    onClick={() => addToCart(image)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-8">
        <div className="h-[76px] flex flex-col justify-center items-center gap-4">
          <p className="sm:text-xs text-[8px]">Showing 12 of 1020</p>
          <img
            src="/images/Group 3.png"
            className="w-[155px] sm:w-[230px]"
            alt="scale"
          />
          <button className="sm:p-3 p-2 w-[203px] bg-[#001F3FDB] sm:text-xs text-[8px] text-center text-white">
            Load More Product
          </button>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default ShopNowMen;
