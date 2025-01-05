import { useState } from "react";
import "./navbar.scss";

function Navbar() {

    const [open,setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/">
                    <img src="/logo.png" alt="logo" className="logo" />
                </a>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/agent">Agents</a>
            </div>
            <div className="right">
            <a href="/signIn">Sign in</a>
            <a href="/signUp" className="register">Sign up</a>
            <div className="menuIcon">
            <img src="./menu.png" alt="menu" onClick={() => setOpen((prev) => !prev)}/>
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/agent">Agents</a>
                <a href="/agent">Sign In</a>
                <a href="/agent">Sign Up</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;