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
            <a className="navbar-brand mr-5" href="#">
              <img src="https://designrevision.com/demo/shards/extra/images/app-promo/shards-logo-green.svg" className="mr-2" alt="LitList"/> Lit<strong>List</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mt-4" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <p className="nav-link">&copy; 2018 All rights reserved</p>
                </li>
                <li className="nav-item">
                  <p><a className="nav-link" href="https://github.com/aguirremra/finalproject" target="_blank">GitHub</a></p>
                </li>
                <li className="nav-item">
                  <p>                	
                  	<a className="nav-link" href="https://reactjs.org/" target="_blank">
                  	Powered by React
                  	<img src={logo} className="App-logo" alt="logo" />
                  	</a>                  
                  </p>
                </li>
               </ul>

              </div>

        </Container>

        </nav>

      </footer>
      
    );
  }
}



export default Footer;