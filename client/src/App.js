import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "assets/css/shards-dashboards.1.1.0.css";
import "assets/scss/now-ui-kit.scss";
import "components/components.css";

import * as serviceWorker from './serviceWorker';

import Index from "pages/Landing.js";
import SignUp from "pages/Register.js";
import Profile from "pages/Profile.js";
import UserSettings from "pages/Settings";
import Table from "pages/Table";
import Search from "pages/Search";
// import Search from "pages/Search.js";
// import Results from "pages/Results";

import Goals from "./components/userGoals";

serviceWorker.unregister();
function App() {
  const [id, setId] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const getUser = () => {
    // console.log(user);
    // console.log(loggedIn);
    axios.get('api/user_data').then(response => {
      // console.log('Get user response: ');
      // console.log(response.data);
      if (response.data.email) {
        // console.log('Get user: There is a user saved in the server session');
        setUser(response.data.email);
        setId(response.data.id);
        setLoggedIn(true)
      } else {
        // console.log('Get user: no user');
        setUser(null);
        setLoggedIn(false);
        alert('You must login to use this page.');
        window.location.replace("/index");
      }
    });
  }

    return(

        <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} user = {user} loggedIn={loggedIn} getUser={getUser} id={id} />} />
        <Route path="/profile" render={props => <Profile {...props} user = {user} loggedIn={loggedIn} getUser={getUser}  id={id}/>} />

        <Route path="/settings" render={props => <UserSettings {...props} getUser={getUser } user = {user} loggedIn={loggedIn} id={id}/>} />
        <Route path="/goals" render={props => <Goals {...props} getUser={getUser} user = {user} loggedIn={loggedIn} id={id}/>} />
        <Route path="/table" render={props => <Table {...props} getUser={getUser} user = {user} loggedIn={loggedIn} id={id}/>} />
        <Route path="/search" render={props => <Search {...props} getUser={getUser} user = {user} loggedIn={loggedIn} id={id}/>} />
        {/* <Route path="/search" render={props => <Search {...props} getUser={getUser} user = {user} loggedIn={loggedIn} id={id}/>} />
        <Route path="/results" render={props => <Results {...props} getUser={getUser} user = {user} loggedIn={loggedIn} id={id}/>} /> */}

        <Route path="/sign-up" render={props => <SignUp {...props} getUser={getUser} user = {user} loggedIn={loggedIn} id={id}/>} />
        <Redirect to="/index" />
        {/* <Redirect from="/" to="/index" /> */}
      </Switch>
    </Switch>
  </BrowserRouter>
);
}

export default App;