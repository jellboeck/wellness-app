import React, { useState } from "react";
import axios from 'axios';
import PropTypes from "prop-types";

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
    <Container>
      <Card small className="mb-4">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>

                  <Row form>
        
                    <Col md="3" className="form-group">
                      <label htmlFor="feWeight"></label>

                      <FormInput

                        id="feWeight"
                        placeholder="Weight"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}

                      />
                    </Col>

                  </Row>

                  <Button 
                    className="btnSettings"
                    theme="muted"
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

// function Refresh() {
//   setTimeout(reload, 3000);
// }

// function reload() {
//   window.location.reload(false);
// }

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


// <Container fluid className="main-content-container px-2">

// <Card className="mb-2 updatecard">
//   <ListGroup flush>
//     <ListGroupItem >
//       <Row >
//         <Col>
//           <Form>
//           <h6 className="heading text-center">Update Your Weight</h6>
//             <GridContainer className="center">
//               <GridItem xs={12} sm={4} md={4} lg={3}>
//                 <CustomInput
//                   labelText="Weight"
//                   id="Steps"
//                   formControlProps={{
//                     fullWidth: false
//                   }}
//                 />
//               </GridItem>

//             </GridContainer>

//             <Button id="WeightBtn"
//             className="btnupdate"
//               theme="info"
//               onClick={() => handleUpdateProfile()}
//               onClick={calcSteps}
//             ><i className="fas fa-weight fa-3x"></i></Button>

//           </Form>
//         </Col>
//       </Row>
//     </ListGroupItem>
//   </ListGroup>
// </Card>


// </Container>
