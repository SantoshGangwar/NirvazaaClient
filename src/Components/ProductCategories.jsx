import React from 'react'
import { useLocation } from "react-router-dom";
import Card3 from './Card/Card3';
import { CartProvider } from './Context/Cart';
import Card1 from './Card/Card1';
import  CustomTab from '../Components/Tab/CustomTab';

const ProductCategories = () => {
  const location = useLocation();
  const data = location.state;
  console.log("santosh gangwar", data.data)


  return (
    <>
      <CartProvider>
  
        <div className="bg-white mt-20">
        <CustomTab />
          <div className=" text-center text-2xl mx-auto justify-center flex mt-10   "> <span className=" block h-0.5 text-center w-20 mt-4 mr-2 bg-slate-600 rounded-lg "></span> <h1> {data.data.categoryName}</h1> <span className=" block h-0.5 text-center w-20  mt-4 ml-2 bg-slate-600 rounded-lg"></span></div>
          <h1 className="text-center mb-20">Top sale in this week</h1> 
          <Card1/>
         
         

          <div className="flex flex-wrap justify-center mx-auto gap-2">


            {data.data?.products?.map((product) => (
              <Card3 key={product._id} product={product} />
            ))}

          </div>
        </div>

      </CartProvider>

    </>

  )
}

export default ProductCategories