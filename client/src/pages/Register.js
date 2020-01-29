import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

import Footer from "components/Footers/TransparentFooter";
import Signup from "components/Signup";


function LoginPage(props) {
  // console.log('usersettings');
  // console.log(props);

  return (
    <>
      <div className="logup registerheader">
    
          <Container className="center margin-top">

       
          <Signup />


          </Container>

      </div>
      <Footer />
    </>
  );
}




export default LoginPage;