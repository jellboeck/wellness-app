import React from "react";

// reactstrap components
import {
  // Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    return function cleanup() {
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div>
        <ProfilePageHeader />
    
          <Container>

          <h3 className="title">My Goals</h3>
            <h5 className="description" id="goals">
            <div className="content">
            <div className="social-description">
              <h2>20</h2>
              <p>BMI %</p>
            </div>
            <div className="social-description">
              <h2>20</h2>
              <p>Something</p>
            </div>
            <div className="social-description">
              <h2>30</h2>
              <p>Else</p>
            </div>
          </div>
            </h5>

            <h3 className="title">My Motivation</h3>
            <h5 className="description" id="motivation">
Enter a few simple lines about your motivation to meet your goals!
            </h5>
            <Row>
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
                        href="#pablo"
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
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons media-2_sound-wave"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
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
{/* metrics Here */}
                      </Col>
                    </Row>
                  </Col>
                </TabPane>

                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
{/* metrics Here */}
                      </Col>
                    </Row>
                  </Col>
                </TabPane>

                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
{/* metrics Here */}
                      </Col>
                    </Row>
                  </Col>
                </TabPane>

              </TabContent>
            </Row>
          </Container>

        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
