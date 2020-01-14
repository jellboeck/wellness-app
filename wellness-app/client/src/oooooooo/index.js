import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/now-ui-kit.scss";
import "components/components.css";

import Index from "pages/landing.js";
import SignUp from "pages/Register.js";
import Profile from "pages/Profile.js";

import Settings from "pages/Settings.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/profile" render={props => <Profile {...props} />} />
        <Route path="/sign-up" render={props => <SignUp {...props} />} />

        <Route path="/settings" render={props => <Settings {...props} />} />

        <Redirect to="/index" />
        {/* <Redirect from="/" to="/index" /> */}
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
