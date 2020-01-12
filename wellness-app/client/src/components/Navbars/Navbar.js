import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
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
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              {/* <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem> */}
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Wellness
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand">
              JUST THE TOOLTIP HERE
            </UncontrolledTooltip> */}

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
                <NavLink to="/index" tag={Link}>
                  This Goes Back
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="www.google.com">
                  Link To Google
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="www.google.com"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fas fa-balance-scale"></i>
                  <p className="d-lg-none d-xl-none">*</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  This Goes Home
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="google.com"
                  target="_blank"
                  id="tooltip-1"
                >
                  <i className="fas fa-band-aid"></i>
                  <p className="d-lg-none d-xl-none">*</p>
                </NavLink>
                <UncontrolledTooltip target="#tooltip-1">
                  Other Button
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="googole.com"
                  target="_blank"
                  id="tooltip-2"
                >
                  <i className="fas fa-bacon"></i>
                  <p className="d-lg-none d-xl-none">*</p>
                </NavLink>
                <UncontrolledTooltip target="#tooltip-2">
                  Third Button
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
