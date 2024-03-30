import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { ItemDetail } from "../components/ItemDetail";
import { LoadingContext } from "../context/LoadingContext";
import { Footer } from "../components/Footer";

export const Detail = () => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isIdValid, setIsIdValid] = useState(true);
  const { itemId, categoryId } = useParams();
  const { loading, setLoading, loadingIndicator } = useContext(LoadingContext);

  // GET PRODUCT FROM DB
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const productDoc = doc(db, "products", itemId);
        const documentSnapshot = await getDoc(productDoc);

        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          const productAdapted = { id: documentSnapshot.id, ...data };
          setProduct(productAdapted);
          setIsIdValid(true);

        } else {
          setIsIdValid(false);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  // GET PRODUCTS RELATED FROM DB
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);

        const productsCollection = categoryId
          ? query(collection(db, "products"), where("category", "==", categoryId), limit(4))
          : collection(db, "products");

        const querySnapshot = await getDocs(productsCollection);
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(productsAdapted);

      } catch (error) {
        console.error("Error al obtener productos relacionados:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [categoryId]);

  if (loading) {
    return loadingIndicator;
  }

  // MESSAGE TO SHOW WHEN PRODUCT ID WILL BE INVALID
  if (!isIdValid) {
    return (
      <div className="min-h-[100vh] mx-auto text-2xl w-10/12 text-center mt-10">
        No se encontró el producto con el ID proporcionado.
      </div>);
  }

  return (
    <>
      <ItemDetail 
        {...product} 
        product={product} 
        productosRelacionados={products} 
      />;
      <Footer />
    </> 
  )
};
