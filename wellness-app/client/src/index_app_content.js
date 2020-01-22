import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/shards-dashboards.1.1.0.css";
import "assets/scss/now-ui-kit.scss";
import "components/components.css";

import * as serviceWorker from './serviceWorker';

import Index from "pages/Landing.js";
import SignUp from "pages/Register.js";
import Profile from "pages/Profile.js";

import UserGoals from "./components/userGoals";
import UserSettings from "./pages/Settings";

serviceWorker.unregister();
ReactDOM.render(
  <BrowserRouter>
    <Switch>

        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/profile" render={props => <Profile {...props} />} />

        <Route path="/settings" render={props => <UserSettings {...props} />} />
        <Route path="/goals" render={props => <UserGoals {...props} />} />

        <Route path="/sign-up" render={props => <SignUp {...props} />} />
        <Redirect to="/index" />
        {/* <Redirect from="/" to="/index" /> */}


    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);