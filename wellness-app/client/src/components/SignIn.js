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
  // CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

// core components

function SignIn() {

  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    console.log('logging in');
    // prevent default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    // check for entry of email
    if (!email || !password) {
      alert("Fill out your email and password please!");
      //check password for sufficient complexity
    } else {
      // if email and password present and password if correct length, post user information
      alert(`Hello ${email}`);
        axios({
          method: 'POST',
          url: '/api/login',
          // test code
          // data: {email: 'email@email2.com', password: '123456901591'}
          data: { email: email, password: password }
        })
        // change to main page
          .then(function (data) {
            console.log('data');
            console.log(data);
            window.location.replace("/index");
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
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/wellness.jpg") + ")",
          backgroundSize: "110% 100%",
          backgroundPosition: "top center",
          minHeight: "600px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup clear" >
              <Form className="form" method="">

                <CardHeader className="text-center">

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
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={() => handleSignIn()}
                    size="lg"
                  >

                    Sign In
                  </Button>
                  <div className="col text-center">
                  <Button
                    className="btn-round btn-white"
                    color="default"
                    to="/sign-up"
                    outline
                    size="lg"
                    tag={Link}
                  >
                    Or Sign Up
                  </Button>

            <Button
              className="btn-round btn-white"
              color="default"
              to="/profile"
              outline
              size="lg"
              tag={Link}
            >
              Profile
            </Button>

            </div>

                </CardFooter>
                </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignIn;