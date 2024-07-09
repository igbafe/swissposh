import React from "react";
import Navbar from "../components/Navbar";
import { FaCheck } from "react-icons/fa6";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Navbar />
      <nav>
        <ul className="flex justify-center gap-[37px] h-[55px]  text-white items-center  text-[12px] bg-[#001F3F9E]">
        <li className=" block sm:hidden text-xs font-bold">WOMEN</li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block  border-b-2">
            <NavLink to="/">Women</NavLink>
          </li>
          <li className="pt-2.5 px-2.5 pb-1.5 lg:text-sm md:text-[10px] text-[8px] hidden sm:block ">
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
      <div className="pt-5 font-black text-2xl max-md:text-lg pb-5 text-center">
        <p>CHECKOUT</p>
      </div>
      <div className="pb-10" >
        <div className="lg:flex-row flex-col flex items-center lg:items-start gap-4 justify-center">
          <div className="h-[565px] w-[680px] max-md:h-[443px] max-md:w-[327px] border  ">
            <h1 className="pb-5 h-[46px] pl-5 pt-3 text-xs font-black bg-black text-white">
              YOUR INFORMATION
            </h1>
            <form action="" className="flex flex-col max-md:gap-2 gap-4 max-md:p-4 p-6">
              <h1 className="text-xs max-md:text-[10px] font-medium">Email Address</h1>
              <p className="text-xs max-md:text-[10px] font-medium">wakaooluwajuwon@watlook.com</p>
              <div>
                <label className="text-xs max-md:text-[10px]" htmlFor="password">
                  Password *
                </label>
                <input type="text max-md:text-[10px]" className="border h-10 w-[610px] max-md:w-[297px]" />
              </div>
              <div>
                <label className="text-xs max-md:text-[10px]" htmlFor="password">
                  First Name *
                </label>
                <input type="text" className="border h-10 w-[610px] max-md:w-[297px]" />
              </div>
              <div>
                <label className="text-xs max-md:text-[10px]" htmlFor="password">
                  Last Name *
                </label>
                <input type="text" className="border h-10 w-[610px] max-md:w-[297px]" />
              </div>
              <div>
                <label className="text-xs max-md:text-[10px]" htmlFor="password">
                  Phone Number *
                </label>
                <input type="text" className="border h-10 w-[610px] max-md:w-[297px]" />
              </div>
              <div className="flex gap-2 text-xs max-md:text-[10px] text-center items-center">
                <div className="h-[17px] max-md:h-[15px]  w-[17px] max-md:w-[15px] bg-black text-white">
                  <FaCheck />
                </div>
                <p >wakaooluwajuwon@watlook.com</p>
              </div>
            </form>
          </div>
          <div className="w-[456px]  max-md:h-[443px] max-md:w-[327px] h-[505px] border">
            <div>
              <h1 className="pb-5 h-[46px] pl-5 pt-3 text-xs font-black bg-black text-white">ORDER INFORMATION</h1>
              <div className="p-5">
                <div className=" flex justify-between pb-4 max-md:text-[10px] text-xs border-b-2">
                  <p>Discount</p>
                  <p>Apply Discount</p>
                </div>
                <div className="flex justify-between max-md:text-[10px] pb-4 text-xs pt-3" >
                  <p>Total Price</p>
                  <p>$1200.00</p>
                </div>
                <div className=" flex justify-between max-md:text-[10px] pb-4 text-xs border-b-2">
                  <p>Delivery</p>
                  <p>$400.00</p>
                </div>
                <div className="flex justify-between max-md:text-[10px] pb-5 text-xs pt-3">
                  <p>Total</p>
                  <p>$1600.00</p>
                </div>
                <div className="text-xs max-md:text-[10px] max-w-[400px] pb-4">
                  <p>
                    By continuing, You agree To SWISSPOSH General Terms and
                    Conditions. We will process your personal data in accordance
                    with the H&Ms Privacy Notice.
                  </p>
                </div>
                <div className="text-xs max-md:text-[10px] text-center bg-[#E4E4E4] items-center">
                  <button className=" w-[403px] max-md:w-[249px] h-[38px]">Proceed To Payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Checkout;
