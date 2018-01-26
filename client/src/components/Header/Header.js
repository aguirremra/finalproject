import React, { Component } from 'react';
import Container from '../Containers/Container';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import NavBar from '../Navbar';
import './Header.css';


class Header extends Component {

	render() {
		const { isAuthenticated } = this.props.auth;
		return(
			<header>

				<Container className="container-fluid bg-dark">

					<Container className="container">
						<nav className="navbar navbar-expand-lg navbar-dark px-0">
							<a className="navbar-brand" href="/home" title="Return to home page">
								<img src="images/fire.svg" className="logo-icon" alt="LitList"/> Lit<span className="text-weight-bold">List</span><sup className="dos">2</sup>
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
					        
		         							
								{	
									!isAuthenticated() && (

									<NotLoggedIn {...this.props} />
									
									)
								}

								{	
									isAuthenticated() && (

									<LoggedIn {...this.props} />

									)
								}
								
											
						</nav>
					</Container>

				</Container>

			</header>		
			);
	}



}

export default Header;

