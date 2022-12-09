import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" id="nav--img" />
            <p className="nav--text">my travel journal.</p>
        </nav>
    );
}

export default Navbar;