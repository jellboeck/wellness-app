import React, { useState } from "react";
import axios from 'axios';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Container,
  Button
} from "shards-react";

function UserAccountDetails(props, { title }) {
  //console.log('acct details');
  //console.log(props);
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
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiGoal, setBMIGoal] = useState();
  const [stepGoal, setStepGoal] = useState();
  const [stepTotal, setStepTotal] = useState();

  function getUserProfile() {
    axios.get('/api/user_profile').then(function(data){
     // console.log('profile data');
     // console.log(data.data.email);
      setFirstname(data.data.firstname);
      setLastname(data.data.lastname);
      setEmail(data.data.email);
      setAddress(data.data.address);
      setCity(data.data.city);
      setState(data.data.state);
      setZip(data.data.zip);
      // setMotivation(data.data.motivation);
      setHeightFt(data.data.heightft);
      setHeightIn(data.data.heightin);
      setWeight(data.data.weight);
      setBMIGoal(data.data.bmigoal);
      setStepGoal(data.data.stepgoal);
      setStepTotal(data.data.steptotal);
    });
  }

  getUserProfile();
  // getUserProfile();
  return (
  <Container>

  <Card className="mb-4 updatecard">    
  <ListGroup className="p-3">
    <ListGroupItem className="p-3 purple-border">
      <Row>
        <Col>
          <Form>
            
          <Row form>
              {/* First Name */}
              <Col md="4" >
                <h5 >First Name</h5>
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
              </Col>
              {/* State */}
              <Col md="2" >
              <h5 >State</h5>
                <h6 className="h6p" id='userState'> {state} </h6>
              </Col>
              {/* Zip Code */}
              <Col md="2" >
              <h5 >Zip Code</h5>
                <h6 className="h6p" id='userZip'> {zip} </h6>
              </Col>
{/* Height */}
              <Col md="2" >
              <h5 >Height </h5>
              <h6 className="h6p" id='userHeight'> {heightFt} </h6>
              </Col>
              <Col md="2" >
              <h5 >Height </h5>
              <h6 className="h6p" id='userHeight'> {heightIn} </h6>
              </Col>
{/* Weight */}
              <Col md="2" >
              <h5 >Weight </h5>
              <h6 className="h6p" id='userWeight'> {weight} </h6>
              </Col>
{/* bmi Goal */}
              <Col md="2" >
              <h5 >BMI Goal </h5>
              <h6 className="h6p" id='userBMIGoal'> {bmiGoal} </h6>
              </Col>
              {/* Step Goal */}
              <Col md="2" >
              <h5 >Steps Goal </h5>
              <h6 className="h6p" id='userStepGoal'> {stepGoal} </h6>
              </Col>
              {/* total steps*/}
              <Col md="2" >
              <h5 >Steps total </h5>
              <h6 className="h6p" id='userStepTotal'> {stepTotal} </h6>
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
}

export default UserAccountDetails;