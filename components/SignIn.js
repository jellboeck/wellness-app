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
          backgroundImage: "url(" + require("assets/img/wellness.jpg") + ")",
          backgroundSize: "110% 100%",
          backgroundPosition: "top center",
          minHeight: "600px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup clear" >
              <Form action="" className="form" method="">

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