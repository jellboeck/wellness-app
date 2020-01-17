import React from "react";
// import SmallStats from "../charts/SmallStats";
// import { Container, Row, Col } from "shards-react";
// reactstrap components
import { Container} from "reactstrap";
// core components
// import UserGoals from "pages/Profile.js";
import Goals from "components/userGoals.js";


function ProfilePageHeader() {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        // filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
          
        ></div>

        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/avatar.png")}></img>
          </div>
          <h3 className="title">Ron Johnson</h3>
          <p className="category">Developer</p>
          

        <Goals />


        </Container>

      </div>
    </>
  );

  
}



export default ProfilePageHeader;
