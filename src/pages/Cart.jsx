import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Checkout } from "../components/Checkout";

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div className="w-10/12 mt-4 mx-auto">
      <div className="flex mx-auto max-md:flex-col">
        <div className="max-lg:w-full w-8/12 px-10">
          {cart.map((prod) => {
            return (
              <article key={prod.id} className="flex py-5 border-b-2">
                <div className="flex w-11/12">
                  <div className="max-lg:w-4/12 w-2/12">
                    <img src={prod.img[0]} className="" />
                  </div>
                  <div className="ms-3">
                    <h2 className="text-xl font-semibold">{prod.name}</h2>
                    <p>Cantidad: {prod.quantity}</p>
                    <p>{prod.price}€</p>
                  </div>
                </div>
                <div className="max-lg:w-3/12 w-1/12 flex">
                  <button 
                      onClick={()=> removeItem(prod.id)}
                      className="bg-myred text-white m-auto px-4 py-2 text-2xl"
                    >
                      x
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="max-lg:w-full bg-white my-4 w-4/12 justify-center flex py-2 rounded-xl">
          <Checkout />
        </div>
      </div>
    </div>
  );
};
