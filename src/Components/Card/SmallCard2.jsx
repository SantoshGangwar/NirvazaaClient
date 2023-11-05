import React from "react";
import "./Card.css"; // Import your custom CSS file if needed






const SmallCard2 = (product) => {
  const [isHovered, setIsHovered] = React.useState(false);
    // console.log("small",product)
  return (
    <>
    {/* {data.data.map((cat)=>( */}
    <div  className="p-2 w-40 h-40  mb-20 bg-rose-100">

      
      <div
        className={`  overflow-hidden shadow-sm relative  w-40 h-40 rounded-xl
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >                                             {/* w-full*/}
        <img src={product.product.productImage} alt="Card" className={`w-40 h-40 object-cover rounded-full transform ${
          isHovered ? 'transform scale-125' : ''} transition-transform duration-300 bg-rose-100`} />
        {isHovered && (
          <div className="absolute bottom-2 left-0 p-4 w-full flex items-center justify-center">
            {/* <button className="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button> */}
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold mt-1 text-slate-600 text-center">{product.product.productname}</h1>
        <h1 className="font-bold mt-1 text-slate-600 text-center">{product.product.Price}</h1>
        <h1 className="font-bold mt-1 text-slate-600 text-center">{product.product.Material}</h1>
      </div>
    </div>
    {/* ))} */}
    </>
  );
};

export default SmallCard2;
