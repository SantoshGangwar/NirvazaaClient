// import Card from "../Card/Card"
import {useEffect} from 'react'
import CategogyCard1 from '../Card/CategogyCard1'

import Team from '../../Components/Team'
import Card1 from '../Card/Card1'
import QuickViews from '../Card/QuickViews'
import Card2 from "../Card/Card2"
import { useState } from 'react'
import axios from 'axios';
//import SamllCard from '../Card/SamllCard'
import Filter from '../Filter/Filter'

import Hero from '../Hero/Hero'
import Checkout from '../checkout/Checkout'
const Home = () => { 
  
  const [card2, setcard2]= useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3000/api/categories')
      .then(response => {
        setcard2(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (!card2 || card2.length === 0) {
    return <p>No data available.</p>;
  }
  

  
  
console.log("home",card2)

  return (
    <>
   
   <Hero/>
      
      
  <div className="bg-white">
  <div className=" text-center text-2xl mx-auto justify-center flex   mt-10 "> <span className=" block h-0.5 text-center w-20 mt-4 mr-2 bg-slate-600 rounded-lg "></span> <h1> Wall Decor</h1> <span className=" block h-0.5 text-center w-20  mt-4 ml-2 bg-slate-600 rounded-lg"></span></div>
    <h1 className="text-center mb-20">Top sale in this week</h1>

      <div className="flex flex-wrap  justify-center mx-auto  lg:gap-5 mt-10 mb-10"> 
       
        
        {card2.map((data)=>(
        <Card2 key={data._id} data={data} />
        ))}
        
         
       
        
      </div>
      </div>

      <Filter key={card2} data={card2}/>
  <div className="bg-white mt-20">
    <div className=" text-center text-2xl mx-auto justify-center flex   "> <span className=" block h-0.5 text-center w-20 mt-4 mr-2 bg-slate-600 rounded-lg "></span> <h1> Wall Decor</h1> <span className=" block h-0.5 text-center w-20  mt-4 ml-2 bg-slate-600 rounded-lg"></span></div>
    <h1 className="text-center mb-20">Top sale in this week</h1> 
    
      <div className="flex flex-wrap justify-center mx-auto gap-2">
     
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      </div>
     
      <div>
        <CategogyCard1 />
   
        <Team />

        <QuickViews />
      </div>
      <div> 
      
      
      
      </div>
   
<Checkout/>

    </>
  )
}

export default Home