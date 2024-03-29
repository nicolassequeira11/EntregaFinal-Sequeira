import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDoc, getDocs, doc, query, collection, where, limit } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { ItemDetail } from "../components/ItemDetail";

export const Detail = () => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const { itemId, categoryId } = useParams();
  
  // GET product FROM DB
  useEffect(() => {
    const productDoc = doc(db, "products", itemId);

    getDoc(productDoc)
      .then(queryDocumentSnapshot => {
        const data = queryDocumentSnapshot.data();
        const productAdapted = { id: queryDocumentSnapshot.id, ...data }

        setProduct(productAdapted);
      })
  }, [itemId]);

  // GET productosRelacionados FROM DB
  useEffect(() => {
    const productsCollection = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId), limit(4))
      : collection(db, "products")

    getDocs(productsCollection)
      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          const data = doc.data();
        
          return { id: doc.id, ...data }
        })

        setProducts(productsAdapted);
      })
      .catch(error => {
        console.log(error);
      })
  }, [categoryId])

  return (
    <ItemDetail {...product} productosRelacionados={products} />
  );
};
