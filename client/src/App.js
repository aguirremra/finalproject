import React, { Component } from 'react';
import { Redirect, Route, Router } from 'react-router-dom';

import Auth from './pages/Auth';
import Callback from './pages/Callback';
import history from './pages/history';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Land from './pages/Land';
import Main from './components/Containers/Main';
import People from './pages/People';
import Places from './pages/Places';
import PlacesFav from './pages/PlacesFav';
import Products from './pages/Products';
import ProductsFav from './pages/ProductsFav';
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
        <Main>
          <Route exact path="/" render={(props) => <Land auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/people" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <People auth={auth} {...props} />
            )
          )} />
          <Route path="/products" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Products auth={auth} {...props} />
            )
          )} />
          <Route path="/places" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Places auth={auth} {...props} />
            )
          )} />
          <Route path="/placesfav" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <PlacesFav auth={auth} {...props} />
            )
          )} /> 
          <Route path="/productsfav" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <ProductsFav auth={auth} {...props} />
            )
          )} />                                                    
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </Main> 
        <Footer/>       
        </div>
      </Router>;
  
export default App;




