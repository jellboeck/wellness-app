import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// reactstrap components

import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/user-settings/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import {
    Button,
    Card,
    CardHeader,
    FormGroup,
    ListGroupItem,
    ListGroup,
    Label,
    Input,
    CardBody,
    CardLink,
    CardImg,
    Row,
    Col,
    Form,
    Container,


} from "reactstrap";


function GymComponent(props) {
    const [gyms, setGyms] = React.useState([]);
    const [zip, setZip] = React.useState("");
    const [search, setSearch] = React.useState("");

    const gymSearch = () => {

        var fitnessCenters = []
        var search = "";
        var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
        var yelpQueryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=" + search + "&location=" + zip;

        if (zip.length != 5 || isNaN(zip)) {
            var gymMessage = "Please enter a valid Zip Code"
        }

        else {

            axios.get({
                url: yelpQueryURL,
                headers: {
                    "Authorization": "Bearer " + yelpApiKey + "",
                },
                method: "GET",
                dataType: "json",
            }).then(function (response) {

                for (var i = 0; i < response.businesses.length; i++) {
                    var fitnessCenter = {
                        gymName: response.businesses[i].name,
                        gymPhoto: response.businesses[i].image_url,
                        gymPhone: response.businesses[i].display_phone,
                        gymAddress: response.businesses[i].location.display_address[0] + " " + response.businesses[i].location.display_address[1],
                        gymLink: response.businesses[i].url,
                        gymRating: response.businesses[i].rating,

                    }

                    fitnessCenters.push(fitnessCenter);

                }

                setGyms(fitnessCenters)
            })
        }

        return (
            <div>
                <Container fluid className="main-content-container px-2">

                    <Card className="mb-2">
                        <ListGroup flush>
                            <ListGroupItem >
                                <Row >
                                    <Col>
                                        <Form>

                                            <GridContainer>

                                                <GridItem xs={12} sm={4} md={4} lg={3}>


                                                    <FormGroup>
                                                        <Label for="exampleSelect">Select</Label>
                                                        <Input type="select" name="select" id="search">
                                                            <option value="gym">Gyms and Fitness Centers</option>
                                                            <option value="vitaminssupplements">Vitamins and Suppliments</option>
                                                            <option value="meditationcenters">Meditation Centers</option>
                                                            <option value="nutritionists">Nutritionists</option>
                                                            <option value="dietitians">Dietitians</option>
                                                      </Input>
                                                    </FormGroup>

                                                    <CustomInput
                                                        labelText="Zip Code"
                                                        id="zip"
                                                        formControlProps={{
                                                            fullWidth: false
                                                        }}
                                                        value={zip}
                                                        onChange={(e) => setZip(e.target.value)}
                                                    />
                                                </GridItem>

                                            </GridContainer>

                                            <Button id="bt"
                                                theme="info"
                                                onClick={gymSearch()}
                                            >Search</Button>

                                            {
                                                gyms.map((gym) => {
                                                    return (
                                                        < Card >
                                                            <CardHeader as="h5">{gym.gymName}</CardHeader>
                                                            <CardImg src={`${gym.gymPhoto}`} />

                                                            <ListGroup className="list-group-flush">
                                                                <ListGroupItem>Yelp Rating: {gym.gymRating}</ListGroupItem>
                                                                <ListGroupItem>Phone: {gym.gymPhone}</ListGroupItem>
                                                                <ListGroupItem>Address: {gym.gymAddress}</ListGroupItem>
                                                                <ListGroupItem>{gymMessage}</ListGroupItem>
                                                            </ListGroup>
                                                            <CardBody>
                                                                <CardLink href={`${gym.gymLink}`}>Link: {gym.gymName}</CardLink>
                                                            </CardBody>

                                                        </Card >
                                                    )
                                                })
                                            }


                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
            </div>
        )
    }

}

export default GymComponent;