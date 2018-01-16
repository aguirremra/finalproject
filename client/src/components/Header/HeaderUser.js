import React, { Component } from 'react';

//Header if someone has logged in

class HeaderUser extends Component {
	render() {
		return(
				<header>
					<div className="container">
						<div className="row">
							<div className="col-6">
								<h1>LiTList</h1>
							</div>
							<div className="col-6 text-right">
								<button type="button" className="btn btn-link">profile</button>
								<button type="button" className="btn btn-link">logout</button>
							</div>
						</div>
					</div>
				</header>		
			);
	}//render



}//HeaderUser

export default HeaderUser;