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
  

  // getUserProfile();
  // send new profile data to database
  function handleUpdateProfile() {
    //console.log('updating profile');
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


      }
    })
      // get new data to display
      .then(function (data) {
       // console.log('data');
       // console.log(data);
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
      <Card className="updatecard mb-4">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>

                 <Row form>
                    {/* First Name */}
                    <Col md="6" className="form-group forminputtext">
                      <label htmlFor="feFirstName"></label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                      />
                    </Col>
                    {/* Last Name */}
                    <Col md="6" className="form-group forminputtext">
                      <label htmlFor="feLastName"></label>
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
                 {/* address */}
                  <FormGroup className="forminputtext">
                    <label htmlFor="feAddress"></label>
                    <FormInput
                      id="feAddress"
                      placeholder="Address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </FormGroup>
                  <Row form>
                    {/* City */}
                    <Col md="6" className="form-group forminputtext">
                      <label htmlFor="feCity"></label>
                      <FormInput
                        id="feCity"
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                    </Col>
                    {/* State */}
                    <Col md="4" className="form-group forminputtext">
                      <label htmlFor="feInputState"></label>
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
                    <Col md="2" className="form-group forminputtext">
                      <label htmlFor="feZipCode"></label>
                      <FormInput
                        id="feZipCode"
                        placeholder="Zip"
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                      />
                    </Col>
                  </Row>
                 
                    <FormGroup>
                    <label htmlFor="feMotivation"></label>
                    <FormInput
                        id="feMotivation"
                        placeholder="Motivation"
                        value={motivation}
                        onChange={e => setMotivation(e.target.value)}
                      />
                  </FormGroup>

                  <Button 
                    className="btnSettings "
                    theme="muted"
                    onClick={() => handleUpdateProfile()}
                  ><i className="fas fa-user-edit fa-2x padright"></i>Update Info</Button>

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
