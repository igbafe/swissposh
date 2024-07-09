import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
       <div className="h-[70px] text-white text-center items-center justify-between flex px-[43px] bg-black">
        <div className="text-[12px] flex gap-5">
          <Link className='hidden sm:block lg:text-sm md:text-[10px] text-[8px] md:text-xs' to="/">Let Us Help You</Link>
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block' to="/">Get to Know Us</Link>
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block' to="/">Explore</Link>
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block' to="/">Coporate info</Link>
        </div>
        <div>
          <p className="lg:text-sm md:text-[10px] text-[8px] font-bold">SWISSPOSH 2024.All Right Reserved</p>
        </div>
        <div className="text-[12px] flex gap-5">
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block ' to="/signIn">Help</Link>
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block' to="/favorites">Privacy</Link>
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block' to="/shoppingBag">Shopping</Link>
          <Link className='hidden lg:text-sm md:text-[10px] text-[8px] sm:block' to="/">FAQs</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
