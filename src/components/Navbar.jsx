import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid First-nav-part">
          <h1 className="navbar-brand text-white pt-2">MovieVerse</h1>
          <a className="nav-link active text-white " href="#">
            Home
          </a>
          <a className="nav-link active text-white " href="#">
            Favorites
          </a>
        </div>
      </nav>

      <div className="navbar-underline"></div>
    </div>
  );
};

export default Navbar;
