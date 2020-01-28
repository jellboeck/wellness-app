import React from "react";
import { Container, Row, Col } from "shards-react";

import Search from "../components/yelpSearch";
import Navbar from "../components/Navbars/NavbarSearch";
import Adds from "components/adds3";

function UserSettings(props) {
  // console.log('usersettings');
  // console.log(props);

    return (
      <Container fluid className="main-content-container px-4">
<Navbar/>
    <Row>
      <Col lg="6">
        <Search {...props} getUser={props.getUser} user = {props.user}/>
      </Col>
      <Col lg="6">
      <Adds/>
      </Col>
    </Row>
  </Container>
    )
};

export default UserSettings;
