
import Footer from './Footer/Footer'
//import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from 'react-router-dom'
import { CartProvider } from './Context/Cart'
import Nav from  '../Components/Card/Nav'
const Layout = () => {
  return (
    <div>
    <CartProvider>
<Nav />
</CartProvider>
<Outlet></Outlet>
<Footer />

    </div>
  )
}

export default Layout


