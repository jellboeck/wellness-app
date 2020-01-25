import React from "react";
import { Container, Row, Col } from "shards-react";

import Search from "../components/yelpSearch";
import Navbar from "../components/Navbars/NavbarSearch";

function UserSettings(props) {
  // console.log('usersettings');
  // console.log(props);

    return (
      <Container fluid className="main-content-container px-4">
<Navbar/>
    <Row>
      <Col lg="8">
        <Search {...props} getUser={props.getUser} user = {props.user}/>
      </Col>
    </Row>
  </Container>
    )
};

export default UserSettings;
