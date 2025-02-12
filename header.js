import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">SHIRO </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about.js">About Us</Link>                                  
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="food.js" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Foods type
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#"></Link></li>
            <li><Link className="dropdown-item" to="fastfood.js" >Fast Foods</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="homefood.js">Home Foods</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="contact.js">contact</Link>          
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <li className="nav-item">
          <Link className="nav-link" to="signupform.js">Sign Up</Link>                                
        </li>
       {/* <button className="btn btn-outline-success" type="submit"  to="signupform.js" >Sign Up</button> */}

      </form>
    </div>
  </div>
</nav>



</>

    )
}
export default Header;