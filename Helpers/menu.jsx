// components/MenuBar.js
'use client'
import Link from  'react'


const MenuBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold" >
            <Link href="/"> Hostel Enclave</Link>
  
        </div>
        <div className="flex space-x-4 ">
          <Link href="/hostels" className="text-gray-300 hover:text-white">
          See Hostels
          </Link>
          <Link className="text-gray-300 hover:text-white" href="/about">
          About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
           Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
