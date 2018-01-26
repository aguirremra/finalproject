import React, { Component } from 'react';
import './Header.css';
import API from '../../providers/litlist_provider';



class LoggedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      userPhoto: "",
      userName: ""
    };
  }
  componentDidMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);
        this.setState({userPhoto: profile.picture});
        this.setState({userName: profile.given_name ? profile.given_name : profile.nickname});

        API.saveUser({
          sub: profile.sub,
          image: profile.picture,
          name: profile.name,
          nickname: profile.nickname
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));        
      });
      
    } else {
      this.setState({ profile: userProfile });
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  logout() {
    this.props.auth.logout();
  }

	render() {

		return(
				<ul className="nav ml-auto">
		           <a href="https://#" className="circle mr-3">
		              <img src={this.state.userPhoto} alt={this.state.userName} title={this.state.userName}/>
		            </a>
		            <li className="nav-item">
		              <button onClick={this.goTo.bind(this, 'profile')} type="button" className="btn btn-warning mr-3 btn-sm">
		                <i className="fas fa-list-alt mr-2"></i>{this.state.userName}'s LitList</button>
		            </li>
		            <li className="nav-item">
		              <button onClick={this.logout.bind(this)} type="button" className="btn btn-outline-success btn-sm">
		                <i className="fas fa-unlock-alt mr-2"></i>Logout</button>
		            </li>
				</ul>

			);
	}
}

export default LoggedIn;

