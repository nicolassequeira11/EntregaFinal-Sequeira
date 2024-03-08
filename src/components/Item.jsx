import { useState } from "react";
import { Link } from "react-router-dom"

export const Item = ({to, key, img1, img2, title, price, width}) => {
  const [isHovered, setIsHovered] = useState();

  return(
    <Link to={to} key={key} className={`${width} p-3 cursor-pointer`}>
      <div className="">
        <img 
          src={isHovered ? img2 : img1} 
          onMouseOver={()=> setIsHovered(true)}
          onMouseOut={()=> setIsHovered(false)}
          className="rounded-t-xl p-2 bg-white" 
        />
        <div className="bg-gray-900 rounded-b-xl py-3">
          <p className="text-white text-sm font-semibold text-center pb-1">
            {title}
          </p>
          <p className="text-white text-sm text-center">
            {price} €
          </p>
        </div>


      </div>
    </Link>
  )
}