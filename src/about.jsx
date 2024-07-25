// components/About.js
import React from 'react';
import MenuBar from './Helpers/menu';

const About = () => {
  return (
    <div>
      <MenuBar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to Hostel Enclave! We are dedicated to providing comfortable and affordable accommodation options for travelers. Our hostels are located in prime areas, making it easy for you to explore and enjoy your stay.
        </p>
        <p className="text-lg mb-4">
          Our mission is to ensure that every guest has a memorable and enjoyable experience. We offer a range of amenities and services to make your stay as pleasant as possible. Whether you're traveling for business or leisure, we've got you covered.
        </p>
        <p className="text-lg">
          Thank you for choosing Hostel Enclave. We look forward to welcoming you and making your stay unforgettable.
        </p>
      </div>
    </div>
  );
};

export default About;
