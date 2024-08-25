// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import HomeImage from './Home.png';
// import Navbar from '../Navbar/NavbarComponent';

// const CheckoutComponent = () => {
//   const [paymentForm, setPaymentForm] = useState({ name: '', number: '', expiration: '', cvv: ''});
//   const [formError, setFormError] = useState('');
//   const [success, setSuccess] = useState(false);

//   // const handlePaymentFormChange = (e) => {
//   //   setPaymentForm({ ...setPaymentForm, [e.target.name] : e.target.value });
//   // };

//   const handlePaymentFormChange = (e) => {
//     setPaymentForm({
//       ...paymentForm, // Spread the current state
//       [e.target.name]: e.target.value, // Update only the changed field
//     });
//   };
  

//   const { id } = useParams();
//   const [bike, setBike] = useState(null);

//   useEffect(() => {
//     const fetchBikeDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/bikes/${id}`);
//         setBike(response.data);
//       } catch (error) {
//         console.error('Error fetching bike details:', error);
//       }
//     };

//     fetchBikeDetails();
//   }, [id]);


//   if (!bike) {
//     return <div>Loading...</div>;
//   }


//   const handlePaymentSubmit = async (e) => {
//     e.preventDefault();
//     if (!paymentForm.name || !paymentForm.number || !paymentForm.expiration || !paymentForm.cvv) {
//       setFormError('Please fill in all fields.');
//       return;
//     }
//     try {
//       const res = await axios.post('http://localhost:5000/api/payment', {
//         ...paymentForm,
//         bikeId: bike._id, // Include the bike ID
//       });
//       console.log('Payment successful...', res.data);
//       setFormError(''); // Clear any previous error
//       setSuccess(true); // Show success message
//     } catch (err) {
//       console.error('Payment error:', err.response ? err.response.data : err.message);
//       setFormError(err.response?.data?.msg || 'Error during Payment');
//       setSuccess(false); // Hide success message if there's an error
//     }
//   };
  
  
  

//   const closePopup = () => {
//     setSuccess(false); // Hide success message when popup is closed
//   };

//   return (
//     <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute w-full z-20">
//         <Navbar />
//       </div>

//       <form className='flex pt-20 ml-24' onSubmit={handlePaymentSubmit}>

//         <div className='space-y-7 mt-14 ml-16 '>
//         <input
//   className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1'
//   placeholder='Full Name'
//   type='text'
//   name='name'  // Updated from 'id' to 'name'
//   value={paymentForm.name}
//   onChange={handlePaymentFormChange}
// />

// <input
//   className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1'
//   placeholder='Number'
//   type='text'
//   name='number'  // Updated from 'id' to 'name'
//   value={paymentForm.number}
//   onChange={handlePaymentFormChange}
// />

// <input
//   className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1'
//   placeholder='Expiration'
//   type='text'
//   name='expiration'  // Updated from 'id' to 'name'
//   value={paymentForm.expiration}
//   onChange={handlePaymentFormChange}
// />

// <input
//   className='flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1'
//   placeholder='CVV'
//   type='text'
//   name='cvv'  // Updated from 'id' to 'name'
//   value={paymentForm.cvv}
//   onChange={handlePaymentFormChange}
// />

//             <label className='flex text-xs font-medium text-gray-400'>By clicking “Confirm Payment”, you agree to our store regulations.</label>
            
//             {formError && <p className='text-red-500 text-sm mb-4'>{formError}</p>}

//             <button className="bg-white  text-lg px-4 py-1 rounded-lg z-10">Cancel</button>
//             <button type='submit' className="bg-red-700 text-white text-lg px-5 py-1 rounded-lg z-10 ml-5">Cofirm Payment</button>
//         </div>

//         <div className=" ml-80">
//             <img src={bike.bikeImage} alt="Home Bike" className="h-96 z-0" />

//             <div className='text-center'>
//                 <label className="block text-3xl font-bold text-gray-400">{bike.name}</label>
//                 <label className="block text-3xl font-bold text-gray-400 mt-2">Rs. {bike.price}</label>
//             </div>
            
//       </div>
      
//       </form> 

