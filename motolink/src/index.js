import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css'
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
// import { toggle } from "../../features/navbar/navbarSlice";

// function Navbar() {
//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);
//   const isOpen = useSelector((state) => state.navbar.isOpen);

//   const handleLogout = () => {
//     dispatch(logout());
//     // Add any additional logout logic if needed
//   };

//   return (
//     <nav className="absolute top-0 left-0 w-full bg-transparent">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex flex-row space-x-96 justify-between items-center py-4">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <span className="font-semibold text-white text-lg">MotoLink</span>
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center space-x-1">
//             <Link to="/" className="py-4 px-2 text-white font-semibold">Home</Link>
//             <Link to="/models" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Models</Link>

//             {authState.isAuthenticated && authState.userRole === 'admin' && (
//               <Link to="/admin" className="py-2 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Dashboard</Link>
//             )}
            
//             {authState.isAuthenticated && authState.userRole !== 'admin' && (
//               <>
//                 <Link to="/cart" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Cart</Link>
//                 <Link to="/contact" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Contact</Link>
//               </>
//             )}
            
//             <Link to="/profile" className="py-2 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Profile</Link>

//             {authState.isAuthenticated ? (
//               <button
//                 onClick={handleLogout}
//                 className="py-2 px-2 font-medium text-white bg-red-600 rounded hover:bg-red-500 transition duration-300"
//               >
//                 Log Out
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"
//                 >
//                   Log In
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//           <div className="md:hidden flex items-center">
//             <button className="outline-none mobile-menu-button" onClick={() => dispatch(toggle())}>
//               <svg className="w-6 h-6 text-white hover:text-green-500"
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
//         <div className="md:hidden bg-gray-800 bg-opacity-75">
//           <ul className="">
//             <li><Link to="/" className="block text-sm px-2 py-4 text-white font-semibold">Home</Link></li>
//             <li><Link to="/models" className="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300">Models</Link></li>
            
//             {authState.isAuthenticated && authState.userRole === 'admin' && (
//               <li><Link to="/admin" className="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300">Dashboard</Link></li>
//             )}
//             {authState.isAuthenticated && authState.userRole !== 'admin' && (
//               <>
//                 <li><Link to="/cart" className="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300">Cart</Link></li>
//                 <li><Link to="/contact" className="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300">Contact</Link></li>
//               </>
//             )}
//             <li><Link to="/profile" className="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300">Profile</Link></li>
//             {authState.isAuthenticated ? (
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300"
//                 >
//                   Log Out
//                 </button>
//               </li>
//             ) : (
//               <>
//                 <li><Link to="/login" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">Log In</Link></li>
//                 <li><Link to="/register" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">Sign Up</Link></li>
//               </>
//             )}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
