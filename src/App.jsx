
import {
  createBrowserRouter,

  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import ContactUs from "./Components/Pages/ContactUs"
import RegistrationForm from './Components/Pages/User'
import Cart from "./Components/Cart" 
import { CartProvider } from "./Components/Context/Cart"
import RouteError from './Components/RouteError';
import  ProductCategories from './Components/ProductCategories'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter(
createRoutesFromElements(

<Route path="/" element={<Layout/>}>
 
  <Route path="/" element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path="contact" element={<ContactUs />}/>
  <Route path='register' element={<RegistrationForm/>}/>
  <Route path='cart' element={<CartProvider><Cart/></CartProvider>} />
  <Route path="*" element={<RouteError />} /> 
  <Route path="/product" element={< ProductCategories/>} />

</Route>


)

)


const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />

    </>
  )
}

export default App