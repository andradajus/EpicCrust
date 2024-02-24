import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './pages/layout'
import Login from './pages/login/Login'


function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomeLayout />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
