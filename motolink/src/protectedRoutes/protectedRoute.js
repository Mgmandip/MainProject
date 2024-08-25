// import React from 'react';
// import {  Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// const ProtectedRoute = ({ role, children }) => {
//   const authState = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   if (!authState.isAuthenticated) {
//     return navigate('/login');
    
//   }

//   if (role && authState.userRole !== role) {
//     return navigate('/');
//   }

//   return children ? children : <Outlet />;
//   // description of outlet
// // eslint-disable-next-line no-lone-blocks, no-unreachable
// {/* <Route path="dashboard" element={<ProtectedRoute />} >
//   <Route path="analytics" element={<Analytics />} />
//   <Route path="reports" element={<Reports />} />
//   <Route path="settings" element={<Settings />} />
// </Route> */}
// };



// export default ProtectedRoute;


import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ role, children }) => {
  const authState = useSelector((state) => state.auth);

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && authState.userRole !== role) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;





// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import Modal from '../Account/Modal'; // Ensure you have a Modal component

// const CheckoutComponent = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     number: '',
//     expiration: '',
//     cvv: '',
//   });
//   const [bike, setBike] = useState(null);
//   const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
//   // const [isModalOpen, setIsModalOpen] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBike = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/bikes/${id}`);
//         setBike(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchBike();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await axios.post(
  //       'http://localhost:5000/api/checkout',
  //       {
  //         ...formData,
  //         bike: bike._id,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log('Checkout successful:', response.data);
  //     setIsCheckoutComplete(true);
  //     setIsModalOpen(true);
  //   } catch (error) {
  //     console.error('Checkout error:', error);
  //     // Handle error (e.g., show error message to user)
  //   }
  // };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     navigate('/');
//   };

//   if (!bike) return <div>Loading...</div>;

//   // if (isCheckoutComplete && isModalOpen) {
//   //   return (
//   //     <Modal isOpen={isModalOpen} onClose={handleModalClose}>
//   //       <div className="text-center">
//   //         <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
//   //         <p className="mb-6">
//   //           Thank you for your purchase. Your order has been successfully placed.
//   //         </p>
//   //         <button
//   //           onClick={handleModalClose}
//   //           className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
//   //         >
//   //           OK
//   //         </button>
//   //       </div>
//   //     </Modal>
//   //   );
//   // }

//   return (
//     <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-xl">
//       <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
//       {bike && (
//         <div className="product-details bg-white p-8 border rounded-lg shadow-lg mb-4">
//           <img
//             src={`http://localhost:5000/${bike.image}`}
//             alt={bike.name}
//             className="mx-auto rounded-lg max-h-40 object-contain"
//           />
//           <h2 className="text-xl font-semibold mb-2 text-center">{bike.name}</h2>
//           <p className="text-center text-lg font-semibold">Price: Rs. {bike.price}</p>
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm  mb-2" htmlFor="fullName">
//             Name on Card
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm  mb-2" htmlFor="cardNumber">
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="number"
//             name="number"
//             value={formData.number}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4 flex justify-between">
//           <div className="w-1/2 mr-2">
//             <label className="block text-gray-700 text-sm  mb-2" htmlFor="expirationDate">
//               Expiration Date
//             </label>
//             <input
//               type="text"
//               id="expiration"
//               name="expiration"
//               value={formData.expiration}
//               onChange={handleChange}
//               placeholder="MM/YY"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="w-1/2 ml-2">
//             <label className="block text-gray-700 text-sm  mb-2" htmlFor="cvv">
//               CVV
//             </label>
//             <input
//               type="text"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="mt-6 w-full bg-gray-700 text-white  py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
//         >
//           Complete Purchase
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutComponent;
