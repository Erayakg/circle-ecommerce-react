import React from 'react';
import OrderHistory from './OrderHistory';

const About = () => {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-700">John Doe</h1>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            Hi, I am John Doe. I am a software developer with a passion for creating innovative solutions.
          </p>
        </div>
      </div>
     
    </div>
     <OrderHistory/>
     </div>
  );
};

export default About;
