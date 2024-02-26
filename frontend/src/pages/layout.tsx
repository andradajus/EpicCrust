import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Order from './order/Order'
import Menu from './menu/Menu'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchCartId } from '@/lib/utils'

const HomeLayout = () => {
  const [cartFlag, setCartFlag] = useState<boolean>(false)

  useEffect(() => {
    const initiateAuthorization = () => {
      const token = document.cookie.split("token=")[1];
      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
      }
    };
    initiateAuthorization();
  }, []);

  useEffect(() => {
  const fetchCartIdData = async () => {
    try {
      const res = await fetchCartId()
      console.log("cart id", res)
      localStorage.setItem('OrderId', res.cart_id)
    }
    catch (error) {
      console.log(error)
    }
  }
    fetchCartIdData();
  }, []);



  return (
    <>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-white">
          <Navbar  cartFlag={cartFlag} setCartFlag={setCartFlag} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="order" element ={<Order />} />
                <Route path="menu" element={<Menu setCartFlag={setCartFlag} />} />
              </Routes>
          <Footer />
        </div>
    </>
  )
}

export default HomeLayout
