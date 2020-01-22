import React from "react";
import { Container, Row, Col } from "shards-react";

import UserAccountDetails from "../components/user-settings/UserSettings";
import UserInput from "../components/user-settings/UserInputs";
<<<<<<< HEAD

function UserSettings(props) {
  console.log('usersettings');
  console.log(props);
  return (
    <Container fluid className="main-content-container px-4">

    <Row>
      <Col lg="8">
        <UserAccountDetails {...props} getUser={props.getUser} user = {props.user}/>
        <UserInput {...props} getUser={props.getUser} user = {props.user}/>
=======
import SettingsNavbar from "components/Navbars/NavbarSettings.js";

const UserSettings = () => (
  <Container fluid className="main-content-container px-4">
<SettingsNavbar />
    <Row>
      <Col lg="8">
        <UserAccountDetails />
        <UserInput />
>>>>>>> master
      </Col>
    </Row>
  </Container>
    )
};

export default UserSettings;
