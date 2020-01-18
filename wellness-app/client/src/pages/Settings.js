import React from "react";
import { Container, Row, Col } from "shards-react";

import UserAccountDetails from "../components/user-settings/UserSettings";
import UserInput from "../components/user-settings/UserInputs";
import SettingsNavbar from "components/Navbars/NavbarSettings.js";

const UserSettings = () => (
  <Container fluid className="main-content-container px-4">
<SettingsNavbar />
    <Row>
      <Col lg="8">
        <UserAccountDetails />
        <UserInput />
      </Col>
    </Row>
  </Container>
);

export default UserSettings;
