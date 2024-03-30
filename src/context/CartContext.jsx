import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    } else {
      setCart(prev => prev.map(item => {
        if (item.id === productToAdd.id) {
          return { ...item, quantity: item.quantity + productToAdd.quantity };
        }
        return item;
      }));
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id)
    setCart(updatedCart)
  }

  const getTotalQuantity = () => {
    if(cart.length <= 9) {
      return cart.length;
    } else {
      return "9+";
    }
  }

  const totalQuantity = getTotalQuantity()

  const getTotal = () => {
    let acumulador = 0

    cart.forEach(prod => {
      acumulador += prod.quantity * prod.price
    })

    return acumulador
  }

  const total = getTotal()

  return (
      <CartContext.Provider value={{cart, addItem, totalQuantity, total, clearCart, isInCart, removeItem}}>
          {children}
      </CartContext.Provider>
  )
}