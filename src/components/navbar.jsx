import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCurrencyLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeSwitch from "./themeswitch";
import Avatar from "../assets/avatar.png"; // Ensure the correct path to the avatar image

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Transactions", path: "/transactions" },
  { name: "Accounts", path: "/accounts" },
  { name: "Settings", path: "/settings" },
];

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='w-full flex items-center justify-between py-6'>
      <div className='flex items-center gap-2 cursor-pointer'>
        <div className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl'>
          <RiCurrencyLine className='text-white text-3xl hover:animate-spin' />
        </div>
        <span className='text-xl font-bold text-black dark:text-white'>
          My-Finance
        </span>
      </div>

      <div className='hidden md:flex items-center gap-4'>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`${
              selected === index
                ? "bg-black dark:bg-slate-800 text-white"
                : "text-gray-700 dark:text-gray-500"
            } px-6 py-2 rounded-full`}
            onClick={() => setSelected(index)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className='flex items-center gap-10 2xl:gap-20'>
        <ThemeSwitch />
        <div className='flex items-center gap-2'>
          <img
            src={Avatar}
            alt='User'
            className='w-10 md:w-12 h-10 md:h-12 rounded-full object-cover cursor-pointer'
          />
          <div className='hidden md:block'>
            <p className='text-lg font-medium text-black dark:text-gray-400'>
              Mayur
            </p>
            <span className='text-sm text-gray-700 dark:text-gray-500'>
              mayur.patil.ac@gmail.com
            </span>
          </div>
          <div className="relative">
            <MdOutlineKeyboardArrowDown
              className="hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20">
                <li>
                  <a
                    className="dropdown-item block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    href="/settings"
                  >
                    MY ACCOUNT
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    href="/NewLogin"
                  >
                    NEW LOGIN
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider my-1 border-gray-200 dark:border-gray-600" />
                </li>
                <li>
                  <a
                    className="dropdown-item block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    href="/HelpSupport"
                  >
                    HELP & SUPPORT
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;