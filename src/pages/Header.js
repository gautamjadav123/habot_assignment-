import React, { useState } from "react";
import logo from "../photos/habot-logo.jpg";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center py-2 px-4 border-b-4 border-blue-500">
      <img className="h-20 logo-image" src={logo} alt="Logo" />
      <div className="flex space-x-4 text-gray-600 ml-auto mr-5">
        <button className="hover:text-gray-900">Find Suppliers</button>
        <div className="relative">
          <button
            className="hover:text-gray-900 flex items-center"
            onClick={toggleDropdown}
          >
            Find Service Tags
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 3
              </a>
            </div>
          )}
        </div>
      </div>
      <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white mr-5">
        Login / Sign Up
      </button>
    </header>
  );
};

export default Header;
