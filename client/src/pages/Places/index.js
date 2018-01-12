import React, { Component } from 'react';


class Places extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    const { profile } = this.state;
    return (
      <div>
        <div className="container">
          <header>
            <div className="text-center">
                <div>
                  <a 
                    href="/profile"
                    className="btn btn-link"
                  >
                    Profile
                  </a>                
                  <button
                    className="btn btn-link"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>

                </div>          
            </div>

            <nav>
                  <a href="/home" className="btn btn-default">home</a>

                  <a href="/people" className="btn btn-default">people</a>

                  <a href="/products" className="btn btn-default">products</a>

                  <a href="/places" className="btn btn-default">places</a>                                                                 
            </nav>


          </header>

    </div>      
    <div className="container mt-5">

      <div className="row">

        <div className="col-12">

          <h2 className="text-center">Search for Places</h2>

          <p className="text-center">[[search field here]]</p>


        </div>


      </div>



    
    </div> 

 
      </div>
    );
  }
}

export default Places;