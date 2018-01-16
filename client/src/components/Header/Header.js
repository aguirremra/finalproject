import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
//Header if someone is not user or has not logged in yet

class Header extends Component {
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
		return(
				<header className="container">
					<div className="row">
						<div className="col-6">
							<h1>LiTList</h1>
						</div>
						<div className="col-6 text-right">
						{	
							!isAuthenticated() && (
							<button onClick={this.login.bind(this)} type="button" className="btn btn-link">log in</button>
							)
						}
						{
							isAuthenticated() && (
							<span>
							<a href="/profile" className="btn btn-link">profile</a>	
							<button onClick={this.logout.bind(this)} type="button" className="btn btn-link">log out</button>
							</span>
							)
						}						
						</div>
					</div>
						{
							isAuthenticated() && (
							<Navbar/>
							)
						}
				</header>		
			);
	}//render



}//Header

export default Header;

