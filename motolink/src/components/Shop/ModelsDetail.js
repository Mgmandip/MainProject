import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';

const ModelsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleCart = (id) => {
    navigate(`/cart/${id}`);
  };

  const handleCheckout = (id) => {
    navigate(`/checkout/${id}`);
  };

  if (!bike) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-full">
        <img src={bike.bikeImage} alt={bike.name} className="h-4/6 z-0 absolute mb-44" />
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-56 h-3/5 w-4/5 flex items-center justify-center">
          <div className="absolute top-72 left-48">
            <label className="block text-1xl font-bold text-gray-800">Displacement</label>
            <label className="block text-2xl font-bold text-gray-800">{bike.displacement || 'N/A'}</label>

            <label className="block text-1xl font-bold text-gray-800 mt-3">Horse Power</label>
            <label className="block text-2xl font-bold text-gray-800">{bike.horsepower || 'N/A'}</label>

            <label className="block text-1xl font-bold text-gray-800 mt-3">Dry Weight</label>
            <label className="block text-2xl font-bold text-gray-800">{bike.dryweight || 'N/A'}</label>

            <label className="block text-1xl font-bold text-gray-800 mt-3">Seat Height</label>
            <label className="block text-2xl font-bold text-gray-800">{bike.seatheight || 'N/A'}</label>

            <label className="block text-1xl font-bold text-gray-800 mt-3">Safety</label>
            <label className="block text-2xl font-bold text-gray-800">{bike.saftey || 'N/A'}</label>
          </div>

          <div className="absolute top-72 right-52 flex flex-col space-y-5">
            <button className="bg-red-700 px-5 py-5 rounded-lg"></button>
            <button className="bg-black px-5 py-5 rounded-lg"></button>
            <button className="bg-white px-5 py-5 rounded-lg"></button>
          </div>

          <div className="text-center mt-52">
            <label className="block text-3xl font-bold text-gray-800">{bike.name || 'N/A'}</label>
            <label className="block text-3xl font-bold text-gray-800 mt-2">Rs. {bike.price || 'N/A'}</label>

            <div className=' space-x-10'>
              <button onClick={() => handleCart(bike._id)} className=" bg-gray-300 text-2xl font-semibold px-5 py-1 rounded-lg mt-5 z-10 border-2 border-red-500">Add to Cart</button>
              <button onClick={() => handleCheckout(bike._id)} className="bg-red-700 text-white text-2xl font-semibold px-5 py-1 rounded-lg mt-5 z-10">Buy it Now</button>
            </div>
          </div>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Successfully added to Cart</h3>
            <button onClick={() => setShowSuccessMessage(false)} className="text-center mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelsDetail;
