import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./homepage/Homepage";
export default function Header(){
  return(<section id = "home-page">
    <Navbar/>
    <Home/>
    </section>)
}