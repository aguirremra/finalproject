import React, { Component } from 'react';
import Container from '../Containers/Container';
import Navbar from '../Navbar/Navbar';
import './Header.css';


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
				<header>
					<Container width="container">
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
					</Container>
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

