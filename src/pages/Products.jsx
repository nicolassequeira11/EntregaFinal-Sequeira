import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
import { Footer } from "../components/Footer";

export const Products = () => {
  const { loading, setLoading, loadingIndicator } = useContext(LoadingContext);

  const listProductsAnime = [
    {
      "name": "One Piece",
      "category": "OnePiece",
      "img": "https://i.ibb.co/YczmhVB/one-piece-logo.png",
      "img2": "https://i.ibb.co/wScRn9z/onepiece-productos.png"
    },
    {
      "name": "Demon Slayer",
      "category": "DemonSlayer",
      "img": "https://i.ibb.co/pww5jHj/demon-slayer-logo.png",
      "img2": "https://i.ibb.co/4Zs8f0j/DEMON-1024x1024-1.png"
    },
    {
      "name": "Naruto",
      "category": "Naruto",
      "img": "https://i.ibb.co/VTz9rgw/naruto.png",
      "img2": "https://i.ibb.co/0qDRxHL/Naruto-1024x1024-1.png"
    },
    {
      "name": "Dragon Ball",
      "category": "DragonBall",
      "img": "https://i.ibb.co/nP6pHrV/dragonball.png",
      "img2": "https://i.ibb.co/DQdKtZN/Raditz-Dragon-Ball-Ichibansho-1024x1024-1.png"
    },
    {
      "name": "My Hero Academia",
      "category": "myhero",
      "img": "https://i.ibb.co/qFvrFvZ/My-Hero-Academia-logo-in-Japan-20150106.png",
      "img2": "https://i.ibb.co/Jtxccqd/MHA-1024x1024-1.png"
    }
  ];

  useEffect(() => {
    setLoading(true); 

    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 400)); 

        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setLoading(false); 
      }
    };
    fetchData();
    return () => setLoading(false);
  }, [setLoading]);

  if (loading) {
    return loadingIndicator; 
  }

  return (
    <div className="pt-10 max-md:h-full h-screen justify-between flex flex-col">
      <div 
        className="flex mx-auto justify-center flex-wrap max-md:w-11/12 max-md:flex-col"
      >
        {listProductsAnime.map((item, index) => (
          <Link 
            to={`/category/${item.category}`} 
            key={index} 
            className="w-1/6 px-2 max-md:w-10/12 max-md:mx-auto my-4"
          >
            <div className="px-2 shadow-lg bg-white rounded-xl">
              <img 
                src={item.img2} 
                alt={item.name}
                className="cursor-pointer pt-2 hover:scale-105 transition-all ease-linear duration-75" 
              />
              <img 
                src={item.img}
                alt={item.name} 
                className="rounded-xl cursor-pointer"
              />
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};
