import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import { MdDelete } from 'react-icons/md'; // Import the delete icon

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null); // For expanding order details
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch orders on component load
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders/me', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setOrders(response.data); // Set orders from the response
      } catch (error) {
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  const handleOrderClick = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId); // Toggle expanded state
  };

  const handleRemoveOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setOrders(orders.filter(order => order._id !== orderId)); // Remove the order from the state
      setSuccessMessage('Order removed successfully');
    } catch (error) {
      setError('Failed to remove order');
    }
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
                <th className="py-2 px-4 border-b"></th>
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
                      {order.status || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <MdDelete
                        className="text-red-600 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row click event
                          handleRemoveOrder(order._id);
                        }}
                        title="Remove Order"
                      />
                    </td>
                  </tr>
                  {/* Expandable Details */}
                  {expandedOrderId === order._id && (
                    <tr>
                      <td colSpan="5" className="px-4 border-b bg-gray-100">
                        <div className="p-4">
                          <p>
                            <strong>User Email:</strong> {order.user?.email || 'N/A'}
                          </p>
                          <p>
                            <strong>Address:</strong> {order.profile?.address || 'N/A'}
                          </p>
                          <p>
                            <strong>Phone Number:</strong> {order.user?.number || 'N/A'}
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

export default UserOrder;
