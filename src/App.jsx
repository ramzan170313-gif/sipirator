import React from "react";
import { Routes, Route} from "react-router-dom"
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer"
import Home from "./pages/Home/Home";
const App = () => {
  return <div>
    <Header />
    <Footer />
    <Home />
  </div>;
};

export default App;
