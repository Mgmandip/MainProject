// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import HomeImage from './Home.png';
// import Navbar from '../Navbar/NavbarComponent';
// import { useNavigate } from 'react-router-dom';

// const ModelsComponent = () => {
//   const [bikes, setBikes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const fetchBikes = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/bikes?search=${searchTerm}`);
//       setBikes(response.data);
//     } catch (error) {
//       console.error('Error fetching bikes:', error);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     fetchBikes();
//   }, [fetchBikes]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleExploreMore = (id) => {
//     navigate(`/modelsDetail/${id}`);
//   };

//   return (
//     <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute w-full z-20">
//         <Navbar />
//       </div>
//       <div className="flex items-center justify-center h-full">
//         <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5">
//           <div className="flex justify-center items-center mb-5">
//             <div className="flex items-center w-full max-w-md">
//               <input type="text" placeholder="Search..." className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-transparent" value={searchTerm} onChange={handleSearchChange} />
//               <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition duration-300 ease-in-out" onClick={fetchBikes}>Search</button>
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center space-x-10 mt-5">
//             {bikes.map((bike) => (
//               <div key={bike._id} className="flex flex-col items-center">
//                 <img
//                   onClick={() => handleExploreMore(bike._id)}
//                   src={bike.bikeImage}
//                   alt={bike.name}
//                   className="h-40 z-0 transition-transform transform hover:scale-110"
//                 />
//                 <label className="text-2xl font-bold text-gray-800 mt-2">{bike.name}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelsComponent;




import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import { useNavigate } from 'react-router-dom';

const ModelsComponent = () => {
  const [bikes, setBikes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fetchBikes = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bikes', {
        params: {
          search: searchTerm,
        },
      });
      setBikes(response.data);
    } catch (error) {
      console.error('Error fetching bikes:', error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleExploreMore = (id) => {
    navigate(`/modelsDetail/${id}`);
  };

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5">
          <div className="flex justify-center items-center mb-5">
            <div className="flex items-center w-full max-w-md">
              <input type="text" placeholder="Search..." className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-transparent" value={searchTerm} onChange={handleSearchChange} />
              <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition duration-300 ease-in-out" onClick={fetchBikes}>Search</button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-10 mt-5">
            {bikes.map((bike) => (
              <div key={bike._id} className="flex flex-col items-center">
                <img
                  onClick={() => handleExploreMore(bike._id)}
                  src={bike.bikeImage}
                  alt={bike.name}
                  className="h-40 z-0 transition-transform transform hover:scale-110"
                />
                <label className="text-2xl font-bold text-gray-800 mt-2">{bike.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsComponent;

