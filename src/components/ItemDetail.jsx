import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNotification } from "../notification/hooks/useNotification";
import { Item } from "./Item";

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex w-11/12 flex-col mt-4 max-lg:mx-auto">
      {stock > 0 ? (
        <div>
          <div 
            className="flex my-auto text-center text-lg 
              max-lg:my-4 max-lg:mx-auto max-lg:w-9/12 lg:w-7/12 xl:w-5/12"
          >
            <button onClick={decrement} className="w-4/12 border-2 py-3 rounded-s-xl">
              -
            </button>
            <p className="max-lg:w-11/12 w-4/12 py-3 border-y-2">
              {count}
            </p>
            <button onClick={increment} className="w-4/12 border-2 py-3 rounded-e-xl">
              +
            </button>
          </div>
          <div 
            className="flex max-lg:w-11/12 max-lg:mx-auto max-lg:justify-center 
              lg:w-9/12 lg:mt-4 xl:w-7/12 xl:justify-start"
          >
            <button 
              onClick={() => onAdd(count)} 
              className="bg-myred w-11/12 text-white px-4 py-3 text-xl rounded-xl 
                hover:opacity-90 hover:shadow-lg"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ):(
        <p className="text-myred text-2xl border-4 border-myred w-fit p-3 font-semibold">
          SIN STOCK
        </p>
      ) }
    </div>
  );
};

export const ItemDetail = ({ 
  productosRelacionados, product, id, name, img, price, stock, 
  description, licencia, fabricante, altura, colección, tipo, SKU, video }) => {
    
  const { addItem, isInCart } = useContext(CartContext);
  const { showNotification } = useNotification();
  const [isClickedDescription, setIsClickedDescription] = useState(true);
  const [isClickedDetails, setIsClickedDetails] = useState(false);

  const handleOnAdd = (count) => {
    const objProductToAdd = {
      id, name, price, img, quantity: count
    };
    showNotification('success', `Se agregó correctamente ${count} ${name}`);
    
    addItem(objProductToAdd);
  };

  return (
    <div>
      {product ? 
      <div className="w-10/12 mt-10 mx-auto">
        <div className="flex flex-wrap mx-auto">
          <div 
            className="w-1/2 max-lg:w-full"
          >
            {img && img.length > 0 && (
              <img 
                src={img[0]} 
                className="w-full lg:px-10" 
              />
            )}
          </div>
          <div 
            className="w-1/2 max-lg:w-full max-lg:p-2 px-6 max-lg:mt-3"
          >
            <p className="text-6xl max-md:text-2xl font-bold">
              {name}
            </p>
            <p className="text-4xl font-semibold mt-3">
              {price} €
            </p>
            {stock > 0 ? 
              <p className="text-xl mt-3">
                Stock: {stock}
              </p>
            : null}
            <div>
              {
                !isInCart(id) ? (
                  <ButtonCount onAdd={handleOnAdd} stock={stock} />
                ):(
                  <Link 
                    to="/cart" 
                    className="bg-myred rounded-xl text-white p-4 flex w-fit mt-4 text-xl 
                      hover:opacity-90 hover:shadow-lg max-md:w-full max-md:justify-center"
                  >
                    Finalizar compra
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="mt-9">
            <div className="flex">
              <p
                className={`w-fit py-4 px-8 text-2xl font-semibold border-b-2 cursor-pointer
                  max-md:w-1/2 max-md:text-center max-md:px-4 max-md:text-lg
                    ${isClickedDescription ? "border-myred text-myred" : null}`}
                onClick={() => {
                  setIsClickedDetails(false);
                  setIsClickedDescription(true);
                }}
              >
                Descripción
              </p>
              <p
                className={`w-fit py-4 px-8 text-2xl font-semibold border-b-2 cursor-pointer
                  max-md:w-1/2 max-md:text-center max-md:px-4 max-md:text-lg
                    ${isClickedDetails ? "border-myred text-myred" : null}`}
                onClick={() => {
                  setIsClickedDetails(true);
                  setIsClickedDescription(false);
                }}
              >
                Especificaciones
              </p>
            </div>

            <p className="mt-4 text-2xl max-md:text-xl">
              {isClickedDescription ? description : null}
            </p>
            <div>
              {isClickedDetails ? (
                <div>
                  <p className="text-2xl max-md:text-xl mt-4">
                    <strong>Licencia:</strong> {licencia}
                  </p>
                  <p className="text-2xl max-md:text-xl mt-4">
                    <strong>Fabricante:</strong> {fabricante}
                  </p>
                  <p className="text-2xl max-md:text-xl mt-4">
                    <strong>Altura:</strong> {altura}
                  </p>
                  <p className="text-2xl max-md:text-xl mt-4">
                    <strong>Colección:</strong> {colección}
                  </p>
                  <p className="text-2xl max-md:text-xl mt-4">
                    <strong>Tipo:</strong> {tipo}
                  </p>
                  <p className="text-2xl max-md:text-xl mt-4">
                    <strong>SKU:</strong> {SKU}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          {video &&
            <div className="mt-6">
              <iframe 
                className="mx-auto w-full h-[25rem] max-md:h-fit rounded-xl"
                src={video} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
              >
              </iframe>
            </div>
            }
          <div className="my-10">
              <p className="text-4xl font-bold justify-center text-center">
                PRODUCTOS RELACIONADOS
              </p>
              <div className="flex mt-4 flex-wrap justify-center">
                {productosRelacionados.map(item => (
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
            </div>
        </div>
      </div>
      : <div>No se encontro ningún producto.</div>}
    </div>
    
  );
};
