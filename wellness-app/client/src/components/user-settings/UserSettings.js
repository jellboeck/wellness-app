import React from "react";
import PropTypes from "prop-types";

import SettingsNavbar from "components/Navbars/NavbarSettings.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/user-settings/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Container,
  FormTextarea,
  Button
} from "shards-react";


const UserAccountDetails = ({ title }) => (
  
  <Container>
<SettingsNavbar />
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
              {/* Email */}
              <Col md="4" >
                <h5 >First Name</h5>
                <h6 className="h6p" id='userFname'>Ron</h6>
              </Col>

              {/* Email */}
              <Col md="4" >
                <h5 >Last Name</h5>
                <h6 className="h6p" id='userLname'>Johnson</h6>
              </Col>

              {/* Email */}
              <Col md="4" >
                <h5 >Email</h5>
                <h6 className="h6p" id='userEmail'>ronJ@gmail.com</h6>
              </Col>
           
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

              <Col md="2" >
              <h5 >Height </h5>
              <h6 className="h6p" id='userZip'>6'0"</h6>
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


            <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="First Name"
                id="FirstName"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Last Name"
                id="LastName"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Email"
                id="Email"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Home Address"
                id="HomeAddress"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="City"
                id="City"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="State"
                id="State"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Zip Code"
                id="ZipCode"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Height ft"
                id="HeightFt"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Height in"
                id="HeightIn"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            </GridContainer>


              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label id="other">Your Motivation</label>
                  {/* htmlFor="feDescription" */}
                  <FormTextarea id="emp" rows="5" />
                  {/* id="feDescription"  */}
                </Col>
              </Row>
              <Button className="btnSettings" id="change" 
              theme="muted"
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
