import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Checkout } from "../components/Checkout";
import CancelIcon from '@mui/icons-material/Cancel';
import { Footer } from "../components/Footer";
import { ItemCart } from "../components/ItemCart";

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
                <ItemCart 
                  id={prod.id}
                  img={prod.img[0]}
                  name={prod.name}
                  quantity={prod.quantity}
                  price={prod.price}
                />
              );
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
