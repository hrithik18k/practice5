import React from "react";
import ProductForm from "./components/Productform";
import ProductList from "./components/ProductList";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Routes>

    <Route path="/productform" element={<ProductForm/>}/>
    <Route path="/productList" element={<ProductList/>}/>
    
    </Routes>
    </Router>
  );
};

export default App;
