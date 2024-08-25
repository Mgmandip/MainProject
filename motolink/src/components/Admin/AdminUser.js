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



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null); // State for tracking expanded user

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId); // Toggle the expanded state
  };

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5 overflow-auto text-center">
          <h1 className="text-2xl font-bold mb-4">User List</h1>
          <table className="min-w-full bg-white rounded-2xl">
            <thead className='rounded-2xl'>
              <tr className='bg-red-500'>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <React.Fragment key={user._id}>
                  <tr
                    onClick={() => handleUserClick(user._id)}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                  </tr>
                  {/* Expandable Details */}
                  <tr
                    className={`transition-all duration-300 ease-in-out ${
                      expandedUserId === user._id ? 'max-h-96' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <td colSpan="2" className="px-4 border-b bg-gray-100">
                      <div className={`p-4 ${expandedUserId === user._id ? '' : 'hidden'}`}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                        {/* Add more fields if needed */}
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
