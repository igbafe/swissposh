import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* brand logo */}
      <div className="h-[70px] text-white text-center items-center justify-between flex px-[47px] bg-black">
        <div className="text-[12px] flex gap-5">
          <Link to="/">Customer Service</Link>
          <Link to="/">Store Locator</Link>
          <Link to="/">News Letter</Link>
        </div>
        <div>
          <p className="text-[18px] font-bold">SWISSPOSH</p>
        </div>
        <div className="text-[12px] flex gap-5">
          <Link to="/signIn">Sign in</Link>
          <Link to="/favorites">Favorites(o)</Link>
          <Link to="/shoppingBag">Shopping Bag</Link>
        </div>
      </div>

      {/* Navbar */}
      <nav >
       <ul className="flex justify-center gap-[37px] h-[55px]  text-white items-center  text-[12px] bg-[#001F3F9E]">
        <li className="pt-2.5 px-2.5 pb-1.5  border-b-2">
            <NavLink to="/">Women</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2">
            <NavLink to="/men">Men</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2"> 
            <NavLink to="/baby">Baby</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2">
            <NavLink>Kids</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2">
            <NavLink>Beauty</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2">
            <NavLink>Sports</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2">
            <NavLink>Sale</NavLink>
        </li>
        <li className="pt-2.5 px-2.5 pb-1.5  hover:border-b-2">
            <NavLink>Sustainability</NavLink>
        </li>
       </ul>
      </nav>
    </div>
  );
}

export default Navbar;
