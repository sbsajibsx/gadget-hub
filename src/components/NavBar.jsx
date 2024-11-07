
import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";

import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { getStoredCartList } from "../Utility/AddToDb";
import { useEffect, useState } from "react";



const NavBar = () => {
    const location = useLocation();
    const [cartList, setCartList] = useState([]);
    const allCart = useLoaderData();
    useEffect(()=>{
      const storedCartList= getStoredCartList();
      const storedCartListInt = storedCartList.map(id => parseInt(id));
      const addedCartList = allCart.filter(cart => storedCartListInt.includes(cart.product_id));
      setCartList( addedCartList)
    } , [])
    

    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    
    </>
  return (
    <div className={`navbar w-11/12 md:w-10/12 mx-auto ${location.pathname === '/'? 'bg-[#9538E2] text-white' : ''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl md:text-3xl">Gadget Hub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          <button className="p-2 border-2 rounded-full mr-3 relative bg-white text-black"><MdOutlineShoppingCart /> <span className="badge badge-sm indicator-item absolute -top-1">{cartList.length}</span></button>
          <button className="p-2 border-2 rounded-full relative bg-white text-black"><IoIosHeartEmpty /><span className="badge badge-sm indicator-item absolute -top-1">0</span></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
