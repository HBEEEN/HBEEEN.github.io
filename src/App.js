import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import ServicesPage from './Components/ServicesPage';
import ContactPage from './Components/ContactPage';
import './App.sass';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: null
      
    }
  }

  onChangeURL = (path) => {
    this.setState( state => ({
      route: path
    }));
  }

  render () {
    return (
      <Router>
        <Header currentPath={this.state.route} />
        <Switch>
          <Route path="/about">
            <AboutPage handleChangeURL={(path) => this.onChangeURL(path)} />
          </Route>
          <Route path="/services">
            <ServicesPage handleChangeURL={(path) => this.onChangeURL(path)} />
          </Route>
          <Route path="/contact">
            <ContactPage handleChangeURL={(path) => this.onChangeURL(path)} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    );
  } 
}

export default App;
