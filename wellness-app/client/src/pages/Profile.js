import React from "react";

import {Container} from "reactstrap";

import ProfileNavbar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BMIcalc from "components/BMIcalc.js";
import Steps from "components/Steps.js";

<<<<<<< HEAD
function ProfilePage(props) {
  console.log('profile');
  console.log(props);
  props.getUser();
  const [pills, setPills] = React.useState("2");
=======
function ProfilePage() {
  // const [pills, setPills] = React.useState("2");
>>>>>>> master
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
<<<<<<< HEAD
      <ExamplesNavbar {...props} getUser={props.getUser}/>
=======
      <ProfileNavbar />
>>>>>>> master
      <div className="wrapper">
        <ProfilePageHeader />
    
          <Container>

          <h3 className="title">My Goals</h3>
            <h4 className="description" id="goals">
            <div className="content">
            <div className="social-description" id="bmigoal">
              <h2>20%</h2>
              <p>BMI %</p>
            </div>
<<<<<<< HEAD
            <div className="social-description">
              <h2>Heloo</h2>
              <p>{props.user}</p>
=======

            <div className="social-description" id="stepgoal">
              <h2>15,000</h2>
              <p>Steps</p>
            </div>
          </div>
            </h4>

            <h3 className="title">Update Progress</h3>

            <h5 className="description" id="goals">
            <div >
            <div >
            <BMIcalc />
>>>>>>> master
            </div>

            <div >
            <Steps />
            </div>

          </div>
            </h5>

            <h3 className="title">My Motivation</h3>
            <h6 className="description" id="myMotivation">
Enter a few simple lines about your motivation to meet your goals!
            </h6>
            {/* <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Metrics</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#none"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#none"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >

                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>

                </div>
                
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>

                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
metrics Here
                      </Col>
                    </Row>
                  </Col>
                </TabPane>

                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
metrics Here
                      </Col>
                    </Row>
                  </Col>
                </TabPane>

              </TabContent>
            </Row> */}
          </Container>

        <DarkFooter />
      </div>
    </>
  );
}









export default ProfilePage;
