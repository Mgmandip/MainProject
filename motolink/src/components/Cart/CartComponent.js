import React, { useEffect, useState } from 'react';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartComponent = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token'); // Or get the token from wherever you store it

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart/', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token in the request headers
          },
        });
        setCart(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart details:', error);
        setLoading(false);
      }
    };

    fetchCartDetails();
  }, [token]);

  const handleCheckout = (bikeId) => {
    navigate(`/checkout/${bikeId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cart || cart.bikes.length === 0) {
    return <div>No items in the cart.</div>;
  }

//   return (
//     <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute w-full z-20">
//         <Navbar />
//       </div>
//       <div className="flex items-center justify-center h-full">
//         <div className="bg-white bg-opacity-75 p-8 rounded-2xl shadow-lg w-2/3">
          // {cart.bikes.length > 0 ? (
          //   cart.bikes.map((item) => (
          //     <div key={item.bike._id} className="flex items-center mb-4">
          //       <img src={item.bike.bikeImage} alt={item.bike.name} className="h-24 w-24 object-cover" />
          //       <div className="ml-4">
          //         <h3 className="text-xl font-bold">{item.bike.name}</h3>
          //         <p className="text-gray-700">Rs. {item.bike.price}</p>
          //         <p className="text-gray-700">Quantity: {item.quantity}</p>
          //       </div>
          //     </div>
          //   ))
//           ) : (
//             <p>No items in the cart.</p>
//           )}
//           <button onClick={handleCheckout} className="bg-red-700 text-white text-xl font-semibold px-7 py-2 rounded-lg mt-4">Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartComponent;


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

              <div className="mt-2">
                {/* <label className="block text-sm font-semibold text-gray-700">Displacement:</label>
                <span className="block text-sm text-gray-600">{item.bike.displacement || 'N/A'}</span>

                <label className="block text-sm font-semibold text-gray-700 mt-2">Horse Power:</label>
                <span className="block text-sm text-gray-600">{item.bike.horsepower || 'N/A'}</span>

                <label className="block text-sm font-semibold text-gray-700 mt-2">Dry Weight:</label>
                <span className="block text-sm text-gray-600">{item.bike.dryweight || 'N/A'}</span>

                <label className="block text-sm font-semibold text-gray-700 mt-2">Seat Height:</label>
                <span className="block text-sm text-gray-600">{item.bike.seatheight || 'N/A'}</span>

                <label className="block text-sm font-semibold text-gray-700 mt-2">Safety:</label>
                <span className="block text-sm text-gray-600">{item.bike.saftey || 'N/A'}</span> */}
              </div>
              <label className="block text-lg font-bold text-gray-700">Rs. {item.bike.price || 'N/A'}</label>
              <button onClick={() => handleCheckout(item.bike._id)}  className=" block bg-red-700 text-white text-lg font-semibold px-4 py-2 mt-4 rounded-lg">Proceed</button>
              
            </div>
            <div className="text-right">
              <img src={item.bike.bikeImage} alt={item.bike.name} className=" h-52 mr-4 m-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default CartComponent;