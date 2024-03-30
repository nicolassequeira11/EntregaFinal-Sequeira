import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";
import { Footer } from "../components/Footer";
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig";

export const Products = () => {
  const { loading, setLoading, loadingIndicator } = useContext(LoadingContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true); 
    const categoriesCollection = query(collection(db, 'categories'))
    
    getDocs(categoriesCollection)
        .then(querySnapshot => {
            const categoriesAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setCategories(categoriesAdapted);
            setLoading(false);
        })
        .catch(error => {
            console.error('error')
        })
  }, [setLoading])

  if (loading) {
    return loadingIndicator; 
  }

  return (
    <div className="pt-10 max-md:h-full h-screen justify-between flex flex-col">
      <div 
        className="flex mx-auto justify-center flex-wrap max-md:w-11/12 max-md:flex-col"
      >
        {categories.map((item, index) => (
          <Link 
            to={`/category/${item.slug}`} 
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
                src={item.img1}
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
