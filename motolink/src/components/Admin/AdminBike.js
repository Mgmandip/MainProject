import React, { useState } from 'react';
import axios from 'axios';
import HomeImage from './Home.png';
import Navbar from '../Navbar/NavbarComponent';

const AdminBike = () => {
  const [bikeform, setBikeForm] = useState({ name: '', price: '', displacement: '', horsepower: '', dryweight: '', seatheight: '', saftey: '' });
  const [imageFile, setImageFile] = useState(null);
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBikeFormChange = (e) => {
    setBikeForm({ ...bikeform, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(file);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBikeSubmit = async (e) => {
    e.preventDefault();
    if (!bikeform.name || !bikeform.price || !bikeform.displacement || !bikeform.horsepower || !bikeform.dryweight || !bikeform.seatheight || !bikeform.saftey || !imageFile) {
      setFormError('Please fill in all fields and upload an image.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('name', bikeform.name);
      formData.append('price', bikeform.price);
      formData.append('displacement', bikeform.displacement);
      formData.append('horsepower', bikeform.horsepower);
      formData.append('dryweight', bikeform.dryweight);
      formData.append('seatheight', bikeform.seatheight);
      formData.append('saftey', bikeform.saftey);
      formData.append('image', imageFile);

      const res = await axios.post('http://localhost:5000/api/auth/bikes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Processing...', res.data);
      setFormError(''); // Clear any previous error
      setSuccess(true); // Show success message
      setBikeForm({ name: '', price: '', displacement: '', horsepower: '', dryweight: '', seatheight: '', saftey: '' });
      setImageUrl(null);
    } catch (err) {
      console.error('Error during Process:', err.response ? err.response.data : err.message);
      setFormError('Failed');
      setSuccess(false); // Hide success message if there's an error
    }
  };

  const closePopup = () => {
    setSuccess(false); // Hide success message when popup is closed
  };

  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mt-20 h-4/5 w-4/5">
          
          <div className='text-center'>
            <label className=' font-bold text-gray-700 text-2xl'>Bike Center</label>
          </div>
          
          <form onSubmit={handleBikeSubmit}>
            <div className='flex space-x-10 mt-5'>
              <div className='space-y-9 mt-5 ml-16'>
                <label className='flex text-1xl font-medium'>Bike Name</label>
                <label className='flex text-1xl font-medium'>Bike Price</label>
                <label className='flex text-1xl font-medium'>Displacement</label>
                <label className='flex text-1xl font-medium'>Horsepower</label>
                <label className='flex text-1xl font-medium'>Dry Weight</label>
                <label className='flex text-1xl font-medium'>Seat Height</label>
                <label className='flex text-1xl font-medium'>Safety</label>
              </div>

              <div className='space-y-6 mt-7 ml-16'>
                <input name="name" value={bikeform.name} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike name' />
                <input name="price" value={bikeform.price} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike price' />
                <input name="displacement" value={bikeform.displacement} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter displacement' />
                <input name="horsepower" value={bikeform.horsepower} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter horsepower' />
                <input name="dryweight" value={bikeform.dryweight} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter dry weight' />
                <input name="seatheight" value={bikeform.seatheight} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter seat height' />
                <input name="saftey" value={bikeform.saftey} onChange={handleBikeFormChange} className='flex border border-gray-600 rounded-lg w-72 bg-transparent focus:ring-0 outline-none p-1' type='text' placeholder='Enter bike safety' />
              </div>

              <div className=' pl-36 mt-5'>
                <div className="flex flex-col items-center justify-center">
                <div className="w-72 h-72 border border-gray-600 flex items-center justify-center">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Uploaded" className="object-cover w-fit h-fit" />
                  ) : (
                    <p className="text-gray-500">No image uploaded</p>
                  )}
                </div>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="mt-4"
                />
              </div>

              <div className='pt-5 space-x-4'>
                <button className="bg-black text-white text-lg px-6 py-1 rounded-lg z-10">Update</button>
                <button className="bg-red-700 text-white text-lg px-6 py-1 rounded-lg z-10">Delete</button>
                <button type="submit" className="bg-black text-white text-lg px-6 py-1 rounded-lg z-10">Add</button>
                <button type="button" className="bg-gray-200 text-red-700 text-lg px-6 py-1 rounded-lg z-10">Reset</button>
              </div>

              </div>
            </div>
          </form>

          {formError && <p className="text-red-500 text-center mt-5">{formError}</p>}
          {success && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Bike successfully added</h3>
                <button onClick={closePopup} className="text-center mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBike;
