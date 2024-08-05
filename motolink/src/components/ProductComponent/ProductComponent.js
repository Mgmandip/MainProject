import React, { useState } from 'react'
import FormValidation from '../FormValidation/FormValidation';

const ProductComponent = () => {
    const [product,setProduct]= useState('');
    const [price, setPrice]= useState('');
    const [description, setDescription]= useState('');
    const [Category, setCategory]= useState('');

  return (
    <>
        <div className='bg-blue-900 text-white text-2xl p-2 text-center'>Add Products</div>
        {/* <form className='flex justify-center mt-10'>
            <div>
                <h1>{product}</h1>
                <h2>{price}</h2>
                <h2>{description}</h2>
                <h2>{Category}</h2>
                <label className='text-xl text-blue-800 mx-4' for='name'>Product Name:</label>
                <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-blue-600 rounded-lg p-2'id='name' text='type' placeholder='Enter Product'></input>
                
                <label className='text-xl text-blue-800 mx-4' for='price'>Price:</label>
                <input onChange={(e)=>setPrice(e.target.value)} className='border-2 border-blue-600 rounded-lg p-2'id='price' text='type' placeholder='Enter Price'></input>

                <label className='text-xl text-blue-800 mx-4' for='price'>Description:</label>
                <input onChange={(e)=>setDescription(e.target.value)} className='border-2 border-blue-600 rounded-lg p-2'id='price' text='type' placeholder='Enter Description'></input>

                <label className='text-xl text-blue-800 mx-4' for='name'>Product Category:</label>
                <input onChange={(e)=>setCategory(e.target.value)} className='border-2 border-blue-600 rounded-lg p-2'id='name' text='type' placeholder='Enter Product Category'></input>
            </div>
        </form> */}
        <FormValidation/>
    </>
  )
}

export default ProductComponent