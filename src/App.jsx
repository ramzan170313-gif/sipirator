import React from "react";
import { Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home";
const App = () => {
  return <div>
    <Header />
    <Footer />
    <Home />
  </div>;
};

export default App;