//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold mb-4">Registration Successful</h3>
//             <p>Your account has been created successfully!</p>
//             <button
//               onClick={closePopup}
//               className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-300"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}     
//     </div>
//   );
// }

// export default CheckoutComponent;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';

const CheckoutComponent = () => {
  const [paymentForm, setPaymentForm] = useState({
    name: '',
    number: '',
    expiration: '',
    cvv: '',
    status: 'Pending',
  });
  const [bike, setBike] = useState(null);
  const [formError, setFormError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const profileData = response.data.profile;
        
        const requiredFields = ['name', 'address', 'dateOfBirth', 'phoneNumber', 'country', 'city', 'zipCode'];
        const isComplete = requiredFields.every(field => profileData[field] && profileData[field].trim() !== '');
        
        setIsProfileComplete(isComplete);
        
        if (!isComplete) {
          setErrorMessage('Please complete your profile before proceeding with payment.');
          setTimeout(() => {
            navigate('/profile');
          }, 3000);
        }
      } catch (error) {
        console.error('Error checking profile completion:', error);
        setErrorMessage('Error checking profile. Please try again.');
      }
    };

    checkProfileCompletion();
  }, [navigate]);

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bikes/${id}`);
        setBike(response.data);
      } catch (error) {
        console.error('Error fetching bike details:', error);
      }
    };

    fetchBike();
  }, [id]);

  const handlePaymentFormChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!isProfileComplete) {
      setErrorMessage('Please complete your profile before proceeding with payment.');
      setTimeout(() => {
        navigate('/profile');
      }, 3000);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      
      const paymentResponse = await axios.post(
        'http://localhost:5000/api/checkout',
        {
          ...paymentForm,
          bike: bike._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Checkout successful:', paymentResponse.data);
      setShowSuccessMessage(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Checkout or order creation error:', error);
      setErrorMessage('Error processing payment. Please try again.');
      setShowSuccessMessage(false);
    }
  };

  const closePopup = () => {
    setShowSuccessMessage(false);
  };

  if (!bike) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>

      <form className="flex pt-20 ml-24" onSubmit={handlePaymentSubmit}>
        <div className="space-y-7 mt-14 ml-16">
          <input
            className="flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1"
            placeholder="Full Name"
            type="text"
            name="name"
            id="name"
            value={paymentForm.name}
            onChange={handlePaymentFormChange}
          />
          <input
            className="flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1"
            placeholder="Number"
            type="text"
            name="number"
            id="number"
            value={paymentForm.number}
            onChange={handlePaymentFormChange}
          />
          <input
            className="flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1"
            placeholder="Expiration"
            type="text"
            id="expiration"
            name="expiration"
            value={paymentForm.expiration}
            onChange={handlePaymentFormChange}
          />
          <input
            className="flex border-0 border-b-2 w-72 text-white border-gray-300 bg-transparent focus:ring-0 outline-none p-1"
            placeholder="CVV"
            type="text"
            id="cvv"
            name="cvv"
            value={paymentForm.cvv}
            onChange={handlePaymentFormChange}
          />

          <label className="flex text-xs font-medium text-gray-400">By clicking "Confirm Payment", you agree to our store regulations.</label>

          {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

          <button className="bg-white text-lg px-4 py-1 rounded-lg z-10" onClick={() => navigate('/bikes')}>Cancel</button>
          <button type="submit" className="bg-red-700 text-white text-lg px-5 py-1 rounded-lg z-10 ml-5">Confirm Payment</button>
        </div>

        <div className="ml-80">
          <img src={bike.bikeImage} alt="Home Bike" className="h-96 z-0" />
          <div className="text-center">
            <label className="block text-3xl font-bold text-gray-400">{bike.name}</label>
            <label className="block text-3xl font-bold text-gray-400 mt-2">Rs. {bike.price}</label>
          </div>
        </div>
      </form>

      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Payment Successful</h3>
            <p>Your payment has been processed successfully!</p>
            <button
              onClick={closePopup}
              className="text-center mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg">
          {errorMessage}
        </div>
      )}

      {!isProfileComplete && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg">
          Your profile is incomplete. You will be redirected to complete it.
        </div>
      )}
    </div>
  );
};

export default CheckoutComponent;