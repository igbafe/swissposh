import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { CiHeart, CiStar } from "react-icons/ci";
import { PiBagBold, PiShoppingBagBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import Footer from "../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Product() {
  const images = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <Navbar />
      <nav>
        <ul className="flex justify-center gap-[37px] h-[55px]  text-white items-center  text-[12px] bg-[#001F3F9E]">
          <li className=" block sm:hidden text-xs font-bold">MEN</li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block ">
            <NavLink to="/">Women</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block  border-b-2 ">
            <NavLink to="/men">Men</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 hidden lg:text-sm md:text-[10px] text-[8px] sm:block ">
            <NavLink to="/baby">Baby</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 hidden lg:text-sm md:text-[10px] text-[8px] sm:block ">
            <NavLink>Kids</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block ">
            <NavLink>Beauty</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block ">
            <NavLink>Sports</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block ">
            <NavLink>Sale</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block ">
            <NavLink>Sustainability</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex h-[55px] text-center ">
        <div className="flex-1 flex items-center justify-center text-white text-center sm:text-xs text-[8px] bg-black">
          <p>UP TO 50% OFF FRESH FINDS</p>
        </div>
        <div className="flex-1 flex items-center justify-center text-center sm:text-xs text-[#001F3FB2] text-[8px] bg-white">
          <p>FREE WORLDWIDE DELIVERY</p>
        </div>
      </div>

      <section className="pb-7">
        <div className="pb-0 sm:pb-7">
          <ul className="flex  md:gap-[14px] h-[55px] text-white items-center justify-center  text-[12px] bg-[#001F3F]">
            <li className="flex md:hidden flex-1 h-full items-center border-r-2 border-opacity-10 justify-center gap-2 ">
              SORT BY <MdOutlineKeyboardArrowDown />
            </li>
            <li className="flex gap-2 md:hidden flex-1 justify-center items-center">
              FILTER <MdOutlineKeyboardArrowDown />
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block  border-b-2">
              <NavLink to="/">New Arrivals</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block ">
              <NavLink to="/men">Trending Now</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block ">
              <NavLink to="/baby">Shop By Ocassion</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block ">
              <NavLink>Shop By Product</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block ">
              <NavLink>Gifting</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block ">
              <NavLink>Magazine</NavLink>
            </li>
            <li className="pt-2.5 px-2.5 pb-1.5 hidden sm:block ">
              <NavLink>Sustainability</NavLink>
            </li>
          </ul>
        </div>
      </section>

      <section className=" flex lg:flex-row md:flex-row flex-col md:gap-6 gap-6 lg:gap-8 pb-14 justify-center items-center ">
        <div className="hidden sm:block lg:w-[500px] lg:h-[1705px] md:w-[300px] md:h-[1300px] lg:flex md:flex gap-3 flex-col">
          <div className="flex gap-3  ">
            <img
              src="/images/product1.png"
              className="lg:w-[244px]  lg:h-[505px] md:h-[304px] md:w-[150px] h-[280px]"
              alt=""
            />
            <img
              src="/images/product2.png"
              className="lg:w-[244px]  lg:h-[505px] md:h-[304px] md:w-[150px] h-[280px]"
              alt=""
            />
          </div>
          <div className="flex gap-3">
            <img
              src="/images/product3.png"
              className="lg:w-[244px]  lg:h-[505px] md:h-[304px] md:w-[150px] h-[280px]"
              alt=""
            />
            <img
              src="/images/product4.png"
              className="lg:w-[244px]  lg:h-[505px] md:h-[304px] md:w-[150px] h-[280px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="/images/product5.png"
              className="w-[663px] h-[332px]"
              alt=""
            />
            <img
              src="/images/product6.png"
              className="w-[663px] h-[332px]"
              alt=""
            />
          </div>
        </div>
        <div className=" lg:w-[500px] lg:h-[1705px] md:w-[400px] md:h-[1300px]  p-5  bg-[#E8E8E86E]">
          <div className="md:hidden lg:hidden pb-4 flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`Product ${currentIndex + 1}`}
                className="w-full h-auto"
              />
              <button
                className="absolute left-0 p-2 bg-gray-700 text-white rounded-full"
                onClick={prevImage}
              >
                <IoIosArrowBack size={24} />
              </button>
              <button
                className="absolute right-0 p-2 bg-gray-700 text-white rounded-full"
                onClick={nextImage}
              >
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between pb-8">
              <div>
                <p className="text-sm font-bold">OVERSIZED DENIM SHIRT</p>
                <p className="text-sm font-medium">$300.00</p>
              </div>
              <CiHeart />
            </div>
            <div className="pb-8">
              <p className="text-sm pb-4">Light Beige</p>
              <div className="flex gap-4">
                <img
                  src="/images/cloth1.png"
                  className="lg:h-[70px] md:h-[60px]"
                  alt="cloth"
                />
                <img
                  src="/images/cloth2.png"
                  className="lg:h-[70px] md:h-[60px]"
                  alt="cloth"
                />
              </div>
            </div>
            <div className="pb-8">
              <p className="text-sm pb-4">Sizes</p>
              <div className="flex flex-wrap gap-4">
                <p className="text-[#001F3FCC] w-[122px] bg-white h-[54px] border pt-3 text-center">
                  XS
                </p>
                <p className="text-[#001F3FCC] w-[122px] bg-white h-[54px] border pt-3 text-center">
                  S
                </p>
                <p className="text-[#001F3FCC] w-[122px] bg-white h-[54px] border pt-3 text-center">
                  M
                </p>
                <p className="text-[#001F3FCC] w-[122px] bg-white h-[54px] border pt-3 text-center">
                  L
                </p>
                <p className="text-[#001F3FCC] w-[122px] bg-white h-[54px] border pt-3 text-center">
                  XL
                </p>
                <p className="text-[#001F3FCC] w-[122px] bg-white h-[54px] border pt-3 text-center">
                  XXL
                </p>
              </div>
            </div>
            <div className="pb-8">
              <p className="text-sm pb-4">Size Guide</p>
              <button className="bg-[#001F3F] flex justify-center items-center gap-3  h-[48px] lg:w-[420px] md:w-[350px] w-[320px]  text-white">
                <PiShoppingBagBold /> Add To Cart
              </button>
              <p className="text-[#FF200A] lg:text-xs md:text-[10px] text-xs flex flex-col text-center">
                Member get 20% off every item for their first time delivery{" "}
                <span>over $40. Not A member yet? Join Now</span>
              </p>
            </div>
            <div className="pb-10">
              <div className="flex gap-4 text-center items-center text-sm pb-4">
                <PiBagBold />
                <p className="text-sm font-bold">Find Store</p>
              </div>
              <p className="lg:text-xs text-xs md:text-[10px] font-thin pl-8">
                Member get 20% off every item for their first time delivery over
                $40. Not A member yet? Join Now
              </p>
            </div>
            <div className="text-center font-semibold text-sm pb-4">
              <p>Delivery And Payment</p>
            </div>
            <div className="flex items-center gap-1 pb-4 text-xs">
              <FaStar className="text-[#0084FE]" />
              <FaStar className="text-[#0084FE]" />
              <FaStar className="text-[#0084FE]" />
              <FaStar className="text-[#0084FE]" />
              <FaStar className="text-[#303D5DB8]" />
              <p>(23 Reviews)</p>
            </div>
            <div className="text-xs pb-4">
              <p className="pb-4 font-extralight">True Size</p>
              <div className="flex justify-between gap-3">
                <div className="flex flex-1 border-t-2 font-extralight border-[#001F3F] pt-2 justify-between">
                  <p>Small</p>
                  <p>Spot On</p>
                </div>
                <div className="flex-1 border-t-2 font-extralight border-[#001F3F] pt-2 text-end">
                  <p>Large</p>
                </div>
              </div>
            </div>
            <div className="text-xs pb-6">
              <p className="pb-4 font-extralight">Length</p>
              <div className="flex justify-between gap-3">
                <div className="flex flex-1 border-t-2 font-extralight border-[#001F3F] pt-2 justify-between">
                  <p>Small</p>
                  <p>Spot On</p>
                </div>
                <div className="flex-1 border-t-2 font-extralight border-[#001F3F] pt-2 text-end">
                  <p>Large</p>
                </div>
              </div>
            </div>
            <div className="flex text-xs font-extralight justify-between border-t-2 py-2">
              <p>Description & Fit</p>
              <MdKeyboardArrowDown />
            </div>
            <div className="flex text-xs font-extralight justify-between border-t-2 py-2">
              <p>Care Guide</p>
              <MdKeyboardArrowDown />
            </div>
            <div className="flex text-xs font-extralight justify-between border-t-2 py-2">
              <p>Materials</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:p-32 md:p-14 sm:block hidden">
        <div className="pb-6 text-sm font-black">
          <p>ENHANCE YOUR LOOK WITH</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 sm:gap-5">
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe1.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe1.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe3.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe4.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe5.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe6.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe7.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/shoe8.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:p-32 md:p-14  sm:block hidden">
        <div className="pb-6 text-sm font-black">
          <p>YOU MAT ALSO FIND THIS APPEALING</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 sm:gap-5">
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              {" "}
              <Link to="/product"></Link>
              <img
                src="/images/womenshopnow1.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>
            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>

                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow2.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow3.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow4.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow5.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow6.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow7.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
          <div className="sm:h-[502px] w-[161px] h-[305px] sm:w-[232px] relative">
            <Link to="/product">
              <img
                src="/images/womenshopnow8.png"
                className="sm:h-[437px] h-[237px]  w-[161px] sm:w-[232px] pb-2"
                alt=""
              />
            </Link>

            <div className="w-[20px] h-[18px] absolute sm:top-[397px] top-[178px] left-[137px] sm:left-[195px]">
              <FiHeart />
            </div>
            <div className="flex justify-between  items-center">
              <div>
                <p className="sm:text-xs text-[7.6px] font-bold pb-2">
                  Oversized denim shirt
                </p>
                <div className="flex gap-0 w-8">
                  <GoDotFill className="text-[#e7e5e4]" />
                  <GoDotFill />
                  <GoDotFill className="text-[#ea580c]" />
                  <GoDotFill />
                </div>
                <p className="sm:text-[10px] text-[6.3px]">$300.00</p>
              </div>
              <p className="sm:text-[10px] text-[6.3px] font-black">
                New Arrival
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Product;
