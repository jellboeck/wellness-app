import React, { useState } from "react";
import axios from 'axios';
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
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

function UserInputSettings(props, { title }) {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [motivation, setMotivation] = useState();
  const [heightFt, setHeightFt] = useState();
  const [heightIn, setHeightIn] = useState();
  const [weight, setWeight] = useState();

  function getUserProfile() {
    axios.get('/api/user_profile').then(function (data) {
      console.log('profile data');
      console.log(data);
      setFirstname(data.data.firstname);
      setLastname(data.data.lastname);
      setEmail(props.user);
      setAddress(data.data.address);
      setCity(data.data.city);
      setState(data.data.state);
      setZip(data.data.zip);
      setMotivation(data.data.motivation);
      setHeightFt(data.data.heightft);
      setHeightIn(data.data.heightin);
      setWeight(data.data.weight);
    });
  }

  // getUserProfile();
  // send new profile data to database
  function handleUpdateProfile() {
    console.log('updating profile');
    axios({
      method: 'PUT',
      url: '/api/update_profile',
      // test code
      // data: {email: 'email@email2.com', password: '123456901591'}
      data: {
        firstname: firstname,
        lastname: lastname,
        email: props.user,
        //  password: password,
        address: address,
        city: city,
        state: state,
        zip: zip,
        motivation: motivation,
        heightft: heightFt,
        heightin: heightIn,
        weight: weight

      }
    })
      // get new data to display
      .then(function (data) {
        console.log('data');
        console.log(data);
        // window.location.replace("/index");
      })
      // if error, handle by throwing err
      .catch(function (err) {
        console.log(err);
      });
    // getUserProfile();
  }

  return (
    <Container>
      <Card small className="mb-4">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>


                  {/* <GridContainer>
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="First Name"
                        id="FirstName"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Last Name"
                        id="LastName"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Email"
                        id="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Address"
                        id="HomeAddress"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="City"
                        id="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="State"
                        id="State"
                        value={state}
                        onChange={e => setState(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Zip Code"
                        id="ZipCode"
                        value={zip}
                        onChange={e => setZip(e.target.value)}
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
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Weight lbs"
                        id="Weightlbs"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
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
                    onClick={() => handleUpdateProfile()}
                  >Update Account</Button> */}
                 <Row form>
                    {/* First Name */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">First Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                      />
                    </Col>
                    {/* Last Name */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Last Name</label>
                      {/* <FormSelect id="feInputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect> */}
                      <FormInput
                        // <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value={lastname}
                        // onChange={() => { }}
                        onChange={e => setLastname(e.target.value)}
                      // onClick={e => setState(e.target.value)}
                      />
                    </Col>
                   
                  </Row>
                 
                  <FormGroup>
                    <label htmlFor="feAddress">Address</label>
                    <FormInput
                      id="feAddress"
                      placeholder="Address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </FormGroup>
                  <Row form>
                    {/* City */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">City</label>
                      <FormInput
                        id="feCity"
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                    </Col>
                    {/* State */}
                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">State</label>
                      {/* <FormSelect id="feInputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect> */}
                      <FormInput
                        // <FormInput
                        id="feState"
                        placeholder="State"
                        value={state}
                        // onChange={() => { }}
                        onChange={e => setState(e.target.value)}
                      // onClick={e => setState(e.target.value)}
                      />
                    </Col>
                    {/* Zip Code */}
                    <Col md="2" className="form-group">
                      <label htmlFor="feZipCode">Zip Code</label>
                      <FormInput
                        id="feZipCode"
                        placeholder="Zip"
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    {/* City */}
                    <Col md="3" className="form-group">
                      <label htmlFor="feHeightFt">Height</label>
                      <FormInput
                        id="feHeightFt"
                        placeholder="Height feet"
                        value={heightFt}
                        onChange={e => setHeightFt(e.target.value)}
                      />
                    </Col>
                    <Col md="3" className="form-group">
                      <label htmlFor="feHeightIn">Height</label>
                      <FormInput
                        id="feHeightIn"
                        placeholder="Height inches"
                        value={heightIn}
                        onChange={e => setHeightIn(e.target.value)}
                      />
                    </Col>
                    {/* State */}
                    <Col md="3" className="form-group">
                      <label htmlFor="feWeight">Weight</label>
                      {/* <FormSelect id="feInputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect> */}
                      <FormInput
                        // <FormInput
                        id="feWeight"
                        placeholder="Weight"
                        value={weight}
                        // onChange={() => { }}
                        onChange={e => setWeight(e.target.value)}
                      // onClick={e => setState(e.target.value)}
                      />
                    </Col>
                    {/* Zip Code */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feMotivation">Motivation</label>
                      <FormInput
                        id="feMotivation"
                        placeholder="Motivation"
                        value={motivation}
                        onChange={e => setMotivation(e.target.value)}
                      />
                    </Col>
                  </Row>

                  <Button
                    theme="accent"
                    onClick={() => handleUpdateProfile()}

                  >Update Account</Button>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Container>
  );
}




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
