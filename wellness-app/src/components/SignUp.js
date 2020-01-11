import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
          backgroundSize: "110% 100%",
          backgroundPosition: "top center",
          minHeight: "500px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup clear" >
              <Form action="" className="form" method="">



                <CardHeader className="text-center">
                  {/* <CardTitle className="title-up" tag="h3">
                    Sign In

                  </CardTitle> */}
                        <div className="sign-up-logo">

                  <Container>
                    <div className="content-center">

                    <Link to="/index">
                      <img
                        alt="..."
                        className="n-logo"
                        src={require("assets/img/logo1.png")}
                      ></img>
                    </Link>

                    </div>
                  </Container>
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
                    ></Input>
                  </InputGroup>

                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >

                    Sign In
                  </Button>
                  <div className="col text-center">
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