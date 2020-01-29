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
      <Navbar className="settingsnav" >
        <Container>

          <div className="navbar-translate ">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Settings
            </NavbarBrand>

             <Button className="navbtn btnSettings"
                to="/profile"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-user fa-2x padright"></i>
                <p >Profile</p>
                </Button>

                <Button className="navbtn btnSettings"
                color="default"
                to="/search"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-balance-scale fa-2x padright"></i>
                <p>Resources</p>
                </Button>

                <Button className="navbtn btnSettings"
                color="default"
                to="/table"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-table fa-2x padright"></i>
                <p>Leaderboards</p>
                </Button>
          </div>
         
        </Container>
      </Navbar>
    </>
  );
}

export default SettingsNav;
