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


const userBMI = ({ BMI }) => (
  <Container fluid className="main-content-container px-2">
    
<Card className="mb-2">
  <ListGroup flush>
    <ListGroupItem >
      <Row >
        <Col>
          <Form>

          <GridContainer>
         
          <GridItem xs={12} sm={4} md={4} lg={3}>
            <CustomInput
              labelText="Weight"
              id="Weight"
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



            <Button id="BMIbtn" 
            theme="info"
            // onClick={calcBMI}
            >Calculate BMI</Button>
           <h4 id="BMI%"className="title text-center">Your BMI%</h4>
           <h5 id="bmiclass"className="title text-center"></h5>


          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>


  </Container>
);




// function calcBMI() {
//   let lbl = document.getElementById('lblEmp');
//   let empName = document.getElementById('emp').value;

//   lbl.innerText = empName;       // TREATS EVERY CONTENT AS TEXT.
// }
export default userBMI;