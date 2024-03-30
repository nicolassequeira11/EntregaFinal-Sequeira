import { useState } from "react";
import { Link } from "react-router-dom"

export const Item = ({to, key, img1, img2, title, price, width}) => {
  const [isHovered, setIsHovered] = useState();

  return(
    <Link to={to} key={key} className={`${width} cursor-pointer`}>
      <div className="max-w-[250px] rounded-b-xl p-2">
        <img 
          src={isHovered ? img2 : img1} 
          onMouseOver={()=> setIsHovered(true)}
          onMouseOut={()=> setIsHovered(false)}
          className="rounded-t-xl p-2 bg-white" 
        />
        <div className="bg-gray-900 rounded-b-xl py-3">
          <p className="text-white text-sm font-semibold text-center px-2 pb-1">
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