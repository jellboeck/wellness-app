import React from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Container,
  FormInput,
  Button
} from "shards-react";

const userBMI = ({ BMI }) => (
  <Container fluid className="main-content-container px-2">
    
<Card className="mb-2 updatecard">
  <ListGroup flush>
    <ListGroupItem >
      <Row >
        <Col>
          <Form>
          <h6 className="heading text-center">Calculate Your BMI</h6>
          <GridContainer>
          
          <GridItem xs={12} sm={4} md={4} lg={3}>
          <FormInput
          placeholder="weight"
          id="lbs"
          formControlProps={{
          fullWidth: false
          }}
          />
          </GridItem>

          <GridItem xs={12} sm={4} md={4} lg={3}>

          <FormInput
          placeholder="Height ft"
          id="ft"
          formControlProps={{
          fullWidth: false
          }}
          />

          </GridItem>

          <GridItem xs={12} sm={4} md={4} lg={3}>

          <FormInput
          placeholder="Height in"
          id="in"
          formControlProps={{
          fullWidth: false
          }}
          />

          </GridItem>

          </GridContainer>

            <Button id="bt" 
            className="btnupdate"
            theme="info"
            onClick={JuliasBMImagicfunctionofglorythatourentireappisbasedaround}
            ><i className="fas fa-hamburger fa-3x "></i></Button>
           <h4 id="BMI"className="heading text-center"></h4>
           <h6 id="bmiweight"className="heading text-center"></h6>

          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>

  </Container>
);

    function JuliasBMImagicfunctionofglorythatourentireappisbasedaround() {

      let yourlbs = parseInt(document.getElementById('lbs').value);
      let yourft = parseInt(document.getElementById('ft').value);
      let yourin = parseInt(document.getElementById('in').value);
      var height = (yourft*12) + yourin

        if (height && yourlbs) {
          var BMI = (yourlbs / (height * height)) * 703
          BMI = BMI.toFixed(1);
          console.log(BMI);

          if (BMI < 18.5) {
            var bmiclass = "Your weight falls within the underweight range"
            }
          if(BMI > 18.5 && BMI < 25){
            var bmiclass = "Your weight falls within the normal range"
            }
          if (BMI > 25 && BMI < 30) {
            var bmiclass = "Your weight falls within the overweight range"
            }
          if (BMI > 30) {     
            var bmiclass = "Your weight falls in the obese range"       
            }
      }
      else {
        var BMI = "0"
        var bmiclass = "Please complete the form in its entirety"
        }

        let bmiperc = document.getElementById('BMI');
        let bmistat = document.getElementById('bmiweight');

        bmiperc.innerText = BMI+"%";    
        bmistat.innerText = bmiclass;  

    }

export default userBMI;