// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   Button,
//   UncontrolledDropdown,
//   NavbarBrand,
//   Navbar,
//   Container,
// } from "reactstrap";

// function SearchNav() {
//   // const [setNavbarColor] = React.useState("navbar-dark");
//   const [] = React.useState(true);

//   return (
//     <>
//         <div/>
//       <Navbar className="searchnav" >
//         <Container>

//           <div className="navbar-translate ">
//             <NavbarBrand
//               id="navbar-brand"
//             >
//               Your Settings
//             </NavbarBrand>

//             <Button className="navbtn btnsearch"
//                 to="/profile"
//                 size="sm"
//                 tag={Link}
//                 >
//                 <i className="fas fa-user fa-2x padright"></i>
//                 <p >Profile</p>
//                 </Button>

//                 <Button className="navbtn btnsearch"
//                 to="/table"
//                 size="sm"
//                 tag={Link}
//                 >
//                 <i className="fas fa-table fa-2x padright"></i>
//                 <p>Leaderboards</p>
//                 </Button>

//                 <Button className="navbtn btnsearch"
//                 to="/settings"
//                 size="sm"
//                 tag={Link}
//                 >
//                 <i className="fas fa-cogs fa-2x padright"></i>
//                 <p >Settings</p>
//                 </Button>
//           </div>
         
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default SearchNav;







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
  const [] = React.useState(true);

  return (
    <>
        <div/>
      <Navbar className="searchnav" >
        <Container>

          <div className="navbar-translate ">
            <NavbarBrand
              id="navbar-brand"
            >
              Your Settings
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