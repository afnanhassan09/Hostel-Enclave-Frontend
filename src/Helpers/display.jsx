import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import HostelCard from "./show";
import MenuBar from "./menu";

const HostelDisplayPage = () => {
  const [hostels, setHostels] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await fetch(`https://hostel-enclave.onrender.com/hostels`);
        const data = await response.json();
        console.log(data);
        setHostels(data);
        setFilteredHostels(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hostel details:', error);
        setLoading(false);
      }
    };

    fetchHostelDetails();
  }, []);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const searchResults = hostels.filter((hostel) =>
      hostel.hostelName.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredHostels(searchResults);
  };

  const handleFilter = (filters) => {
    let filteredArray = [...hostels];

    if (filters.priceRange === 'High') {
      filteredArray.sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (filters.priceRange === 'Low') {
      filteredArray.sort((a, b) => a.startingPrice - b.startingPrice);
    }

    setFilteredHostels(filteredArray);
  };

  return (
    <div>
      <MenuBar />
      <div className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : (
            filteredHostels.length > 0 ? (
              filteredHostels.map((hostel, index) => (
                <HostelCard key={index} hostel={hostel} />
              ))
            ) : (
              <p>No hostels found.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HostelDisplayPage;
