import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductsByCategory, getProducts } from "../products";
import { Item } from "../components/Item";

export const Detail = () => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [isClickedDescription, setIsClickedDescription] = useState(true);
  const [isClickedDetails, setIsClickedDetails] = useState(false);
  const { itemId, categoryId } = useParams();
  
  const productosRelacionados = products.slice(0, 4);

  useEffect(() => {
    getProductById(parseInt(itemId))
      .then((result) => {
        setProduct(result);
      });

    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result);
      })
      .catch(error => {
        console.log(error);
      })
  }, [itemId]);

  return (
    <div className="w-10/12 mt-10 mx-auto">
      <div className="flex flex-wrap mx-auto">
        <div className="w-1/2 max-md:w-full">
          {product.img && product.img.length > 0 && (
            <img src={product.img[0]} className="w-full md:px-10" />
          )}
        </div>
        <div className="w-1/2 max-md:w-full max-md:p-2 px-6 max-md:mt-3">
          <p className="text-6xl max-md:text-2xl font-bold">
            {product.name}
          </p>
          <p className="text-4xl font-semibold mt-3">
            {product.price} €
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="mt-9 ">
          <div className="flex">
            <p 
              className={`w-fit max-md:w-1/2 max-md:text-center py-4 px-8 max-md:px-4 text-2xl max-md:text-lg font-semibold border-b-2 cursor-pointer
                ${isClickedDescription ? "border-myred text-myred" : null}`}
                onClick={()=> {
                  setIsClickedDetails(false);
                  setIsClickedDescription(true);
                }}
            >
              Descripción
            </p>
            <p 
              className={`w-fit max-md:w-1/2 max-md:text-center py-4 px-8 max-md:px-4 text-2xl max-md:text-lg font-semibold border-b-2 cursor-pointer
                ${isClickedDetails ? "border-myred text-myred" : null}`}
              onClick={()=> {
                setIsClickedDetails(true);
                setIsClickedDescription(false);
              }}
            >
              Especificaciones
            </p>
          </div>

          <p className="mt-4 text-2xl max-md:text-xl">
            {isClickedDescription ? product.description : null}
          </p>
          <div>
            {isClickedDetails 
              ? 
              <div>
                <p className="text-2xl max-md:text-xl mt-4">
                  <strong>Licencia:</strong> {product.licencia}
                </p>
                <p className="text-2xl max-md:text-xl mt-4">
                  <strong>Fabricante:</strong> {product.fabricante}
                </p>
                <p className="text-2xl max-md:text-xl mt-4">
                  <strong>Altura:</strong> {product.altura}
                </p>
                <p className="text-2xl max-md:text-xl mt-4">
                  <strong>Colección:</strong> {product.colección}
                </p>
                <p className="text-2xl max-md:text-xl mt-4">
                  <strong>Tipo:</strong> {product.tipo}
                </p>
                <p className="text-2xl max-md:text-xl mt-4">
                  <strong>SKU:</strong> {product.SKU}
                </p>
              </div>
              : 
              null
            }
          </div>
        </div>
        {product.video &&
        <div className="mt-6">
          <iframe 
            className="mx-auto w-full h-[25rem] max-md:h-fit"
            src={product.video} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          >
          </iframe>
        </div>
        }
        <div className="mt-10">
          <p className="text-4xl font-bold">Productos relacionados</p>
          <div className="flex mt-4 flex-wrap">
            {productosRelacionados.map(item => (
              <Item 
                to={`/category/${item.category}/item/${item.id}/${item.name}`}
                key={item.id}
                img1={item.img[0]}
                img2={item.img[1]}
                title={item.name}
                price={item.price}
                width="w-1/4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
