import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Order from './order/Order'
import Menu from './menu/Menu'

const HomeLayout = () => {
  return (
    <>
        <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-white">
          <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="order" element ={<Order />} />
                <Route path="menu" element={<Menu />} />
              </Routes>
          <Footer />
        </div>
    </>
  )
}

export default HomeLayout
