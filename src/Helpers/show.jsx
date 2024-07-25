import React from 'react';

const HostelCard = ({ hostel }) => {
  console.log(hostel);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 drop-shadow-2xl cursor-pointer" onClick={() => window.location.href = `/hostels/${hostel._id}`}>
      <img
        className="w-full h-48 object-cover square-img"
        src={hostel.images[0]}
        alt="Hostel"
      />
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

      </div>
    </div>
  );
};

export default HostelCard;
