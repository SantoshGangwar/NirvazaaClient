import  { useState ,useContext, useEffect} from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {TiShoppingCart} from 'react-icons/ti'
import {MdFavorite} from 'react-icons/md'
import nirvazaaImage from '../../assets/img/narvazaa-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/Cart';
const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "CONTACT", link: "/contact" },
        { name: "ABOUT", link: "/about" },
        { name: "CONTACT", link: "/contact" }
    ];
    let [open, setOpen] = useState(false);
    
    
   
    const { cartItems } = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(cartItems.length);

  useEffect(() => {
    setCartTotal(cartItems.length);
  }, [cartItems]);

    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='lg:flex items-center justify-between  bg-white py-5 md:px-10 px-2'>
                    {/* logo section */}
                    <div className='font-bold text-xl w-36 md:w-44  lg:w-62 h-8 cursor-pointer flex items-center gap-1'>
                        {/* <BookOpenIcon className='w-7 h-7 text-blue-600' />
                        <span>Inscribe</span>  */}
                      
                     <NavLink to="/">
                       <img src={nirvazaaImage} className="h-14 mr-3" alt="Flowbite Logo" />
                       </NavLink> 
                      
                    </div>
                    {/* Menu icon */}
                    <div className={`absolute right-20 top-6 cursor-pointer md:hidden`}>
                        <button className="text-black "><TiShoppingCart className='w-12 h-7 text-green-500 '/> <h2>{cartTotal}</h2></button>
                    </div>

                    {/* Notification button */}
                    <div className={`absolute right-32 top-6 cursor-pointer  md:hidden`}>
                        <button className="text-black"><MdFavorite className="w-12 h-7 text-green-500" /></button>
                    </div>
                    <div onClick={() => setOpen(!open)} className={`absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7`}>
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                    {/* linke items */}
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-30' : 'top-[-490px]'}`}>
                        {
                            Links.map((link, index) => (
                                <li key={index} className='md:ml-4   lg:ml-5  lg:mr-5 md:my-0 my-7 font-semibold'>
                                    <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                                </li>))
                        } 
                       <div className="lg:ml-20"></div>
                        <button className='btn text-white lg:mr-76 bg-none font-semibold px-3 py-1 rounded duration-500 md:static hidden md:block'><TiShoppingCart className='w-12 h-7 text-green-500 '/></button>
                        <button className='btn text-white bg-none md:ml-0 font-semibold px-3 py-1 rounded duration-500 md:static hidden md:block'><MdFavorite className="w-12 h-7 text-green-500" /></button>
                        {/* <button className='btn bg-gray-600 text-white md:ml-8 ml-16 font-semibold px-3 py-1 rounded duration-500 md:static' ><NavLink to="/register">  Register</NavLink></button> */}
                        <NavLink to="/register" className='btn bg-gray-600 text-white md:ml-8 ml-10 font-semibold px-3 py-1 rounded duration-500 md:static '>  Register</NavLink>
                        <button className='btn bg-gray-600 text-white md:ml-8  ml-16 font-semibold px-3 py-1 rounded duration-500 md:static md:hidden' >Login</button>
                                                
                    </ul>
                    {/* button */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;