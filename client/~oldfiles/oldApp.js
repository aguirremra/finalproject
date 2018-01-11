import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
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

        <div className="container-fluid">
          <header className="container">
            <div className="access text-center">
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
                  <button
                    className="btn btn-link"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
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

        

      </div>
      
    );
  }
}

export default App;
