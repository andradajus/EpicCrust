import { GameIconsFullPizza, MaterialSymbolsPersonRounded } from "@/assets/Icons"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getOrder } from "@/lib/utils";
import Cart from "./Cart";

type OrderDataProps = {
  id: number;
  order_id: string;
  pizza_id: number;
  quantity: number;
  pizza: PizzaDataProps;
  length: number;
};


type PizzaDataProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  size: string;
  is_available: boolean;
};

type NavbarProps = {
  setCartFlag: React.Dispatch<React.SetStateAction<boolean>>;
  cartFlag: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ setCartFlag, cartFlag }) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const orderId = localStorage.getItem('OrderId')
  const [orderData, setOrderData] = useState<any>()

  useEffect (() => {
    const cookies = document.cookie.split(';');
    let token = null;
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === 'token') {
            token = cookieValue;
            break;
        }
    }
    if (token) {
        console.log("token", token)
        setIsLoggedIn(true)
    }
  }, [navigate])

  const fetchOrderData = async (): Promise<void> => {
    try {
      const res: OrderDataProps = await getOrder(orderId as string);
      setOrderData(res)
      setCartFlag(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOrderData()
  }, [cartFlag])

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false)
  }

  console.log("Orderdata", orderData)

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
          <Link className="flex-1" to="/">
            <img src="https://i.ibb.co/JpvPTYs/LOGO.png" alt="logo" className="w-12 h-10 mr-2" />
            <a className="btn btn-ghost text-xl">Epic Crust</a>
          </Link>

        <div className="flex-1 w-full justify-between">
          <div>
            <ul className="menu menu-horizontal px-1">
              <Link to="/menu">
                <li>
                  <a className="text-xl font-bold">
                    <GameIconsFullPizza className="h-6 w-6 text-accent"/>
                    Menu
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>


        <div className="flex-none">
          <div>
            {!isLoggedIn ? (
            <button className="btn btn-ghost" onClick={() => navigate("/login")}>Login</button>
              ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <MaterialSymbolsPersonRounded className="w-5 h-5"/>
              </div>

              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
              )
            }
          </div>

          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">{orderData?.length ? orderData.length : 0}</span>
                </div>
              </label>
            </div>
            <div className="drawer-side z-5">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {orderData && <Cart orderData={orderData} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
