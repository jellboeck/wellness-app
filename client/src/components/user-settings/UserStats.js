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

function UserGoalSettings(props, { title }) {

  const [heightFt, setHeightFt] = useState();
  const [heightIn, setHeightIn] = useState();
  const [bmiGoal, setBMIGoal] = useState();
  const [stepGoal, setStepGoal] = useState();
  const [stepTotal, setStepTotal] = useState();

  // getUserProfile();
  // send new profile data to database
  function handleUpdateProfile() {
    // console.log('updating profile');
    axios({
      method: 'PUT',
      url: '/api/update_profile',
      // test code
      // data: {email: 'email@email2.com', password: '123456901591'}
      data: {
        heightft: heightFt,
        heightin: heightIn,
        bmigoal: bmiGoal,
        stepgoal: stepGoal,
        steptotal: stepTotal,
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
                    {/* BMI goal */}
                    <Col md="3" className="form-group forminputtext">
                      <label htmlFor="feBMIGoal"></label>
                      <FormInput
                        id="feBMIGoal"
                        placeholder="BMI goal"
                        // value={BMIGoal}
                        onChange={e => setBMIGoal(e.target.value)}
                      />
                    </Col>
                      {/* Step Goal */}
                       <Col md="3" className="form-group forminputtext">
                      <label htmlFor="feStepGoal"></label>
                      <FormInput
                        id="feStepGoal"
                        placeholder="Steps goal"
                        // value={StepGoal}
                        onChange={e => setStepGoal(e.target.value)}
                      />
                    </Col>
                     {/* Height ft */}
                    <Col md="3" className="form-group forminputtext">
                      <label htmlFor="feHeightFt"></label>
                      <FormInput
                        id="feHeightFt"
                        placeholder="Height ft"
                        value={heightFt}
                        onChange={e => setHeightFt(e.target.value)}
                      />
                    </Col>
                    {/* Height in */}
                    <Col md="3" className="form-group forminputtext">
                      <label htmlFor="feHeightIn"></label>
                      <FormInput
                        id="feHeightIn"
                        placeholder="Height in"
                        value={heightIn}
                        onChange={e => setHeightIn(e.target.value)}
                      />
                    </Col>

                    {/* total step */}
                    <Col md="3" className="form-group forminputtext">
                      <label htmlFor="feStepTotal"></label>
                      <FormInput
                        id="feStepTotal"
                        placeholder="step total"
                        value={stepTotal}
                        onChange={e => setStepTotal(e.target.value)}
                      />
                    </Col>

                  </Row>

                  <Button 
                    className="btnSettings"
                    theme="muted"
                    onClick={() => handleUpdateProfile()}

                  ><i className="fas fa-user-check fa-2x padright"></i>Update Goals</Button>
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

UserGoalSettings.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserGoalSettings.defaultProps = {
  title: "Account Details"
};

export default UserGoalSettings;
