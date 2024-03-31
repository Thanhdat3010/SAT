import { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo  from "../assets/logo.png"
class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(

            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                <img alt="img" src={logo} className="logo"></img>
                </h1>
                <div className="menu-icons" onClick={this.handleClick}>
                   <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> 
                </div>
                <ul className={this.state.clicked ? "nav-menu active" :"nav-menu" }>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                    <Link className={item.cName} to={item.url}>
                        {item.tittle}
                        </Link>
                    </li>
                    )
                })}
                    <Link to={'/Login'}>
                    <button>Đăng nhập</button>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;