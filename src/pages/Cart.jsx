import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Checkout } from "../components/Checkout";
import CancelIcon from '@mui/icons-material/Cancel';
import { Footer } from "../components/Footer";

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  return (
    <div className="pt-4 mx-auto min-h-[100vh] flex flex-col justify-between">
      <div className="flex mx-auto w-10/12 max-lg:w-full max-md:flex-col">
        <div className="max-lg:w-full w-8/12 px-10">
          {cart.length > 0 || orderId
            ? 
            cart.map((prod) => {
              return (
                <article 
                  key={prod.id} 
                  className="flex py-5 justify-center border-b-2"
                >
                  <div className="flex w-full max-md:flex-col relative">
                    <div className="max-md:w-11/12 max-md:mx-auto lg:w-4/12 w-3/12">
                      <img 
                        src={prod.img[0]} 
                      />
                      <div className="max-lg:w-3/12 w-1/12 flex absolute -top-5 -left-5">
                        <button 
                            onClick={()=> removeItem(prod.id)}
                            className="text-white m-auto px-4 py-2 text-2xl"
                          >
                            <CancelIcon className="text-myred scale-150 hover:opacity-85" />
                        </button>
                      </div>
                    </div>
                    <div 
                      className="ms-3 w-9/12 justify-between flex flex-col 
                        max-md:ms-0 max-md:w-full max-md:text-center max-md:mt-4"
                    >
                      <div>
                        <h2 className="text-2xl font-semibold">
                          {prod.name}
                        </h2>
                        <p className="text-xl">
                          Cantidad: {prod.quantity}
                        </p>
                        <p className="text-xl">
                          {prod.price}€ c/u
                        </p>
                      </div>
                      <div>
                        <p className="text-xl">
                          Subtotal: {(prod.quantity * prod.price).toFixed(2)}€
                        </p>
                      </div>
                    </div>
                  </div>
                </article>);
              })
            : 
            <p className="text-2xl text-center mt-6 mb-4">
              No hay productos en el carrito.
            </p>
          }
        </div>
        <div className="max-lg:w-full my-4 w-4/12 justify-center flex">
          <Checkout 
            orderId={orderId} 
            setOrderId={setOrderId} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
