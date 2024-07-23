import React from 'react';

const Subscription = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className="bg-blue-600 text-white rounded-lg p-8 flex items-center justify-between space-x-11">
      <div>
        <h2 className="text-2xl font-bold">Join and get amazing discount</h2>
        <p className="text-gray-200">With our responsive themes and mobile and desktop apps</p>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 rounded-lg text-gray-700 focus:outline-none"
        />
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">Subscribe</button>
      </div>
    </div>
    </div>
  );
};

export default Subscription;