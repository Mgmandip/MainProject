import React, { useEffect, useState } from 'react';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bikes/${id}`);
        setBike(response.data);
      } catch (error) {
        console.error('Error fetching bike details:', error);
      }
    };

    fetchBikeDetails();
  }, [id]);

  if (!bike) {
    return <div>Loading...</div>;
  }

  const handleCheckout = (id) => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-between h-full">
        <div className="bg-white bg-opacity-75 p-8 rounded-2xl shadow-lg h-64 w-1/3 flex items-center justify-center ml-64 mb-60">
          <div className="absolute top-28 left-72">
            <label className="block text-xs font-bold text-gray-800">Displacement</label>
            <label className="block text-sm font-bold text-gray-800">{bike.displacement || 'N/A'}</label>

            <label className="block text-xs font-bold text-gray-800 mt-3">Horse Power</label>
            <label className="block text-sm font-bold text-gray-800">{bike.horsepower || 'N/A'}</label>

            <label className="block text-xs font-bold text-gray-800 mt-3">Dry Weight</label>
            <label className="block text-sm font-bold text-gray-800">{bike.dryweight || 'N/A'}</label>

            <label className="block text-xs font-bold text-gray-800 mt-3">Seat Height</label>
            <label className="block text-sm font-bold text-gray-800">{bike.seatheight || 'N/A'}</label>

            <label className="block text-xs font-bold text-gray-800 mt-3">Safety</label>
            <label className="block text-sm font-bold text-gray-800">{bike.saftey || 'N/A'}</label>
          </div>

          <div className="absolute top-36 ml-52 text-center space-y-3">
            <label className="block text-2xl font-bold text-gray-700">{bike.name || 'N/A'}</label>
            <label className="block text-2xl font-bold text-gray-700">Rs. {bike.price || 'N/A'}</label>
            <button onClick={() => handleCheckout(bike._id)} className="bg-red-700 text-white text-xl font-semibold px-7 py-2 rounded-lg z-10">Proceed</button>
          </div>
        </div>
        <img src={bike.bikeImage} alt="Home Bike" className="h-80 mb-72 mr-28" />
      </div>
    </div>
  );
}

export default CartComponent;
