import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Land extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (



      <div>

        <div className="container">
          <header>
            <div className="text-center">
            {
              !isAuthenticated() && (
                  <button
                    className="btn btn-link"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <div>
                    <button
                      className="btn btn-link"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </button>
                    <a 
                      href="/profile"
                      className="btn btn-link"
                    >
                      Profile
                    </a> 
                  </div>                 
                )
            }            
            </div>

            {
              isAuthenticated() && (
                <nav>
                  <a href="/home" className="btn btn-default">home</a>

                  <a href="/profile" className="btn btn-default">profile</a>

                  <a href="/people" className="btn btn-default">people</a>

                  <a href="/products" className="btn btn-default">products</a>                                                                 
                </nav>

                )
            }            

          </header>

        </div>

        <div className="container-fluid">

          <div className="jumbotron">

            <div className="container">

            {
              !isAuthenticated() && (
              <div>
                <h1>Welcome to LiT List!</h1>
                <p>Log in to explore our site</p>
              </div>
              )
            }

            {
              isAuthenticated() && (
              <div>
                <h1>Welcome back to LiT List!</h1>
                <p>Use the menu to record your favorites!</p>
              </div>
              )
            }


            </div>


          </div>



        </div>

        

      </div>
      
    );
  }
}

export default Land;
