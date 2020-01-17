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
            // onClick={calcSteps}
            >Update Your Steps</Button>

          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
</Card>


  </Container>
);


export default userGoals;