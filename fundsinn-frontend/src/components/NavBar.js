import React from "react";
import { Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from "../Images/logo-black.png";

//pages
import Login from "../Pages/signin";
import Register from "../Pages/register";
import About from "../Pages/about";
import Home from "../Pages/Home";

function NavBar() {
  return (
    <nav>
      <div className="logo-nav-cointainer">
      <div className="nav-image">
            <Link to="/">
                <img src={Logo} alt="Funds INN Logo" width ="250" height="200" />
            </Link>        
        </div>
      <ul className="nav-links">
      
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
      </div>
    
    
    
         


    </nav>



  );
}

export default NavBar;
