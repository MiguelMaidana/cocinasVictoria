import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {GlobalStyle} from "./globalstyles"
import Hero from "./components/Hero";
import Products from "./components/Products";
import {productData} from "./components/Products/data"


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Algunos de nuestros modelos' data={productData}/>
    </Router>
  );
}

export default App;
