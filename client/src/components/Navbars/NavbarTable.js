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
      <Navbar className="fixed-top tablenav" >
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            
          </UncontrolledDropdown>
          <div className="navbar-translate ">
            <NavbarBrand
              id="navbar-brand"
            >
              The Leaderboard
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

export default SettingsNav;
