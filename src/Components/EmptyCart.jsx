
import React from 'react';
import emptyCartImage from '../assets/img/emptyCart.jpg'; // Import your empty cart image

const EmptyCart = () => {
  return (
    <div className="container mx-auto  flex flex-col items-center justify-center   relative">
      <img src={emptyCartImage} alt="Empty Cart" className=" h-[400px]" />
      <div className='absolute text-center top-6 '>
      <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
      <p className="text-gray-600 mb-8 text-center">
        It looks like your cart is empty. Start shopping and add items to your cart.
      </p>
      <a href="/" className="bg-blue-500 text-white rounded-full py-3 px-6 hover:bg-blue-600 text-lg">
        Explore Products
      </a>
      </div>
    </div>
  );
};

export default EmptyCart;
