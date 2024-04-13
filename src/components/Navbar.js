import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import avatar from "../assets/profile-user.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Đăng xuất bằng cách xóa trạng thái đăng nhập khỏi localStorage
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
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
          <div onClick={handleDropdown}>
            {isLoggedIn ? (
              <img alt="img" src={avatar} className="avatar" />
            ) : (
              <Link className="nav-links-mobile" to="/Login">
                Đăng nhập
              </Link>
            )}
            {showDropdown && isLoggedIn && (
              <ul className="dropdown">
                <li>Thông tin</li>
                <li onClick={handleLogout}>Đăng xuất</li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
