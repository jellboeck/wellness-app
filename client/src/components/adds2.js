import React from "react";
import { Container, CardLink, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

function PaidAdds() {
    return (
      <Container fluid className="ads-container px-4">
<GridContainer>
<Row>
<GridItem>
      <CardLink href="https://google.com" className="adds" >
            <img className="adds" alt="..." src={require("assets/img/fitness.jpg")}></img>
            </CardLink>
            </GridItem>
            </Row>

            <Row>
<GridItem >
            <CardLink href="https://google.com" >
            <img className="adds" alt="..." src={require("assets/img/loss1.jpg")}></img>
            </CardLink>
          </GridItem>
          </Row>
</GridContainer>
    </Container>
    )
};

export default PaidAdds;