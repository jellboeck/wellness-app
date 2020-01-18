import React from "react";
import PropTypes from "prop-types";

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

const UserInputSettings = ({ title }) => (
  
  <Container>
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
                labelText="Address"
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

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Weight lbs"
                id="Weightlbs"
                formControlProps={{
                  fullWidth: false
                }}
              />
            </GridItem>

            </GridContainer>

              <Row form>
                <Col md="12" className="form-group">
                  <label id="other">Your Motivation</label>
                  <FormTextarea id="emp" rows="5" />
                </Col>
              </Row>
              <Button className="btnSettings" id="change" 
              theme="muted"
              // onClick={changeLabel}
              >Update Account</Button>
             
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  </Container>
);




UserInputSettings.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserInputSettings.defaultProps = {
  title: "Account Details"
};

export default UserInputSettings;
