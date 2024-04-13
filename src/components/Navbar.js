import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import avatar from "../assets/profile-user.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showDropdown, setShowDropdown] = useState(false);
  const [avatarActive, setAvatarActive] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setAvatarActive(!avatarActive);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="NavbarItems" onClick={closeDropdown}>
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
        {isLoggedIn ? (
          <li className={avatarActive ? "avatar-container active" : "avatar-container"} onClick={toggleDropdown}>
            <img alt="img" src={avatar} className="avatar" />
            <ul className={showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
              <li>
                <Link to="/profile">Hồ sơ</Link>
              </li>
              <li>
              <Link onClick={handleLogout}>Đăng xuất</Link> {/* Chuyển hướng đến trang đăng xuất */}
              </li>
            </ul>
          </li>
        ) : (
          <li>
            <Link className="nav-links-mobile" to="/Login">
              Đăng nhập
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
