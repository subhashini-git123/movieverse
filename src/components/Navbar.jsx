import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid First-nav-part">
          <h1 className="navbar-brand text-white pt-2">MovieVerse</h1>
          
          <ul className="secd-div-nav d-flex">
            <li>
              <Link className="Home-nav" to="/home">Home</Link>
            </li>

            <li>
              <Link className="Favorites-nav" to="/addfavorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navbar-underline"></div>
    </div>
  );
};

export default Navbar;
