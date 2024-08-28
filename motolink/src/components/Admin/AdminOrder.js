// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import HomeImage from './Home.png';
// import Navbar from '../Navbar/NavbarComponent';

// const AdminUser = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null); // State for the selected user

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/auth/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching user list:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute w-full z-20">
//         <Navbar />
//       </div>
//       <div className="flex flex-col items-center justify-center h-full relative">
//         <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5 overflow-auto text-center">
//           <h1 className="text-2xl font-bold mb-4">User List</h1>
//           <table className="min-w-full bg-white rounded-2xl">
//             <thead className='rounded-2xl'>
//               <tr className='bg-red-500 '>
//                 <th className="py-2 px-4 border-b">Name</th>
//                 <th className="py-2 px-4 border-b">Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user._id} onClick={() => handleUserClick(user)} className="cursor-pointer hover:bg-gray-200">
//                   <td className="py-2 px-4 border-b">{user.name}</td>
//                   <td className="py-2 px-4 border-b">{user.email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Display selected user details */}
//           {selectedUser && (
//             <div className="mt-8 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
//               <h2 className="text-xl font-bold mb-2">User Details</h2>
//               <p><strong>Name:</strong> {selectedUser.name}</p>
//               <p><strong>Email:</strong> {selectedUser.email}</p>
//               <p><strong>Role:</strong> {selectedUser.role}</p>
//               {/* Add more fields if needed */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminUser;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import HomeImage from './Home.png';
// import Navbar from '../Navbar/NavbarComponent';

// const AdminOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [expandedPaymentId, setExpandedPaymentId] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/checkout', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setOrders(response.data);
//       } catch (error) {
//         setError('Failed to fetch orders');
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handlePaymentClick = (paymentId) => {
//     setExpandedPaymentId(expandedPaymentId === paymentId ? null : paymentId); // Toggle the expanded state
//   };

//   return (
//     <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute w-full z-20">
//         <Navbar />
//       </div>
//       <div className="flex flex-col items-center justify-center h-full relative">
//         <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5 overflow-auto text-center">
//           <h1 className="text-2xl font-bold mb-4">Payment List</h1>
//           <table className="min-w-full bg-white rounded-2xl">
//             <thead className='rounded-2xl'>
//               <tr className='bg-red-500'>
//                 <th className="py-2 px-4 border-b">User</th>
//                 <th className="py-2 px-4 border-b">Bike Name</th>
//                 <th className="py-2 px-4 border-b">Price</th>
//                 <th className="py-2 px-4 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((payment) => (
//                 <React.Fragment key={payment._id}>
//                   <tr
//                     onClick={() => handlePaymentClick(payment._id)}
//                     className="cursor-pointer hover:bg-gray-200"
//                   >
//                     <td className="py-2 px-4 border-b">{payment.name}</td>
//                     <td className="py-2 px-4 border-b">{payment.name}</td>
//                     <td className="py-2 px-4 border-b">Rs. {payment.price}</td>
//                     <td className="py-2 px-4 border-b">Rs. {payment.status}</td>
//                   </tr>
//                   {/* Expandable Details */}
//                   <tr
//                     className={`transition-all duration-300 ease-in-out ${
//                       expandedPaymentId === payment._id ? 'max-h-96' : 'max-h-0 overflow-hidden'
//                     }`}
//                   >
//                     <td colSpan="3" className="px-4 border-b bg-gray-100">
//                       <div className={`p-4 ${expandedPaymentId === payment._id ? '' : 'hidden'}`}>
//                         <p><strong>Name on Card:</strong> {payment.name}</p>
//                         <p><strong>Card Number:</strong> {payment.number}</p>
//                         <p><strong>Expiration Date:</strong> {payment.expiration}</p>
//                       </div>
//                     </td>
//                   </tr>
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminOrder;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/orders', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setOrders(response.data);
//       } catch (error) {
//         setError('Failed to fetch orders');
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = async (orderId, status) => {
//     try {
//       await axios.patch(`http://localhost:5000/api/orders/${orderId}/status`, { status }, {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//       });
//       setOrders(orders.map(order => order._id === orderId ? { ...order, status } : order));
//     } catch (error) {
//       setError('Failed to update order status');
//     }
//   };

//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       {orders.map((order) => (
//         <div key={order._id} className="order">
//           <h2>Order ID: {order._id}</h2>
//           <p>Status: {order.status}</p>
//           <button onClick={() => handleStatusChange(order._id, 'Shipped')}>Mark as Shipped</button>
//           <ul>
//             {order.products && order.products.length > 0 ? (
//               order.products.map((product) => (
//                 <li key={product._id}>
//                   {/* Display product details */}
//                   <p>{product.name} - Rs. {product.price}</p>
//                 </li>
//               ))
//             ) : (
//               <li>No products in this order.</li>
//             )}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminOrders;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null); // For expanding order details
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch orders on component load
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setOrders(response.data); // Set orders from the response
      } catch (error) {
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  // Handle status change
  const handleStatusChange = async (orderId, status) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        { status },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, status: response.data.status } : order
        )
      );
      setSuccessMessage('Order status updated successfully');
    } catch (error) {
      console.error(error);
      setError('Failed to update order status');
    }
  };

  const handleOrderClick = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId); // Toggle expanded state
  };

  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5 overflow-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Order List</h1>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          <table className="min-w-full bg-white rounded-2xl">
            <thead className="rounded-2xl">
              <tr className="bg-red-500">
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Bike Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <React.Fragment key={order._id}>
                  <tr
                    onClick={() => handleOrderClick(order._id)}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    <td className="py-2 px-4 border-b">
                      {order.user?.name || 'Unknown User'}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {order.bike?.name || 'Unknown Bike'}
                    </td>
                    <td className="py-2 px-4 border-b">
                      Rs. {order.bike?.price || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                  {/* Expandable Details */}
                  {expandedOrderId === order._id && (
                    <tr>
                      <td colSpan="4" className="px-4 border-b bg-gray-100">
                        <div className="p-4">
                          <p>
                            <strong>User Email:</strong> {order.user?.email || 'N/A'}
                          </p>
                          <p>
                            <strong>Address:</strong> {order.profile?.address || 'N/A'}
                          </p>
                          <p>
                            <strong>Phone Number:</strong> {order.profile?.phoneNumber || 'N/A'}
                          </p>
                          <p>
                            <strong>Order Status:</strong> {order.status}
                          </p>
                          <p>
                            <strong>Ordered At:</strong> {new Date(order.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
