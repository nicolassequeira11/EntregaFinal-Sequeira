import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../products";
import { Item } from "../components/Item";

export const Category = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result);
      })
      .catch(error => {
        console.log(error);
      })
  }, [categoryId])

  return(
    <div className="flex max-md:w-full w-10/12 mx-auto">
      <div className="flex flex-wrap">
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
  )
}