import { useState, useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { LoadingContext } from "../context/LoadingContext";

export const Checkout = ({ orderId, setOrderId }) => {
  const { loading, setLoading } = useContext(LoadingContext);
  const [dataUser, setDataUser] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [formCheckout, setFormCheckout] = useState(false);
  const { cart, total, clearCart } = useContext(CartContext);

  const totalFixed = total.toFixed(2);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const reemailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = nameRef.current.value;
    const lastNameInput = lastNameRef.current.value;
    const phoneInput = phoneRef.current.value;
    const emailInput = emailRef.current.value;
    const reemailInput = reemailRef.current.value;

    if(emailInput === reemailInput) {
      setDataUser({
        name: nameInput,
        lastName: lastNameInput,
        phone: phoneInput,
        email: emailInput,
      });
      setFormCheckout(true);
    } else {
      alert("Los email deben coincidir");
    }
  };

  const createOrder = async ({name, lastname, phone, email}) => {
    try {
      setLoading(true);

      const objOrder = {
        buyer: {
          name: name,
          lastname: lastname,
          phone: phone,
          email: email,
        },
        items: cart,
        date: new Date(),
        totalFixed,
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);

      const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids));

      const querySnapshot = await getDocs(productsCollection);
      const { docs } = querySnapshot;

      docs.forEach((doc) => {
        const data = doc.data();
        const stockDb = data.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...data });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderCollection = collection(db, "orders");
        const { id } = await addDoc(orderCollection, objOrder);

        clearCart();
        setOrderId(id);
      } else {
        console.error("Hay productos que no tienen stock disponible");
      }
    } catch (error) {
      console.error("Hubo un error en la generacion de la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading && formCheckout) {
    return <h1>Su orden esta siendo generada...</h1>;
  }

  if (orderId) {
    return (
      <div className="mx-auto mt-6 text-center max-md:w-10/12 w-8/12 absolute left-0 right-0">
        <p className="text-3xl xl:text-4xl font-semibold">¡Muchas gracias por su compra!</p>
        <h1 className="mt-4 text-xl">El id de su orden es: {orderId}</h1>
      </div>
    );
  }

  return (
    <div className="w-11/12 px-5 bg-white h-fit flex mx-auto flex-col rounded-xl">
      <p className="text-2xl mt-5  font-bold">Total: {total.toFixed(2)}€</p>
      {!formCheckout ? 
        <form className="flex flex-col mt-1" onSubmit={handleSubmit}>
          <input ref={nameRef} type="text" placeholder="Ingrese su nombre" required
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={lastNameRef} type="text" placeholder="Ingrese su apellido" required
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={phoneRef} type="text" placeholder="Ingrese su teléfono" required
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={emailRef} type="email" placeholder="Ingrese su email" required
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={reemailRef} type="email" placeholder="Reingrese su email" required
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <button 
            type="submit"
            className="bg-green-600 px-1 py-2 text-lg text-white my-4 rounded-xl 
              hover:opacity-90 hover:shadow-lg"
          >
              Continuar
          </button>
        </form>
      : ""}
      {formCheckout === true ?
        <button 
          onClick={() => createOrder({
            name: dataUser.name,
            lastname: dataUser.lastName,
            phone: dataUser.phone,
            email: dataUser.email
          })} 
          className="bg-myred px-3 py-3 my-4 rounded-xl hover:shadow-md hover:opacity-90 text-xl text-white"
        >
          Generar orden de compras
        </button>
      : ""}
    </div>
  );
};
