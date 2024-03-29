import { Link } from "react-router-dom"
const AdminNavbar = ({children}: {children: JSX.Element}) => {
  return (
    <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">
            <Link to="/">
                <img src="https://i.ibb.co/JpvPTYs/LOGO.png" alt="logo" className="w-12 h-10 mr-2 hover:bg-slate-200 hover:rounded-full hover:scale-105" />
            </Link>
                <div className="flex flex-col mb-3 ml-1">
                    <span className="font-bold">Epic Crust</span>
                    <sub>Employee Dashboard</sub>
                </div>
            </div>

            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                <li><a>Home</a></li>
                <Link to="pizza">
                    <li><a>Pizza</a></li>
                </Link>
                <li><a>Delivery</a></li>
                </ul>
            </div>
            </div>
            {children}
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                <li><a>Home</a></li>
                <li><a>Pizza</a></li>
                <li><a>Delivery</a></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminNavbar
