import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';

class Land extends Component {
  login() {
    this.props.auth.login();
  }
  render() {

    return (
    <div className="shards-app-promo-page--1">
    
      <div className="welcome d-flex justify-content-center flex-column">
        <div className="container">
         <div className="inner-wrapper mt-auto mb-auto container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
                <h1 className="welcome-heading display-4 text-white">Keep Your Files in Sync</h1>
                <p className="text-muted">Keep your files in sync using the most secure and advanced solution to date.</p>
                <button onClick={this.login.bind(this)} type="button" className="btn btn-success btn-lg mr-3"><i className="fas fa-sign-in-alt mr-2"></i>Get Started</button>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 ml-auto">
              <img className="iphone-mockup ml-auto" src="./images/welcome-cover.jpg" alt="iPhone App Mockup - Shards App Promo Demo"/>
            </div>
          </div>
        </div>   
      </div>
     </div>
    </div>


      
    );
  }
}

export default Land;