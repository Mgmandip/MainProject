import React, { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage.png';
import Navbar from '../Navbar/NavbarComponent';
import Bike1 from './Frame.png';
import axios from 'axios';

const ProfileComponent = () => {
  const [profile, setProfile] = useState({
    name: '',
    address: '',
    dateOfBirth: '',
    phoneNumber: '',
    country: '',
    city: '',
    zipCode: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const profileData = res.data.profile;
        console.log('Profile Data:', profileData);
        setProfile({
          name: profileData.user?.name || '',
          address: profileData.address || '',
          dateOfBirth: profileData.dateOfBirth || '',
          phoneNumber: profileData.phoneNumber || '',
          country: profileData.country || '',
          city: profileData.city || '',
          zipCode: profileData.zipCode || '',
          email: profileData.user?.email || '',
          // password: '' // Do not pre-fill the password field for security reasons
        });
        setError('');
      } catch (err) {
        setError('Failed to load user profile');
        console.error(err);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put('http://localhost:5000/api/profile/update', profile, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      setSuccessMessage('Profile updated successfully!');
      setError('');
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    }
  };
  

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${ProfileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-center pt-32">
        <label className='text-2xl font-medium text-white'>Profile</label>
      </div>

      <form onSubmit={handleSubmit} className='flex'>
        <div className='space-y-10 mt-14'>
          <label className='flex ml-52 text-1xl font-medium text-white'>Full Name</label>
          <label className='flex ml-52 text-1xl font-medium text-white'>Address</label>
          <label className='flex ml-52 text-1xl font-medium text-white'>Date of Birth</label>
          <label className='flex ml-52 text-1xl font-medium text-white'>Phone Number</label>
          <label className='flex ml-52 text-1xl font-medium text-white'>Country</label>
          <label className='flex ml-52 text-1xl font-medium text-white'>City</label>
          <label className='flex ml-52 text-1xl font-medium text-white'>Zip Code</label>
        </div>

        <div className='space-y-7 mt-14 ml-16'>
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="name" value={profile.name} onChange={handleChange} required />
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="address" value={profile.address} onChange={handleChange} required />
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} required />
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} required />
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="country" value={profile.country} onChange={handleChange} required />
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="city" value={profile.city} onChange={handleChange} required />
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="zipCode" value={profile.zipCode} onChange={handleChange} required />
        </div>

        <div className='space-y-10'>
          <img src={Bike1} alt="Frame" className="flex ml-40 h-40 z-0"></img>

          <div className='space-y-10'>
            <label className='flex ml-52 text-1xl font-medium text-white mt-14'>Email</label>
            {/* <label className='flex ml-52 text-1xl font-medium text-white mt-14'>Password</label> */}
          </div>
        </div>

        <div className='space-y-7 mt-52 ml-16'>
          <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="email" value={profile.email} onChange={handleChange} disabled />
          {/* <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='password' name="password" value={profile.password} onChange={handleChange} /> */}

          <div className='pt-10'>
            <button type="submit" className="bg-red-700 text-white text-2xl px-5 py-2 rounded-lg z-10">Save</button>
          </div>
        </div>
      </form>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
    </div>
  );
};

export default ProfileComponent;


// import React, { useState, useEffect, useCallback } from 'react';
// import ProfileImage from './ProfileImage.png';
// import Navbar from '../Navbar/NavbarComponent';
// import Bike1 from './Frame.png';
// import axios from 'axios';

// const ProfileComponent = () => {
//   const [profile, setProfile] = useState({
//     fullName: '',
//     address: '',
//     dob: '',
//     phoneNumber: '',
//     country: '',
//     city: '',
//     zipCode: '',
//     email: '',
//     password: ''
//   });

//   const fetchProfile = useCallback(async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/profile', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       setProfile(response.data);
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProfile();
//   }, [fetchProfile]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({
//       ...profile,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="relative h-screen" style={{ backgroundImage: `url(${ProfileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute w-full z-20">
//         <Navbar />
//       </div>
//       <div className="flex items-center justify-center pt-32">
//         <label className='text-2xl font-medium text-white'>Profile</label>
//       </div>

//       <div className='flex'>
//         <div className='space-y-10 mt-14'>
//           <label className='flex ml-52 text-1xl font-medium text-white'>Full Name</label>
//           <label className='flex ml-52 text-1xl font-medium text-white'>Address</label>
//           <label className='flex ml-52 text-1xl font-medium text-white'>Date of Birth</label>
//           <label className='flex ml-52 text-1xl font-medium text-white'>Phone Number</label>
//           <label className='flex ml-52 text-1xl font-medium text-white'>Country</label>
//           <label className='flex ml-52 text-1xl font-medium text-white'>City</label>
//           <label className='flex ml-52 text-1xl font-medium text-white'>Zip Code</label>
//         </div>

//         <div className='space-y-7 mt-14 ml-16 '>
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="fullName" value={profile.fullName} onChange={handleChange} />
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="address" value={profile.address} onChange={handleChange} />
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="dob" value={profile.dob} onChange={handleChange} />
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="country" value={profile.country} onChange={handleChange} />
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="city" value={profile.city} onChange={handleChange} />
//           <input className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1' type='text' name="zipCode" value={profile.zipCode} onChange={handleChange} />
//         </div>

//         <div className='space-y-10'>
//           <img src={Bike1} alt="Frame" className="flex ml-72 w-96 h-96 mt-16" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileComponent;
