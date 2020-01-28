import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";

function SettingsNav() {
  // const [setNavbarColor] = React.useState("navbar-dark");
  const [collapseOpen, setCollapseOpen] = React.useState(true);

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
      <Navbar className="fixed-top searchnav" >
        <Container>

          <div className="navbar-translate ">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Resources
            </NavbarBrand>

             <Button className="navbtn btnsearch"
                to="/profile"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-user fa-2x padright"></i>
                <p >Profile</p>
                </Button>

                <Button className="navbtn btnsearch"
                to="/table"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-table fa-2x padright"></i>
                <p>Leaderboards</p>
                </Button>

                <Button className="navbtn btnsearch"
                to="/settings"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-cogs fa-2x padright"></i>
                <p >Settings</p>
                </Button>
          </div>
         
        </Container>
      </Navbar>
    </>
  );
}

export default SettingsNav;
