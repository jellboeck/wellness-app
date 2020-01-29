import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";

function TableNav() {
  // const [setNavbarColor] = React.useState("navbar-dark");
  const [] = React.useState(true);

  return (
    <>
        <div/>
      <Navbar className="tablenav" >
        <Container>

          <div className="navbar-translate ">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Settings
            </NavbarBrand>

            <Button
                className="navbtn btntable"
                to="/profile"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-user fa-2x padright"></i>
                <p >Profile</p>
                </Button>

                <Button
                className="navbtn btntable"
                to="/search"
                size="sm"
                tag={Link}
                >
                <i className="fas fa-balance-scale fa-2x padright"></i>
                <p>Resources</p>
                </Button>

                <Button
                className="navbtn btntable"
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

export default TableNav;