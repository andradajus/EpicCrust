import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './pages/layout'
import Order from './pages/order/Order'

function App() {

  return (
    <>
        <HomeLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="order" element ={<Order />} />
            </Routes>
          </BrowserRouter>
        </HomeLayout>
    </>
  )
}

export default App
