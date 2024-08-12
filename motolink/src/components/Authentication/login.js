// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import HomeImage from '../Home/Home.png';
// import axios from 'axios';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [loginData, setLoginData] = useState({ email: '', password: '' });


//   const [formError, setErrors] = useState('');
//   // const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   // const validate = () => {
//   //   // const errors = {};
//   //   // if (!loginData.email) errors.email = "Email is required";
//   //   // if (!loginData.password) errors.password = "Password is required";
//   //   // return errors;
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!loginData.email || !loginData.password) {
//       setErrors('Please fill in all fields.');
//       return;
//     }
//       try {
//         const res = await axios.post('http://localhost:5000/api/auth/login', loginData);
//         console.log(res.data);

//         console.log(res.data);

//         // set token in local storage
//         localStorage.setItem("token", res.data.token);

//         // show success message
//         toast.success("Login successful");
//         } catch (err) {
//           console.error('Login error:', err.res ? err.res.data : err.message);
//           setErrors(err.res?.data?.msg || 'Invalid credentials');
//         toast.error(err.res.data.msg);
//       }


//      // Store user role in localStorage or state

//     //   const { role } = res.data;
//     //   localStorage.setItem('userRole', role); // Optionally, you can use state management libraries

//     //   // Redirect based on user role
//     //   if (role === 'admin') {
//     //     navigate('/admin/');
//     //   } else {
//     //     navigate('/');
//     //   }
//     // } catch (err) {
//     //   console.error('Login error:', err.response ? err.response.data : err.message);
//     //   setFormError(err.response?.data?.msg || 'Invalid credentials');
//     // }
    
//   };

//   return (
//     <div className="bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center" style={{ backgroundImage: `url(${HomeImage})` }}>
//       <div className='flex justify-center items-center h-full w-full space-x-10'>
//         <div className='w-full md:w-1/2 lg:w-1/3 bg-red-700 bg-opacity-55 shadow-lg rounded-3xl p-8 mx-4 md:mx-0'>
//           <h1 className='text-3xl font-bold mb-4 text-center text-white'>Login</h1>
//           <form onSubmit={handleSubmit}>
//           <ToastContainer />
//             <div className='mb-4'>
//               <label htmlFor='email' className='block text-sm font-medium text-white'>Email</label>
//               <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='email' id='email' name='email' value={loginData.email} onChange={handleChange} required />
//             </div>
//             <div className='mb-6'>
//               <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
//               <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='password' id='password' name='password' value={loginData.password} onChange={handleChange} required />
//             </div>
//             {formError && <p className='text-red-500 text-sm mb-4'>{formError}</p>}
//             <div className='text-center'>
//               <button type='submit' className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-5/12'>Login</button>
//             </div>
//           </form>
//           <div className="mt-4 text-center flex justify-center items-center space-x-2 p-2">
//             <p className="text-white">Dont have an Account?</p>
//             <a href="/register" className="text-green-500 hover:underline hover:text-green-700 transition duration-300 ease-in-out">Sign Up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import HomeImage from '../Home/Home.png';
// import axios from 'axios';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { login } from "../../features/auth/authSlice";

// const Login = () => {
//   // const [loginData, setLoginData] = useState({ email: '', password: '' });
//   // const [formError, setErrors] = useState('');
//   // const dispatch = useDispatch();
//   // // const navigate = useNavigate();

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setLoginData({
//   //     ...loginData,
//   //     [name]: value,
//   //   });
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!loginData.email || !loginData.password) {
//   //     setErrors('Please fill in all fields.');
//   //     return;
//   //   }

//   //   try {
//   //     const res = await axios.post('http://localhost:5000/api/auth/login', loginData);
//   //     console.log(res.data);

//   //     // Store token in localStorage
//   //     const { token,user} = response.data;
//   //     localStorage.setItem("token", token);

//   //     // // Store user role in localStorage
//   //     // const { role } = res.data;
//   //     // localStorage.setItem('userRole', role);

//   //     dispatch(login({ token, role: user.role }));

//   //     // Show success message
//   //     toast.success("Login successful");

//   //     // // Redirect based on user role
//   //     // if (role === 'admin') {
//   //     //   navigate('/admin/');
//   //     // } else {
//   //     //   navigate('/');
//   //     // }

//   //   } catch (error) {
//   //     console.error(error.response.data.msg);
//   //     toast.error(error.response.data.msg);
//   //   }
//   // };

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [formError, setErrors] = useState({});
//   // const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!loginData.email) errors.email = "Email is required";
//     if (!loginData.password) errors.password = "Password is required";
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
  
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/auth/login",
//           loginData
//         );
  
//         // Log the full response to see the structure
//         console.log("Server Response:", response);
  
//         if (response && response.data) {
//           const { token, userDetails } = response.data;
  
//           if (token && userDetails && userDetails.role) {
//             // Store the token in local storage
//             localStorage.setItem("token", token);
  
//             // Dispatch the login action with the token and role
//             dispatch(login({ token, role: userDetails.role }));
  
//             // Show success message
//             toast.success("Login successful");
//           } else {
//             // Handle case where userDetails or userDetails.role is undefined
//             toast.error("Invalid response from server. Please try again.");
//           }
//         } else {
//           // Handle unexpected response structure
//           toast.error("Unexpected server response");
//         }
//       } catch (error) {
//         console.error(error);
  
//         if (error.response && error.response.data) {
//           toast.error(error.response.data.msg);
//         } else {
//           toast.error("An unexpected error occurred. Please try again.");
//         }
//       }
//     }
//   };

//   return (
//     <div className="bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center" style={{ backgroundImage: `url(${HomeImage})` }}>
//       <div className='flex justify-center items-center h-full w-full space-x-10'>
//         <div className='w-full md:w-1/2 lg:w-1/3 bg-red-700 bg-opacity-55 shadow-lg rounded-3xl p-8 mx-4 md:mx-0'>
//           <h1 className='text-3xl font-bold mb-4 text-center text-white'>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <ToastContainer />
//             <div className='mb-4'>
//               <label htmlFor='email' className='block text-sm font-medium text-white'>Email</label>
//               <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='email' id='email' name='email' value={loginData.email} onChange={handleChange} required />
//             </div>
//             <div className='mb-6'>
//               <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
//               <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='password' id='password' name='password' value={loginData.password} onChange={handleChange} required />
//             </div>
//             {formError && <p className='text-red-500 text-sm mb-4'>{formError}</p>}
//             <div className='text-center'>
//               <button type='submit' className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-5/12'>Login</button>
//             </div>
//           </form>
//           <div className="mt-4 text-center flex justify-center items-center space-x-2 p-2">
//             <p className="text-white">Dont have an Account?</p>
//             <a href="/register" className="text-green-500 hover:underline hover:text-green-700 transition duration-300 ease-in-out">Sign Up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import HomeImage from '../Home/Home.png';
// import axios from 'axios';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { login } from "../../features/auth/authSlice";

// const Login = () => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [formError, setErrors] = useState({});
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!loginData.email) errors.email = "Email is required";
//     if (!loginData.password) errors.password = "Password is required";
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
  
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/auth/login",
//           loginData
//         );
  
//         if (response && response.data) {
//           const { token, userDetails } = response.data;
  
//           if (token && userDetails && userDetails.role) {
//             localStorage.setItem("token", token);
//             dispatch(login({ token, role: userDetails.role }));
//             toast.success("Login successful");
//           } else {
//             toast.error("Invalid response from server. Please try again.");
//           }
//         } else {
//           toast.error("Unexpected server response");
//         }
//       } catch (error) {
//         console.error(error);
  
//         if (error.response && error.response.data) {
//           toast.error(error.response.data.msg);
//         } else {
//           toast.error("An unexpected error occurred. Please try again.");
//         }
//       }
//     }
//   };

//   return (
//     <div className="bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center" style={{ backgroundImage: `url(${HomeImage})` }}>
//       <div className='flex justify-center items-center h-full w-full space-x-10'>
//         <div className='w-full md:w-1/2 lg:w-1/3 bg-red-700 bg-opacity-55 shadow-lg rounded-3xl p-8 mx-4 md:mx-0'>
//           <h1 className='text-3xl font-bold mb-4 text-center text-white'>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <ToastContainer />
//             <div className='mb-4'>
//               <label htmlFor='email' className='block text-sm font-medium text-white'>Email</label>
//               <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='email' id='email' name='email' value={loginData.email} onChange={handleChange} required />
//               {formError.email && <p className='text-red-500 text-sm'>{formError.email}</p>}
//             </div>
//             <div className='mb-6'>
//               <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
//               <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='password' id='password' name='password' value={loginData.password} onChange={handleChange} required />
//               {formError.password && <p className='text-red-500 text-sm'>{formError.password}</p>}
//             </div>
//             <div className='text-center'>
//               <button type='submit' className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-5/12'>Login</button>
//             </div>
//           </form>
//           <div className="mt-4 text-center flex justify-center items-center space-x-2 p-2">
//             <p className="text-white">Don't have an Account?</p>
//             <a href="/register" className="text-green-500 hover:underline hover:text-green-700 transition duration-300 ease-in-out">Sign Up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImage from '../Home/Home.png';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [formError, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!loginData.email) errors.email = "Email is required";
    if (!loginData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          loginData
        );
  
        if (response && response.data) {
          const { token, userDetails } = response.data;
  
          if (token && userDetails && userDetails.role) {
            localStorage.setItem("token", token);
            dispatch(login({ token, role: userDetails.role }));
            toast.success("Login successful");
            
            // Navigate based on role
            if (userDetails.role === 'admin') {
              navigate('/admin');
            } else {
              navigate('/'); // Navigate to user homepage or any other user-specific route
            }
          } else {
            toast.error("Invalid response from server. Please try again.");
          }
        } else {
          toast.error("Unexpected server response");
        }
      } catch (error) {
        console.error(error);
  
        if (error.response && error.response.data) {
          toast.error(error.response.data.msg);
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className='flex justify-center items-center h-full w-full space-x-10'>
        <div className='w-full md:w-1/2 lg:w-1/3 bg-red-700 bg-opacity-55 shadow-lg rounded-3xl p-8 mx-4 md:mx-0'>
          <h1 className='text-3xl font-bold mb-4 text-center text-white'>Login</h1>
          <form onSubmit={handleSubmit}>
            <ToastContainer />
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-white'>Email</label>
              <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='email' id='email' name='email' value={loginData.email} onChange={handleChange} required />
              {formError.email && <p className='text-red-500 text-sm'>{formError.email}</p>}
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block text-sm font-medium text-white'>Password</label>
              <input className='flex mt-1 p-2 border-0 border-b-2 w-96 text-white border-gray-300 bg-transparent focus:ring-0 outline-none' type='password' id='password' name='password' value={loginData.password} onChange={handleChange} required />
              {formError.password && <p className='text-red-500 text-sm'>{formError.password}</p>}
            </div>
            <div className='text-center'>
              <button type='submit' className='bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-5/12'>Login</button>
            </div>
          </form>
          <div className="mt-4 text-center flex justify-center items-center space-x-2 p-2">
            <p className="text-white">Don't have an Account?</p>
            <a href="/register" className="text-green-500 hover:underline hover:text-green-700 transition duration-300 ease-in-out">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
