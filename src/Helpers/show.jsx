// components/HostelCard.js
import React from 'react';


const HostelCard = ({ hostel }) => {
  console.log(hostel);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 drop-shadow-2xl ">
      
      <img className="w-full" src="https://www.shutterstock.com/image-photo/dark-bedroom-light-window-600nw-623484941.jpg" alt="Hostel" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{hostel.hostelName}</div>
        <p className="text-gray-700 text-base">{hostel.hostelAddress}</p>
        <p className="text-gray-700 text-base">Starting Price: PKR {hostel.startingPrice}</p>
        <ul className="mt-4">
          {hostel.Mess && <li>✔️ Mess: {hostel.Mess}</li>}
          <li>{hostel.Furnished ? '✔️ furnished' : '❌ not furnished'}</li>
          <li>{hostel.UPS ? '✔️ electricity backup' : '❌ no electricity backup'}</li>
          <li>{hostel.Parking ? `✔️ ${hostel.Parking} parking` : '❌ no parking'}</li>
          <li>{hostel.Kitchen ? '✔️ kitchen available' : '❌ kitchen not available'}</li>
          <li>{hostel.Geyser ? '✔️ geyser available' : '❌ geyser not available'}</li>
          <li>{hostel.AC ? '✔️ air conditioner available' : '❌ air conditioner not available'}</li>
          <li>{hostel.AirCooler ? '✔️ air cooler available' : '❌ air cooler not available'}</li>
          <li>{hostel.Laundry ? '✔️ washing machine available' : '❌ washing machine not available'}</li>
        </ul>
      </div> 
      <div className="px-6 pt-4 pb-2 flex justify-center items-center">
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl"  
        onClick={() => window.location.href = `/hostels/${hostel._id}`
        }
        
        >
          View Hostel
        </button>
      </div>
    </div>
  );
};

export default HostelCard;
