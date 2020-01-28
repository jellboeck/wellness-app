import React from "react";
// import { Container, CardLink, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import {
  Container,
  CardLink,
} from "reactstrap";

function PaidAdds() {
    return (
      <Container fluid className="px-4 ">
      <GridContainer>
      <GridItem xs={12} sm={6} md={6} lg={6}>
      <CardLink href="https://google.com">
            <img alt="..." src={require("assets/img/discount.jpg")}></img>
            </CardLink>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
            <CardLink href="https://google.com">
            <img alt="..." src={require("assets/img/loss2.jpg")}></img>
            </CardLink>
          </GridItem>
          </GridContainer>
    </Container>
    )
};

export default PaidAdds;
