import React from "react";
import { useNavigate } from "react-router-dom";

import "./Card2.css";





const Card2 = (data) => {
    
    //const [isHovered, setIsHovered] = React.useState(false);
// console.log("santosh",data)

const navigate = useNavigate();

    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = () => {
        // Navigate to the dynamic route and pass the data.product as a parameter
        // history.push(`/details/${data}`);
        //history.push({ pathname: , state: data })
        navigate("/product", { state: data });
    };console.log("card2",data)
    return (
        <div className="p-2  ">
            <div
                className={`w-[310px] rounded md:w-[550px] md:h-[580px] overflow-hidden shadow-lg relative  md:mx-auto 
        `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >                                             {/* w-full*/}
                <img src={data.data.categoryImage} alt="Card" className={`w-full h-[580px]  object-cover transform ${isHovered ? 'transform scale-110 card-transition' : 'card-transition'}`} />

                <div className="absolute bottom-2 left-0 p-3 w-full flex items-center justify-center">
                    <button className="bg-white hover:bg-white-700 text-slate-600 font-bold py-3 px-4 rounded" 
                    onClick={handleClick} >
                    {/* DECORATIVE SHOWPIECES */}
                    {data.data.categoryName}
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Card2;
