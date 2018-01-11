import React, { Component } from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import Land from './pages/Land';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Products from './pages/Products';
import People from './pages/People';
import Callback from './pages/Callback';
import Auth from './pages/Auth';
import history from './pages/history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => 

    <Router history={history}>
        <div>
          <Route exact path="/" render={(props) => <Land auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/people" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <People auth={auth} {...props} />
            )
          )} />
          <Route path="/products" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Products auth={auth} {...props} />
            )
          )} />                    
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>;
  
export default App;




