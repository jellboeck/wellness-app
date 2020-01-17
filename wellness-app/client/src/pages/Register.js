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

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";



function LoginPage() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  const handleSignUp = () => {
    console.log('logging in');
    // check for entry of email
    if (!email) {
      alert("Fill out your email please!");
      //check password for sufficient complexity
    } else if (password.length < 6) {
      alert(
        `Choose a more secure password ${email}`
      );
    } else {
      // if email and password present and password if correct length, post user information
      alert(`Hello ${email}`);
      axios({
        method: 'POST',
        url: '/api/Form',
        // test code
        // data: {email: 'email@email2.com', password: '123456901591'}
        data: { email: email, password: password }
      })
      // change to main page
      .then(function (data) {
        window.location.replace("/");
      })
      // if error, handle by throwing err
      .catch(function(err){
        console.log(err);
      });
    }
    // reset form
    setEmail('');
    setPassword('')
  };
  
  
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="6">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">

                    <div className="n-logo">
                    <Link to="/index">
                      <img
                        alt="..."
                        className="n-logo logocenter"
                        src={require("assets/img/logo1.png")}
                      ></img>
                    </Link>
                    </div>

                  </CardHeader>
                  <CardBody>

                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>



                  <InputGroup
                    className={
                      "no-border" + (passwordFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_key-25"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                  </InputGroup>



                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={() => handleSignUp()}
                      size="lg"
                    >
                      Get Started
                    </Button>
                   




                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
