// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from './Home.png';
// import Navbar from '../Navbar/NavbarComponent';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../Config/axiosConfig";
// import axios from 'axios'; // Imported axios if axiosInstance is not configured

// const AdminBike = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     displacement: "",
//     horsepower: "",
//     dryweight: "",
//     seatheight: "",
//     saftey: "",
//     bikeImage: "",
//   });

//   const [bikes, setBikes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       bikeImage: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("price", formData.price);
//     data.append("displacement", formData.displacement);
//     data.append("horsepower", formData.horsepower);
//     data.append("dryweight", formData.dryweight);
//     data.append("seatheight", formData.seatheight);
//     data.append("saftey", formData.saftey);
//     data.append("bikeImage", formData.bikeImage);

//     try {
//       const response = await axiosInstance.post("/api/bikes", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       toast.success(response.data.msg);
//       console.log("Bike added successfully:", response.data);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       toast.error(error.response?.data?.msg || "An error occurred");
//     }
//   };

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
          
//           <div className='text-center'>
//             <label className=' font-bold text-gray-700 text-2xl'>Bike Center</label>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className='flex space-x-10 mt-5'>
//               <div className='space-y-9 mt-5 ml-16'>
//                 <label className='flex text-1xl font-medium'>Bike Name</label>
//                 <label className='flex text-1xl font-medium'>Bike Price</label>
//                 <label className='flex text-1xl font-medium'>Displacement</label>
//                 <label className='flex text-1xl font-medium'>Horsepower</label>
//                 <label className='flex text-1xl font-medium'>Dry Weight</label>
//                 <label className='flex text-1xl font-medium'>Seat Height</label>
//                 <label className='flex text-1xl font-medium'>Safety</label>
//               </div>

//               <div className='space-y-6 mt-7 ml-16'>
//                 <input name="name" value={formData.name} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike name' />
//                 <input name="price" value={formData.price} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike price' />
//                 <input name="displacement" value={formData.displacement} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter displacement' />
//                 <input name="horsepower" value={formData.horsepower} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter horsepower' />
//                 <input name="dryweight" value={formData.dryweight} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter dry weight' />
//                 <input name="seatheight" value={formData.seatheight} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter seat height' />
//                 <input name="saftey" value={formData.saftey} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike safety' />
//               </div>

//               <div className=' pl-36 mt-5'>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Product Image:</label>
//                 <input
//                   type="file"
//                   name="bikeImage"
//                   onChange={handleFileChange}
//                   required
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 <div className='pt-5 space-x-4'>
//                   <button type="button" className="bg-black text-white text-lg px-6 py-1 rounded-lg z-10">Update</button>
//                   <button type="button" className="bg-red-700 text-white text-lg px-6 py-1 rounded-lg z-10">Delete</button>
//                   <button type="submit" className="bg-black text-white text-lg px-6 py-1 rounded-lg z-10">Add</button>
//                   <button type="button" className="bg-gray-200 text-red-700 text-lg px-6 py-1 rounded-lg z-10">Reset</button>
//                 </div>
//               </div>
//             </div>
//           </form>

//           <div>

            
//           </div>

//           <div className="">

//             {/* <div className="flex justify-center items-center mb-5 mt-20">
//             <div className="flex items-center w-full max-w-md">
//               <input type="text" placeholder="Search..." className="w-full px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-transparent" value={searchTerm} onChange={handleSearchChange} />
//               <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition duration-300 ease-in-out" onClick={fetchBikes}>Search</button>
//             </div>
//           </div> */}

//           <div className="flex flex-wrap justify-center space-x-10 mt-20 ">
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
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminBike;









// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from './Home.png';
// import Navbar from '../Navbar/NavbarComponent';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../Config/axiosConfig";
// import axios from 'axios'; // Imported axios if axiosInstance is not configured

// const AdminBike = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     displacement: "",
//     horsepower: "",
//     dryweight: "",
//     seatheight: "",
//     saftey: "",
//     bikeImage: "",
//   });

//   const [bikes, setBikes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editingBike, setEditingBike] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       bikeImage: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("price", formData.price);
//     data.append("displacement", formData.displacement);
//     data.append("horsepower", formData.horsepower);
//     data.append("dryweight", formData.dryweight);
//     data.append("seatheight", formData.seatheight);
//     data.append("saftey", formData.saftey);
//     data.append("bikeImage", formData.bikeImage);


