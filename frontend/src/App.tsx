import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './pages/layout'
import Login from './pages/login/Login'
import EmployeeLayout from './pages/employee/layout'
import Registration from './pages/registration/Registration'


function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomeLayout />} />
            <Route path="login" element={<Login />} />
            <Route path="admin/*" element={<EmployeeLayout />} />
            <Route path="registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
