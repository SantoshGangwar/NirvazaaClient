
import CardDetail from '../Card/CardDetail'
import { CartProvider} from '../Context/Cart'
import CategoryCard from "../Card/CategoryCard"
const ContactUs = () => {
  return ( 
    <> 
    <CartProvider>
    <div className='m-0 p-0 w-full'>

      <CardDetail /> 
     
    </div>  
    </CartProvider>
   
<div className=" md:flex ">
        <CategoryCard />
      </div>
    </>
  )
}

export default ContactUs