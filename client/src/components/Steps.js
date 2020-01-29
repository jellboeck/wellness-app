import React, {useState} from "react";
import axios from 'axios';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Container,
  Button
} from "shards-react";
// import { isConditionalExpression } from "typescript";


function Steps(props, { steps }) {
  // console.log('user goals steps')
  // console.log(props);

  const [lastStep, setLastStep] = useState('11538');

  function calcSteps() {
    let yoursteps = document.getElementById('stepresult');
    let mysteps = parseInt(document.getElementById('YourSteps').value);
    let userId = props.id
    let userEmail = props.user
    axios({
      method: 'POST',
      url: '/api/new_step',
      data: { quantity: mysteps, id: userId, userEmail: userEmail }
    })
      // change to main page
      .then(function (data) {
        // console.log('data');
      })
      // if error, handle by throwing err
      .catch(function (err) {
        // console.log(err);
      });

    if (mysteps) {

      if (mysteps <= 3000) {
        var yourprogress = "You should try for at least 4000 steps"
      }
      if (mysteps > 3000 && mysteps <= 5000) {
        var yourprogress = "Keep up the good work"
      }
      if (mysteps > 5000 && mysteps <= 10000) {
        var yourprogress = "Your doing great! Keep up the good work"
      }
      if (mysteps > 10000) {
        var yourprogress = "Awesome! Your doing amazing"
      }
    }
    else {
      var yourprogress = "Please enter your steps"
    }
    yoursteps.innerText = yourprogress;       // TREATS EVERY CONTENT AS TEXT.
  }
  return (
    <Container fluid className="main-content-container px-2">

      <Card className="mb-2 updatecard">
        <ListGroup flush>
          <ListGroupItem >
            <Row >
              <Col>
                <Form>
                <h6 className="heading text-center">Update Your Steps</h6>
                  <GridContainer className="center">
                  
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                    <FormInput
                    className="forminputtext"
          placeholder="Steps"
          id="YourSteps"
          formControlProps={{
          fullWidth: false
          }}
          />
                    </GridItem>

                  </GridContainer>

                  <Button id="StepsBtn"
                  className="btnupdate"
                    theme="info"
                    onClick={calcSteps}
                  ><i className="fas fa-shoe-prints fa-3x fa-rotate-270"></i></Button>
                  <h6 id="stepresult" className="heading text-center"></h6>

                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>


    </Container>
  );
}


export default Steps;