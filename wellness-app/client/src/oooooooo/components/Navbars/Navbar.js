import React from "react";

// reactstrap components
import {
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  // UncontrolledTooltip
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
            
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Wellness
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
                <NavLink
                  href="www.google.com"
                  target="_blank"
                  id="tooltip-0"
                >
                  <i className="fas fa-home fa-3x padright"></i>
                  <p className="d-lg-none d-xl-none">  Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="google.com"
                  target="_blank"
                  id="tooltip-1"
                >
                  <i className="fas fa-balance-scale fa-3x padright"></i>
                  <p className="d-lg-none d-xl-none">Resources</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="googole.com"
                  target="_blank"
                  id="tooltip-2"
                >
                  <i className="fas fa-cogs fa-3x padright"></i>
                  <p className="d-lg-none d-xl-none">Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
