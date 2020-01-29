import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Navbar from "../components/Navbars/NavbarTable";
import Adds from "components/adds1.js";

function TableCompare(props) {
  // console.log('usersettings');
  // console.log(props);

    return (

      <Container fluid className="main-content-container">
<Navbar/>
      <Row>
        <Col>
          <Card small className="mb-4 updatecard">
            <CardHeader className="border-bottom">
              <h6 className="m-3 tableTitle">Top Active Users</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      First Name
                    </th>
                    <th scope="col" className="border-0">
                      Last Name
                    </th>
                    <th scope="col" className="border-0">
                      % lost
                    </th>
                    <th scope="col" className="border-0">
                      Total Steps
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ali</td>
                    <td>Kerry</td>
                    <td>15</td>
                    <td>308,721</td>

                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Angela</td>
                    <td>Clark</td>
                    <td>12</td>
                    <td>253,769</td>

                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jerry</td>
                    <td>Nathan</td>
                    <td>11</td>
                    <td>215,812</td>

                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Justin</td>
                    <td>Rodgers</td>
                    <td>9</td>
                    <td>158,975</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Bob</td>
                    <td>Swirls</td>
                    <td>9</td>
                    <td>150,822</td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Adds/>
    </Container>
    
    )
};

export default TableCompare;
