import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
 function Layout({ children}){
    return(
        <>
        <Header>
            <main>{children}</main>
        </Header>
        </>
    )
 }
 export default Layout