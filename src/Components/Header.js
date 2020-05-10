import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo_cut.jpg';
import './components.css';

class Header extends React.Component {
  
  render() {

    let navClass = {
      about: "navbar-item",
      services: "navbar-item",
      contact: "navbar-item",
    }

    // console.log (this.props.currentPath )
    // if (this.props.currentPath && this.props.currentPath !== "") {
    //   if (this.props.currentPath === "/About") {
    //     navClass.about = "navbar-item has-text-link";
    //     navClass.services = "navbar-item";
    //     navClass.contact = "navbar-item";
    //   } else if (this.props.currentPath === "/Services") {
    //     navClass.about = "navbar-item";
    //     navClass.services = "navbar-item has-text-link";
    //     navClass.contact = "navbar-item";
    //   } else if (this.props.currentPath === "/Contact") {
    //     navClass.about = "navbar-item";
    //     navClass.services = "navbar-item";
    //     navClass.contact = "navbar-item has-text-link";
    //   }
    // }

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <div class="navbar-item">
              <Link to={process.env.PUBLIC_URL + "/"}><img src={logo} alt="Logo" height="28" /></Link>
            </div>
            <div class="navbar-item has-text-grey logotext">Technical Exta Engineering Solution</div>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class={navClass.about}>
                <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
              </div>
              <div class={navClass.services}>
                <Link to={process.env.PUBLIC_URL + "/services"}>Services</Link>
              </div>
              <div class={navClass.contact}>
                <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
              </div>
              <div class="navbar-item" width="40"></div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Header;