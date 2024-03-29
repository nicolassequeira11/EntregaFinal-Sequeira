import { useState, useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [dataUser, setDataUser] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [formCheckout, setFormCheckout] = useState(false);
  const { cart, total, clearCart } = useContext(CartContext);

  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const reemailRef = useRef(null);

  const handleSubmit = () => {
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

  console.log(dataUser);

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
        total,
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

  if (loading) {
    return <h1>Su orden esta siendo generada...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div className="w-11/12 px-2 flex mx-auto flex-col mt-4">
      <p className="text-2xl font-bold">Total: {total.toFixed(2)}€</p>
      {formCheckout === false ? 
        <div className="flex flex-col mt-1">
          <input ref={nameRef} type="text" placeholder="Ingrese su nombre" 
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={lastNameRef} type="text" placeholder="Ingrese su apellido" 
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={phoneRef} type="text" placeholder="Ingrese su teléfono" 
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={emailRef} type="email" placeholder="Ingrese su email" 
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <input ref={reemailRef} type="email" placeholder="Reingrese su email" 
            className="my-1 px-2 py-2 focus:outline-none" 
          />
          <button 
            onClick={handleSubmit}
            className="bg-green-600 px-1 py-1 text-lg text-white my-3 rounded-xl">
              Continuar
          </button>
        </div>
      : ""}
      {formCheckout === true ?
        <button 
          onClick={() => createOrder({
            name: dataUser.name,
            lastname: dataUser.lastName,
            phone: dataUser.phone,
            email: dataUser.email
          })} 
          className="bg-myred px-3 py-3 mt-2 text-xl text-white"
        >
          Generar orden de compras
        </button>
      : ""}
    </div>
  );
};
