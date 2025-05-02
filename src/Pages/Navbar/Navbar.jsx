import React from 'react';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <navbar className="bg-black text-white flex justify-between items-center px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold tracking-wider">Portal del Terror</h1>
      </div>
      <nav className="flex items-center gap-4 text-lg">
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
      </nav>
    </navbar>
  );
};

export default Navbar;