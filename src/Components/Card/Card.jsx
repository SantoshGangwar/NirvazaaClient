
import image from '../../assets/img/bootstrap.jpg';

import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './card.css'

const Card = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };



    return (
        <div className='bg-white  shadow-md  m-2 border  overflow-hidden' style={{ width: '300px', height: '400px' }}>
            <div className='flex flex-col relative'>
                <div className='image-container cursor-pointer'>
                    <img src={image} alt='image' className='w-80 h-80 object-fit' />
                    {isFavorite ? (
                        <AiFillHeart
                            className='m-4 absolute top-0 right-0 text-red-500 h-10 w-10 cursor-pointer'
                            onClick={toggleFavorite}
                        />
                    ) : (
                        <AiOutlineHeart
                            className='m-4 absolute top-0 right-0 text-slate-200 h-10 w-10 cursor-pointer'
                            onClick={toggleFavorite}
                        />
                    )}
                </div>

                <div className='bg-white  text-content' >
                    <p className='text-xl ml-5 text-gray-900 font-bold mb-1 mt-2'>Brand Name</p>
                    <p className='text-lg ml-5 text-gray-700 mb-1'>Packs of Two Men</p>

                    <div className='flex items-center ml-5'>
                        <p className='text-xl font-bold text-green-500 mr-2'>$499</p>
                        <p className='text-sm text-gray-500 line-through mr-2'>$1500</p>
                        <p className='text-sm text-green-500'>85% Off</p>
                    </div>
                    <p className='text-xl ml-5 text-gray-900 font-bold mb-1 mt-1'>Brand Name</p>
                    <p className='text-lg ml-5 text-gray-700 mb-1'>Packs of Two Men</p>
                </div>

            </div>
        </div>
    );
};

export default Card;


