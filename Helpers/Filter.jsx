'use client'
// components/Filter.js
import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    if (onFilter) onFilter({ priceRange });
  };

  return (
    <div className="w-1/4 p-4">
      <label className="block mb-2">Price Range:</label>
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select</option>
        <option value="High">High to Low</option>
        <option value="Low">Low to High</option>
   
      </select>
      <button
        onClick={handleFilter}
        className="mt-4 px-4 py-2 bg-black text-white rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
