import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {

  const listProducts = [
    {
      "name": "One Piece",
      "category": "OnePiece",
      "img": "https://i.ibb.co/YczmhVB/one-piece-logo.png"
    },
    {
      "name": "Demon Slayer",
      "category": "DemonSlayer",
      "img": "https://i.ibb.co/pww5jHj/demon-slayer-logo.png"
    },
    {
      "name": "Naruto",
      "category": "Naruto",
      "img": "https://i.ibb.co/VTz9rgw/naruto.png"
    }
  ]

  return(
    <div className="py-10">
      <div className="flex mx-auto justify-center flex-wrap max-md:w-11/12">
        {listProducts.map(item => (
          <Link to={`/category/${item.category}`} key={item.id} className="w-1/6 max-md:w-6/12">
            <div className="px-2">
              <img src={item.img} className="shadow-lg rounded-xl cursor-pointer" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}