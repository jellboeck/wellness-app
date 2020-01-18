import React from "react";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Container,
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  
  <Container>

  <Card small className="mb-4"
   style={{
    marginTop: "115px"
  }}
  >    
  <ListGroup className="p-3">
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            
          <Row form>
              {/* First Name */}
              <Col md="4" >
                <h5 >First Name</h5>
                <h6 className="h6p" id='userFname'>Ron</h6>
              </Col>

              {/* Last Name */}
              <Col md="4" >
                <h5 >Last Name</h5>
                <h6 className="h6p" id='userLname'>Johnson</h6>
              </Col>

              {/* Email */}
              <Col md="4" >
                <h5 >Email</h5>
                <h6 className="h6p" id='userEmail'>ronJ@gmail.com</h6>
              </Col>
           
           {/* Address */}
              <Col md="4" >
              <h5 >Address</h5>
              <h6 className="h6p" id='userAddress'>1234 Strawberry Lane</h6>
              </Col>

              {/* City */}
              <Col md="3" >
                <h5 >City</h5>
                <h6 className="h6p" id='userCity'>Lakewood</h6>
              </Col>
              {/* State */}
              <Col md="2" >
              <h5 >State</h5>
                <h6 className="h6p" id='userState'>Ohio</h6>
              </Col>
              {/* Zip Code */}
              <Col md="2" >
              <h5 >Zip Code</h5>
                <h6 className="h6p" id='userZip'>44444</h6>
              </Col>
{/* Height */}
              <Col md="2" >
              <h5 >Height </h5>
              <h6 className="h6p" id='userZip'>6'0"</h6>
              </Col>
{/* Weight */}
              <Col md="2" >
              <h5 >Weight </h5>
              <h6 className="h6p" id='userZip'>175</h6>
              </Col>

            </Row>

          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>
 
  </Container>
);

export default UserAccountDetails;