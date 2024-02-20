import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";
import productsData from "../data/products.json";

// Components
import { CartWidget } from "./CartWidget";

// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const NavBar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null); 

  return(
    <header 
      className="bg-black flex flex-col"
    >
      <div 
        className="flex max-md:w-full w-8/12 justify-around py-4 mx-auto"
      >

        {/* Logo */}
        <div 
          className="my-auto flex"
        >
          <Link>
            <img 
              src={Logo} 
              className="object-contain max-md:h-8 h-14 m-auto" 
            />
          </Link>
        </div>

        {/* Search */}
        <div 
          className="max-md:w-5/12 w-2/4 my-auto flex text-white"
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
          className="flex justify-end text-white"
        >
          <Link 
            className="flex my-auto hover:text-gray-200"
          >
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
          <Link 
            className="flex my-auto hover:text-gray-200"
          >
            <CartWidget />
          </Link>
        </div>
      </div>
      
      {/* Links */}
      <div 
        className="flex flex-col bg-mywhite"
      >
        <div 
          className="my-auto py-1 w-10/12 mx-auto flex justify-between max-md:w-full"
        >
          <div 
            className="flex my-auto"
          >
            {productsData.map((item, index) => (
              <ul
                key={index}
                className="font-bold flex-col text-lg max-md:pe-1 px-3 flex cursor-default"
                onMouseOver={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <p 
                  className="flex text-myblack"
                >
                  {item.name} 
                  <ArrowDropDownIcon 
                    className="my-auto" 
                  />
                </p>

                <div 
                  className="absolute max-md:mt-8 mt-7 w-screen left-0 right-0"
                >
                  <div 
                    className={`bg-mywhite w-10/12 rounded-b-xl mx-auto flex max-md:flex-col
                      ${hoveredMenu !== item.name && "hidden"}`}
                  >
                    <div 
                      className="w-3/12 max-md:hidden"
                    >
                      <img 
                        src={item.img} 
                        className="flex w-full p-8 object-cover" 
                      />
                    </div>
                    <div 
                      className="w-9/12 my-8 flex flex-wrap 
                        max-md:my-2 max-md:w-full max-md:flex-col"
                    >
                      {item.list.map((item, index) => (
                        <Link 
                          key={index} 
                          className="
                            w-3/12 font-semibold text-gray-600 text-md py-3 
                            max-md:w-full md:px-3 md:text-sm max-md:text-center
                            lg:text-lg
                          hover:text-myred"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

              </ul>
            ))}
          </div>

          {/* Wishlist */}
          <div className="flex my-auto">
            <Link 
              className="font-bold text-lg flex mx-3 hover:text-myred"
            >
              <FavoriteIcon 
                className="flex my-auto max-md:me-0 me-1" 
              />
              <p className="max-md:hidden">
                FAVORITOS
              </p>
            </Link>
          </div>

        </div>

      </div>
    </header>
  )
}