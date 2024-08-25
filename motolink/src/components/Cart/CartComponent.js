import React, { useEffect, useState } from 'react';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartComponent = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCartDetails();
  }, [token]);

  const fetchCartDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data.cart || { bikes: [] });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart details:', error);
      setError('Failed to load cart details.');
      setLoading(false);
    }
  };

  const handleCheckout = (bikeId) => {
    navigate(`/checkout/${bikeId}`);
  };

  const handleRemove = async (bikeId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${bikeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // After removal, fetch the updated cart details
      fetchCartDetails();
    } catch (error) {
      console.error('Error removing bike from cart:', error);
      setError('Failed to remove bike from cart.');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-600">{error}</div>;
  }

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-75 pr-8 pl-8 rounded-2xl shadow-lg w-3/4">
          {cart.bikes.length > 0 && cart.bikes.map((item) => (
            <div key={item.bike._id} className="flex items-center border-b border-gray-300">
              <div className="flex-1">
                <label className="block text-lg font-bold text-gray-800">{item.bike.name}</label>
                <label className="block text-lg font-bold text-gray-700">Rs. {item.bike.price || 'N/A'}</label>
                <div className="mt-4 flex space-x-4">
                  <button onClick={() => handleCheckout(item.bike._id)} className="bg-red-700 text-white text-lg font-semibold px-4 py-2 rounded-lg">
                    Proceed
                  </button>
                  <button onClick={() => handleRemove(item.bike._id)} className="bg-red-700 text-white text-lg font-semibold px-4 py-2 rounded-lg">
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <img src={item.bike.bikeImage} alt={item.bike.name} className="h-52 mr-4 m-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