//     try {
//       if (editingBike) {
//         const response = await axiosInstance.patch(
//           `/api/bikes/update/${editingBike._id}`,
//           formData
//         );
//         toast.success(response.data.msg);
//         setEditingBike(null);
//       } else {
//           const response = await axiosInstance.post("/api/bikes", data, {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           });
//           toast.success(response.data.msg);
//           console.log("Bike added successfully:", response.data);
//         } 
//         }catch (error) {
//           console.error("Error adding product:", error);
//           toast.error(error.response?.data?.msg || "An error occurred");
//     }
//   };

//     // try {
//     //   const response = await axiosInstance.post("/api/bikes", data, {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   });
//     //   toast.success(response.data.msg);
//     //   console.log("Bike added successfully:", response.data);
//     // } catch (error) {
//     //   console.error("Error adding product:", error);
//     //   toast.error(error.response?.data?.msg || "An error occurred");
//     // }
//   // };

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

//   const handleEdit = (bike) => {
//     setBikes({ name: bike.name, description: bike.description });
//     setEditingBike(bike);
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
//         {/* Form Section */}
//         <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-auto w-3/5 ml-4 ">
//           <div className='text-center'>
//             {/* <label className='font-bold text-gray-700 text-2xl'>Bike Center</label> */}
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className='flex space-x-10'>
//               <div className='space-y-9 mt-5 ml-16'>
//                 <label className='flex text-1xl font-medium'>Bike Name</label>
//                 <label className='flex text-1xl font-medium'>Bike Price</label>
//                 <label className='flex text-1xl font-medium'>Displacement</label>
//                 <label className='flex text-1xl font-medium'>Horsepower</label>
//                 <label className='flex text-1xl font-medium'>Dry Weight</label>
//                 <label className='flex text-1xl font-medium'>Seat Height</label>
//                 <label className='flex text-1xl font-medium'>Safety</label>
//                 <label className='flex text-1xl font-medium'>Bike Image</label>
//               </div>

//               <div className='space-y-6 mt-7 ml-16'>
//                 <input name="name" value={formData.name} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike name' />
//                 <input name="price" value={formData.price} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike price' />
//                 <input name="displacement" value={formData.displacement} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter displacement' />
//                 <input name="horsepower" value={formData.horsepower} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter horsepower' />
//                 <input name="dryweight" value={formData.dryweight} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter dry weight' />
//                 <input name="seatheight" value={formData.seatheight} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter seat height' />
//                 <input name="saftey" value={formData.saftey} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike safety' />
//                 <input type="file" name="bikeImage" onChange={handleFileChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//                 <div className=" space-x-2">
//                   <button type="button" onClick={() => handleEdit(bike)} className="bg-black text-white text-base px-6 py-1 rounded-lg z-10">Update</button>
//                   <button type="button" className="bg-red-700 text-white text-base px-6 py-1 rounded-lg z-10">Delete</button>
//                   <button type="submit" className="bg-black text-white text-base px-6 py-1 rounded-lg z-10">Add</button>
//                   {/* <button type="button" className="bg-gray-200 text-red-700 text-lg px-6 py-1 rounded-lg z-10">Reset</button> */}
//                 </div>
                
//               </div>

//               <div className='pl-36 mt-5'>
                
//                 {/* <div className='flex flex-block pt-5 space-x-4'>
//                   <button type="button" className="bg-black text-white text-lg px-6 py-1 rounded-lg z-10">Update</button>
//                   <button type="button" className="bg-red-700 text-white text-lg px-6 py-1 rounded-lg z-10">Delete</button>
//                   <button type="submit" className="bg-black text-white text-lg px-6 py-1 rounded-lg z-10">Add</button>
//                   <button type="button" className="bg-gray-200 text-red-700 text-lg px-6 py-1 rounded-lg z-10">Reset</button>
//                 </div> */}
//               </div>

//             </div>
//           </form>
//         </div>

//         {/* Bike List Section*/}
//         <div className="flex flex-wrap justify-center space-x-10 mt-12 w-4/5">
//           {bikes.map((bike) => (
//             <div key={bike.name} className="flex flex-col items-center">
//               <img
//                 onClick={() => handleExploreMore(bike.name)}
//                 src={bike.bikeImage}
//                 alt={bike.name}
//                 className="h-40 z-0 transition-transform transform hover:scale-110"
//               />
//               <label className="text-2xl font-bold text-gray-800 mt-2">{bike.name}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminBike;

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Config/axiosConfig";
import axios from 'axios'; // Imported axios if axiosInstance is not configured

