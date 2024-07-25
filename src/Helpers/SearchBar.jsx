// components/SearchBar.js

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full flex items-center space-x-4 p-4">
      <input
        type="text"
        placeholder="Search hostels..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
