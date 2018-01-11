import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
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

        <div className="col-4">

          <div className="card">
            <img className="card-img-top" src={profile.picture} alt={profile.name} title={profile.name}/>
            <div className="card-body">
              <h3 className="card-text text-center">{profile.name}</h3>
            </div>
          </div>

        </div>


        <div className="col-8">

          <h2 className="text-center">Add Favorite Item to Your LiT List</h2>

          <p className="text-center">[[search field here]]</p>


        </div>


      </div>



    
    </div> 

 
      </div>
    );
  }
}

export default Profile;
