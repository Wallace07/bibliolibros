import React from "react";

import "./Header.css"

import logo from "./assets/libros.jpg"

function Header() {
    return <header className="Header">
        <img className="Header__logo" src={logo} alt="Logo de bibliolibros" />
        <p className="Header__text">Bibliolibros</p>
    </header>
}

export { Header }