import React from "react";
import PropTypes from "prop-types";

import SettingsNavbar from "components/Navbars/NavbarSettings.js";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,

  FormInput,
  Container,
  FormTextarea,
  Button
} from "shards-react";


const UserAccountDetails = ({ title }) => (
  
  <Container>

  <Card small className="mb-4"
   style={{
    marginTop: "115px"
  }}
  >
          <SettingsNavbar />
  <ListGroup >
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            
          <Row form>
              {/* Email */}
              <Col md="4" >
                <h5 >First Name</h5>
                <h6 id='userFname'>Ron</h6>
              </Col>

              {/* Email */}
              <Col md="4" >
                <h5 >Last Name</h5>
                <h6 id='userLname'>Johnson</h6>
              </Col>

              {/* Email */}
              <Col md="4" >
                <h5 >Email</h5>
                <h6 id='userEmail'>ronJ@gmail.com</h6>
              </Col>
           
              <Col md="4" >
              <h5 >Address</h5>
              <h6 id='userAddress'>1234 Strawberry Lane</h6>
              </Col>

              {/* City */}
              <Col md="3" >
                <h5 >City</h5>
                <h6 id='userCity'>Lakewood</h6>
              </Col>
              {/* State */}
              <Col md="2" >
              <h5 >State</h5>
                <h6 id='userState'>Ohio</h6>
              </Col>
              {/* Zip Code */}
              <Col md="2" >
              <h5 >Zip Code</h5>
                <h6 id='userZip'>44444</h6>
              </Col>
            </Row>

          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>


  <Card small className="mb-4">
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              

            <Row form>
                {/* first name */}
                <Col md="6" className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <FormInput
                    id="firstName"
                    placeholder="First Name"
                    onChange={() => {}}
                  />
                </Col>

                {/* last name */}
                <Col md="6" className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <FormInput
                    id="lastName"
                    placeholder="Last Name"
                    onChange={() => {}}
                  />
                </Col>
              </Row>



              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>

                <Col md="6" className="form-group">
                <label htmlFor="feAddress">Home Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  onChange={() => {}}
                />
                </Col>

              </Row>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormInput
                    id="feInputState"
                    placeholder="State"
                    onChange={() => {}}
                  />
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="Zip"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label id="other">Your Motivation</label>
                  {/* htmlFor="feDescription" */}
                  <FormTextarea id="emp" rows="5" />
                  {/* id="feDescription"  */}
                </Col>
              </Row>
              <Button theme="warning" id="change" 
              // onClick={changeLabel}
              >Update Account</Button>
             
              {/* <Button
                theme="info"
                to="/profile"
                tag={Link}
                >
                Return To Profile
                </Button> */}

            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  </Container>
);

// function changeLabel() {

//   let lbl = document.getElementById('lblEmp');
//   let empName = document.getElementById('emp').value;

//   // Assign HTML codes along with text values using innerHTML.
//   lbl.innerHTML = '<span style="text-transform:capitalize;">' + empName + '</span>';
// }



UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
