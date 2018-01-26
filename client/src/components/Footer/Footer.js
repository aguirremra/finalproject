import React, { Component } from 'react';
import Container from '../Containers/Container';
import './Footer.css';
import logo from '../../logo.svg';

class Footer extends Component {

  render() {

    return (

      <footer>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container width="container">

          <a className="navbar-brand" href="/home" title="Return to home page">
            <img src="images/fire.svg" className="logo-icon" alt="LitList"/> Lit<span className="text-weight-bold">List</span><sup className="dos">2</sup>
          </a>
            <div className="collapse navbar-collapse">
              <p className="my-auto ml-auto">&copy; 2018 All rights reserved | LitList | Powered by React <img src={logo} className="App-logo" alt="logo" /></p>
            </div>

        </Container>

        </nav>

      </footer>
      
    );
  }
}



export default Footer;