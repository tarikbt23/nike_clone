import React, { useState } from 'react';
import ReviewedReviews from './reviewedReviews';
import PendingReviews from './pendingReviews';

const Home = () => {
  const [view, setView] = useState('reviewed');

  return (
    <div className="p-4 bg-white font-sans md:px-32 lg:px-64">
      <div className="p-4 border rounded-md">
        <h1 className="text-2xl mb-6">Değerlendirmelerim</h1>
        <div className="flex mb-6">
          <button
            className={`px-2 py-1 mr-4 rounded-2xl ${view === 'pending' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setView('pending')}
          >
            Değerlendirilmemiş
          </button>
          <button
            className={`px-2 py-1 rounded-2xl ${view === 'reviewed' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setView('reviewed')}
          >
            Değerlendirilmiş
          </button>
        </div>
        {view === 'reviewed' ? <ReviewedReviews/> : <PendingReviews/>}
      </div>
    </div>
  );
};

export default Home;
