import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from './menu';
import { FaCheck, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HostelDetail = () => {
  const { id } = useParams();
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await fetch(`https://hostel-enclave.onrender.com/hostel/${id}`);
        const data = await response.json();
        setHostel(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hostel details:', error);
        setLoading(false);
      }
    };

    fetchHostelDetails();
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hostel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + hostel.images.length) % hostel.images.length);
  };

  if (loading) {
    return <div>Loading hostel details...</div>;
  }

  if (!hostel) {
    return <div>Hostel not found</div>;
  }

  return (
    <>
      <MenuBar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">{hostel.hostelName}</h1>

        <div className="relative w-full h-64 mb-6">
          {hostel.images.length > 0 ? (
            <>
              <img
                src={hostel.images[currentImageIndex]}
                alt={hostel.hostelName}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full"
              >
                <FaArrowRight />
              </button>
            </>
          ) : (
            <p className="text-center">No images available</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Details</h2>
          <p className="text-gray-600">{hostel.description}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Amenities</h2>
          <ul>
            {Object.entries(hostel).map(([key, value]) => {
              if (typeof value === 'boolean') {
                return (
                  <li key={key} className="flex items-center my-1">
                    {value ? <FaCheck className="text-green-500 mr-2" /> : <FaTimes className="text-red-500 mr-2" />}
                    <span className="text-gray-600 capitalize">{key}</span>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Hostel Contact</h3>
          <p className="text-gray-600"><strong>Address:</strong> {hostel.hostelAddress}</p>
          <p className="text-gray-600"><strong>Sector:</strong> {hostel.sector}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Owner Details</h3>
          <p className="text-gray-600"><strong>Name:</strong> {hostel.owner}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {hostel.phone}</p>
          <p className="text-gray-600">
            <strong>Email:</strong> <a href={`mailto:${hostel.email}`} className="text-blue-500">{hostel.email}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default HostelDetail;
