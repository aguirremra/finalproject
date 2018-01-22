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

				<Container width="container-fluid bg-dark">

					<Container width="container">
						<nav className="navbar navbar-expand-lg navbar-dark px-0">
					        <a className="navbar-brand" href="#">
					          <img src="images/fire.svg" className="logo-icon" alt="LitList"/> Lit<span className="text-weight-bold">List</span><sup className="dos">2</sup>
					        </a>
					        <div className="collapse navbar-collapse" id="navbarNavDropdown">
		         							
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
								
							</div>				
						</nav>
					</Container>

				</Container>

			</header>		
			);
	}



}

export default Header;

