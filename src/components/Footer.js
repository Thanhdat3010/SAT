import './Footer.css';
import React from 'react';


function Footer() {
  return (
    <div className="container-fluid2">
      <div className="footer">
        <div className="logo">
          <i></i>
          <a href="http://google.com">SAT</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">fivecgroup@gmail.com</div>
      </div>
    </div>
  );
}

export default Footer;