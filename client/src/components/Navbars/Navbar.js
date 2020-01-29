import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Collapse,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Col,
  Container,
} from "reactstrap";

function ExamplesNavbar(props) {
  //console.log("exNavbar");
 // console.log(props);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
         
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
            >
              Your Wellness Profile
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
             <Nav navbar>
              <NavItem>

                <Col>
                {/* <Button
                color="default"
                to="/index"
                outline
                size="lg"
                tag={Link}
                >
                  <i className="fas fa-home fa-2x padright"></i>
                  <p className="d-lg-none d-xl-none">  Home</p>
                </Button> */}

                <Button
                className="profilebtn"
                color="default"
                to="/search"
                size="md"
                tag={Link}
                >
                <i className="fas fa-balance-scale fa-2x padright"></i>
                <p>Resources</p>
                </Button>

                <Button
                className="profilebtn"
                color="default"
                to="/table"
                size="md"
                tag={Link}
                >
                <i className="fas fa-table fa-2x padright"></i>
                <p>Leaderboards</p>
                </Button>

                <Button
                className="profilebtn"
                color="default"
                to="/settings"
                size="md"
                tag={Link}
                >
                <i className="fas fa-cogs fa-2x padright"></i>
                <p>Settings</p>
                </Button>
                </Col>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
