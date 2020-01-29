import React from "react";

import axios from 'axios';

import {Container} from "reactstrap";

import ProfileNavbar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BMIcalc from "components/BMIcalc.js";
import Steps from "components/Steps.js";
import WeightUpdate from "components/weightUpdate.js";

function ProfilePage(props) {
  // console.log('profile');
  // console.log(props);
  props.getUser();
  // const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [address, setAddress] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [zip, setZip] = useState('');
  const [motivation, setMotivation] = React.useState('Go to settings to enter a few words of motivation for yourself');
  const [bmigoal, setBMIGoal] = React.useState('Go to setting to enter your goals');
  const [stepgoal, setStepGoal] = React.useState('');
  // const [height, setHeight] = useState('');
  // const [weight, setWeight] = useState('');

  function getUserProfile() {
    axios.get('/api/user_profile').then(function(data){
      // console.log('profile data pro');
      // console.log(data.data.email);
      // console.log(data.data.motivation);
      // setFirstname(data.data.firstname);
      // setLastname(data.data.lastname);
      // setEmail(data.data.email);
      // setAddress(data.data.address);
      // setCity(data.data.city);
      // setState(data.data.state);
      // setZip(data.data.zip);
      setMotivation(data.data.motivation);
      // setHeight(data.data.height);
      // setWeight(data.data.weight);
      setBMIGoal(data.data.bmigoal);
      setStepGoal(data.data.stepgoal);
    });
  }

  getUserProfile();

  return (
    <>
      <ProfileNavbar {...props} getUser={props.getUser} user={props.user} />
      <div className="wrapper">
        <ProfilePageHeader {...props} getUser={props.getUser} user={props.user} id={props.id} />
    
          <Container>

          <h3 className="title">My Goals</h3>
            <h4 className="description" id="goals">
            <div className="content">
            <div className="social-description" id="bmigoal">
              <h2>{bmigoal}</h2>
              <p>BMI %</p>
            </div>
            <div className="social-description">
              <h2>{stepgoal}</h2>
              <p>Steps</p>
            </div>

            <div >
            <BMIcalc {...props} user = {props.user} getUser={props.getUser} id={props.id}/>           
            <WeightUpdate {...props} user = {props.user} getUser={props.getUser} id={props.id}/>     
            <Steps {...props} user = {props.user} getUser={props.getUser} id={props.id}/>
            </div>

          </div>
            </h4>

            <h3 className="title">My Motivation</h3>
            <h4 className='description'>{motivation} </h4>
   
          </Container>

        <DarkFooter />
      </div>
    </>
  );
}









export default ProfilePage;
