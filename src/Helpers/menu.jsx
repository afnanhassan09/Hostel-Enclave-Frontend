import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // You'll need to install react-icons if you haven't already

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">Hostel Enclave</Link>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaBars />
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} `}>
          <Link to="/hostels" className="text-gray-300 hover:text-white block md:inline-block px-4 py-2 border border-gray-300 rounded">
            Hostels
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white block md:inline-block px-4 py-2 border border-gray-300 rounded">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
