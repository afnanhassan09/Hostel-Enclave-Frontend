// components/About.js
import React from 'react';
import MenuBar from './Helpers/menu';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MenuBar />
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">About Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Hostel Enclave! When we were freshmen at FAST University, we faced a significant challenge: finding suitable accommodation. Since our university doesn't provide hostels, we quickly realized that many students at FAST University struggle with the same issue. Motivated by this common problem, we decided to take action.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Now, in our fourth semester, we've developed a web app specifically designed to help students like us find the perfect hostel. Our platform simplifies the search process, providing a curated list of hostels that meet the needs and preferences of university students.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to create a seamless and efficient way for students to find safe, comfortable, and affordable hostels. We aim to build a trusted community where students can share their experiences and find accommodations that make their university life more enjoyable.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Are you a hostel owner looking to list your property on our platform? We'd love to hear from you! By joining our community, you'll connect with a vast network of students in search of the perfect place to call home.
          </p>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:hostelenclave@gmail.com" className="text-blue-500 hover:underline">hostelenclave@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;