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


function LoginPage() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSignUp = () => {
    console.log('signing in');
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
        url: '/api/signup',
        // test code
        // data: {email: 'email@email2.com', password: '123456901591'}
        data: { email: email, password: password }
      })
      // change to main page
      .then(function (data) {
        window.location.replace("/profile");
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
      
      <div>
        <div className="content">
          <Container>

              <Card className="card-login card-plain">
                <Form className="form-signup" >
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
                    className="form-signup"
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
                    className="form-signup"
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
                      href="#none"
                      onClick={() => handleSignUp()}
                      size="lg"
                    >
                      Get Started
                    </Button>
                   




                  </CardFooter>
                </Form>
              </Card>

          </Container>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
