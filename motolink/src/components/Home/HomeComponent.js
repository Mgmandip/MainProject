import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import HomeBikeImage from './HomeBike.png';

const HomeComponent = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/models');
  };

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="absolute font-bold z-10 text-white text-9xl" style={{ color: 'transparent', WebkitTextStroke: '2px white', fontSize: '160px' }}>
          MotoLink
        </div>
        <img src={HomeBikeImage} alt="Home Bike" className="h-4/6 z-0" />
        <button onClick={handleExploreMore} className="bg-red-700 text-white text-2xl px-5 py-2 rounded-lg mt-4 z-10">Explore More</button>
      </div>
    </div>
  );
};

export default HomeComponent;
