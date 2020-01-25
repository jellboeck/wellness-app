import React from "react";
import { Container, Row, Col } from "shards-react";

import UserAccountDetails from "../components/user-settings/UserSettings";
import UserGoals from "../components/user-settings/UserStats";
import UserInput from "../components/user-settings/UserInputs";
import Navbar from "../components/Navbars/NavbarSettings";

function UserSettings(props) {
  // console.log('usersettings');
  // console.log(props);

    return (
      <Container fluid className="main-content-container px-4">
<Navbar/>
    <Row>
      <Col lg="8">
        <UserAccountDetails {...props} getUser={props.getUser} user = {props.user}/>
        <UserGoals {...props} getUser={props.getUser} user = {props.user}/>
        <UserInput {...props} getUser={props.getUser} user = {props.user}/>
      </Col>
    </Row>
  </Container>
    )
};

export default UserSettings;