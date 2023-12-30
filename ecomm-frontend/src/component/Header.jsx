import React, { useState } from "react";
import logo from "../assets/ecom_ogo2.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  const handleMenuOpen = ()=>{
    setShowMenu(prev => !prev)
  }
   return (
    <header className="fixed shadow-md w-full  h-16 px-1 md:px-4 bg-[#353852] z-50">
      <div className="h-full flex items-center justify-between text-gray-100 ">
        <Link to={""}>
          <div className="h-12">
            <img className="h-full" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="flex flex-row items-center gap-4 md:gap-7">
          <nav className="flex flex-row gap-4 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-xl  relative">
            <FaCartShopping />
            <div className="absolute -top-1.5 -right-2 w-4 bg-red-600 h-4 text-sm text-center rounded-full p-0 m-0">0</div>
          </div>
          <div className="" >
            <FaUser onClick={handleMenuOpen} className="text-2xl" />
            {
              showMenu && 
              <div className="absolute bg-slate-500 py-2 top-12 right-2 px-2 text-center shadow drop-shadow-md">
              <Link to={"new-product"} className="whitespace-nowrap cursor-pointer flex">New Product</Link>
              <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
            </div>
            }
            
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
