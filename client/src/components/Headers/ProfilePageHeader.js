import React, { useState } from "react";
import axios from 'axios';
// import SmallStats from "../charts/SmallStats";
// import { Container, Row, Col } from "shards-react";
// reactstrap components
import { Container} from "reactstrap";
// core components
// import UserGoals from "pages/Profile.js";
import Goals from "components/userGoals.js";


function ProfilePageHeader(props) {
  //console.log('pph');
  //console.log(props);
  let pageHeader = React.createRef();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  function getUserProfile() {
    axios.get('/api/user_profile').then(function(data){
     // console.log('profile data pro head');
     // console.log(data.data.email);
     // console.log(data.data.motivation);
      setFirstname(data.data.firstname);
      setLastname(data.data.lastname);
      // setEmail(data.data.email);
      // setAddress(data.data.address);
      // setCity(data.data.city);
      // setState(data.data.state);
      // setZip(data.data.zip);
      // setMotivation(data.data.motivation);
      // setHeight(data.data.height);
      // setWeight(data.data.weight);
    });
  }

  getUserProfile();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header"
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
            <img alt="..." src={require("assets/img/hungrytaco.gif")}></img>
          </div>
          <h2 className="title"> {firstname} <span> </span> {lastname} </h2>
   
          

        <Goals {...props} getUser={props.getUser} user = {props.user} loggedIn={props.loggedIn}/>


        </Container>

      </div>
    </>
  );

  
}



export default ProfilePageHeader;
