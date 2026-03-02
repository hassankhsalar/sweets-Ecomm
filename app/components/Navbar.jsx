"use client";
import React, { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { ReceiptText, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative h-30  bg-white px-6">
      {/* logo */}
      <img src="/logo.png" alt="logo" className="w-[80px] " />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li className="transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">
          <div className="relative md:flex hidden items-center">
            <input
              className="py-2.5 pr-74 dark:bg-transparent dark:border-slate-300 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border border-[#424242d2] pl-10 rounded-xl text-md outline-none focus:border-[#3B9DF8]"
              placeholder="Search for sweets,cookies"
            />
            <IoIosSearch className="absolute top-[15px] dark:text-slate-500 left-3 text-[#424242] text-[1.3rem]" />
          </div>
        </li>
      </ul>

      <div className="flex items-center gap-[10px]">
        <button className="flex gap-2 bg-red-500 px-4 py-3 rounded-xl">
          <ReceiptText className="text-[1.6rem] text-[#424242] dark:text-[#abc2d3] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
          Track Order
        </button>
        <button className="flex bg-red-900 py-2 px-3 rounded-xl">
          <ShoppingCart className="text-[1.6rem] text-[#424242] dark:text-[#abc2d3] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />
          0
        </button>

        <CiMenuFries
          className="text-[1.6rem] dark:text-[#abc2d3] text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white boxShadow p-4 text-center absolute dark:bg-slate-700 top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            Home
          </li>

          <li
            onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
            className="hover:text-[#3B9DF8] group dark:text-[#abc2d3] transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            About Us
            <IoIosArrowDown
              className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-gray-600 group-hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300`}
            />
          </li>


        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
