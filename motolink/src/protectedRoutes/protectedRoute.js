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
