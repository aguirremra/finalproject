import React, { Component } from 'react';


class Products extends Component {
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
                  <button
                    className="btn btn-link"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>          
            </div>

            <nav>
                  <a href="/home" className="btn btn-default">home</a>

                  <a href="/profile" className="btn btn-default">profile</a>

                  <a href="/people" className="btn btn-default">people</a>

                  <a href="/products" className="btn btn-default">products</a>                                                                 
            </nav>


          </header>

    </div>      
    <div className="container mt-5">

      <div className="row">




        <div className="col-12">

          <h2 className="text-center">Search for Products</h2>

          <p className="text-center">[[search field here]]</p>


        </div>


      </div>



    
    </div> 

 
      </div>
    );
  }
}

export default Products;
