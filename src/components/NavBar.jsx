import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

// Components
import { CartWidget } from "./CartWidget";

export const NavBar = () => {

  return(
    <header 
      className="bg-black flex flex-col"
    >
      <div 
        className="flex max-md:w-11/12 w-8/12 justify-around py-4 mx-auto"
      >

        {/* Logo */}
        <div 
          className="my-auto flex max-md:w-4/12 w-1/4"
        >
          <Link to="/">
            <img 
              src={Logo} 
              className="object-contain max-md:h-8 h-14 m-auto" 
            />
          </Link>
        </div>

        {/* Search */}
        <div 
          className="max-md:w-4/12 w-2/4 my-auto flex text-white max-md:hidden"
        >
          <input 
            className="
              w-full mx-auto justify-between flex my-auto py-3 cursor-text 
              bg-transparent border-b-2 border-white text-white text-xl focus:outline-none"
            placeholder="Buscar"
            type="text"
          /> 
        </div>

        {/* Icons */}
        <div 
          className="max-md:w-8/12 w-1/4 flex text-white max-md:justify-end"
        >
          <Link to="/products" className="my-auto me-3 text-lg md:w-8/12 text-center">
            Productos
          </Link>
          <div className="flex w-4/12 justify-center">
            <Link className="flex my-auto hover:text-gray-200">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link> 
            <Link to="/cart" className="flex my-auto hover:text-gray-200">
              <CartWidget />
            </Link>
          </div>
          
        </div>

      </div>
    </header>
  )
}