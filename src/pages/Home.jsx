import React from "react";
import { Footer } from "../components/Footer";
import { ItemList } from "../components/ItemListContainer";

export const Home = () => {
  return(
    <div>
      <ItemList greeting={"Bienvenidos"} />
      <Footer />
    </div>
  )
}