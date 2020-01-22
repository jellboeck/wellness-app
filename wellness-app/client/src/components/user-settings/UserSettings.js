<<<<<<< HEAD
import React, { useState } from "react";
import axios from 'axios';
=======
import React from "react";

>>>>>>> master
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Container,
<<<<<<< HEAD
  Button
} from "shards-react";

function UserAccountDetails(props, { title }) {
  console.log('acct details');
  console.log(props);
  props.getUser();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  // const [motivation, setMotivation] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');


  function getUserProfile() {
    axios.get('/api/user_profile').then(function(data){
      console.log('profile data');
      console.log(data.data.email);
      setFirstname(data.data.firstname);
      setLastname(data.data.lastname);
      setEmail(data.data.email);
      setAddress(data.data.address);
      setCity(data.data.city);
      setState(data.data.state);
      setZip(data.data.zip);
      // setMotivation(data.data.motivation);
      setHeight(data.data.height);
      setWeight(data.data.weight);
    });
  }

  // getUserProfile();
  return (
=======
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  
>>>>>>> master
  <Container>

  <Card small className="mb-4"
   style={{
<<<<<<< HEAD
     marginTop: "115px"
=======
    marginTop: "115px"
>>>>>>> master
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
<<<<<<< HEAD
                <h6 className="h6p" id='userFname'> {firstname} </h6>
              </Col>

              {/* Last Name */}
              <Col md="4" >
                <h5 >Last Name</h5>
                <h6 className="h6p" id='userLname'> {lastname} </h6>
              </Col>

              {/* Email */}
              <Col md="4" >
                <h5 >Email</h5>
                <h6 className="h6p" id='userEmail'> {email} </h6>
              </Col>
           
           {/* Address */}
              <Col md="4" >
              <h5 >Address</h5>
              <h6 className="h6p" id='userAddress'> {address} </h6>
              </Col>

              {/* City */}
              <Col md="3" >
                <h5 >City</h5>
                <h6 className="h6p" id='userCity'> {city} </h6>
=======
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
>>>>>>> master
              </Col>
              {/* State */}
              <Col md="2" >
              <h5 >State</h5>
<<<<<<< HEAD
                <h6 className="h6p" id='userState'> {state} </h6>
=======
                <h6 className="h6p" id='userState'>Ohio</h6>
>>>>>>> master
              </Col>
              {/* Zip Code */}
              <Col md="2" >
              <h5 >Zip Code</h5>
<<<<<<< HEAD
                <h6 className="h6p" id='userZip'> {zip} </h6>
=======
                <h6 className="h6p" id='userZip'>44444</h6>
>>>>>>> master
              </Col>
{/* Height */}
              <Col md="2" >
              <h5 >Height </h5>
<<<<<<< HEAD
              <h6 className="h6p" id='userHeight'> {height} </h6>
=======
              <h6 className="h6p" id='userZip'>6'0"</h6>
>>>>>>> master
              </Col>
{/* Weight */}
              <Col md="2" >
              <h5 >Weight </h5>
<<<<<<< HEAD
              <h6 className="h6p" id='userWeight'> {weight} </h6>
              </Col>

              <Button
                    theme="accent"
                    onClick={() => getUserProfile()}

                  >Get Account Info</Button>

=======
              <h6 className="h6p" id='userZip'>175</h6>
              </Col>

>>>>>>> master
            </Row>

          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>
 
  </Container>
);
<<<<<<< HEAD
}
=======
>>>>>>> master

export default UserAccountDetails;