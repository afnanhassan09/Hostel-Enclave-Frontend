// pages/hostels.js
'use client'
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { useEffect,useState } from "react";
import hostelsData from "@/components/data";
import HostelCard from "@/components/show";

const HostelDisplayPage = () => {

  let [hostels, setHostels] = useState([]);
  const handleSearch = (query) => {
    const array = hostelsData
    const lowerCaseQuery = query.toLowerCase();
    const newarr  = array.filter(item => item.hostelName.toLowerCase().includes(lowerCaseQuery));
   
    setHostels(newarr);

  };

  const handleFilter = (filters) => {
    let filteredArray = [...hostels];
    console.log(filters); 
  
      if (filters.priceRange == 'High') {
        // Sort by price high to low
        filteredArray.sort((a, b) => b.startingPrice - a.startingPrice);
      }
  
      if (filters.priceRange == 'Low') {
        // Sort by price low to high
        filteredArray.sort((a, b) => a.startingPrice - b.startingPrice);
      }

  
      console.log(filteredArray);
      setHostels(filteredArray);

  };
   
  useEffect(() => {
    setHostels(hostelsData);
  
  }, [])

  return (
 
    
    <div>
 
      <div className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
        <div className="mt-8 grid grid-cols-3 gap-4 ">
        {hostels.length > 0 ? (
            hostels.map((hostel, index) => (
              <HostelCard key={index} hostel={hostel} />
            ))
          ) : (
            <p>No hostels found.</p>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default HostelDisplayPage;
