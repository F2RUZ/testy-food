import React, { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-extrabold text-red-600">
            Fast Food Page
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#" className="text-green-500">
              Home
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Menu
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Shop
            </a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5 text-gray-700">
            <Search className="cursor-pointer hover:text-red-500 transition-colors" />
            <User className="cursor-pointer hover:text-yellow-500 transition-colors" />
            <ShoppingCart className="cursor-pointer hover:text-green-500 transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 font-semibold shadow-inner">
          <a href="#" className="block text-green-500">
            Home
          </a>
          <a href="#" className="block hover:text-red-500 transition-colors">
            Menu
          </a>
          <a href="#" className="block hover:text-yellow-500 transition-colors">
            About
          </a>
          <a href="#" className="block hover:text-orange-500 transition-colors">
            Shop
          </a>
          <div className="flex space-x-5 pt-2 text-gray-700">
            <Search className="cursor-pointer hover:text-red-500 transition-colors" />
            <User className="cursor-pointer hover:text-yellow-500 transition-colors" />
            <ShoppingCart className="cursor-pointer hover:text-green-500 transition-colors" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
