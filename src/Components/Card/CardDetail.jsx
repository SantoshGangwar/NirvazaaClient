
import React from 'react';
import image1 from '../../assets/img/IMG-1.jpeg';
import image2 from '../../assets/img/IMG-2.jpeg';
import image3 from '../../assets/img/IMG-3.jpeg';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai' 
import { useContext } from 'react';
import { CartContext } from '../Context/Cart' 
// import products from '../productsJson'






const CardDetail = () => {
  const images = [image1, image2, image3, image2, image1, image2];
  const [isFavorite, setIsFavorite] = React.useState(false); 
  const {  addToCart } = useContext(CartContext);

  const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
  };
  const changeImage = (image) => {
    document.getElementById('mainImage').src = image;
  };

  return (
    <div className=' p-4 mt-6  '>

      <div className="flex flex-col   lg:flex-row w-full">
        {/* Left Card (100% width on small screens, 35% width on larger screens) */}
        <div className="w-full lg:w-[35%]  items-center rounded shadow-md p-4 mb-4 sm:mr-3">
          <div className="max-w-md rounded shadow-md mx-auto relative">
            <img id="mainImage" className="w-full   h-96 object-cover py-1 px-3" src={images[0]} alt="Main" />
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
                      


            <div className="flex justify-between p-4">
              {images.slice(1).map((image, index) => (
                <img
                  key={index}
                  className="w-10 h-10 md:w-16 md:h-16 object-cover cursor-pointer hover:border-blue-500"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onMouseOver={() => changeImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mx-auto gap-4 mt-5">
            <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold  flex items-center   py-1 px-2 md:py-4 md:px-12 rounded"   onClick={() => {
                    addToCart({
                      "id": 64,
                      "name": "Product 10",
                      "description": "Description for Product 10",
                      "price": 109.99
                  })
                  }
                  }>
              <AiTwotoneThunderbolt className='m-1' /> Buy Now
            </button>
            <button className="bg-green-500 hover:bg-green-700 flex items-center text-white font-bold py-1 px-2 md:py-4 lg:px-12 rounded"  onClick={() => {
                    addToCart({price:500 ,id:21})
                  }
                  }>
              <AiOutlineShoppingCart className='m-1'/> Add To Cart
            </button>
          </div>

        </div>

        {/* Right Card (100% width on small screens, 65% width on larger screens) */}
        <div className="w-full lg:w-[65%] rounded  p-4">
          <h2 className="text-2xl font-bold mb-4">TechMaster X5000</h2>
          <img src="smartphone-image-url.jpg" alt="TechMaster X5000" className="mb-4 rounded-lg w-full" />

          <p className="text-gray-700 mb-2">
            Introducing the TechMaster X5000, the epitome of innovation and style. This state-of-the-art smartphone is designed for tech enthusiasts and trendsetters alike. With its sleek design, powerful performance, and cutting-edge features, the X5000 is set to revolutionize your mobile experience.
          </p>

          <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>6.5-inch Super AMOLED Display with 120Hz Refresh Rate</li>
            <li>Octa-Core Snapdragon 8cx Processor for Lightning-Fast Performance</li>
            <li>12GB RAM and 256GB Internal Storage (Expandable up to 1TB)</li>
            <li>Quad-Camera Setup: 64MP Main, 12MP Ultra-Wide, 8MP Telephoto, and 2MP Macro</li>
            <li>5000mAh Battery with 50W Fast Charging</li>
            <li>Ultra-Secure In-Display Fingerprint Sensor</li>
            <li>5G Connectivity for Blazing Internet Speeds</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Additional Information:</h3>
          <div className="flex items-center mb-2">
            <span className="mr-2">Pin Code:</span>
            <span className="text-green-500 font-bold">123456</span>
          </div>

          <div className="flex items-center mb-2">
            <span className="mr-2">Average Rating:</span>
            <span className="text-yellow-500 font-bold">4.8</span>
          </div>

          <div className="flex items-center mb-4">
            <span className="mr-2">Total Reviews:</span>
            <span className="text-blue-500 font-bold">500+</span>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>

      </div>
    </div>

  );
};

export default CardDetail;
