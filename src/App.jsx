import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Components
import { NavBar } from './components/NavBar';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';

function App() {

  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
