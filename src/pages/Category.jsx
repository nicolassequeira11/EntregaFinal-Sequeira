import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { Item } from "../components/Item";
import { LoadingContext } from "../context/LoadingContext";
import { Footer } from "../components/Footer";

export const Category = () => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading, loadingIndicator } = useContext(LoadingContext);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const productsCollection = categoryId
          ? query(collection(db, "products"), where("category", "==", categoryId))
          : collection(db, "products");

        const querySnapshot = await getDocs(productsCollection);
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(productsAdapted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return loadingIndicator;
  }

  return (
    <div className="flex mt-10 mx-auto min-h-[100vh] flex-col justify-between">
      <div className="flex flex-wrap justify-center mx-auto w-10/12">
        {products.map((item) => (
          <Item
            to={`/category/${item.category}/item/${item.id}/${item.name}`}
            key={item.id}
            img1={item.img[0]}
            img2={item.img[1]}
            title={item.name}
            price={item.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
