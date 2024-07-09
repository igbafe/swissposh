import React from "react";
import Navbar from "../components/Navbar";
import { FaRegHeart } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";

function ShoppingBag() {
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
      <div>
        <div className="block sm:hidden">
          <div className="flex h-[55px] text-center ">
            <div className="flex-1 flex items-center justify-center text-white text-center sm:text-xs text-[8px] bg-black">
              <p>UP TO 50% OFF FRESH FINDS</p>
            </div>
            <div className="flex-1 flex items-center justify-center text-center text-[#001F3FB2] sm:text-xs text-[8px] bg-white">
              <p>FREE WORLDWIDE DELIVERY</p>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="flex h-[55px] justify-center  items-center bg-[#001F3F] text-white">
            <div className="flex h-full border-r-2 flex-1">
              <p className="flex flex-1 gap-1 sm:h-full justify-center  items-center">
                {" "}
                SORT BY <MdOutlineKeyboardArrowDown />
              </p>
            </div>
            <div className="flex h-full flex-1 ">
              <p className="flex flex-1 gap-1 justify-center sm:h-full items-center">
                FILTER
                <MdOutlineKeyboardArrowDown />
              </p>
            </div>
          </div>
        </div>

        <div className="pt-7 pb-5">
          <p className="text-2xl font-black text-center text-[#001F3F]">CART</p>
        </div>

        <div className="flex justify-center md:flex-col lg:items-start items-center lg:flex-row flex-col gap-6 pb-7">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="">
              <div className="bg-[#001F3F17] max-md:p-3 sm:flex-row flex-col flex gap-3 items-center h-[456px] w-[327px] sm:h-[187px] sm:w-[576px]">
                <img
                  src="/images/image 37.png"
                  className="sm:[h-217px] w-[161px]"
                  alt="image"
                />
                <div className="flex flex-col text-[10px] pt-3 gap-2">
                  <div className="flex justify-between">
                    <div className="flex sm:max-w-full max-w-32  flex-col pb-3 gap-3 text-xs">
                      <p className="">Member Get 20% Off Every item</p>
                      <p>$300</p>
                    </div>
                    <div className=" block sm:hidden">
                      <div className=" flex gap-3 text-center">
                        <div className="bg-white h-6 w-8 flex justify-center  items-center">
                          {" "}
                          <FaRegHeart />
                        </div>
                        <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                          <p>2</p>
                          <MdKeyboardArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 pb-3">
                    <div className="flex gap-2 flex-col">
                      <p>Art No</p>
                      <p>Color</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>116673345290</p>
                      <p>Brown</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>Size</p>
                      <p>Total</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>S</p>
                      <p>$300.00</p>
                    </div>
                  </div>
                  <div className=" sm:block hidden">
                    <div className=" flex gap-3 text-center">
                      <div className="bg-white h-6 w-8 flex justify-center  items-center">
                        {" "}
                        <FaRegHeart />
                      </div>
                      <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                        <p>2</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#001F3F17] max-md:p-3 sm:flex-row flex-col flex gap-3 items-center h-[456px] w-[327px] sm:h-[187px] sm:w-[576px]">
                <img
                  src="/images/shoppingbag2.png"
                  className="sm:[h-217px] w-[161px]"
                  alt="image"
                />
                <div className="flex flex-col text-[10px] pt-3 gap-2">
                  <div className="flex justify-between">
                    <div className="flex sm:max-w-full max-w-32  flex-col pb-3 gap-3 text-xs">
                      <p className="">Member Get 20% Off Every item</p>
                      <p>$300</p>
                    </div>
                    <div className=" block sm:hidden">
                      <div className=" flex gap-3 text-center">
                        <div className="bg-white h-6 w-8 flex justify-center  items-center">
                          {" "}
                          <FaRegHeart />
                        </div>
                        <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                          <p>2</p>
                          <MdKeyboardArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 pb-3">
                    <div className="flex gap-2 flex-col">
                      <p>Art No</p>
                      <p>Color</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>116673345290</p>
                      <p>Brown</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>Size</p>
                      <p>Total</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>S</p>
                      <p>$300.00</p>
                    </div>
                  </div>
                  <div className=" sm:block hidden">
                    <div className=" flex gap-3 text-center">
                      <div className="bg-white h-6 w-8 flex justify-center  items-center">
                        {" "}
                        <FaRegHeart />
                      </div>
                      <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                        <p>2</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#001F3F17] max-md:p-3 sm:flex-row flex-col flex gap-3 items-center h-[456px] w-[327px] sm:h-[187px] sm:w-[576px]">
                <img
                  src="/images/shoppingbag3.png"
                  className="sm:[h-217px] w-[161px]"
                  alt="image"
                />
                <div className="flex flex-col text-[10px] pt-3 gap-2">
                  <div className="flex justify-between">
                    <div className="flex sm:max-w-full max-w-32  flex-col pb-3 gap-3 text-xs">
                      <p className="">Member Get 20% Off Every item</p>
                      <p>$300</p>
                    </div>
                    <div className=" block sm:hidden">
                      <div className=" flex gap-3 text-center">
                        <div className="bg-white h-6 w-8 flex justify-center  items-center">
                          {" "}
                          <FaRegHeart />
                        </div>
                        <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                          <p>2</p>
                          <MdKeyboardArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 pb-3">
                    <div className="flex gap-2 flex-col">
                      <p>Art No</p>
                      <p>Color</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>116673345290</p>
                      <p>Brown</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>Size</p>
                      <p>Total</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>S</p>
                      <p>$300.00</p>
                    </div>
                  </div>
                  <div className=" sm:block hidden">
                    <div className=" flex gap-3 text-center">
                      <div className="bg-white h-6 w-8 flex justify-center  items-center">
                        {" "}
                        <FaRegHeart />
                      </div>
                      <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                        <p>2</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#001F3F17] max-md:p-3 sm:flex-row flex-col flex gap-3 items-center h-[456px] w-[327px] sm:h-[187px] sm:w-[576px]">
                <img
                  src="/images/shoppingbag4.png"
                  className="sm:[h-217px] w-[161px]"
                  alt="image"
                />
                <div className="flex flex-col text-[10px] pt-3 gap-2">
                  <div className="flex justify-between">
                    <div className="flex sm:max-w-full max-w-32  flex-col pb-3 gap-3 text-xs">
                      <p className="">Member Get 20% Off Every item</p>
                      <p>$300</p>
                    </div>
                    <div className=" block sm:hidden">
                      <div className=" flex gap-3 text-center">
                        <div className="bg-white h-6 w-8 flex justify-center  items-center">
                          {" "}
                          <FaRegHeart />
                        </div>
                        <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                          <p>2</p>
                          <MdKeyboardArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 pb-3">
                    <div className="flex gap-2 flex-col">
                      <p>Art No</p>
                      <p>Color</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>116673345290</p>
                      <p>Brown</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>Size</p>
                      <p>Total</p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <p>S</p>
                      <p>$300.00</p>
                    </div>
                  </div>
                  <div className=" sm:block hidden">
                    <div className=" flex gap-3 text-center">
                      <div className="bg-white h-6 w-8 flex justify-center  items-center">
                        {" "}
                        <FaRegHeart />
                      </div>
                      <div className="bg-white flex justify-between items-center h-[25px] p-2 w-[60px]">
                        <p>2</p>
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:h-[597px] h-[489px] w-[322px] sm:w-[504px] bg-[#001F3F17]">
            <div className="p-5 flex flex-col text-xs gap-4">
              <div className="pb-3 text-base font-bold">
                <p>ORDER SUMMARY</p>
              </div>
              <div className="flex flex-col gap-3 p-2 border-b-2 ">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$1200.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>$100.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>Calculated In Checkout</p>
                </div>
              </div>
              <div className="flex justify-between p-2 pb-2 border-b-2">
                <p>PromoCode</p>
                <MdKeyboardArrowDown />
              </div>
              <div className="flex pb-2 justify-between">
                <p>Estimated Total </p>
                <p>$1300.00</p>
              </div>
              <div className="items-center text-white text-center">
                <button className="bg-[#001F3F] p-3 text-xs w-[231px] sm:w-[282px]">
                 <Link to="/checkout">  Proceed To Checkout</Link>
                </button>
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

export default ShoppingBag;
