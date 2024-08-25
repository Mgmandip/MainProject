// import './App.css';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/NavbarComponent';
// import HomeComponent from './components/Home/HomeComponent';
// import ContactComponent from './components/Contact/ContactComponent';
// // import AuthenticationComponent from './components/Authentication/AuthenticationComponent';
// import ModelsComponent from './components/Shop/ModelsComponent';
// import ModelsDetail from './components/Shop/ModelsDetail';
// import CartComponent from './components/Cart/CartComponent';
// import ProfileComponent from './components/Profile/ProfileComponent';
// import CheckoutComponent from './components/Checkout/CheckoutComponent';
// import Login from './components/Authentication/login';
// import Registration from './components/Authentication/Register';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import AdminUser from './components/Admin/AdminUser';
// import AdminBike from './components/Admin/AdminBike';
// import AdminOrder from './components/Admin/AdminOrder';
// import ProtectedRoute from './protectedRoutes/protectedRoute';
// import { Component } from 'react';

// class App extends Component {
//   render() {

//     return (
//       <>
//       <Router>
//         <Navbar />
//         <Routes>
//         <Route path="/" element = {<HomeComponent />}/>
//         <Route path="/models" element = {<ModelsComponent/>}/>
//         <Route path="/cart" element = {<CartComponent />}/>
//         <Route path='/contact' element ={<ContactComponent />}/>
//         <Route path='/profile' element ={<ProfileComponent />}/>
//         <Route path='/register' element ={<Registration/>}/>
//         <Route path='/login' element ={<Login/>}/>
  
        
//         <Route path="/modelsDetail/:id" element={<ModelsDetail />} />
//         <Route path='/checkout/:id' element ={<CheckoutComponent />}/>
  


//         <Route path='/admin' element ={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>}/>
//         <Route path='/adminbike' element ={<ProtectedRoute role="admin"><AdminBike /></ProtectedRoute>}/>
//         <Route path='/adminuser' element={<ProtectedRoute role="admin"><AdminUser /></ProtectedRoute>} />
//         <Route path='/adminorder' element={<ProtectedRoute role="admin"><AdminOrder /></ProtectedRoute>} />
//         </Routes>
//       </Router>
//       </>
  
//     );
//   }
  

// }

// export default App;

// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/NavbarComponent';
// import HomeComponent from './components/Home/HomeComponent';
// import ContactComponent from './components/Contact/ContactComponent';
// import ModelsComponent from './components/Shop/ModelsComponent';
// import ModelsDetail from './components/Shop/ModelsDetail';
// import CartComponent from './components/Cart/CartComponent';
// import ProfileComponent from './components/Profile/ProfileComponent';
// import CheckoutComponent from './components/Checkout/CheckoutComponent';
// import Login from './components/Authentication/login';
// import Registration from './components/Authentication/Register';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import AdminUser from './components/Admin/AdminUser';
// import AdminBike from './components/Admin/AdminBike';
// import AdminOrder from './components/Admin/AdminOrder';
// import ProtectedRoute from './protectedRoutes/protectedRoute';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
        // <Route path="/" element={<HomeComponent />} />
        // <Route path="/models" element={<ModelsComponent />} />
        // <Route path="/cart" element={<ProtectedRoute><CartComponent /></ProtectedRoute>} />
        // <Route path="/contact" element={<ContactComponent />} />
        // <Route path="/profile" element={<ProtectedRoute><ProfileComponent /></ProtectedRoute>} />
        // <Route path="/register" element={<Registration />} />
        // <Route path="/login" element={<Login />} />
        // <Route path="/modelsDetail/:id" element={<ProtectedRoute><ModelsDetail /></ProtectedRoute>} />
        // <Route path="/checkout/:id" element={<ProtectedRoute><CheckoutComponent /></ProtectedRoute>} />

        // <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        // <Route path="/adminbike" element={<ProtectedRoute role="admin"><AdminBike /></ProtectedRoute>} />
        // <Route path="/adminuser" element={<ProtectedRoute role="admin"><AdminUser /></ProtectedRoute>} />
        // <Route path="/adminorder" element={<ProtectedRoute role="admin"><AdminOrder /></ProtectedRoute>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavbarComponent';
