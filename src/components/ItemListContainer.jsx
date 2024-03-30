import React, { useState, useEffect, useContext } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import Banner from "../../public/banner.jpg";
import { Item } from "./Item";
import { LoadingContext } from "../context/LoadingContext";

export const ItemList = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading, loadingIndicator } = useContext(LoadingContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const productsCollection = query(collection(db, "products"));
        const querySnapshot = await getDocs(productsCollection);
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(productsAdapted);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return loadingIndicator;
  }

  return(
    <div>
      <img 
        src={Banner} 
        className="max-md:object-cover max-md:h-[250px] max-md:object-right h-fit" 
      />
      <div className="my-10">
        <h2 className="mx-auto flex justify-center text-center text-4xl font-bold">
          PRODUCTOS DESTACADOS
        </h2>
        <div className="max-md:w-11/12 w-10/12 mt-4 mx-auto flex flex-wrap">
          {products.map(item => (
            <Item 
              to={`/category/${item.category}/item/${item.id}/${item.name}`}
              key={item.id}
              img1={item.img[0]}
              img2={item.img[1]}
              title={item.name}
              price={item.price}
              width="max-md:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            />
          ))}
        </div>
      </div>
    </div>
  )
}