'use client';
import { useState } from 'react';
import Link from 'next/link';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">Hostel Enclave</Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="text-white block lg:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
        {/* Menu links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent`}
        >
          <Link href="/hostels" className="text-gray-300 hover:text-white block lg:inline-block p-2">
            See Hostels
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white block lg:inline-block p-2">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white block lg:inline-block p-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
