import React from "react";
import { Link } from "react-router-dom";


function Header () {
    return (
        <header style={headerStyle}>
            <h1>ToDo List</h1>
            <Link style={LinkStyle} to="/">Home</Link>
            |
            <Link style={LinkStyle} to="/about">About</Link>

        </header>
    )
}

const headerStyle = {
    background:"#333",
    color:"white",
    textAlign:"center",
    padding:"10px"
}

const LinkStyle = {
    color:"white",
    textDecoration:"none"
}

export default Header;