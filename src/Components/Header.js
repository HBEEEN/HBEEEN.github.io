import React from 'react';
import logo from './logo_cut.jpg';
import './components.css';

class Header extends React.Component {
  
  render() {

    let navClass = {
      about: "navbar-item",
      services: "navbar-item",
      contact: "navbar-item",
    }

    if (this.props.currentPath && this.props.currentPath !== "") {
      if (this.props.currentPath === "/About") {
        navClass.about = "navbar-item has-text-link";
        navClass.services = "navbar-item";
        navClass.contact = "navbar-item";
      } else if (this.props.currentPath === "/Services") {
        navClass.about = "navbar-item";
        navClass.services = "navbar-item has-text-link";
        navClass.contact = "navbar-item";
      } else if (this.props.currentPath === "/Contact") {
        navClass.about = "navbar-item";
        navClass.services = "navbar-item";
        navClass.contact = "navbar-item has-text-link";
      }
    }

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src={logo} alt="Logo" height="28" />
            </a>
            <div class="navbar-item has-text-grey logotext">Technical Exta Engineering Solution</div>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <a class={navClass.about} href="/About">
                About Us
            </a>
              <a class={navClass.services} href="/Services">
                Our Services
            </a>
              <a class={navClass.contact} href="/Contact">
                Contact Us
            </a>
              <div class="navbar-item" width="40"></div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Header;