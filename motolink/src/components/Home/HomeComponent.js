import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import HomeBikeImage from './HomeBike.png';

const HomeComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (!role) {
      navigate('/login');
    } else if (role === 'admin') {
      navigate('/admin/');
    }
  }, [navigate]);

  const handleExploreMore = () => {
    navigate('/models');
  };

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center h-full relative">
        <div
          className="absolute font-bold z-10 text-white"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px white',
            fontSize: '10vw', // Responsive font size
            maxWidth: '90%',  // Prevents overflow on smaller screens
            textAlign: 'center',
          }}
        >
          MotoLink
        </div>
        <img src={HomeBikeImage} alt="Home Bike" className="h-4/6 z-0 max-w-full" />
        <button
          onClick={handleExploreMore}
          className="bg-red-700 text-white text-xl md:text-2xl px-4 py-2 md:px-5 md:py-2 rounded-lg mt-4 z-10"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
