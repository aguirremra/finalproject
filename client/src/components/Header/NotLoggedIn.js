import React, { Component } from 'react';
import './Header.css';


class NotLoggedIn extends Component {
  login() {
    this.props.auth.login();
  }
	render() {
		return(
			<ul className="nav ml-auto">
				<li className="nav-item">		
					<button onClick={this.login.bind(this)} type="button" className="btn btn-success btn-sm">
						<i className="fas fa-unlock-alt mr-2"></i>
						Log In
					</button>
				</li>			
			</ul>
			);
	}
}

export default NotLoggedIn;