import HomeComponent from './components/Home/HomeComponent';
import ContactComponent from './components/Contact/ContactComponent';
import ModelsComponent from './components/Shop/ModelsComponent';
import ModelsDetail from './components/Shop/ModelsDetail';
import CartComponent from './components/Cart/CartComponent';
import ProfileComponent from './components/Profile/ProfileComponent';
import CheckoutComponent from './components/Checkout/CheckoutComponent';
import Login from './components/Authentication/login';
import Registration from './components/Authentication/Register';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminUser from './components/Admin/AdminUser';
import AdminBike from './components/Admin/AdminBike';
import AdminOrder from './components/Admin/AdminOrder';
import AdminInquiry from './components/Admin/AdminInquiry';
import ProtectedRoute from './protectedRoutes/protectedRoute';
import UserOrder from "./components/Order/UserOrder";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/models" element={<ModelsComponent />} />
            <Route path="/cart" element={<ProtectedRoute role="user"><CartComponent /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute role="user"><ContactComponent /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfileComponent /></ProtectedRoute>} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/modelsDetail/:id" element={<ModelsDetail />}/>
            <Route path="/checkout/:id" element={<ProtectedRoute><CheckoutComponent /></ProtectedRoute>} />
            <Route path="/userorder" element={<ProtectedRoute role="user"><UserOrder /></ProtectedRoute>} />

            <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="/adminbike" element={<ProtectedRoute role="admin"><AdminBike /></ProtectedRoute>} />
            <Route path="/adminuser" element={<ProtectedRoute role="admin"><AdminUser /></ProtectedRoute>} />
            <Route path="/adminorder" element={<ProtectedRoute role="admin"><AdminOrder /></ProtectedRoute>} />
            <Route path="/admininquiry" element={<ProtectedRoute role="admin"><AdminInquiry /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
// import { toggle } from "../../features/navbar/navbarSlice";
// import axiosInstance from "../../Config/axiosConfig";

// function Navbar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);
//   const isOpen = useSelector((state) => state.navbar.isOpen);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.get(
//         `/api/products?search=${searchTerm}`
//       );
//       setSearchResults(response.data);
//       // You can route to a search results page or display the results here
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-7">
//             <div>
//               <Link to="/" className="flex items-center py-4 px-2">
//                 <span className="font-bold text-gray-600 text-xl">HealMe</span>
//               </Link>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <Link
//                 to="/"
//                 className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
//               >
//                 Home
//               </Link>
//               {authState.isAuthenticated && (
//                 <>
//                   <Link
//                     to="/shop"
//                     className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
//                   >
//                     Shop
//                   </Link>
//                   <Link
//                     to="/product"
//                     className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
//                   >
//                     Product
//                   </Link>
//                 </>
//               )}
//               {authState.userRole === "admin" && (
//                 <>
//                   <Link
//                     to="/category"
//                     className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
//                   >
//                     Category
//                   </Link>
//                   <Link
//                     to="/addproduct"
//                     className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
//                   >
//                     Add Product
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//           <div>
//             <form onSubmit={handleSearch}>
//               <input
//                 type="text"
//                 className="py-2 px-4 rounded-md focus:outline-none border-2 border-green-200  mx-2 focus:ring focus:ring-green-500"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button
//                 className="rounded-lg bg-green-600 text-white px-4 py-2"
//                 type="submit"
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//           <div className="hidden md:flex items-center space-x-3">
//             {authState.isAuthenticated ? (
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
//               >
//                 Log Out
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
//                 >
//                   Log In
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               className="outline-none mobile-menu-button"
//               onClick={() => dispatch(toggle())}
//             >
//               <svg
//                 className="w-6 h-6 text-gray-500 hover:text-green-500"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <ul>
//             <li>
//               <Link
//                 to="/"
//                 className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
//               >
//                 Home
//               </Link>
//             </li>
//             {authState.isAuthenticated && (
//               <>
//                 <li>
//                   <Link
//                     to="/shop"
//                     className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                   >
//                     Shop
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/product"
//                     className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                   >
//                     Product
//                   </Link>
//                 </li>
//               </>
//             )}
//             {authState.userRole === "admin" && (
//               <>
//                 <li>
//                   <Link
//                     to="/category"
//                     className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                   >
//                     Category
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/addproduct"
//                     className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                   >
//                     Add Product
//                   </Link>
//                 </li>
//               </>
//             )}
//             {authState.isAuthenticated ? (
//               <li>
//                 <button
//                   onClick={() => dispatch(logout())}
//                   className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                 >
//                   Log Out
//                 </button>
//               </li>
//             ) : (
//               <>
//                 <li>
//                   <Link
//                     to="/login"
//                     className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                   >
//                     Log In
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/signup"
//                     className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
//                   >
//                     Sign Up
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       )}
//       {/* Display search results here or navigate to a different page */}
//       {searchResults.length > 0 && (
//         <div>
//           {searchResults.map((product) => (
//             <div key={product._id}>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;