import React from "react";
import "./Card.css"; // Import your custom CSS file if needed
import imageSrc from "../../assets/img/IMG-3.jpeg";





const Card1 = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="p-2 ">
      <div
        className={`  overflow-hidden shadow-sm relative  rounded-xl
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >                                             {/* w-full*/}
        <img src={imageSrc} alt="Card" className={`w-[370px] h-[500px] object-cover rounded-xl transform ${
          isHovered ? 'transform scale-125' : ''} transition-transform duration-300`} />
        {isHovered && (
          <div className="absolute bottom-2 left-0 p-4 w-full flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold mt-1 text-slate-600">Horizon Herald Metal Art Panel</h1>
        <h1>Rs. 10,999.00</h1>
      </div>
    </div>
  );
};

export default Card1;
