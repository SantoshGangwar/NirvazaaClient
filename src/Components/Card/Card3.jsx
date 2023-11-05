import React from "react";
import "./Card.css"; // Import your custom CSS file if needed
// import imageSrc from "../../assets/img/IMG-3.jpeg";
//import { useLocation } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../Context/Cart";
  

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card3 = (product) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const {addToCart} = useContext(CartContext); 
  console.log("myproductgfgfjhjh ",product)
 

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Product added to cart!', {
      position: 'top-right', // You can customize the position of the toast
      autoClose: 2000, // Toast will automatically close after 2000ms (2 seconds)
      hideProgressBar: true, // Disable the progress bar
    });
  };
  return (
    
    <div className="p-2 bg-rose-100"> 
     
     
      <div 
     
        className={`  overflow-hidden shadow-sm relative  rounded-xl
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >   
                                               {/* w-full*/}
        <img src={product.product.productImage} alt="Card" className={`w-[300px] h-[400px] object-cover bg-rose-100 rounded-xl transform ${
          isHovered ? 'transform scale-125' : ''} transition-transform duration-300`} />
        {isHovered && (
          <div className="absolute bottom-2 left-0 p-4 w-full flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded" onClick={()=>
          handleAddToCart({product})}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold mt-1 text-slate-600">{product.product.productname}</h1>
        <h1>{product.product.MaterailName}</h1>
        <h1>{product.product.Price}</h1>

      </div>
     
     
    </div>
  );
};

export default Card3;

