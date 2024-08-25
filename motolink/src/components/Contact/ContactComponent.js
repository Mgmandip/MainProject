import React, { useState } from "react";
import axios from "axios";  
import HomeImage from './Home.png';
import Navbar from "../Navbar/NavbarComponent";

const ContactPage = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formValues.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const token = localStorage.getItem('token');
      
      // Perform the contact form submission request
      const response = await axios.post(
        'http://localhost:5000/api/contact/',
        {
          ...formValues
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Contact form submitted successfully:', response.data);
      setSuccessMessage('Your message has been sent successfully!'); // Show success message
      setFormValues({ name: "", email: "", message: "" }); // Clear form fields
      setErrors(''); // Clear error messages
      
    } catch (error) {
      console.error('Error submitting contact form:', error.response ? error.response.data : error.message);
      setErrors({ submit: 'There was an issue submitting the form. Please try again later.' });
    }
  };

  return (
    <div className="relative h-screen overflow-x-hidden" style={{ backgroundImage: `url(${HomeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-full z-20">
        <Navbar />
      </div>
      <div className="absolute w-full container mx-auto mt-20 px-4 flex justify-between">
        {/* Contact Form */}
        <div className="max-w-md ml-32">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="mb-4">Fill the form to contact via mail</p>

          {successMessage && <p className="text-green-500 pb-5">{successMessage}</p>} {/* Display success message */}
          {errors.submit && <p className="text-red-500">{errors.submit}</p>} {/* Display submission error */}

          <form onSubmit={handlePaymentSubmit} className="mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className="mt-1 p-2 pr-36 border border-gray-300 rounded-md w-full" placeholder="Enter your Name"/>
              {errors.name && <p className=" text-red-700">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter your Email" />
              {errors.email && <p className=" text-red-700">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter Message"></textarea>
              {errors.message && <p className=" text-red-700">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-200 p-4 rounded-md text-center w-5/12 ml-20 mr-12 mt-10">
          <h2 className="font-bold mb-8 mt-10 text-3xl">Contact Information</h2>
          <p className="mb-8"><strong>MotoLink</strong> lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-8"><strong>Locations:</strong> New York, London, Tokyo</p>
          <p className="mb-8"><strong>Phone:</strong> +1 234 567 890</p>
          <p className="mb-8"><strong>Email:</strong> contact@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
