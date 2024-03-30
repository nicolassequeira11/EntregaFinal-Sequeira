import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import { LoadingProvider } from "./context/LoadingContext";
import { NotificationProvider } from './notification/NotificationsService'

// Components
import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';
import { Cart } from "./pages/Cart";

function App() {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <LoadingProvider>
            <CartProvider>
              <NavBar  />

              <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/products" 
                  element={<Products />} 
                />
                <Route 
                  path="/category/:categoryId" 
                  element={<Category />} 
                />
                <Route 
                  path="/category/:categoryId/item/:itemId/:nameId" 
                  element={<Detail />} 
                />
                <Route 
                  path="/cart" 
                  element={<Cart />} 
                />
              </Routes>
            </CartProvider>
          </LoadingProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
