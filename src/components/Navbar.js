import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <img alt="img" src={logo} className="logo" />
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="/">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Lythuyet">
            Lý thuyết
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Onthi">
            Ôn thi
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Tainguyen">
            Tài nguyên và thảo luận
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Vechungtoi">
            Liên hệ
          </Link>
        </li>
        <li>
          <Link className="nav-links-mobile" to="/Login">
            <button className="nav-button">Đăng nhập</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;