import React from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-dark is-paddingless">
        <div className="columns">
          <div className="column is-1"></div>
          <div className="column has-text-warning">
            Technical Exta Engineering Solution Ltd.
          </div>
          <div className="column is-2 ">
            <p className="has-text-warning is-size-6">Explore</p>
            <p><a className="has-text-white is-size-7" href="/About" alt="about">About Us</a></p>
            <p><a className="has-text-white is-size-7" href="/Services" alt="services">Services</a></p>
            <p><a className="has-text-white is-size-7" href="/Contact" alt="contact">Contact</a></p>
          </div>
          <div className="column is-2 ">
            <p className="has-text-warning is-size-6">Connect with us</p>
            <FontAwesomeIcon icon={['fab', 'facebook']} className="has-text-white"/><span className="has-text-white"> Facebook</span>
            <p></p>
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="has-text-white"/><span className="has-text-white"> LinkedIn</span>
          </div>
          <div className="column is-2"></div>
        </div>
      </footer>
    )
  }
}

export default Footer;