const AdminBike = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    displacement: "",
    horsepower: "",
    dryweight: "",
    seatheight: "",
    saftey: "",
    bikeImage: "",
  });

  const [bikes, setBikes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingBike, setEditingBike] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      bikeImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("displacement", formData.displacement);
    data.append("horsepower", formData.horsepower);
    data.append("dryweight", formData.dryweight);
    data.append("seatheight", formData.seatheight);
    data.append("saftey", formData.saftey);
  
    if (formData.bikeImage) {
      data.append("bikeImage", formData.bikeImage);
    }
  
    try {
      if (editingBike) {
        const response = await axiosInstance.patch(`/api/bikes/${editingBike._id}`, data);
        toast.success(response.data.msg);
        setEditingBike(null);
      } else {
        const response = await axiosInstance.post("/api/bikes", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success(response.data.msg);
        console.log("Bike added successfully:", response.data);
      }
  
      // Refresh bike list after adding or editing
      fetchBikes();
    } catch (error) {
      console.error("Error adding/updating bike:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  const handleDelete = async () => {
    if (!editingBike) return;

    try {
      const response = await axiosInstance.delete(`/api/bikes/${editingBike._id}`);
      toast.success(response.data.msg);
      setEditingBike(null);
      setFormData({
        name: "",
        price: "",
        displacement: "",
        horsepower: "",
        dryweight: "",
        seatheight: "",
        saftey: "",
        bikeImage: "",
      });
      fetchBikes();
    } catch (error) {
      console.error("Error deleting bike:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  const fetchBikes = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bikes?search=${searchTerm}`);
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

  const handleEdit = (bike) => {
    setFormData({
      name: bike.name,
      price: bike.price,
      displacement: bike.displacement,
      horsepower: bike.horsepower,
      dryweight: bike.dryweight,
      seatheight: bike.seatheight,
      saftey: bike.saftey,
      bikeImage: bike.bikeImage,
    });
    setEditingBike(bike);
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
        {/* Form Section */}
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-auto w-3/5 ml-16 ">
          <form onSubmit={handleSubmit}>
            <div className='flex space-x-10'>
              <div className='space-y-9 mt-5 ml-16'>
                <label className='flex text-1xl font-medium'>Bike Name</label>
                <label className='flex text-1xl font-medium'>Bike Price</label>
                <label className='flex text-1xl font-medium'>Displacement</label>
                <label className='flex text-1xl font-medium'>Horsepower</label>
                <label className='flex text-1xl font-medium'>Dry Weight</label>
                <label className='flex text-1xl font-medium'>Seat Height</label>
                <label className='flex text-1xl font-medium'>Safety</label>
                <label className='flex text-1xl font-medium'>Bike Image</label>
              </div>

              <div className='space-y-6 mt-7 ml-16'>
                <input name="name" value={formData.name} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike name' />
                <input name="price" value={formData.price} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike price' />
                <input name="displacement" value={formData.displacement} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter displacement' />
                <input name="horsepower" value={formData.horsepower} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter horsepower' />
                <input name="dryweight" value={formData.dryweight} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter dry weight' />
                <input name="seatheight" value={formData.seatheight} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter seat height' />
                <input name="saftey" value={formData.saftey} onChange={handleChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike safety' />
                <input type="file" name="bikeImage" onChange={handleFileChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                <div className="space-x-2">
                  {editingBike && (
                    <>
                      <button type="submit" className="bg-black text-white text-base px-6 py-1 rounded-lg z-10">Update</button>
                      <button type="button" onClick={handleDelete} className="bg-red-600 text-white text-base px-6 py-1 rounded-lg z-10">Delete</button>
                    </>
                  )}
                  {!editingBike && (
                    <button type="submit" className="bg-black text-white text-base px-6 py-1 rounded-lg z-10">Add</button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="w-4/5 mt-12">
          <div className="grid grid-cols-2 ml-28"> 
            {bikes.map((bike) => (
            <div key={bike._id} className="flex flex-col items-center p-1 m-0"> {/* Minimal padding and margin */}
              <img
                onClick={() => handleExploreMore(bike._id)}
                src={bike.bikeImage}
                alt={bike.name}
                className=" h-40 transition-transform transform hover:scale-105" /* Reduced hover effect */
              />
              <label
                onClick={() => handleEdit(bike)}
                className="text-xl font-bold text-gray-800 mt-1 cursor-pointer" /* Smaller text and reduced margin */
              >
              {bike.name}
              </label>
          </div>
    ))}
  </div>
</div>





      </div>
    </div>
  );
};

export default AdminBike;
