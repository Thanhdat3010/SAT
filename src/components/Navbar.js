import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import avatar from "../assets/profile-user.png";
import BackgroundContext from './BackgroundContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Kiểm tra xem có phải trang chủ hay không
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showDropdown, setShowDropdown] = useState(false);
  const [avatarActive, setAvatarActive] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const { background } = useContext(BackgroundContext); // Lấy background từ context
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 500) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    // Chỉ đăng ký sự kiện cuộn nếu đang ở trang chủ
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setTransparent(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]); // Phụ thuộc vào trang hiện tại
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
    <nav  className={`NavbarItems ${transparent ? '' : 'solid'}`} onClick={closeDropdown}>
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
            <img alt="img" src={background ? background : avatar} className="avatar" /> {/* Sử dụng background người dùng đã chọn hoặc hình ảnh mặc định */}
            <ul className={showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
              <li className="Profile">
                <Link to="/Profile">Hồ sơ</Link>
              </li>
              <li className="Logout">
                <Link onClick={handleLogout} >Đăng xuất</Link>
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
