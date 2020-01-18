import React from "react";

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
  Button
} from "shards-react";


const userGoals = ({ steps }) => (
  <Container fluid className="main-content-container px-2">
    
<Card className="mb-2">
  <ListGroup flush>
    <ListGroupItem >
      <Row >
        <Col>
          <Form>

          <GridContainer className="center">
         
          <GridItem xs={12} sm={4} md={4} lg={3}>
            <CustomInput
              labelText="Steps"
              id="Steps"
              formControlProps={{
                fullWidth: false
              }}
            />
          </GridItem>

          </GridContainer>

            <Button id="StepsBtn" 
            theme="info"
            onClick={calcSteps}
            >Update Your Steps</Button>
           <h4 id="stepresult"className="title text-center"></h4>

          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>


  </Container>
);



    function calcSteps() {
        let totalsteps = document.getElementById('stepresult');
        let mysteps = parseInt(document.getElementById('Steps').value);


        if (mysteps) {

          console.log("BMI");


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
        totalsteps.innerText = yourprogress;       // TREATS EVERY CONTENT AS TEXT.
    }

export default userGoals;