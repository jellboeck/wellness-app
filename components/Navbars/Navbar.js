// import React from "react";
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   Button,
//   Collapse,
//   // DropdownToggle,
//   // DropdownMenu,
//   // DropdownItem,
//   UncontrolledDropdown,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   // NavLink,
//   Nav,
//   Container,
//   // UncontrolledTooltip
// } from "reactstrap";

// function ExamplesNavbar() {
//   const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
//   const [collapseOpen, setCollapseOpen] = React.useState(false);
//   React.useEffect(() => {
//     const updateNavbarColor = () => {
//       if (
//         document.documentElement.scrollTop > 399 ||
//         document.body.scrollTop > 399
//       ) {
//         setNavbarColor("");
//       } else if (
//         document.documentElement.scrollTop < 400 ||
//         document.body.scrollTop < 400
//       ) {
//         setNavbarColor("navbar-transparent");
//       }
//     };
//     window.addEventListener("scroll", updateNavbarColor);
//     return function cleanup() {
//       window.removeEventListener("scroll", updateNavbarColor);
//     };
//   });
//   return (
//     <>
//       {collapseOpen ? (
//         <div
//           id="bodyClick"
//           onClick={() => {
//             document.documentElement.classList.toggle("nav-open");
//             setCollapseOpen(false);
//           }}
//         />
//       ) : null}
//       <Navbar className={"fixed-top " + navbarColor} color="info" >
//         <Container>
//           <UncontrolledDropdown className="button-dropdown">
            
//           </UncontrolledDropdown>
//           <div className="navbar-translate">
//             <NavbarBrand
//               id="navbar-brand"
//             >
//               Your Wellness
//             </NavbarBrand>


//             <button
//               className="navbar-toggler navbar-toggler"
//               onClick={() => {
//                 document.documentElement.classList.toggle("nav-open");
//                 setCollapseOpen(!collapseOpen);
//               }}
//               aria-expanded={collapseOpen}
//               type="button"
//             >
//               <span className="navbar-toggler-bar top-bar"></span>
//               <span className="navbar-toggler-bar middle-bar"></span>
//               <span className="navbar-toggler-bar bottom-bar"></span>
//             </button>
            
//           </div>
//           <Collapse
//             className="justify-content-end"
//             isOpen={collapseOpen}
//             navbar
//           >
//             <Nav navbar>
//               <NavItem>


//                 <Button
//                 color="default"
//                 to="/index"
//                 outline
//                 size="lg"
//                 tag={Link}
//                 >
//                   <i className="fas fa-home fa-2x padright"></i>
//                   <p className="d-lg-none d-xl-none">  Home</p>
//                 </Button>

//                 <Button
//                 color="default"
//                 to="/index"
//                 outline
//                 size="lg"
//                 tag={Link}
//                 >
//                 <i className="fas fa-balance-scale fa-2x padright"></i>
//                 <p className="d-lg-none d-xl-none">Resources</p>
//                 </Button>

//                 <Button
//                 color="default"
//                 to="/settings"
//                 outline
//                 size="lg"
//                 tag={Link}
//                 >
//                 <i className="fas fa-cogs fa-2x padright"></i>
//                 <p className="d-lg-none d-xl-none">Settings</p>
//                 </Button>

//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ExamplesNavbar;



import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
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
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
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
              href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"
              id="navbar-brand"
            >
              Now Ui Kit
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip>
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


                <Button
                color="default"
                to="/index"
                outline
                size="lg"
                tag={Link}
                >
                  <i className="fas fa-home fa-2x padright"></i>
                  <p className="d-lg-none d-xl-none">  Home</p>
                </Button>

                <Button
                color="default"
                to="/index"
                outline
                size="lg"
                tag={Link}
                >
                <i className="fas fa-balance-scale fa-2x padright"></i>
                <p className="d-lg-none d-xl-none">Resources</p>
                </Button>

                <Button
                color="default"
                to="/settings"
                outline
                size="lg"
                tag={Link}
                >
                <i className="fas fa-cogs fa-2x padright"></i>
                <p className="d-lg-none d-xl-none">Settings</p>
                </Button>

              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
