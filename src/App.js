import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {GlobalStyle} from "./globalstyles"
import Hero from "./components/Hero";
import Products from "./components/Products";
import {productData} from "./components/Products/data"
import Feature from "./components/Feature/index"
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Nuestros Modelos mas pedidos' data={productData}/>
      <Feature/>
      <Footer/>
    </Router>
  );
}

export default App;
