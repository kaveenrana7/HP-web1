import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = ({ home, category, contact, about }) => {
  return (
    <div>
      <div className="labl">
        <div className="text-wrappr-back">HIREPRO</div>
      </div>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <div className={home}></div>
          </li>
          <li>
            <Link to="/category">Category</Link>
            <div className={category}></div>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
            <div className={contact}></div>
          </li>
          <li>
            <Link to="/about">About</Link>
            <div className={about}></div>
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
