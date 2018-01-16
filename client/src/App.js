import React, { Component } from 'react';
import { Redirect, Route, Router } from 'react-router-dom';

import Auth from './pages/Auth';
import Callback from './pages/Callback';
import history from './pages/history';
import Header from './components/Header';
import Home from './pages/Home';
import Land from './pages/Land';
import People from './pages/People';
import Places from './pages/Places';
import Products from './pages/Products';
import Profile from './pages/Profile';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => 

    <Router history={history}>
        <div>
        <Header auth={auth}/>
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
          <Route path="/places" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Places auth={auth} {...props} />
            )
          )} />                              
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>;
  
export default App;




