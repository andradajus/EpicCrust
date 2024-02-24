import { Route, Routes } from "react-router-dom"
import EmployeeHome from "./Home"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import EmployeePizza from "./pizza/EmployeePizza"

const EmployeeLayout = () => {
  return (
    <>
      <AdminNavbar>
        <Routes>
          <Route path="/" element={<EmployeeHome />} />
          <Route path="pizza" element={<EmployeePizza />} />
        </Routes>
      </AdminNavbar>
    </>

  )
}

export default EmployeeLayout