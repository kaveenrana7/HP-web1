import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div>
      <div className="labl">
        <div className="text-wrappr">HIREPRO</div>
      </div>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
            <div className="active"></div>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
