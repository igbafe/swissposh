import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { PiShoppingBag } from "react-icons/pi";
import { HiMiniXMark } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

function Navbar() {
  const cartProducts = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {/* brand logo */}
      <div className="h-[70px] text-white text-center items-center justify-between flex px-[47px] bg-black">
        <div className="text-[12px] flex gap-5">
          <RxHamburgerMenu
            onClick={handleOpenModal}
            className="h-[22px] block sm:hidden w-[22px]"
          />
          <p className="text-[18px]  block sm:hidden font-bold">SWISSPOSH</p>
          <Link
            className="hidden lg:text-sm md:text-[10px] text-[8px] sm:block"
            to="/"
          >
            Customer Service
          </Link>
          <Link
            className="hidden lg:text-sm md:text-[10px] text-[8px] sm:block"
            to="/"
          >
            Store Locator
          </Link>
          <Link
            className="hidden lg:text-sm md:text-[10px] text-[8px] sm:block"
            to="/"
          >
            News Letter
          </Link>
        </div>
        <div>
          <p className="text-[18px] hidden sm:block font-bold">
            <Link to="/">SWISSPOSH</Link>
          </p>
        </div>
        <div className="text-[12px] flex gap-5">
          <FiHeart className="h-[20px] block sm:hidden w-[12px]" />
          <Link to="/shoppingBag">
            <PiShoppingBag className="h-[20px] block sm:hidden w-[12px]" />
          </Link>
          <Link
            className="hidden lg:text-sm md:text-[10px] text-[8px] sm:block"
            to="/signIn"
          >
            Sign in
          </Link>
          <Link
            className="hidden lg:text-sm md:text-[10px] text-[8px] sm:block"
            to="/favorites"
          >
            Favorites({cartProducts.length})
          </Link>
          <Link
            className="hidden lg:text-sm md:text-[10px] text-[8px] sm:block"
            to="/shoppingBag"
          >
            Cart 
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="block md:hidden h-[555px] font-black bg-[#001F3F] text-white ">
          <ul className="flex flex-col gap-6 pt-12 px-8">
            <li className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="text-[#F20000]">
                  <NavLink to="/">WOMEN</NavLink>
                </p>
                <p>
                  <NavLink to="/men">MEN</NavLink>
                </p>
              </div>
              <HiMiniXMark onClick={handleCloseModal} />
            </li>
            <li className="flex items-center  border-b-2 pb-3 justify-between">
              <p>NEW ARRIVAL</p>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p>TRENDING NOW</p>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p>SHOP BY OCCASION</p>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p>SHOP BY PRODUCT</p>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p>GIFTING</p>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p>MAGAZINE</p>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p>SUSTAINABILITY</p>
              <MdOutlineKeyboardArrowRight />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
