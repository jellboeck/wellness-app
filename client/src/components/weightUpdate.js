import React, { useState } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
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

function UserInputSettings(props, { title }) {

  const [weight, setWeight] = useState();

  function handleUpdateProfile() {
    axios({
      method: 'PUT',
      url: '/api/update_profile',
      data: {
        weight: weight
      }
    })
      .then(function (data) {
      })

      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <Container fluid className="main-content-container px-2">
      <Card small className="mb-2 updatecard">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>

                <h6 className="heading text-center">Update Your Weight</h6>
                  <GridContainer className="center">
                  
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <FormInput
                      className="forminputtext"
                      placeholder="Weight"
                      id="feWeight"
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                        formControlProps={{
                          fullWidth: false
                        }}
                      />
                    </GridItem>

                  </GridContainer>

                  <Button id="bt"
                    className="btnupdate"
                    theme="info"
                    onClick={() => handleUpdateProfile()}
                  ><i className="fas fa-weight fa-3x "></i></Button>

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
