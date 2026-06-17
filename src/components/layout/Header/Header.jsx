import React from "react";
import "./Header.scss"
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
        <div className="header__logo">
            <img src={logo} alt="logo" />
            <h3>travel.kg</h3>
        </div>
        <div className="header__nav">
            <a href="/">главная</a>
            <a href="/">траснспорт</a>
            <a href="/">туры</a>
            <Link to="/about">о нас</Link>
        </div>
        <div className="header__btn">
            <button>связаться</button>
        </div>
        </div>
  )
}

export default Header