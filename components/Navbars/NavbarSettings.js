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
  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 399 ||
  //       document.body.scrollTop > 399
  //     ) {
  //       setNavbarColor("");
  //     } else if (
  //       document.documentElement.scrollTop < 400 ||
  //       document.body.scrollTop < 400
  //     ) {
  //       setNavbarColor("navbar-dark");
  //     }
  //   };
  //   window.addEventListener("scroll", updateNavbarColor);
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
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
      <Navbar className="fixed-top settingsnav" >
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            
          </UncontrolledDropdown>
          <div className="navbar-translate ">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Settings
            </NavbarBrand>

             <Button className="navbtn btnSettings"

                to="/index"

                size="sm"
                tag={Link}
                >
                  <i className="fas fa-home fa-1x padright"></i>
                  <p >  Home</p>
                </Button>

                <Button className="navbtn btnSettings"

                to="/index"

                size="sm"
                tag={Link}
                >
                <i className="fas fa-balance-scale fa-1x padright"></i>
                <p >Resources</p>
                </Button>

                <Button className="navbtn btnSettings"

                to="/profile"

                size="sm"
                tag={Link}
                >
                <i className="fas fa-user-circle fa-1x padright"></i>
                <p >Profile</p>
                </Button>
          </div>
         
        </Container>
      </Navbar>
    </>
  );
}

export default SettingsNav;
