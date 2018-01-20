import React, { Component } from 'react';
import Container from '../Containers/Container';
import './Footer.css';
import logo from '../../logo.svg';

class Footer extends Component {

  render() {

    return (

      <footer>
        <Container width="container">

          <p className="text-center">&copy; 2018 LiT List &#183; <a href="https://github.com/aguirremra/finalproject" target="_blank">GitHub</a> &#183; Powered by <a href="https://reactjs.org/" target="_blank">React</a><img src={logo} className="App-logo" alt="logo" />
</p>

        </Container>

      </footer>
      
    );
  }
}

export default Footer;