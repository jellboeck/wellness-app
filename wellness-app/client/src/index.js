import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/now-ui-kit.scss";
import "components/components.css";
// import "components/Footers/footers.css";
// import "components/Navnars/navbars.css";

// import "assets/demo/demo.css";
// import "assets/demo/nucleo-icons-page-styles.css";


import Index from "pages/landing.js";
// import NucleoIcons from "utils/NucleoIcons.js";
import SignUp from "pages/Register.js";
import Profile from "pages/Profile.js";
// import LandingPage from "utils/examples/LandingPage.js";
// import ProfilePage from "utils/examples/ProfilePage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/profile" render={props => <Profile {...props} />} />
        {/* <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        /> */}
        {/* <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        /> */}
        {/* <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        /> */}
        <Route path="/sign-up" render={props => <SignUp {...props} />} />
        <Redirect to="/index" />
        {/* <Redirect from="/" to="/index" /> */}
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
