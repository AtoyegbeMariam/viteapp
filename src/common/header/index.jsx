import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div
      className="bg-black w-full flex justify-between items-center px-[40px] text-[25px]
     text-white md:text-[18px] sm:flex-col py-[30px] sticky top-0 z-50"
    >
      <div className="flex gap-[20px] items-center">
        <img src={logo} alt="" className="h-[50px] rounded-full" />
        <p className="font-bold sm:hidden">Children</p>
      </div>
      <div>
        <ul className="flex justify-between gap-[40px] px-[50] sm:flex-col sm:gap-[10px] sm:mt-[10px]">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
