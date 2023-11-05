
import Cart from "../../Components/Cart"
import { CartProvider} from '../Context/Cart'
const About = () => {
  return (
    <>
    <CartProvider>
    <div className=' overflow-scroll'>
      <Cart />


    </div>  
    </CartProvider>
    </> 
  )
}

export default About