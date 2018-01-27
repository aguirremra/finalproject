import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';

class Land extends Component {
  login() {
    this.props.auth.login();
  }
  render() {

    return (
    <div className="shards-app-promo-page--1">
    
      <div className="welcome d-flex justify-content-center flex-column">
        <div className="container">
         <div className="inner-wrapper mt-auto mb-auto container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
                <h1 className="welcome-heading display-4 text-white">LitList</h1>
                <h4 className="text-white">Search &amp; Save your favorite products and places from around the internet.</h4>
                {/* <button onClick={this.login.bind(this)} type="button" className="btn btn-success btn-lg mr-3"><i className="fas fa-sign-in-alt mr-2"></i>Get Started</button> */}
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12">
              <img src="../images/listlist-monitor.png"/>
            </div>
          </div>
        </div>   
      </div>
     </div>
     <div className="container py-5">
            <div className="row">
                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src="../images/avatar-maria.jpg" className=" circle w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">Maria Reinbach</h5>
                    <span className="text-muted d-block mb-2">Full Stack Developer</span>
                    <p>Experienced Technologist with a demonstrated history of working in the utilities industry. Skilled in SharePoint, Analytical Skills, Requirements Analysis, and Enterprise Architecture. Strong professional with a Bachelor of Science (BS) focused in Information Technology and Database Mangement from University of Phoenix.</p>
                </div>

                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src="../images/avatar-zazil.jpg" className=" circle w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">Zazil Toma</h5>
                    <span className="text-muted d-block mb-2">Full Stack Developer</span>
                    <p>Since getting a taste of development in 2012, Zazil has used code to improve processes in various roles - even when they weren't developer roles.  She is currently an Analytics Engineer at Pluralsight where she uses Python and SQL to move and create data sets and is a recent graduate of the Full Stack Web Developer program at UCSD Extension.</p>
                </div>

                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src="../images/avatar-dan.jpg" className=" circle w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">Dan Moneypenny</h5>
                    <span className="text-muted d-block mb-2">Full Stack Developer</span>
                    <p> As an educational content professional Dan uses his technical skills to create ebooks in the college textbook market. Specifically, he develops interactive features, stylesheets, conceptualizes more efficient workflows, while working collaboratively with authors and vendors. </p>
                </div>

                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src="../images/avatar-enrico.jpg" className=" circle w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">Enrico Bernardo</h5>
                    <span className="text-muted d-block mb-2">Full Stack Developer</span>
                    <p> Aenean imperdiet ultrices tortor id convallis. Donec id metus magna. Morbi pretium odio faucibus blandit gravida.</p>
                </div>

                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src="../images/avatar-brian.jpg" className=" circle w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">Brian McCurdy</h5>
                    <span className="text-muted d-block mb-2">Full Stack Developer</span>
                    <p>Experienced Front-End Web Developer & UX/UI Designer with a passion for creating effective, elegant and innovative digital experiences that are constantly leveraging the latest industry technologies.</p>
                </div>
            </div>
          </div>
    </div>


      
    );
  }
}

export default Land;