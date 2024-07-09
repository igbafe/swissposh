import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";

function Men() {
  return (
    <div>
      <Navbar />
      <nav>
        <ul className="flex justify-center gap-[37px] h-[55px]  text-white items-center  text-[12px] bg-[#001F3F9E]">
        <li className=" block sm:hidden text-xs font-bold">MEN</li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block  ">
            <NavLink to="/">Women</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block border-b-2 ">
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

      <div className="flex flex-col h-[104px] bg-[#001F3F] text-white justify-center items-center ">
        <p className="sm:font-black font-bold sm:text-lg text-[12px]">UP TO 50% OFF FRESH FINDS</p>
        <p className="sm:text-xs text-[8px] font-medium">
          members get free delivery over every $30 and free returns
        </p>
      </div>

      <div className="relative  pb-4">
        <img src="/images/image 29.png" className="sm:h-[702px] h-[407px] w-full" alt="image" />
        <div className="sm:h-[148px] h-[107px] absolute flex flex-col justify-center bg-[#001F3F9E] items-center sm:top-[554px] top-[300px] w-full text-white gap-5 text-center">
          <p className="sm:text-xs text-[8.6px]">NEW ARRIVALS</p>
          <p className="font-black text-[10px] sm:text-lg">UP TO 50% OFF FRESH FINDS</p>
          <button className=" text-black bg-white sm:p-[13px] p-[8.5px] sm:w-[115px] w-[73px] text-[10px] sm:text-[16px]">
            <Link to="/shopnowmen">SHOP NOW</Link>
          </button>
        </div>
      </div>

      <div className="flex justify-center relative pb-4">
        <img src="/images/men1.png" className=" h-[407px] sm:h-[524px] sm:w-[327px] w-[164px]" alt="image-2" />
        <img src="/images/men2.png" className=" h-[407px] sm:h-[524px] sm:w-[327px] w-[164px]" alt="image-2" />
        <div className="h-[148px] absolute flex flex-col justify-center items-center sm:top-[356px] top-[278px] w-full text-white gap-5 text-center">
          <p className="sm:text-xs text-[8.5px]">NEW ARRIVALS</p>
          <p className="font-black sm:[text-lg] text-[10px]">UP TO 50% OFF FRESH FINDS</p>
          <button className=" text-black bg-white sm:p-[13px] p-[8.5px] sm:w-[115px] w-[73px] text-[10px] sm:text-[16px]">
            <Link to="/shopnowmen">SHOP NOW</Link>
          </button>
        </div>
      </div>

      <div className="flex justify-center relative pb-4">
        <img src="/images/men3.png" className=" h-[407px] sm:h-[524px] sm:w-[327px] w-[164px]" alt="image-2" />
        <img src="/images/men4.png" className=" h-[407px] sm:h-[524px] sm:w-[327px] w-[164px]" alt="image-2" />
        <div className="h-[148px] absolute flex flex-col justify-center items-center sm:top-[356px] top-[278px] w-full text-white gap-5 text-center">
          <p className="sm:text-xs text-[8.5px]">NEW ARRIVALS</p>
          <p className="font-black sm:[text-lg] text-[10px]">UP TO 50% OFF FRESH FINDS</p>
          <button className=" text-black bg-white sm:p-[13px] p-[8.5px] sm:w-[115px] w-[73px] text-[10px] sm:text-[16px]">
            <Link to="/shopnowmen">SHOP NOW</Link>
          </button>
        </div>
      </div>

      <div className="pb-4">
        <div className="h-[104px] text-white flex flex-col justify-center text-center bg-[#5D7287]">
          <p className="sm:text-2xl text-[13.7px] font-black">UP TO 50% OFF FRESH FUNDS</p>
          <p className="sm:text-xs text-[6.85px] font-medium">
            members get free delivery over every $30 and free returns
          </p>
        </div>
      </div>

      <div className="flex justify-center relative pb-4">
        <img src="/images/image 30.png" className="sm:h-[515px] h-[407px] sm:w-[678px] w-[327px]" alt="" />
        <div className="h-[148px] absolute flex flex-col justify-center items-center sm:top-[356px] top-[278px] w-full text-white gap-5 text-center">
          <p className="sm:text-xs text-[8.5px]">NEW ARRIVALS</p>
          <p className="font-black sm:[text-lg] text-[10px]">UP TO 50% OFF FRESH FINDS</p>
          <button className=" text-black bg-white sm:p-[13px] p-[8.5px] sm:w-[115px] w-[73px] text-[10px] sm:text-[16px]">
            <Link to="/shopnowmen">SHOP NOW</Link>
          </button>
        </div>
      </div>

      <div className="flex justify-center relative pb-4">
        <img src="/images/image 31.png" className="sm:h-[515px] h-[407px] sm:w-[678px] w-[327px]" alt="" />
        <div className="h-[148px] absolute flex flex-col justify-center items-center sm:top-[356px] top-[278px] w-full text-white gap-5 text-center">
          <p className="sm:text-xs text-[8.5px]">NEW ARRIVALS</p>
          <p className="font-black sm:[text-lg] text-[10px]">UP TO 50% OFF FRESH FINDS</p>
          <button className=" text-black bg-white sm:p-[13px] p-[8.5px] sm:w-[115px] w-[73px] text-[10px] sm:text-[16px]">
            <Link to="/shopnowmen">SHOP NOW</Link>
          </button>
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Men;
